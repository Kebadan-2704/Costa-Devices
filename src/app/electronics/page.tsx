import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Search, Layers, RefreshCcw } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { MANUFACTURERS } from "@/lib/constants";

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-costa-green/5 blur-[80px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/10 border border-costa-green/20 rounded-full mb-8">
              <Cpu size={14} className="text-costa-green" />
              <span className="font-mono text-[10px] text-costa-green font-bold tracking-[0.2em] uppercase">
                Business Division
              </span>
            </div>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight mb-6">
              ELECTRONICS <br />
              <span className="text-costa-green">COMPONENTS.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-10">
              Your trusted partner for mission-critical semiconductor sourcing, advanced PCB design, and mitigating supply chain risks for obsolete components.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-glass-border p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green">
                  <Search size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Hard-to-Find Sourcing</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Utilizing our global network to track down allocated and shortage components from trusted, Tier-1 verified suppliers to keep your lines running.
                </p>
              </div>
            </ScrollReveal>
            
            {/* Service 2 - Technical Deep Dive */}
            <ScrollReveal delay={0.2} className="md:col-span-2">
              <div className="bg-white border border-glass-border p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green">
                      <Layers size={28} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-4">PCB Design Engineering</h3>
                    <p className="text-text-secondary leading-relaxed text-sm mb-6">
                      Complete end-to-end PCB design services optimized for manufacturability (DFM) and high-yield production. We don't just route boards; we engineer them for harsh environments.
                    </p>
                  </div>
                  
                  {/* Technical Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full shrink-0 md:w-1/2">
                    <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border">
                      <div className="font-mono text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Max Layers</div>
                      <div className="font-mono text-xl font-bold text-costa-green">32+</div>
                    </div>
                    <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border">
                      <div className="font-mono text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">High-Speed</div>
                      <div className="font-mono text-xl font-bold text-costa-green">56 Gbps</div>
                    </div>
                    <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border">
                      <div className="font-mono text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">Standards</div>
                      <div className="font-mono text-xl font-bold text-costa-green">IPC Class 3</div>
                    </div>
                    <div className="bg-bg-secondary p-4 rounded-xl border border-glass-border">
                      <div className="font-mono text-[10px] text-text-muted font-bold uppercase tracking-wider mb-1">HDI Tech</div>
                      <div className="font-mono text-xl font-bold text-costa-green">Microvias</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-glass-border p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green">
                  <RefreshCcw size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Obsolete Parts Management</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  Proactive life-cycle management. We identify cross-references, suggest drop-in replacements, and source EOL (End-of-Life) components securely.
                </p>
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
               <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Authorized Ecosystem</h2>
               <h3 className="font-heading text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                 TIER-1 SEMICONDUCTOR <span className="text-costa-green">NETWORK.</span>
               </h3>
             </div>
           </ScrollReveal>

           <div className="flex flex-wrap justify-center gap-3">
             {MANUFACTURERS.slice(0, 24).map((brand, i) => (
               <ScrollReveal key={brand} delay={i * 0.02}>
                 <div className="px-5 py-2.5 bg-white border border-glass-border rounded-full font-mono text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-costa-green hover:border-costa-green/30 transition-colors shadow-sm">
                   {brand}
                 </div>
               </ScrollReveal>
             ))}
           </div>
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
