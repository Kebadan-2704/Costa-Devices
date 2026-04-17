import Link from "next/link";
import { COMPANY, NAV_LINKS, PRODUCT_CATEGORIES } from "@/lib/constants";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#0a0f12] border-t border-slate-200 dark:border-slate-800/50 overflow-hidden">
      {/* Absolute Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.02] dark:opacity-[0.03]">
        <h1 className="text-[15vw] font-heading font-black whitespace-nowrap tracking-tighter text-slate-900 dark:text-white">COSTA DEVICES</h1>
      </div>

      {/* Top Emerald Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#059669] to-transparent opacity-70" />

      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50 group-hover:scale-105 transition-transform duration-500">
                  <ShieldCheck className="text-[#059669]" strokeWidth={1.5} size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-bold tracking-wide text-slate-900 dark:text-white">COSTA</span>
                  <span className="font-heading text-[10px] font-bold tracking-[0.25em] text-[#059669] block -mt-0.5">EST. 2011</span>
                </div>
              </div>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline}. Authorized global distributor for Eaton Bussmann, ABB, and Schneider serving aerospace, marine, and EV sectors.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-[#059669] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-[#059669] transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#059669] transition-colors duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-heading text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">Catalog Divisions</h4>
            <ul className="space-y-4">
              {PRODUCT_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products#${cat.id}`} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#059669] transition-colors duration-300 inline-block">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm font-bold text-[#059669] hover:underline flex items-center gap-1 mt-2">
                  View full catalog <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Global HQ Terminal */}
          <div>
            <h4 className="font-heading text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-8">Global HQ</h4>
            <div className="bg-[#F0FDF4] dark:bg-slate-900/50 rounded-xl p-6 border border-emerald-100 dark:border-slate-800">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-[#059669] shrink-0 mt-1" />
                  <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{COMPANY.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#059669] shrink-0" />
                  <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#059669] transition-colors">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#059669] shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="font-mono text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-[#059669] transition-colors">
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} Costa Devices FZCO. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-mono text-[10px] text-slate-400 dark:text-slate-500 tracking-wider uppercase">
            <span>AS 6081 Certified</span>
            <span className="hidden md:inline">&bull;</span>
            <span>ISO 9001:2015</span>
            <span className="hidden md:inline">&bull;</span>
            <Link href="/quality" className="hover:text-[#059669] transition-colors">Quality Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
