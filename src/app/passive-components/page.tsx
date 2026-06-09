import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Battery, Grid, Download } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BRANDS } from "@/lib/constants";
import BrandGrid from "@/components/ui/BrandGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passive Components & Renewables — High-Voltage Circuit Protection",
  description: "Authorized distributor of Eaton Bussmann, ABB & Schneider. High-voltage fuses, contactors, and relays for EV, solar energy, and industrial automation.",
};

export default function PassiveComponentsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#fafafa]">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-costa-green/5 blur-[120px] animate-pulse" />
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-costa-green/5 blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_80%,transparent_100%)]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <ScrollReveal className="lg:col-span-5 relative z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/5 border border-costa-green/20 rounded-full mb-8 shadow-sm">
              <Zap size={14} className="text-costa-green" />
              <span className="font-mono text-xs text-costa-green font-bold tracking-[0.2em] uppercase">
                Business Division
              </span>
            </div>
            
            <h1 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight mb-6 text-gray-900">
              ELECTRICAL <br />
              <span className="text-costa-green">& RENEWABLES.</span>
            </h1>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg font-medium">
              High-voltage mission-critical circuit protection and power distribution for the Electric Vehicle, Automation, and Solar Energy sectors.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/request-quote" className="bg-gray-900 text-white hover:bg-costa-green transition-colors rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 shadow-xl shadow-gray-900/10 hover:-translate-y-1">
                REQUEST A QUOTE <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="rounded-full px-8 py-4 font-bold inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-costa-green hover:text-costa-green transition-all hover:-translate-y-1 bg-white">
                CONTACT US
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Premium Image Box */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 relative">
            <div className="relative h-[450px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-8 border-white group transform transition-transform duration-700 hover:scale-[1.01] bg-gray-100">
              <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none">
                <video 
                  src="/videos/Business_Division_ELECTRICAL__.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s] pointer-events-none"
                />
              </div>
              {/* Internal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphism Stat Card */}
            <div className="absolute -bottom-8 -left-8 lg:bottom-12 lg:-left-12 bg-white/90 backdrop-blur-xl border border-gray-200 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-[260px] animate-[slideUp_1s_ease-out_0.5s_both]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-costa-green to-[#0D6B3D] flex items-center justify-center text-white shadow-lg shadow-costa-green/20">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-bold tracking-widest uppercase">Certified</div>
                  <div className="font-heading font-black text-lg text-gray-900 leading-tight">Tier-1 Direct</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Authorized distributor of Eaton Bussmann and Littelfuse protection systems.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 relative bg-white border-t border-gray-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,175,93,0.03),transparent_50%)]" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
             <div className="mb-16">
               <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4 flex items-center gap-3">
                 <div className="w-8 h-[1px] bg-costa-green/50"></div> Core Components
               </h2>
               <h3 className="font-heading text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                 HIGH-VOLTAGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-green to-emerald-500">PROTECTION</span>
               </h3>
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1 */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-3xl h-full shadow-sm hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30 transition-all duration-500 flex flex-col group/card relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/ev-protection.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-costa-green/5 to-transparent rounded-full blur-3xl group-hover:bg-costa-green/10 transition-colors duration-500 z-0" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                    <Shield size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">High-Speed & EV Fuses</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm flex-1 mb-8">
                    Authorized distribution of Eaton Bussmann and Littelfuse high-speed, square body, and EV-specific fuses. Designed to protect power semiconductors, traction inverters, and battery energy storage systems (BESS).
                  </p>
                  <Link href="/request-quote" className="relative z-10 mt-auto pt-6 border-t border-gray-100 flex items-center justify-between group/link cursor-pointer">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover/link:text-costa-green transition-colors">Explore Inventory</span>
                    <ArrowRight size={16} className="text-gray-400 group-hover/link:text-costa-green group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Category 2 */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-gray-200 p-8 lg:p-10 rounded-3xl h-full shadow-sm hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30 transition-all duration-500 flex flex-col group/card relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/industrial-fuses.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-costa-green/5 to-transparent rounded-full blur-3xl group-hover:bg-costa-green/10 transition-colors duration-500 z-0" />
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mb-8 text-costa-green shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                    <Grid size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-gray-900">Contactors & Relays</h3>
                  <p className="text-gray-500 font-medium leading-relaxed text-sm flex-1 mb-8">
                    Heavy-duty contactors, thermal relays, and safety switches from ABB, Schneider Electric, and Eaton Moeller. Essential for automation control panels and high-power load switching.
                  </p>
                  <Link href="/request-quote" className="relative z-10 mt-auto pt-6 border-t border-gray-100 flex items-center justify-between group/link cursor-pointer">
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover/link:text-costa-green transition-colors">Explore Inventory</span>
                    <ArrowRight size={16} className="text-gray-400 group-hover/link:text-costa-green group-hover/link:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-32 bg-[#fafafa] relative border-y border-gray-100">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-costa-green/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0D6B3D]/5 blur-[100px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
           <ScrollReveal>
             <div className="text-center mb-20">
               <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4 flex items-center justify-center gap-3">
                 <div className="w-8 h-[1px] bg-costa-green/50"></div> Applications <div className="w-8 h-[1px] bg-costa-green/50"></div>
               </h2>
               <h3 className="font-heading text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                 POWERING CRITICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-green to-[#0D6B3D]">INFRASTRUCTURE.</span>
               </h3>
             </div>
           </ScrollReveal>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1}>
                 <div className="group bg-white p-10 rounded-[2.5rem] border border-gray-200 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(26,175,93,0.1)] hover:border-costa-green/30 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/industries/electric-vehicles.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-costa-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-costa-green/20">
                      <Battery className="w-8 h-8 text-costa-green" />
                    </div>
                    <div className="relative z-10">
                    <h4 className="font-heading text-xl font-bold mb-3 text-gray-900 group-hover:text-costa-green transition-colors duration-300">Electric Vehicles</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">DC Fast Chargers, Battery Packs, and Traction Inverters.</p>
                    </div>
                 </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                 <div className="group bg-white p-10 rounded-[2.5rem] border border-gray-200 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(26,175,93,0.1)] hover:border-costa-green/30 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/industries/energy-storage.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-costa-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-costa-green/20">
                      <Zap className="w-8 h-8 text-costa-green" />
                    </div>
                    <div className="relative z-10">
                    <h4 className="font-heading text-xl font-bold mb-3 text-gray-900 group-hover:text-costa-green transition-colors duration-300">Renewable Energy</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">Solar Inverters, Wind Turbines, and Grid Storage.</p>
                    </div>
                 </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                 <div className="group bg-white p-10 rounded-[2.5rem] border border-gray-200 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(26,175,93,0.1)] hover:border-costa-green/30 hover:-translate-y-2 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/industries/industrial-automation.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-costa-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-costa-green/20">
                      <Grid className="w-8 h-8 text-costa-green" />
                    </div>
                    <div className="relative z-10">
                    <h4 className="font-heading text-xl font-bold mb-3 text-gray-900 group-hover:text-costa-green transition-colors duration-300">Industrial Automation</h4>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">Control Panels, HVAC, Motor Control Centers, and PLCs.</p>
                    </div>
                 </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Authorized Brands */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-costa-green/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Official Partners</h2>
              <h3 className="font-heading text-4xl font-black text-gray-900 tracking-tight">OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-green to-[#0D6B3D]">BRANDS</span></h3>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">100% genuine components direct from manufacturers. Full traceability guaranteed.</p>
            </div>
          </ScrollReveal>
          
          <BrandGrid />
        </div>
      </section>

      {/* Linecard Download CTA */}
      <section className="relative py-32 overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-costa-green to-[#0D6B3D] z-0" />
        
        {/* Animated circuit lines overlay */}
        <div className="absolute inset-0 opacity-10 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8 border border-white/40 backdrop-blur-md shadow-xl">
              <Download size={32} className="text-white" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">Download Full Linecard</h2>
            <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">Get exclusive access to our complete Eaton Bussmann and ABB product catalog, including advanced cross-reference guides and engineering specs.</p>
            <a href="/contact" className="bg-white text-gray-900 rounded-xl px-12 py-5 font-bold inline-flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
              <Download size={20} strokeWidth={2.5} /> Request Linecard
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
