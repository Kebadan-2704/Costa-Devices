import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Search, Layers, RefreshCcw } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { MANUFACTURERS } from "@/lib/constants";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const InteractiveEcosystem = dynamic(() => import("@/components/ui/InteractiveEcosystem"));

export const metadata: Metadata = {
  title: "Electronic Components — Semiconductor Sourcing & PCB Design",
  description: "Mission-critical semiconductor sourcing, PCB design engineering, and obsolete parts management. Trusted by Tier-1 OEMs across the EV, aerospace, and defense industries.",
};

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 bg-[#FAFAFA] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(#1AAF5D_1px,transparent_1px),linear-gradient(90deg,#1AAF5D_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_80%,transparent_100%)]" />
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-costa-green/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-bg-primary to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 z-10">
              <ScrollReveal>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/10 border border-costa-green/20 rounded-full mb-8">
                  <Cpu size={14} className="text-costa-green" />
                  <span className="font-mono text-[10px] text-costa-green font-bold tracking-[0.2em] uppercase">
                    Business Division
                  </span>
                </div>
                <h1 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight mb-6 text-text-primary">
                  ELECTRONICS <br />
                  <span className="text-costa-green">COMPONENTS.</span>
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
                  Your trusted partner for mission-critical semiconductor sourcing, advanced PCB design, and mitigating supply chain risks for obsolete components.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 shadow-xl shadow-costa-green/20 hover:-translate-y-1 transition-transform">
                    REQUEST A QUOTE <ArrowRight size={18} />
                  </Link>
                  <Link href="#capabilities" className="btn-ghost rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 hover:bg-black/5 transition-colors">
                    OUR CAPABILITIES
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Premium Video Box */}
            <ScrollReveal delay={0.2} className="lg:col-span-7 relative">
              <div className="relative h-[450px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group transform transition-transform duration-700 hover:scale-[1.01]">
                <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none">
                  <video 
                    src="/videos/Business_Division_ELECTRONICS.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-[2s] pointer-events-none"
                  />
                </div>
                {/* Internal Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Glassmorphism Stat Card */}
              <div className="absolute -bottom-8 -left-8 lg:bottom-12 lg:-left-12 bg-white/80 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[260px] animate-[slideUp_1s_ease-out_0.5s_both]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-costa-green to-[#0D6B3D] flex items-center justify-center text-white shadow-lg">
                    <Layers size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-text-muted font-bold tracking-widest uppercase">Verified</div>
                    <div className="font-heading font-black text-lg text-text-primary leading-tight">ISO 9001</div>
                  </div>
                </div>
                <p className="text-xs text-text-secondary font-medium leading-relaxed">
                  Rigorous quality control and fully traceable semiconductor supply chain.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-glass-border p-8 lg:p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500 flex flex-col group/card relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/capacitors.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                  <Search size={28} />
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl font-bold mb-4">Hard-to-Find Sourcing</h3>
                <p className="text-text-secondary leading-relaxed text-sm flex-1">
                  Utilizing our global network to track down allocated and shortage components from trusted, Tier-1 verified suppliers to keep your lines running.
                </p>
                <Link href="/services" className="relative z-10 mt-8 pt-6 border-t border-glass-border flex items-center justify-between group/link cursor-pointer">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-text-primary group-hover/link:text-costa-green transition-colors">Explore Sourcing</span>
                  <ArrowRight size={16} className="text-text-muted group-hover/link:text-costa-green group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>
              </div>
            </ScrollReveal>
            
            {/* Service 2 - Technical Deep Dive */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-glass-border p-8 lg:p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500 flex flex-col group/card relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/circuit-protection.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                  <Layers size={28} />
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl font-bold mb-4">PCB Design Engineering</h3>
                <p className="text-text-secondary leading-relaxed text-sm flex-1 mb-8">
                  Complete end-to-end PCB design services optimized for manufacturability (DFM) and high-yield production. We engineer boards for harsh environments.
                </p>
                
                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 gap-3 w-full shrink-0 mb-8">
                  <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border group-hover/card:bg-costa-green/5 transition-colors">
                    <div className="font-mono text-[9px] text-text-muted font-bold uppercase tracking-wider mb-1">Max Layers</div>
                    <div className="font-mono text-lg font-bold text-costa-green">32+</div>
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border group-hover/card:bg-costa-green/5 transition-colors">
                    <div className="font-mono text-[9px] text-text-muted font-bold uppercase tracking-wider mb-1">High-Speed</div>
                    <div className="font-mono text-lg font-bold text-costa-green">56 Gbps</div>
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border group-hover/card:bg-costa-green/5 transition-colors">
                    <div className="font-mono text-[9px] text-text-muted font-bold uppercase tracking-wider mb-1">Standards</div>
                    <div className="font-mono text-lg font-bold text-costa-green">IPC Class 3</div>
                  </div>
                  <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border group-hover/card:bg-costa-green/5 transition-colors">
                    <div className="font-mono text-[9px] text-text-muted font-bold uppercase tracking-wider mb-1">HDI Tech</div>
                    <div className="font-mono text-lg font-bold text-costa-green">Microvias</div>
                  </div>
                </div>
                
                <Link href="/services" className="relative z-10 pt-6 border-t border-glass-border flex items-center justify-between group/link cursor-pointer mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-text-primary group-hover/link:text-costa-green transition-colors">View Capabilities</span>
                  <ArrowRight size={16} className="text-text-muted group-hover/link:text-costa-green group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-glass-border p-8 lg:p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500 flex flex-col group/card relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/transformers.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                  <RefreshCcw size={28} />
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-heading text-2xl font-bold mb-4">Obsolete Parts Management</h3>
                <p className="text-text-secondary leading-relaxed text-sm flex-1">
                  Proactive life-cycle management. We identify cross-references, suggest drop-in replacements, and source EOL (End-of-Life) components securely.
                </p>
                <Link href="/services" className="relative z-10 mt-8 pt-6 border-t border-glass-border flex items-center justify-between group/link cursor-pointer">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-text-primary group-hover/link:text-costa-green transition-colors">Learn More</span>
                  <ArrowRight size={16} className="text-text-muted group-hover/link:text-costa-green group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual Break / Linecard */}
      <section className="py-24 bg-bg-secondary relative mt-10">
        <div className="max-w-[1400px] mx-auto px-6">
           <ScrollReveal>
             <div className="text-center mb-16">
               <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Our Ecosystem</h2>
               <h3 className="font-heading text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                 TIER-1 SEMICONDUCTOR <span className="text-costa-green">NETWORK.</span>
               </h3>
             </div>
           </ScrollReveal>

           <InteractiveEcosystem />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-black mb-8">Need an electronic component quoted?</h2>
          <Link href="/request-quote" className="btn-primary rounded-full px-10 py-4 font-bold inline-flex items-center gap-2 shadow-xl shadow-costa-green/20">
            Send BOM / RFQ <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
