"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

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
      <nav
        className={`sticky top-0 z-[100] transition-colors duration-300 backdrop-blur-md ${
          scrolled
            ? "border-b border-gray-200/20"
            : ""
        }`}
        style={{
          minHeight: 80,
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative flex-shrink-0">
              <svg viewBox="0 0 75 80" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300">
                <defs>
                  <linearGradient id="logoGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#059669" }}/>
                    <stop offset="100%" style={{ stopColor: "#34D399" }}/>
                  </linearGradient>
                </defs>
                <path d="M10 40 L35 10 L55 10 L30 40 L55 70 L35 70 Z" fill="url(#logoGreenGrad)"/>
                <path d="M25 40 L50 10 L70 10 L45 40 L70 70 L50 70 Z" fill="url(#logoGreenGrad)" opacity="0.7"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl md:text-2xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white">
                COSTA DEVICES
              </span>
              <span className="font-mono text-[9px] md:text-[11px] font-bold leading-none tracking-[0.25em] text-emerald-600 dark:text-emerald-400 mt-1 uppercase">
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
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-300
                  ${pathname === link.href ? "text-costa-green" : "text-text-secondary hover:text-text-primary"}
                `}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-costa-green" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
            >
              <Phone size={14} />
              <span className="font-mono text-xs font-medium">{COMPANY.phone}</span>
            </a>
            <ThemeToggle />
            <Link
              href="/request-quote"
              className="btn-primary text-xs !py-3 !px-6"
            >
              Request Quote
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[110] w-10 h-10 flex items-center justify-center"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[105] backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--nav-bg)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-3xl font-bold transition-all duration-500 ${
                pathname === link.href ? "text-costa-green" : "hover:text-costa-green"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 0.05}s` : "0s",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                color: pathname === link.href ? "var(--brand-green)" : "var(--text-primary)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="btn-primary mt-4"
            style={{
              transitionDelay: mobileOpen ? "0.4s" : "0s",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Request Quote <ArrowRight size={16} />
          </Link>
          <div
            className="flex flex-col items-center gap-2 mt-4 text-sm"
            style={{
              transitionDelay: mobileOpen ? "0.5s" : "0s",
              opacity: mobileOpen ? 1 : 0,
              transition: "all 0.5s",
              color: "var(--text-muted)",
            }}
          >
            <a href={`mailto:${COMPANY.email}`} className="hover:text-costa-green transition-colors">
              {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone}`} className="hover:text-costa-green transition-colors">
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
