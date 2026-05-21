import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { MapPin, Phone, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-bg-primary border-t border-glass-border">
      {/* Footer Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-glass-border">
        {/* Col 1: Brand & Identity */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-glass-border flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 75 80" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 L35 10 L55 10 L30 40 L55 70 L35 70 Z" fill="var(--brand-green)"/>
                <path d="M25 40 L50 10 L70 10 L45 40 L70 70 L50 70 Z" fill="var(--brand-green)" opacity="0.6"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black leading-none tracking-tight text-text-primary">
                  COSTA DEVICES
                </span>
                <span className="font-mono text-[9px] font-bold leading-none tracking-[0.3em] text-costa-green mt-1 uppercase">
                  Electric Ltd
                </span>
              </div>
            </div>
            <p className="text-text-secondary font-mono text-xs leading-relaxed max-w-[250px] font-bold">
              {COMPANY.tagline}. Authorized global distributor.
            </p>
          </div>
          
          <div className="mt-12 flex gap-4">
            <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-costa-green transition-colors font-mono text-xs font-bold flex items-center gap-1 uppercase">
              [LINKEDIN] <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Col 2: Directory */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-glass-border">
          <div className="font-mono text-[10px] font-bold text-costa-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-costa-green inline-block"></span> Directory
          </div>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-mono text-xs font-bold text-text-primary hover:text-costa-green transition-colors uppercase tracking-tight flex items-center gap-2 before:content-['>'] before:text-glass-border hover:before:text-costa-green">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Operations */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-glass-border">
          <div className="font-mono text-[10px] font-bold text-costa-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-costa-green inline-block"></span> Operations
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <div className="text-[10px] text-text-muted font-mono uppercase tracking-widest mb-1 font-bold">HQ / DBX</div>
              <div className="text-sm font-bold text-text-primary leading-snug">IFZA HQ (DUBAI) - BUILDING A2, SILICON OASIS</div>
            </li>
            <li>
              <div className="text-[10px] text-text-muted font-mono uppercase tracking-widest mb-1 font-bold">GLOBAL OFFICES</div>
              <div className="text-xs font-mono font-bold text-text-primary space-y-1">
                <div>[HKG] Hong Kong</div>
                <div>[IND] Coimbatore</div>
                <div>[ISR] Tel Aviv</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact / Certs */}
        <div className="p-8 md:p-12 pb-32 md:pb-12 bg-bg-secondary flex flex-col justify-between">
          <div>
             <div className="font-mono text-[10px] font-bold text-costa-green uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
               <span className="w-2 h-2 bg-costa-green inline-block animate-pulse"></span> Comm Link
             </div>
             <a href={`mailto:${COMPANY.email}`} className="block text-base font-mono font-bold text-text-primary hover:text-costa-green transition-colors mb-2 break-all">
               {COMPANY.email}
             </a>
             <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="block text-lg font-heading font-black text-text-primary hover:text-costa-green transition-colors">
               {COMPANY.phone}
             </a>
          </div>

          <div className="mt-12 space-y-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-primary border border-glass-border font-mono text-[10px] font-bold text-text-primary uppercase">
              <ShieldCheck size={14} className="text-costa-green" /> AS 9120B CERTIFIED
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-primary border border-glass-border font-mono text-[10px] font-bold text-text-primary uppercase">
              <ShieldCheck size={14} className="text-costa-green" /> ISO 9001:2015
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="px-8 md:px-12 py-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 pb-24 md:pb-6">
        <div className="text-text-secondary font-mono text-[10px] uppercase tracking-widest font-bold">
          SYS.COPYRIGHT &copy; {new Date().getFullYear()} COSTA DEVICES FZCO.
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] font-bold text-text-secondary tracking-widest uppercase">
          <Link href="/quality" className="hover:text-costa-green transition-colors">Quality Policy</Link>
          <Link href="/privacy" className="hover:text-costa-green transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-costa-green transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
