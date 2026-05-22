"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto w-full transition-all duration-500 border-b ${
            scrolled
              ? "border-glass-border shadow-sm py-3 px-6 bg-bg-primary/95"
              : "border-glass-border/30 py-4 px-6 bg-bg-primary/80"
          }`}
        >
          <div className="flex items-center justify-between gap-4 md:gap-8 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative h-14 w-[280px] md:h-16 md:w-[320px]">
            <Image 
              src="/logos/logo.png" 
              alt="Costa Devices Logo" 
              fill
              className="object-contain object-left transform group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link: any) => (
              <div key={link.label} className="group relative h-full flex items-center">
                <Link
                  href={link.href}
                  className={`relative text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 py-2
                    ${pathname === link.href ? "text-costa-green" : "text-text-secondary group-hover:text-costa-green"}
                  `}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-costa-green rounded-full transition-all duration-300 ${
                      pathname === link.href 
                        ? "opacity-100 scale-x-100" 
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-left"
                    }`} 
                  />
                </Link>

                {/* Invisible hover bridge */}
                {(link.megaMenu || link.dropdown) && (
                  <div className="absolute top-full left-0 w-full h-6" />
                )}

                {/* Mega Menu */}
                {link.megaMenu && (
                  <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[650px] bg-bg-primary border border-glass-border shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-none z-50 flex overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                    <div className="w-[45%] p-8 bg-bg-secondary/50 border-r border-glass-border">
                      <h4 className="font-mono text-[10px] text-text-muted font-bold tracking-[0.2em] uppercase mb-6">Categories</h4>
                      <ul className="space-y-5">
                        {link.megaMenu.categories.map((cat: any) => (
                          <li key={cat.label}>
                            <Link href={cat.href} className="font-heading font-black text-[13px] hover:text-costa-green transition-colors uppercase tracking-tight">
                              {cat.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-[55%] p-8 bg-bg-primary">
                      <h4 className="font-mono text-[10px] text-text-muted font-bold tracking-[0.2em] uppercase mb-6">Products</h4>
                      <ul className="grid grid-cols-2 gap-y-5 gap-x-4">
                        {link.megaMenu.products.map((prod: any) => (
                          <li key={prod.label}>
                            <Link href={prod.href} className="text-[12px] font-bold hover:text-costa-green transition-colors uppercase flex items-center gap-2">
                              <span className="text-text-muted">&gt;</span> {prod.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Simple Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-48 bg-bg-primary border border-glass-border shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-none z-50 overflow-hidden py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                    <ul className="flex flex-col">
                      {link.dropdown.map((item: any) => (
                        <li key={item.label}>
                          <Link href={item.href} className="block px-6 py-2.5 text-[13px] font-bold hover:bg-bg-secondary hover:text-costa-green transition-colors uppercase tracking-tight">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <PartSearchEngine />

            <MagneticButton>
              <Link
                href="/request-quote"
                className="bg-costa-green text-bg-primary font-mono text-[11px] font-bold uppercase py-2.5 px-5 hover:bg-bg-secondary hover:text-costa-green transition-colors border border-transparent hover:border-costa-green flex items-center gap-2"
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
          className={`fixed top-16 left-0 right-0 bg-bg-primary border-b border-glass-border lg:hidden transition-all duration-300 origin-top overflow-hidden pointer-events-auto z-[90] ${
            mobileOpen ? "max-h-[100vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0 border-transparent"
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
                className="bg-costa-green text-bg-primary font-mono text-sm font-bold uppercase py-4 text-center border border-transparent hover:bg-bg-secondary hover:text-costa-green hover:border-costa-green transition-colors w-full"
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
