import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Battery, Grid, Download } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BRANDS } from "@/lib/constants";

export default function ElectricalPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-costa-green/10 blur-[100px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full border-[2px] border-costa-green/20 opacity-50" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/10 border border-costa-green/20 rounded-full mb-8">
              <Zap size={14} className="text-costa-green" />
              <span className="font-mono text-[10px] text-costa-green font-bold tracking-[0.2em] uppercase">
                Business Division
              </span>
            </div>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight mb-6">
              ELECTRICAL <br />
              <span className="text-costa-green">&amp; RENEWABLES.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-10">
              High-voltage mission-critical circuit protection and power distribution for the Electric Vehicle, Automation, and Solar Energy sectors.
            </p>
            <Link href="/request-quote" className="btn-primary rounded-full px-8 py-4 text-sm font-bold inline-flex items-center gap-2 shadow-xl shadow-costa-green/20">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="relative h-[400px] lg:h-[500px]">
             <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden z-20">
               <Image src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80" alt="Electrical Power" fill className="object-cover" priority />
               <div className="absolute inset-0 bg-gradient-to-t from-costa-green/20 to-transparent" />
             </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal>
             <div className="mb-16">
               <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Core Components</h2>
               <h3 className="font-heading text-3xl font-black text-text-primary tracking-tight">HIGH-VOLTAGE PROTECTION</h3>
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-glass-border p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green">
                    <Shield size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">High-Speed & EV Fuses</h3>
                  <p className="text-text-secondary leading-relaxed text-sm mb-8">
                    Authorized distribution of Eaton Bussmann and Littelfuse high-speed, square body, and EV-specific fuses. Designed to protect power semiconductors, traction inverters, and battery energy storage systems (BESS).
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Category 2 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-glass-border p-10 rounded-3xl h-full shadow-sm hover:shadow-xl hover:border-costa-green/30 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green">
                    <Grid size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">Contactors & Relays</h3>
                  <p className="text-text-secondary leading-relaxed text-sm mb-8">
                    Heavy-duty contactors, thermal relays, and safety switches from ABB, Schneider Electric, and Eaton Moeller. Essential for automation control panels and high-power load switching.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-24 bg-bg-secondary relative mt-10">
        <div className="max-w-[1400px] mx-auto px-6">
           <ScrollReveal>
             <div className="text-center mb-16">
               <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Applications</h2>
               <h3 className="font-heading text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                 POWERING CRITICAL <span className="text-costa-green">INFRASTRUCTURE.</span>
               </h3>
             </div>
           </ScrollReveal>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <ScrollReveal delay={0.1}>
                 <div className="bg-white p-8 rounded-2xl border border-glass-border text-center shadow-sm">
                    <Battery className="w-10 h-10 text-costa-green mx-auto mb-4" />
                    <h4 className="font-heading font-bold mb-2">Electric Vehicles & Charging</h4>
                    <p className="text-xs text-text-secondary">DC Fast Chargers, Battery Packs, and Traction Inverters.</p>
                 </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                 <div className="bg-white p-8 rounded-2xl border border-glass-border text-center shadow-sm">
                    <Zap className="w-10 h-10 text-costa-green mx-auto mb-4" />
                    <h4 className="font-heading font-bold mb-2">Renewable Energy</h4>
                    <p className="text-xs text-text-secondary">Solar Inverters, Wind Turbines, and Grid Storage.</p>
                 </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                 <div className="bg-white p-8 rounded-2xl border border-glass-border text-center shadow-sm">
                    <Grid className="w-10 h-10 text-costa-green mx-auto mb-4" />
                    <h4 className="font-heading font-bold mb-2">Industrial Automation</h4>
                    <p className="text-xs text-text-secondary">Control Panels, HVAC, Motor Control Centers, and PLCs.</p>
                 </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Authorized Brands */}
      <section className="py-24 relative px-6 max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-black text-text-primary tracking-tight">OUR <span className="text-costa-green">BRANDS</span></h2>
            <p className="text-text-secondary mt-2">100% genuine components direct from manufacturers.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {BRANDS.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.05}>
              <div className="bg-white border border-glass-border p-6 rounded-2xl flex flex-col items-center justify-center text-center h-full hover:border-costa-green/50 transition-colors shadow-sm">
                {brand.logo ? (
                  <div className="w-24 h-12 relative mb-4">
                    <Image src={brand.logo} alt={brand.name} fill className="object-contain" unoptimized />
                  </div>
                ) : (
                  <h4 className="font-heading font-bold text-lg mb-2">{brand.name}</h4>
                )}
                <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider">{brand.products.split(',')[0]}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Linecard Download CTA */}
      <section className="py-24 bg-costa-green/5 text-center px-6 border-y border-costa-green/10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-black mb-6">Download Full Linecard</h2>
          <p className="text-text-secondary mb-10 max-w-md mx-auto">Get access to our complete Eaton Bussmann and ABB product catalog and cross-reference guides.</p>
          <a href="/pdfs/Linecard.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary rounded-full px-10 py-4 font-bold inline-flex items-center gap-2 shadow-xl shadow-costa-green/20 hover:-translate-y-1 transition-transform">
            <Download size={18} /> Get Linecard PDF
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}
