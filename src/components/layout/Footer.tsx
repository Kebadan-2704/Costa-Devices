"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp, CheckCircle2 } from "lucide-react";
import { COMPANY, CERTIFICATIONS, OFFICES } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-text-primary relative overflow-hidden border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-8 pt-16 pb-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & Bio (Spans 4) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col">
            <Link href="/" className="relative block h-16 w-full max-w-[240px] hover:opacity-80 transition-opacity mb-8">
              <Image 
                src="/logos/logo.png" 
                alt="Costa Devices Logo" 
                fill
                sizes="240px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-base text-text-secondary leading-relaxed max-w-[340px] mb-8 font-medium">
              Powering The Future of Electric Mobility. Global distributor for mission-critical circuit protection, EV components, and industrial automation.
            </p>
            <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-text-primary hover:text-costa-green transition-all w-fit border border-black/10 bg-[#FAFAFA] px-8 py-4 rounded hover:border-costa-green/50 hover:bg-costa-green/5 shadow-sm">
              Follow LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Column 2: Quick Links (Spans 2) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-sm font-bold text-costa-green tracking-widest uppercase mb-8">
              Directory
            </h4>
            <ul className="flex flex-col gap-5 text-base font-semibold text-text-primary">
              <li><Link href="/" className="hover:text-costa-green transition-colors">Home</Link></li>
              <li><Link href="/electrical" className="hover:text-costa-green transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-costa-green transition-colors">Services</Link></li>
              <li><Link href="/company" className="hover:text-costa-green transition-colors">Company</Link></li>
              <li><Link href="/quality" className="hover:text-costa-green transition-colors">Quality Policy</Link></li>
              <li className="pt-2"><a href="/pdfs/costa-devices-linecard.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-costa-green transition-colors flex items-center gap-1.5 text-costa-green font-bold">Download Linecard <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

          {/* Column 3: Global Presence (Spans 3) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-sm font-bold text-costa-green tracking-widest uppercase mb-8">
              Global HQ
            </h4>
            <h4 className="text-[13px] font-bold text-text-muted tracking-widest uppercase mb-6">Our Offices</h4>
            <ul className="flex flex-col gap-4 text-base font-semibold text-text-primary">
              {OFFICES.map(office => (
                <li key={office.id} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-costa-green"></span>
                  {office.city}, {office.country}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Certifications (Spans 3) */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col">
            <h4 className="text-sm font-bold text-costa-green tracking-widest uppercase mb-8">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-2 mb-10">
              <a href={`mailto:${COMPANY.email}`} className="text-base font-semibold text-text-secondary hover:text-costa-green transition-colors">
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`} className="text-2xl font-bold text-text-primary hover:text-costa-green transition-colors mt-1">
                {COMPANY.phone}
              </a>
            </div>
            
            {/* Premium Light Theme Certification Badges */}
            <h4 className="text-[13px] font-bold text-text-muted tracking-widest uppercase mb-5">Verified Quality</h4>
            <div className="flex flex-col gap-4">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.id} className="flex items-center gap-4 bg-white border border-black/10 p-4 rounded-xl hover:border-costa-green/30 hover:bg-costa-green/5 transition-all group shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-costa-green/10 flex items-center justify-center shrink-0 border border-costa-green/20 group-hover:bg-costa-green/20 transition-colors">
                    <CheckCircle2 size={20} className="text-costa-green" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary tracking-wider mb-1">{cert.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-costa-green"></div>
                      <p className="text-[10px] text-text-secondary font-mono uppercase tracking-widest font-bold">Verified Standard</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8 pb-10">
          <div className="text-sm font-bold tracking-widest text-text-muted uppercase text-center md:text-left">
            © {new Date().getFullYear()} Costa Devices FZCO. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-8 text-sm font-bold text-text-muted uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-costa-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-costa-green transition-colors">Terms of Service</Link>
            
            <button 
              onClick={scrollToTop} 
              className="w-12 h-12 ml-4 rounded-xl bg-white border border-black/10 hover:bg-costa-green hover:border-costa-green hover:text-white transition-all flex items-center justify-center group text-text-primary shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover:text-white group-hover:-translate-y-1 transition-all" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
