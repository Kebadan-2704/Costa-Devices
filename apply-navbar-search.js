const fs = require('fs');

let navbarContent = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

// The goal is to completely restructure the Navbar.
// We will replace the current structure with a new one.

const newNavbar = `/* eslint-disable @typescript-eslint/no-explicit-any */
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
      <div className={\`fixed top-0 left-0 right-0 z-[100] pointer-events-none transition-transform duration-500 \${hidden ? "-translate-y-full" : "translate-y-0"}\`}>
        <nav className="pointer-events-auto w-full">
          
          <div className={\`relative z-10 transition-all duration-500 border-b \${
            scrolled 
              ? "bg-white/95 backdrop-blur-xl border-black/8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]" 
              : "bg-white/95 backdrop-blur-xl border-black/5"
          }\`}>
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex flex-col py-3">
              
              {/* TOP ROW: Logo + Search + Actions */}
              <div className="flex items-center justify-between gap-4 lg:gap-8">
                
                {/* Logo */}
                <Link href="/" className="flex items-center group relative shrink-0">
                  <div className="relative h-12 w-[180px] md:h-14 md:w-[220px] transition-all duration-300">
                    <Image 
                      src="/logos/logo.png" 
                      alt="Costa Devices Logo" 
                      fill
                      sizes="(max-width: 768px) 260px, 340px"
                      className="object-contain object-left group-hover:brightness-110 transition-all duration-300"
                      priority
                    />
                  </div>
                </Link>

                {/* Center: Global Search Bar (Inline) */}
                <div className="hidden lg:block flex-1 max-w-4xl scale-[0.9] origin-left">
                  <GlobalSearchBar />
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href="/request-quote"
                    className="group hidden sm:inline-flex items-center gap-2 bg-costa-green text-white text-xs font-bold tracking-[0.1em] uppercase py-3.5 px-6 rounded-lg hover:bg-emerald-500 transition-all duration-300 shadow-[0_4px_14px_rgba(26,175,93,0.3)] hover:shadow-[0_6px_20px_rgba(26,175,93,0.4)] hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    Get Quote
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  
                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                    aria-label="Toggle menu"
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </button>
                </div>
              </div>

              {/* BOTTOM ROW: Nav Links */}
              <div className={\`hidden lg:flex items-center justify-center gap-2 pt-2 mt-1 border-t border-black/5 transition-all duration-500 \${scrolled ? 'h-0 opacity-0 overflow-hidden pt-0 mt-0 border-transparent' : 'h-auto opacity-100'}\`}>
                {NAV_LINKS.map((link: any) => (
                  <div key={link.label} className="group relative flex items-center">
                    <Link
                      href={link.href}
                      className={\`relative text-[14px] font-bold tracking-wide transition-all duration-300 px-5 py-2.5 rounded-full uppercase
                        \${pathname === link.href 
                          ? "text-costa-green bg-costa-green/5" 
                          : "text-text-secondary hover:text-text-primary hover:bg-black/5"
                        }
                      \`}
                    >
                      {link.label}
                    </Link>

                    {/* Invisible hover bridge */}
                    {(link.megaMenu || link.dropdown) && (
                      <div className="absolute top-full left-0 w-full h-8" />
                    )}

                    {/* Premium Mega Menu */}
                    {link.megaMenu && (
                      <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[600px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-2xl overflow-hidden origin-top group-hover:scale-100 scale-95">
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
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Simple Dropdown */}
                    {link.dropdown && (
                      <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[340px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-2xl overflow-hidden origin-top group-hover:scale-100 scale-95">
                        <div className="p-4">
                          <div className="bg-[#FAFAFA] hover:bg-black/[0.03] transition-colors duration-300 rounded-xl p-6 border border-black/5 flex flex-col">
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
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={\`fixed inset-0 bg-white lg:hidden transition-all duration-400 origin-top overflow-auto pointer-events-auto z-[105] \${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }\`}
      >
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
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-6 py-6 flex flex-col gap-2">
            <div className="mb-4">
              <GlobalSearchBar />
            </div>
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col border-b border-black/5">
                  <Link
                    href={link.href === "#" && link.megaMenu ? link.megaMenu.categories[0].href : link.href}
                    onClick={() => setMobileOpen(false)}
                    className={\`text-lg font-semibold py-4 transition-colors flex items-center justify-between \${
                      pathname === link.href ? "text-costa-green" : "text-text-primary hover:text-costa-green"
                    }\`}
                  >
                    {link.label}
                    <ArrowRight size={16} className="text-text-muted" />
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
    </>
  );
}
\`;

fs.writeFileSync('src/components/layout/Navbar.tsx', newNavbar);
console.log('Navbar restructured!');
