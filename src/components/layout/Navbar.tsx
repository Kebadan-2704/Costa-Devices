/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Menu, X, ArrowRight, Phone, Cpu, Zap, ShieldCheck } from "lucide-react";
import GlobalSearchBar from "@/components/ui/GlobalSearchBar";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
        <nav className="pointer-events-auto w-full">
          
          {/* SINGLE ROW: Logo | Search | Get Quote */}
          <div className={`transition-all duration-500 border-b ${
            scrolled 
              ? "bg-white/95 backdrop-blur-xl border-black/8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]" 
              : "bg-white/80 backdrop-blur-md border-transparent"
          }`}>
            <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center gap-6">
              
              {/* Logo */}
              <Link href="/" className="flex items-center group relative shrink-0">
                <div className={`relative transition-all duration-500 ${
                  scrolled 
                    ? "h-10 w-[160px] md:h-12 md:w-[180px]" 
                    : "h-12 w-[180px] md:h-14 md:w-[220px]"
                }`}>
                  <Image 
                    src="/logos/logo.png" 
                    alt="Costa Devices Logo" 
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-contain object-left group-hover:brightness-110 transition-all duration-300"
                    priority
                  />
                </div>
              </Link>

              {/* Search Bar — Takes up the center */}
              <div className="hidden lg:flex flex-1 items-center">
                <GlobalSearchBar />
              </div>

              {/* Get Quote CTA */}
              <Link
                href="/request-quote"
                className="group hidden sm:inline-flex items-center gap-2 bg-costa-green text-white text-xs font-bold tracking-[0.1em] uppercase py-3 px-6 rounded-md hover:bg-costa-green-dark transition-all duration-300 shadow-[0_4px_14px_rgba(26,175,93,0.3)] hover:shadow-[0_6px_20px_rgba(26,175,93,0.4)] hover:-translate-y-0.5 shrink-0 whitespace-nowrap"
              >
                Get Quote
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
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
          </div>

          {/* NAV LINKS ROW — Below the search */}
          <div className={`transition-all duration-500 border-b border-black/5 ${
            scrolled ? "bg-white/98 backdrop-blur-xl shadow-sm" : "bg-white/95 backdrop-blur-lg"
          }`}>
            <div className="max-w-[1400px] mx-auto px-6 hidden lg:flex items-center justify-center gap-1">
              {NAV_LINKS.map((link: any) => (
                <div key={link.label} className="group relative flex items-center">
                  <Link
                    href={link.href}
                    className={`relative text-[14px] font-semibold transition-all duration-300 px-5 py-3 rounded-lg
                      ${pathname === link.href 
                        ? "text-costa-green bg-costa-green/5" 
                        : "text-text-secondary hover:text-text-primary hover:bg-black/[0.03]"
                      }
                    `}
                  >
                    {link.label}
                  </Link>

                  {/* Invisible hover bridge */}
                  {(link.megaMenu || link.dropdown) && (
                    <div className="absolute top-full left-0 w-full h-8" />
                  )}

                  {/* Premium Mega Menu */}
                  {link.megaMenu && (
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[600px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-2xl overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 origin-top group-hover:scale-100 scale-95">
                      <div className="grid grid-cols-2 p-4 gap-4 relative z-10">
                        {link.megaMenu.categories.map((cat: any) => (
                          <div key={cat.label} className="bg-[#FAFAFA] hover:bg-black/[0.03] transition-colors duration-300 rounded-xl p-6 border border-black/5 group/cat flex flex-col">
                            <div className="flex items-center gap-4 mb-5">
                              <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-costa-green shrink-0">
                                {cat.label.includes('Electronic') ? <Cpu size={24} strokeWidth={1.5} /> : <Zap size={24} strokeWidth={1.5} />}
                              </div>
                              <Link href={cat.href} className="text-[15px] font-black text-text-primary group-hover/cat:text-costa-green transition-colors uppercase tracking-tight leading-tight">
                                {cat.label}
                              </Link>
                            </div>
                            <ul className="flex flex-col gap-3">
                              {cat.products.map((prod: any) => (
                                <li key={prod.label}>
                                  <Link href={prod.href} className="text-[13px] font-semibold text-text-secondary hover:text-costa-green transition-colors flex items-center gap-2.5 group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover/item:bg-costa-green group-hover/item:scale-150 transition-all duration-300" />
                                    {prod.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link href={cat.href} className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-costa-green transition-colors w-max group/btn">
                              View Catalog <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
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
                        <Link href="/request-quote" className="text-xs font-bold uppercase tracking-wider text-text-primary hover:text-costa-green transition-colors flex items-center gap-1">
                          Get Quote <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Simple Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[340px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-2xl overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 origin-top group-hover:scale-100 scale-95">
                      <div className="p-4">
                        <div className="bg-[#FAFAFA] hover:bg-black/[0.03] transition-colors duration-300 rounded-xl p-6 border border-black/5 flex flex-col">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center text-costa-green shrink-0">
                              <ShieldCheck size={24} strokeWidth={1.5} />
                            </div>
                            <span className="text-[15px] font-black text-text-primary uppercase tracking-tight leading-tight">
                              {link.label} Assurance
                            </span>
                          </div>
                          <ul className="flex flex-col gap-3">
                            {link.dropdown.map((item: any) => (
                              <li key={item.label}>
                                <Link href={item.href} className="text-[13px] font-semibold text-text-secondary hover:text-costa-green transition-colors flex items-center gap-2.5 group/item">
                                  <div className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover/item:bg-costa-green group-hover/item:scale-150 transition-all duration-300" />
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link href={link.href} className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-text-muted hover:text-costa-green transition-colors w-max group/btn">
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
                        <Link href="/request-quote" className="text-xs sm:text-xs font-bold uppercase tracking-wider text-text-primary hover:text-costa-green transition-colors flex items-center gap-1 shrink-0">
                          Get Quote <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-white lg:hidden transition-all duration-400 origin-top overflow-auto pointer-events-auto z-[105] ${
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
