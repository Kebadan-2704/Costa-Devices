"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import PartSearchEngine from "@/components/ui/PartSearchEngine";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-[1400px] transition-all duration-500 backdrop-blur-2xl rounded-full border ${
            scrolled
              ? "border-glass-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 md:py-3 px-4 md:px-6 bg-bg-primary/90 dark:bg-bg-primary/80"
              : "border-glass-border/50 py-3 md:py-4 px-4 md:px-6 bg-bg-primary/50 dark:bg-bg-primary/40"
          }`}
        >
          <div className="flex items-center justify-between gap-4 md:gap-8 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative flex-shrink-0">
              <svg viewBox="0 0 75 80" width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300">
                <defs>
                  <linearGradient id="logoGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "var(--brand-green)" }}/>
                    <stop offset="100%" style={{ stopColor: "var(--brand-green-light)" }}/>
                  </linearGradient>
                </defs>
                <path d="M10 40 L35 10 L55 10 L30 40 L55 70 L35 70 Z" fill="url(#logoGreenGrad)"/>
                <path d="M25 40 L50 10 L70 10 L45 40 L70 70 L50 70 Z" fill="url(#logoGreenGrad)" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg md:text-xl font-black leading-none tracking-tight text-text-primary">
                COSTA DEVICES
              </span>
              <span className="font-mono text-[9px] md:text-[10px] font-bold leading-none tracking-[0.3em] text-costa-green mt-1 uppercase">
                Electric Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 py-1
                  ${pathname === link.href ? "text-costa-green" : "text-text-secondary hover:text-text-primary"}
                `}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-costa-green rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <PartSearchEngine />

            <MagneticButton>
              <Link
                href="/request-quote"
                className="btn-primary rounded-full text-[11px] !py-2.5 !px-5 whitespace-nowrap"
              >
                Get Quote
                <ArrowRight size={12} />
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-2">
            <PartSearchEngine />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[110] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          </div>
        </nav>

        {/* Mobile Menu Dropdown - Floating Panel */}
        <div
          className={`fixed top-24 left-4 right-4 rounded-2xl bg-bg-primary/95 backdrop-blur-2xl border border-glass-border shadow-2xl lg:hidden transition-all duration-300 origin-top overflow-hidden pointer-events-auto z-[90] ${
            mobileOpen ? "max-h-[80vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 border-transparent"
          }`}
        >
          <div className="px-6 flex flex-col gap-4">
            <div className="md:hidden mb-2">
              <PartSearchEngine />
            </div>

            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-semibold py-3.5 border-b border-glass-border transition-colors ${
                    pathname === link.href ? "text-costa-green" : "text-text-primary hover:text-costa-green"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-4">
              <Link
                href="/request-quote"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center rounded-lg py-4"
              >
                Request Quote
              </Link>

              <div className="flex justify-between items-center text-sm text-text-muted font-mono mt-4">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-costa-green transition-colors">{COMPANY.email}</a>
                <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-costa-green transition-colors">{COMPANY.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
