"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-text-primary border-t border-black/10 relative overflow-hidden font-mono mt-32">
      <div className="max-w-[1600px] mx-auto border-x border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
          
          {/* Column 1 */}
          <div className="p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <Link href="/" className="relative h-16 w-[320px] hover:opacity-80 transition-opacity">
                <Image 
                  src="/logos/logo.png" 
                  alt="Costa Devices Logo" 
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-sm text-text-secondary mt-8 max-w-[250px] leading-relaxed font-bold">
                Powering The Future of Electric Mobility. Authorized global distributor.
              </p>
            </div>
            <div className="mt-12">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:text-costa-green transition-colors inline-flex items-center gap-2">
                [LINKEDIN] <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-xs font-bold text-costa-green tracking-widest uppercase mb-12">
              <div className="w-2 h-2 bg-costa-green"></div>
              DIRECTORY
            </div>
            <ul className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
              <li><Link href="/" className="hover:text-costa-green transition-colors flex items-center gap-2"><span className="text-text-muted">{'>'}</span> HOME</Link></li>
              <li><Link href="/products" className="hover:text-costa-green transition-colors flex items-center gap-2"><span className="text-text-muted">{'>'}</span> PRODUCTS</Link></li>
              <li><Link href="/services" className="hover:text-costa-green transition-colors flex items-center gap-2"><span className="text-text-muted">{'>'}</span> SERVICES</Link></li>
              <li><Link href="/company" className="hover:text-costa-green transition-colors flex items-center gap-2"><span className="text-text-muted">{'>'}</span> COMPANY</Link></li>
              <li><Link href="/quality" className="hover:text-costa-green transition-colors flex items-center gap-2"><span className="text-text-muted">{'>'}</span> QUALITY</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 text-xs font-bold text-costa-green tracking-widest uppercase mb-12">
              <div className="w-2 h-2 bg-costa-green"></div>
              OPERATIONS
            </div>
            <div className="mb-10">
              <p className="text-[10px] text-text-muted uppercase tracking-widest mb-2 font-bold">HQ / DBX</p>
              <p className="text-sm font-bold uppercase leading-relaxed max-w-[250px]">IFZA HQ (DUBAI) - BUILDING A2, SILICON OASIS</p>
            </div>
            <div>
              <p className="text-[10px] text-text-muted uppercase tracking-widest mb-4 font-bold">GLOBAL OFFICES</p>
              <ul className="flex flex-col gap-3 text-sm">
                <li><span className="font-bold mr-2">[HKG]</span> Hong Kong</li>
                <li><span className="font-bold mr-2">[IND]</span> Coimbatore</li>
                <li><span className="font-bold mr-2">[ISR]</span> Tel Aviv</li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="p-8 md:p-12 relative flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-costa-green tracking-widest uppercase mb-12">
                <div className="w-2 h-2 bg-costa-green"></div>
                COMM LINK
              </div>
              <div className="mb-6">
                <a href={`mailto:${COMPANY.email}`} className="text-lg font-bold hover:text-costa-green transition-colors">{COMPANY.email}</a>
              </div>
              <div>
                <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-bold hover:text-costa-green transition-colors">{COMPANY.phone}</a>
              </div>
            </div>
            
            <div className="mt-12 flex h-[86px]">
              <div className="flex-1 flex flex-col">
                <div className="flex-1 border border-black/10 border-b-0 p-3 flex items-center gap-3 text-xs font-bold uppercase">
                  <CheckCircle2 size={14} className="text-costa-green" /> AS 9120B CERTIFIED
                </div>
                <div className="flex-1 border border-black/10 p-3 flex items-center gap-3 text-xs font-bold uppercase">
                  <CheckCircle2 size={14} className="text-costa-green" /> ISO 9001:2015
                </div>
              </div>
              <button onClick={scrollToTop} className="w-[50px] h-full border border-black/10 border-l-0 flex items-center justify-center hover:bg-black/5 transition-colors group cursor-pointer bg-white">
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 p-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-text-muted font-bold">
          <p>SYS.COPYRIGHT © {new Date().getFullYear()} COSTA DEVICES FZCO.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/quality" className="hover:text-black transition-colors">QUALITY POLICY</Link>
            <Link href="/privacy" className="hover:text-black transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-black transition-colors">TERMS</Link>
          </div>
        </div>
      </div>

      {/* Hovering SECURE CHANNEL tag */}
      <div className="absolute bottom-20 right-10 border border-black text-xs font-bold uppercase bg-white p-4 hidden lg:flex flex-col gap-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] z-50 hover:bg-black hover:text-white transition-colors cursor-default group">
        <div className="text-[9px] text-text-muted group-hover:text-white/60 font-bold">SECURE CHANNEL</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-costa-green"></div>
          COMM LINK: ONLINE <span className="ml-2 animate-pulse">{'>_'}</span>
        </div>
      </div>

    </footer>
  );
}
