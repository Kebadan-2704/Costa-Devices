/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Award, Clock, Globe, ShieldCheck, Mail, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GsapTimeline from "@/components/animations/GsapTimeline";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import WorldMap from "@/components/ui/WorldMap";
import { COMPANY, TEAM, OFFICES, TIMELINE, STATS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company — 14+ Years of Global Operations",
  description: "Costa Devices: 14+ years powering industries worldwide. ISO 9001:2015 certified global distributor for mission-critical electronic and electrical components.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-glass-border transition-colors duration-500">
        <div className="absolute inset-0 bg-transparent transition-colors duration-500" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6 relative z-20">
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Operations
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight mb-6 text-text-primary tracking-[-0.02em] transition-colors duration-500">
              GLOBAL<br/>
              <span className="green-gradient-text">OPERATIONS.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light border-l-4 border-costa-green pl-6 mb-12 transition-colors duration-500">
              14+ years of powering industries worldwide. The silent engine behind the global EV and hardware transition.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="lg:col-span-6 relative">
            <div className="relative h-[350px] lg:h-[450px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group transform transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none">
                <video 
                  src="/videos/Home_Operations_GLOBAL_OPERA.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Corporate Mission & Values */}
      <section className="py-24 bg-white border-b border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Corporate Mission</h2>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight mb-8">
                SECURING THE GLOBAL <span className="green-gradient-text">SUPPLY CHAIN.</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Our mission is to eliminate friction and risk from the global electronics supply chain. We provide Tier-1 OEMs and defense contractors with an unbroken chain of custody, from the silicon foundry to the factory floor.
              </p>
              <p className="text-text-secondary leading-relaxed border-l-2 border-costa-green pl-4">
                We believe that mission-critical hardware demands absolute integrity. There is zero tolerance for compromise when lives and multi-million dollar infrastructure depend on it.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-bg-secondary p-8 rounded-2xl border border-glass-border">
                <ShieldCheck className="text-costa-green mb-4" size={32} />
                <h4 className="font-heading font-bold text-xl mb-2">Absolute Integrity</h4>
                <p className="text-sm text-text-secondary">Uncompromising authenticity standards and ethical sourcing.</p>
              </div>
              <div className="bg-bg-secondary p-8 rounded-2xl border border-glass-border">
                <Award className="text-costa-green mb-4" size={32} />
                <h4 className="font-heading font-bold text-xl mb-2">Engineering Excellence</h4>
                <p className="text-sm text-text-secondary">Run by engineers, for engineers. We understand the hardware.</p>
              </div>
              <div className="bg-bg-secondary p-8 rounded-2xl border border-glass-border">
                <Clock className="text-costa-green mb-4" size={32} />
                <h4 className="font-heading font-bold text-xl mb-2">Velocity</h4>
                <p className="text-sm text-text-secondary">Rapid procurement without sacrificing our strict quality protocols.</p>
              </div>
              <div className="bg-bg-secondary p-8 rounded-2xl border border-glass-border">
                <Globe className="text-costa-green mb-4" size={32} />
                <h4 className="font-heading font-bold text-xl mb-2">Global Reach</h4>
                <p className="text-sm text-text-secondary">Strategic presence across the Middle East and Asia to navigate trade barriers.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Level Agreement (SLA) */}
      <section className="py-24 bg-bg-secondary border-b border-glass-border transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Fulfillment SLA</h2>
            <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight transition-colors duration-500">WAREHOUSE <span className="green-gradient-text">SLA</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-bg-primary border border-glass-border rounded-2xl p-10 relative overflow-hidden group hover:border-costa-green/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,107,61,0.08)] h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-costa-green/10 via-costa-green/80 to-costa-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div>
                    <h4 className="font-mono text-5xl md:text-6xl font-black text-text-primary mb-2 group-hover:text-costa-green transition-colors duration-500">99.8%</h4>
                    <p className="font-heading text-xs md:text-sm font-bold text-costa-green uppercase tracking-[0.2em] mb-6">Pick Accuracy</p>
                  </div>
                  <p className="text-text-secondary font-light text-sm leading-relaxed border-l-2 border-glass-border pl-4 group-hover:border-costa-green transition-colors duration-500">Triple-verified outbound logistics ensuring zero-defect delivery pipelines.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-primary border border-glass-border rounded-2xl p-10 relative overflow-hidden group hover:border-costa-green/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,107,61,0.08)] h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-costa-green/10 via-costa-green/80 to-costa-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div>
                    <h4 className="font-mono text-5xl md:text-6xl font-black text-text-primary mb-2 group-hover:text-costa-green transition-colors duration-500">&lt; 24h</h4>
                    <p className="font-heading text-xs md:text-sm font-bold text-costa-green uppercase tracking-[0.2em] mb-6">Dispatch Target</p>
                  </div>
                  <p className="text-text-secondary font-light text-sm leading-relaxed border-l-2 border-glass-border pl-4 group-hover:border-costa-green transition-colors duration-500">Orders received before 14:00 GST route directly to staging for same-day air freight.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="bg-bg-primary border border-glass-border rounded-2xl p-10 relative overflow-hidden group hover:border-costa-green/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,107,61,0.08)] h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-costa-green/10 via-costa-green/80 to-costa-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div>
                    <h4 className="font-mono text-5xl md:text-6xl font-black text-text-primary mb-2 group-hover:text-costa-green transition-colors duration-500">Class 1</h4>
                    <p className="font-heading text-xs md:text-sm font-bold text-costa-green uppercase tracking-[0.2em] mb-6">ESD Safe Protocol</p>
                  </div>
                  <p className="text-text-secondary font-light text-sm leading-relaxed border-l-2 border-glass-border pl-4 group-hover:border-costa-green transition-colors duration-500">Strict ANSI/ESD S20.20 certified bagging and handling for all sensitive components.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value-Added Services (VAS) */}
      <section className="py-24 bg-white border-b border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Value-Added Services</h2>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight">BEYOND <span className="green-gradient-text">DISTRIBUTION</span></h3>
              <p className="text-text-secondary max-w-2xl mx-auto mt-4">We offer end-to-end lifecycle solutions to streamline your production line.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-bg-secondary border border-glass-border p-8 rounded-2xl h-full hover:border-costa-green/30 transition-colors">
                <h4 className="font-heading text-xl font-bold mb-3">Custom Kitting</h4>
                <p className="text-text-secondary text-sm">Consolidating complex BOMs into single, production-ready kits, reducing your PO count from 50 to 1.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-secondary border border-glass-border p-8 rounded-2xl h-full hover:border-costa-green/30 transition-colors">
                <h4 className="font-heading text-xl font-bold mb-3">Component Programming</h4>
                <p className="text-text-secondary text-sm">Secure, high-volume firmware flashing for MCUs and memory chips prior to shipment.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-bg-secondary border border-glass-border p-8 rounded-2xl h-full hover:border-costa-green/30 transition-colors">
                <h4 className="font-heading text-xl font-bold mb-3">Tape & Reeling</h4>
                <p className="text-text-secondary text-sm">Converting bulk/tray components into EIA-481 compliant tape and reel for automated SMT lines.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-bg-secondary border border-glass-border p-8 rounded-2xl h-full hover:border-costa-green/30 transition-colors">
                <h4 className="font-heading text-xl font-bold mb-3">Lifecycle Management</h4>
                <p className="text-text-secondary text-sm">Proactive PCN (Product Change Notification) tracking and EOL forecasting to prevent line-down situations.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-b border-glass-border transition-colors duration-500">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-24">
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Milestones</h2>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight transition-colors duration-500">OPERATIONAL <span className="green-gradient-text">HISTORY</span></h3>
            </div>
          </ScrollReveal>

          <GsapTimeline>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-costa-green via-costa-green/30 to-transparent" />

              {TIMELINE.map((item, i) => (
                <div key={item.year} className="gsap-timeline-item relative pl-28 mb-12 last:mb-0 group">
                  {/* Node Dot */}
                  <div className="gsap-timeline-dot absolute left-[32px] top-[24px] w-4 h-4 rounded-full bg-bg-primary border-2 border-costa-green shadow-[0_0_15px_rgba(13,107,61,0.5)] group-hover:scale-125 group-hover:bg-costa-green transition-all duration-500 z-10" />
                  
                  <div className="bg-bg-primary border border-glass-border p-8 rounded-2xl relative overflow-hidden group-hover:border-costa-green/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,107,61,0.08)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-costa-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    
                    <div className="relative z-10">
                      <div className="font-mono text-3xl font-black text-text-primary tracking-tight mb-2 group-hover:text-costa-green transition-colors duration-500">
                        {item.year}
                      </div>
                      <h4 className="font-heading text-lg font-bold text-costa-green mb-3 flex items-center gap-3">
                        {item.title}
                        {item.title.includes("ISO") && <Link href="/quality" className="text-xs font-mono tracking-widest uppercase border border-costa-green text-costa-green hover:text-white hover:bg-costa-green px-3 py-1 rounded-md transition-colors hidden sm:block">View Certificate</Link>}
                      </h4>
                      <p className="text-text-secondary text-sm font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GsapTimeline>
        </div>
      </section>



      {/* ESG & Corporate Governance */}
      <section className="py-24 bg-white border-b border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Corporate Governance</h2>
            <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight">ESG & <span className="green-gradient-text">COMPLIANCE</span></h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-bg-secondary rounded-2xl border border-glass-border h-full hover:border-costa-green/30 transition-colors">
                <ShieldCheck size={32} className="text-costa-green mb-6" strokeWidth={1.5} />
                <h4 className="font-heading text-xl font-bold mb-3">Conflict-Free Sourcing</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Strict adherence to the Dodd-Frank Act. We guarantee a conflict-free supply chain by auditing our suppliers to ensure no components utilize minerals sourced from high-risk or conflict zones.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="p-8 bg-bg-secondary rounded-2xl border border-glass-border h-full hover:border-costa-green/30 transition-colors">
                <Globe size={32} className="text-costa-green mb-6" strokeWidth={1.5} />
                <h4 className="font-heading text-xl font-bold mb-3">Environmental Standard</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Full compliance with RoHS (Restriction of Hazardous Substances) and REACH directives. We prioritize suppliers with aggressive carbon footprint reduction strategies and green foundry practices.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="p-8 bg-bg-secondary rounded-2xl border border-glass-border h-full hover:border-costa-green/30 transition-colors">
                <Award size={32} className="text-costa-green mb-6" strokeWidth={1.5} />
                <h4 className="font-heading text-xl font-bold mb-3">Anti-Counterfeit Guarantee</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Zero tolerance. Our AS 6081 testing lab utilizes X-Ray and Decapsulation to prevent fraudulent parts from entering the defense and medical supply chains. We protect your brand integrity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 border-b border-glass-border overflow-hidden transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Operations</h2>
              <h3 className="font-heading text-3xl md:text-5xl font-black text-text-primary tracking-tight transition-colors duration-500">DISTRIBUTION <span className="green-gradient-text">CENTERS</span></h3>
            </div>
          </ScrollReveal>

          <div className="mb-20">
            <ScrollReveal delay={0.1}>
              <WorldMap />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.id} delay={i * 0.1}>
                <div className="bg-bg-primary border border-glass-border p-8 text-center h-full group hover:border-costa-green/30 transition-all duration-700 rounded-2xl relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,107,61,0.08)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-costa-green/10 via-costa-green/80 to-costa-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-16 h-16 mx-auto bg-bg-secondary border border-glass-border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-costa-green/30 shadow-sm">
                        <img 
                          src={`https://flagcdn.com/w80/${office.id === 'dubai' ? 'ae' : office.id === 'india' ? 'in' : office.id === 'hongkong' ? 'hk' : 'il'}.png`} 
                          alt={office.country} 
                          className="w-8 h-auto rounded-[2px] grayscale group-hover:grayscale-0 transition-all" 
                        />
                      </div>
                      
                      <h3 className="font-heading text-2xl lg:text-3xl font-black mb-2 text-text-primary tracking-tight">{office.city.toUpperCase()}</h3>
                      <span className="font-mono text-xs text-costa-green font-bold uppercase tracking-[0.2em] block mb-6">{office.label}</span>
                      
                      <p className="text-text-secondary text-sm mt-4 mb-8 font-light min-h-[60px] line-clamp-3">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-text-muted font-mono border-t border-glass-border pt-6 group-hover:text-costa-green transition-colors duration-500">
                      <Clock size={14} className="text-costa-green/50 group-hover:text-costa-green transition-colors" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-24 bg-bg-secondary border-b border-glass-border transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 lg:gap-x-0 lg:divide-x divide-glass-border">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="px-4 text-center group">
                  <div className="font-mono text-5xl md:text-6xl font-black text-text-primary tracking-tight mb-4 group-hover:text-costa-green transition-colors duration-500">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} duration={2.5} />
                  </div>
                  <div className="font-heading text-xs text-costa-green font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 bg-bg-elevated overflow-hidden border-t border-glass-border">
        <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-costa-green/8 blur-[150px] z-0 rounded-t-full pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <ShieldCheck size={48} className="mx-auto text-costa-green mb-8" strokeWidth={1} />
            <h2 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black text-text-primary leading-tight tracking-tight mb-8 max-w-4xl mx-auto transition-colors duration-500">
              PARTNER WITH US.
            </h2>
            <p className="text-text-secondary text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto transition-colors duration-500">
              Join 50+ global clients who trust Costa Devices for mission-critical hardware logistics.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/request-quote" className="rounded-lg bg-[#111111] text-white hover:bg-costa-green transition-colors rounded-lg px-12 py-5 text-sm tracking-[0.15em] group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3 font-bold">Request Quote <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></span>
              </Link>
              <Link href="/contact" className="rounded-lg px-12 py-5 text-sm tracking-[0.15em] font-bold border-2 border-glass-border text-text-primary hover:border-costa-green hover:text-costa-green transition-all inline-flex items-center gap-3">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
