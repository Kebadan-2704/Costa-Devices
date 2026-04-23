import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Zap, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import { CERTIFICATIONS, STATS, CUSTOMERS } from "@/lib/constants";
import InfiniteMarquee from "@/components/animations/InfiniteMarquee";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import PartSearchEngine from "@/components/ui/PartSearchEngine";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-500 overflow-hidden">
      
      {/* 1. HERO — Bright Corporate Geometry */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* White/Green Geometry Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Top Right large circle */}
           <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-costa-green/5 blur-[80px]" />
           {/* Bottom Left medium circle */}
           <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-costa-green/10 blur-[100px]" />
           
           {/* Sharp corporate circular outlines (like Canva) */}
           <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full border-[2px] border-costa-green/10 opacity-50" />
           <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full border-[1px] border-costa-green/20 opacity-40" />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/10 border border-costa-green/20 rounded-full mb-8">
                <div className="w-2 h-2 rounded-full bg-costa-green" />
                <span className="font-mono text-[10px] text-costa-green font-bold tracking-[0.2em] uppercase">
                  Global Authorized Distributor
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <h1 className="font-heading text-[clamp(2.8rem,5vw,5rem)] font-black text-text-primary leading-[1.05] tracking-tight mb-8">
                Powering the Future of <br />
                <span className="text-costa-green">Electric Mobility &amp; Industry.</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.05}>
              <p className="font-body text-text-secondary text-lg max-w-xl leading-relaxed mb-10">
                14+ years of excellence in sourcing mission-critical Electronic and Electrical components. From advanced PCB design to high-voltage EV distribution.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-glass-border shadow-xl shadow-costa-green/5 max-w-lg">
                <p className="font-mono text-[10px] text-text-muted font-bold tracking-[0.2em] uppercase mb-4">
                  Check Global Inventory
                </p>
                <PartSearchEngine variant="hero" />
                <p className="text-[11px] text-text-muted mt-4">
                  Or <Link href="/request-quote" className="text-costa-green font-bold hover:underline">Request a Custom Quote &rarr;</Link>
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Imagery - Overlapping Circles Design */}
          <ScrollReveal delay={0.2} className="relative h-[500px] hidden lg:block">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-4 border-white shadow-2xl overflow-hidden z-20 transition-transform duration-700 hover:scale-[1.02]">
               <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Electronic Components" fill className="object-cover" priority />
               <div className="absolute inset-0 bg-costa-green/10 mix-blend-multiply" />
            </div>
            
            <div className="absolute right-[250px] top-[10%] w-[250px] h-[250px] rounded-full border-4 border-white shadow-xl overflow-hidden z-30 transition-transform duration-700 hover:scale-105">
               <Image src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80" alt="Electrical Power" fill className="object-cover" priority />
               <div className="absolute inset-0 bg-costa-green/20 mix-blend-multiply" />
            </div>

            {/* Decorative Solid Green Circle */}
            <div className="absolute right-[180px] bottom-[15%] w-[120px] h-[120px] rounded-full bg-costa-green shadow-lg z-10 flex items-center justify-center">
              <Zap size={40} className="text-white opacity-80" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 1.5 OPERATIONS PREVIEW */}
      <section className="py-20 bg-bg-secondary border-t border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Operations & SLA</h2>
              <h3 className="font-heading text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-6">
                BUILT FOR <span className="text-costa-green">RELIABILITY.</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-lg">
                Our global infrastructure is designed to absorb supply chain volatility. With a 99.8% pick accuracy and a strict Class 1 ESD Safe Protocol, your components are handled with absolute precision.
              </p>
              <Link href="/company" className="inline-flex items-center gap-2 font-bold text-costa-green hover:text-costa-green-light transition-colors">
                View Full Company Portfolio <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="grid grid-cols-2 gap-4">
               <div className="bg-white p-8 rounded-2xl border border-glass-border shadow-sm">
                 <h4 className="font-mono text-3xl font-bold text-text-primary mb-2">99.8%</h4>
                 <p className="font-heading text-[10px] font-bold text-text-muted uppercase tracking-widest">Pick Accuracy</p>
               </div>
               <div className="bg-white p-8 rounded-2xl border border-glass-border shadow-sm">
                 <h4 className="font-mono text-3xl font-bold text-text-primary mb-2">&lt; 24h</h4>
                 <p className="font-heading text-[10px] font-bold text-text-muted uppercase tracking-widest">Dispatch Target</p>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="py-12 bg-white border-y border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-glass-border/0 md:divide-glass-border">
            {STATS.slice(0, 4).map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="font-heading font-black text-4xl text-costa-green mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} duration={2} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS DIVISIONS */}
      <section id="divisions" className="py-32 relative bg-bg-secondary overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Our Expertise</h2>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight">
                TWO PILLARS OF <span className="text-costa-green">POWER.</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Division 1: Electronics */}
            <ScrollReveal delay={0.1}>
              <Link href="/electronics" className="group block bg-white rounded-3xl overflow-hidden border border-glass-border shadow-sm hover:shadow-2xl hover:border-costa-green/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-[300px] relative overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80" alt="Electronics Division" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-costa-green rounded-xl flex items-center justify-center shadow-lg">
                      <Cpu size={24} className="text-white" />
                    </div>
                    <h4 className="font-heading text-2xl font-black text-white">ELECTRONICS COMPONENTS</h4>
                  </div>
                </div>
                <div className="p-10 relative">
                  <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-costa-green/10 flex items-center justify-center group-hover:bg-costa-green group-hover:text-white transition-colors text-costa-green">
                    <ArrowUpRight size={20} />
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 pr-12">
                    Expert sourcing of active and passive components, obsolete parts mitigation, and complete PCB design engineering services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-bg-secondary text-xs font-bold text-text-secondary rounded-md uppercase tracking-wider">PCB Design</span>
                    <span className="px-3 py-1 bg-bg-secondary text-xs font-bold text-text-secondary rounded-md uppercase tracking-wider">Obsolete Parts</span>
                    <span className="px-3 py-1 bg-bg-secondary text-xs font-bold text-text-secondary rounded-md uppercase tracking-wider">Semiconductors</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Division 2: Electrical */}
            <ScrollReveal delay={0.2}>
              <Link href="/electrical" className="group block bg-white rounded-3xl overflow-hidden border border-glass-border shadow-sm hover:shadow-2xl hover:border-costa-green/30 transition-all duration-500 transform hover:-translate-y-2">
                <div className="h-[300px] relative overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80" alt="Electrical Division" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-costa-green rounded-xl flex items-center justify-center shadow-lg">
                      <Zap size={24} className="text-white" />
                    </div>
                    <h4 className="font-heading text-2xl font-black text-white">ELECTRICAL & RENEWABLES</h4>
                  </div>
                </div>
                <div className="p-10 relative">
                  <div className="absolute top-10 right-10 w-10 h-10 rounded-full bg-costa-green/10 flex items-center justify-center group-hover:bg-costa-green group-hover:text-white transition-colors text-costa-green">
                    <ArrowUpRight size={20} />
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 pr-12">
                    Mission-critical high-voltage distribution. Authorized partners for Eaton Bussmann, ABB, and Schneider specializing in EV and Solar.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-bg-secondary text-xs font-bold text-text-secondary rounded-md uppercase tracking-wider">EV Charging</span>
                    <span className="px-3 py-1 bg-bg-secondary text-xs font-bold text-text-secondary rounded-md uppercase tracking-wider">High-Speed Fuses</span>
                    <span className="px-3 py-1 bg-bg-secondary text-xs font-bold text-text-secondary rounded-md uppercase tracking-wider">Contactors</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL PARTNERS MARQUEE */}
      <section className="py-24 bg-white overflow-hidden border-t border-glass-border relative z-20">
         <div className="max-w-[1400px] mx-auto px-6 mb-12 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">
                 Global Hardware Network
              </h2>
              <h3 className="font-heading text-3xl font-black text-text-primary tracking-tight">
                 AUTHORIZED <span className="text-costa-green">PARTNERS</span> &amp; CLIENTS.
              </h3>
            </ScrollReveal>
         </div>
         
         <div className="flex flex-col gap-6">
            <InfiniteMarquee 
              items={[
                { id: "nvidia", name: "NVIDIA" },
                { id: "intel", name: "Intel" },
                { id: "ti", name: "Texas Instruments" },
                { id: "analog", name: "Analog Devices" },
                { id: "st", name: "STMicroelectronics" },
                { id: "nxp", name: "NXP Semiconductors" },
                { id: "qualcomm", name: "Qualcomm" },
                { id: "broadcom", name: "Broadcom" },
                { id: "renesas", name: "Renesas" },
                { id: "eaton", name: "Eaton" }
              ]} 
              direction="left" 
              speed="slow" 
            />
            <InfiniteMarquee 
              items={CUSTOMERS.map(c => ({ 
                id: c, 
                name: c
              }))} 
              direction="right" 
              speed="normal" 
            />
         </div>
      </section>

      {/* 5. COMPLIANCE & VERIFICATION */}
      <section className="py-24 bg-bg-secondary border-t border-glass-border relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Compliance Framework</h2>
                <h3 className="font-heading text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                  UNCOMPROMISING <span className="text-costa-green">STANDARDS.</span>
                </h3>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CERTIFICATIONS.map((cert, i) => (
                <ScrollReveal key={cert.id} delay={i * 0.1}>
                   <div className="bg-white border border-glass-border rounded-2xl p-8 flex flex-col items-center text-center h-full hover:border-costa-green/30 hover:shadow-xl transition-all duration-500">
                      <div className="w-16 h-16 rounded-full bg-costa-green/10 flex items-center justify-center mb-6 text-costa-green">
                         <ShieldCheck size={32} />
                      </div>
                      <h4 className="font-heading text-xl font-bold text-text-primary mb-3">{cert.name}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed flex-grow">{cert.description}</p>
                   </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="mt-16 text-center">
               <Link href="/quality" className="btn-ghost inline-flex items-center gap-2 bg-white rounded-full px-8 py-3 font-bold border border-glass-border hover:border-costa-green/30 text-sm">
                 View Quality Policy <ArrowRight size={16} />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
