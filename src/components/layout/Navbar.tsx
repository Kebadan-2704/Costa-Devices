/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Menu, X, ArrowRight, Phone, Cpu, Zap, ShieldCheck } from "lucide-react";
import GlobalSearchBar from "@/components/ui/GlobalSearchBar";

import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Focus trap for mobile drawer
  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      } else if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    firstElement.focus();
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeDesktopMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const nav = document.getElementById("desktop-nav");
    if (nav) {
      nav.style.pointerEvents = "none";
      setTimeout(() => {
        nav.style.pointerEvents = "";
      }, 50);
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-[100] pointer-events-none transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <nav id="desktop-nav" className="pointer-events-auto w-full">
          <div className={`transition-all duration-500 border-b border-black/5 ${
            scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm" : "bg-white/90 backdrop-blur-lg"
          }`}>
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row">
              
              {/* Mobile Header / Desktop Logo Column */}
              <div className="flex items-center justify-between lg:justify-start px-4 lg:px-6 py-3 lg:py-0 lg:border-r border-black/5 lg:w-auto lg:pr-8 shrink-0">
                <Link href="/" className="flex items-center group relative">
                  <div className={`relative transition-all duration-500 ${
                    scrolled 
                      ? "h-12 w-[180px] lg:h-16 lg:w-[220px]" 
                      : "h-14 w-[200px] lg:h-18 lg:w-[240px]"
                  }`}>
                    <Image 
                      src="/logos/logo.png" 
                      alt="Costa Devices Logo" 
                      fill
                      sizes="(max-width: 1024px) 200px, 240px"
                      className="object-contain object-left group-hover:brightness-110 transition-all duration-300"
                      priority
                    />
                  </div>
                </Link>

                {/* Mobile Hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                  aria-label="Toggle menu"
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>

              {/* Right Column: Search + Nav */}
              <div className="hidden lg:flex flex-col flex-1">
                
                {/* Top Row: Search + CTA */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-black/5 gap-6">
                  <div className="flex-1 flex items-center">
                    <GlobalSearchBar />
                  </div>
                  <Link
                    href="/request-quote"
                    className="btn-pulse group inline-flex items-center gap-2 bg-costa-green text-white text-xs font-bold tracking-[0.1em] uppercase py-3 px-6 rounded-md hover:bg-costa-green-dark transition-all duration-300 shadow-[0_4px_14px_rgba(26,175,93,0.3)] hover:shadow-[0_6px_20px_rgba(26,175,93,0.4)] hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
                  >
                    Get Quote
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                </div>

                {/* Bottom Row: Nav Links */}
                <div className="flex items-center justify-start px-4 lg:px-6 py-1 gap-1">
              {NAV_LINKS.map((link: any) => (
                <div 
                  key={link.label} 
                  className="group relative flex items-center"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative text-lg font-semibold transition-all duration-300 px-6 py-3 rounded-lg
                      ${pathname === link.href 
                        ? "text-costa-green bg-costa-green/5" 
                        : "text-text-secondary hover:text-text-primary hover:bg-black/[0.03]"
                      }
                    `}
                    aria-haspopup={(link.megaMenu || link.dropdown) ? "true" : undefined}
                    aria-expanded={(link.megaMenu || link.dropdown) ? (hoveredLink === link.label ? "true" : "false") : undefined}
                  >
                    {link.label}
                  </Link>

                  {/* Invisible hover bridge */}
                  {(link.megaMenu || link.dropdown) && (
                    <div className="absolute top-full left-0 w-full h-8" />
                  )}

                  {/* Premium Mega Menu */}
                  {link.megaMenu && (
                    <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[600px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 z-50 rounded-2xl overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 origin-top ${hoveredLink === link.label ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                      <div className="grid grid-cols-2 p-4 gap-4 relative z-10">
                        {link.megaMenu.categories.map((cat: any) => (
                          <div key={cat.label} className="bg-[#FAFAFA] hover:bg-black/[0.03] transition-colors duration-300 rounded-xl p-6 border border-black/5 group/cat flex flex-col">
                            <div className="flex items-center gap-4 mb-5">
                              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-costa-green shrink-0">
                                {cat.label.includes('Electronic') ? <Cpu size={24} strokeWidth={1.5} /> : <Zap size={24} strokeWidth={1.5} />}
                              </div>
                              <Link href={cat.href} onClick={closeDesktopMenu} className="text-base font-black text-text-primary group-hover/cat:text-costa-green transition-colors uppercase tracking-tight leading-tight">
                                {cat.label}
                              </Link>
                            </div>
                            <ul className="flex flex-col gap-3">
                              {cat.products.map((prod: any) => (
                                <li key={prod.label}>
                                  <Link href={prod.href} onClick={closeDesktopMenu} className="text-sm font-semibold text-text-secondary hover:text-costa-green active:opacity-40 transition-all duration-300 flex items-start gap-2 group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover/item:bg-costa-green group-hover/item:scale-150 transition-all duration-300 mt-[6px] shrink-0" />
                                    <span className="text-left leading-snug">{prod.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {cat.catalogHref ? (
                              <a 
                                href={cat.catalogHref} 
                                onClick={closeDesktopMenu} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-costa-green active:opacity-40 transition-all duration-300 w-max group/btn"
                              >
                                View Catalog <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                              </a>
                            ) : (
                              <Link 
                                href={cat.href} 
                                onClick={closeDesktopMenu} 
                                className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-costa-green active:opacity-40 transition-all duration-300 w-max group/btn"
                              >
                                View Catalog <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom Banner */}
                      <div className="bg-costa-green/5 border-t border-costa-green/10 p-4 px-6 flex items-center justify-between">
                        <div className="text-xs font-semibold text-costa-green flex items-center gap-2.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-costa-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-costa-green"></span>
                          </span>
                          Global Sourcing &amp; Fast Delivery
                        </div>
                        <Link href="/request-quote" onClick={closeDesktopMenu} className="text-xs font-bold uppercase tracking-wider text-text-primary hover:text-costa-green transition-colors flex items-center gap-1">
                          Get Quote <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Simple Dropdown */}
                  {link.dropdown && (
                    <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[340px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 z-50 rounded-2xl overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 origin-top ${hoveredLink === link.label ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                      <div className="p-4">
                        <div className="bg-bg-secondary hover:bg-black/[0.03] transition-colors duration-300 rounded-xl p-6 border border-glass-border flex flex-col">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-costa-green shrink-0">
                              <ShieldCheck size={24} strokeWidth={1.5} />
                            </div>
                            <span className="text-base font-black text-text-primary uppercase tracking-tight leading-tight">
                              {link.label} Assurance
                            </span>
                          </div>
                          <ul className="flex flex-col gap-3">
                            {link.dropdown.map((item: any) => (
                              <li key={item.label}>
                                <Link href={item.href} onClick={closeDesktopMenu} className="text-sm font-semibold text-text-secondary hover:text-costa-green active:opacity-40 transition-all duration-300 flex items-start gap-2 group/item">
                                  <div className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover/item:bg-costa-green group-hover/item:scale-150 transition-all duration-300 mt-[6px] shrink-0" />
                                  <span className="text-left leading-snug">{item.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link href={link.href} onClick={closeDesktopMenu} className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-costa-green active:opacity-40 transition-all duration-300 w-max group/btn">
                            View Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Bottom Banner */}
                      <div className="bg-costa-green/5 border-t border-costa-green/10 p-4 px-6 flex items-center justify-between">
                        <div className="text-xs sm:text-xs font-semibold text-costa-green flex items-center gap-2.5">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-costa-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-costa-green"></span>
                          </span>
                          Global Sourcing
                        </div>
                        <Link href="/request-quote" onClick={closeDesktopMenu} className="text-xs sm:text-xs font-bold uppercase tracking-wider text-text-primary hover:text-costa-green transition-colors flex items-center gap-1 shrink-0">
                          Get Quote <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-0 bg-white lg:hidden transition-all duration-[400ms] origin-top overflow-auto pointer-events-auto z-[105] ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
          {/* Mobile Header with close button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="relative h-14 w-[220px]">
              <Image 
                src="/logos/logo.png" 
                alt="Costa Devices Logo" 
                fill
                sizes="220px"
                className="object-contain object-left"
                priority
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-6 py-6 flex flex-col gap-2">
            {/* Mobile Search */}
            <div className="mb-4">
              <GlobalSearchBar />
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col border-b border-black/5">
                  <Link
                    href={link.href === "#" && link.megaMenu ? link.megaMenu.categories[0].href : link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg font-semibold py-4 transition-colors flex items-center justify-between ${
                      pathname === link.href ? "text-costa-green" : "text-text-primary hover:text-costa-green"
                    }`}
                  >
                    {link.label}
                    <ArrowRight size={16} className="text-text-muted" />
                  </Link>
                  {link.megaMenu && (
                    <div className="flex flex-col pl-4 pb-4 gap-3 border-l-2 border-costa-green/20 ml-2">
                      {link.megaMenu.categories.map((cat: any) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm font-semibold text-text-secondary hover:text-costa-green flex items-center justify-between"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.dropdown && (
                    <div className="flex flex-col pl-4 pb-4 gap-3 border-l-2 border-costa-green/20 ml-2">
                      {link.dropdown.map((item: any) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm font-semibold text-text-secondary hover:text-costa-green flex items-center justify-between"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/request-quote"
                onClick={() => setMobileOpen(false)}
                className="bg-costa-green text-white text-sm font-bold uppercase py-4 text-center rounded-lg hover:bg-costa-green-dark transition-colors w-full"
              >
                Request Quote
              </Link>

              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-black/5">
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-text-secondary hover:text-costa-green transition-colors flex items-center gap-2">
                  {COMPANY.email}
                </a>
                <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="text-sm text-text-secondary hover:text-costa-green transition-colors flex items-center gap-2">
                  <Phone size={14} />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
