import React from "react";
import { UploadCloud, ShieldCheck, FileText, Lock, Cpu } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Transmit BOM | Costa Devices",
  description: "Secure data portal for transmitting Bill of Materials (BOM) to Costa Devices for immediate shortage sourcing and EOL fulfillment.",
};

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen pt-[100px] flex flex-col bg-transparent">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Information & Trust Signals */}
        <div className="bg-bg-secondary p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden border-r border-glass-border">
          {/* Subtle Industrial Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
              alt="Data Center" 
              fill 
              className="object-cover grayscale opacity-[0.03] dark:opacity-10 mix-blend-multiply dark:mix-blend-screen"
            />
          </div>

          <div className="relative z-10 max-w-[500px]">
            <div className="font-mono text-xs font-bold text-costa-green uppercase tracking-widest border border-costa-green/30 px-3 py-1 mb-12 inline-flex items-center gap-2 bg-bg-primary">
              <span className="w-2 h-2 bg-costa-green rounded-full animate-pulse"></span>
              SECURE UPLOAD TERMINAL
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter mb-8 uppercase text-text-primary">
              TRANSMIT BILL OF MATERIALS
            </h1>
            
            <p className="font-mono text-sm text-text-secondary leading-relaxed mb-12 uppercase tracking-wider">
              Submit your shortage list or full BOM. Our algorithmic sourcing network will scan global franchised and EMS excess inventory to secure your components in under 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-text-primary uppercase tracking-tight">AS6081 Verification</h4>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">All parts subject to microscopic inspection, X-Ray, and decapsulation before dispatch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Lock className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-text-primary uppercase tracking-tight">End-to-End Encryption</h4>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">Your IP and component requirements are strictly confidential under NDA protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Cpu className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-text-primary uppercase tracking-tight">High Voltage Experts</h4>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">Authorized sourcing for Eaton Bussmann, ABB, and Schneider infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-20 pt-8 border-t border-glass-border">
             <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
               SUPPORT HOTLINE // <a href="tel:+1234567890" className="text-text-primary hover:text-costa-green font-bold">+1 (800) 555-0199</a><br/>
               DIRECT INQUIRIES // <a href="mailto:sales@costadevices.com" className="text-text-primary hover:text-costa-green font-bold">SALES@COSTADEVICES.COM</a>
             </div>
          </div>
        </div>

        {/* Right Side: The Form & Upload Zone */}
        <div className="bg-bg-primary p-8 md:p-16 lg:p-24 flex items-center justify-center relative">
          <div className="w-full max-w-[600px] border-2 border-glass-border p-8 md:p-10 relative bg-bg-secondary/50">
            {/* Terminal Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-text-primary -translate-x-[2px] -translate-y-[2px]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-text-primary translate-x-[2px] -translate-y-[2px]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-text-primary -translate-x-[2px] translate-y-[2px]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-text-primary translate-x-[2px] translate-y-[2px]"></div>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Operator Name</label>
                  <input type="text" className="w-full bg-input-bg border border-input-border text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors" placeholder="JOHN DOE" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Organization ID</label>
                  <input type="text" className="w-full bg-input-bg border border-input-border text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors" placeholder="COMPANY INC." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Secure Comms (Email)</label>
                  <input type="email" className="w-full bg-input-bg border border-input-border text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors" placeholder="J.DOE@COMPANY.COM" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Target Timeline</label>
                  <select className="w-full bg-input-bg border border-input-border text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors appearance-none">
                    <option>IMMEDIATE (LINE DOWN)</option>
                    <option>STANDARD (3-5 DAYS)</option>
                    <option>PROACTIVE SOURCING</option>
                  </select>
                </div>
              </div>

              {/* Upload Zone */}
              <div className="space-y-2 pt-4">
                <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">BOM Payload Upload</label>
                <div className="border-2 border-dashed border-glass-border hover:border-costa-green transition-colors bg-input-bg p-12 flex flex-col items-center justify-center text-center cursor-pointer group">
                  <UploadCloud className="text-text-muted group-hover:text-costa-green transition-colors mb-4" size={32} />
                  <p className="font-heading text-lg font-bold text-text-primary uppercase tracking-tight mb-1">Drag & Drop BOM File</p>
                  <p className="font-mono text-xs text-text-muted uppercase tracking-widest">Supports .CSV, .XLSX, .PDF (Max 25MB)</p>
                  <button type="button" className="mt-6 border border-glass-border hover:border-costa-green bg-bg-secondary px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest text-text-primary transition-colors">
                    BROWSE DIRECTORY
                  </button>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Additional Parameters</label>
                <textarea rows={3} className="w-full bg-input-bg border border-input-border text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors resize-none" placeholder="Enter target pricing, acceptable date codes, or specific manufacturer instructions..."></textarea>
              </div>

              <button type="button" className="w-full bg-costa-green text-white font-mono text-sm font-bold uppercase py-5 px-8 hover:bg-[#15964f] transition-all shadow-[0_0_20px_rgba(26,175,93,0.3)] hover:shadow-[0_0_30px_rgba(26,175,93,0.5)] mt-4">
                INITIATE SOURCING PROTOCOL
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
