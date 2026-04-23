import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-bg-secondary border-t border-glass-border overflow-hidden">
      {/* Absolute Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.02] dark:opacity-[0.03]">
        <h1 className="text-[15vw] font-heading font-black whitespace-nowrap tracking-tighter text-text-primary">COSTA DEVICES</h1>
      </div>

      {/* Top Emerald Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-costa-green/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-left">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 md:gap-4 group">
                <div className="relative flex-shrink-0">
                  <svg viewBox="0 0 75 80" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300">
                    <defs>
                      <linearGradient id="logoGreenGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "var(--brand-green)" }}/>
                        <stop offset="100%" style={{ stopColor: "var(--brand-green-light)" }}/>
                      </linearGradient>
                    </defs>
                    <path d="M10 40 L35 10 L55 10 L30 40 L55 70 L35 70 Z" fill="url(#logoGreenGradFooter)"/>
                    <path d="M25 40 L50 10 L70 10 L45 40 L70 70 L50 70 Z" fill="url(#logoGreenGradFooter)" opacity="0.6"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-lg font-black leading-none tracking-tight text-text-primary">
                    COSTA DEVICES
                  </span>
                  <span className="font-mono text-[9px] font-bold leading-none tracking-[0.3em] text-costa-green mt-1 uppercase">
                    Electric Ltd
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline}. Authorized global distributor for Eaton Bussmann, ABB, and Schneider serving aerospace, marine, and EV sectors.
            </p>
            <div className="flex gap-3">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg flex items-center justify-center bg-bg-primary border border-glass-border text-text-muted hover:text-white hover:bg-costa-green hover:border-costa-green transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="w-10 h-10 rounded-lg flex items-center justify-center bg-bg-primary border border-glass-border text-text-muted hover:text-white hover:bg-costa-green hover:border-costa-green transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] mb-8">Platform</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-medium text-text-secondary hover:text-costa-green transition-colors duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-heading text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] mb-8">Business Divisions</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/electronics" className="text-sm font-medium text-text-secondary hover:text-costa-green transition-colors duration-300 flex items-center gap-2">
                  <Cpu size={14} /> Electronics Components
                </Link>
              </li>
              <li>
                <Link href="/electrical" className="text-sm font-medium text-text-secondary hover:text-costa-green transition-colors duration-300 flex items-center gap-2">
                  <Zap size={14} /> Electrical & Power
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Headquarters */}
          <div>
            <h4 className="font-heading text-[11px] font-bold text-text-primary uppercase tracking-[0.2em] mb-8">Global Headquarters</h4>
            <div className="bg-costa-green/4 rounded-2xl p-8 border border-costa-green/12">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-costa-green shrink-0 mt-1" />
                  <span className="text-sm text-text-secondary leading-relaxed">{COMPANY.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-costa-green shrink-0" />
                  <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="font-mono text-sm font-bold text-text-primary hover:text-costa-green transition-colors">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-costa-green shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="font-mono text-sm font-bold text-text-primary hover:text-costa-green transition-colors">
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-xs font-medium">
            &copy; {new Date().getFullYear()} Costa Devices FZCO. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 font-mono text-[10px] text-text-muted tracking-wider uppercase">
            <div className="flex items-center gap-2 px-4 py-2 bg-text-primary/5 border border-glass-border rounded-lg font-bold text-text-primary">
              <ShieldCheck size={12} className="text-costa-green" /> AS 9120B CERTIFIED
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-text-primary/5 border border-glass-border rounded-lg font-bold text-text-primary">
              <ShieldCheck size={12} className="text-costa-green" /> ISO 9001:2015
            </div>
            <Link href="/quality" className="hover:text-costa-green transition-colors ml-4 font-body tracking-normal underline underline-offset-4">Quality Policy</Link>
            <Link href="/privacy" className="hover:text-costa-green transition-colors font-body tracking-normal underline underline-offset-4">Privacy</Link>
            <Link href="/terms" className="hover:text-costa-green transition-colors font-body tracking-normal underline underline-offset-4">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
