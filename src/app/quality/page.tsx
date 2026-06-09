import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProcessFlowchart from "@/components/ui/ProcessFlowchart";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality — AS6081 & ISO 9001:2015 Certified",
  description: "Uncompromising quality standards. AS 6081, AS 9120B, and ISO 9001:2015 certified. 8-step counterfeit detection pipeline with X-Ray and chemical decapsulation.",
};

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-glass-border transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg-primary transition-colors duration-500" />
        <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-costa-green/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6 relative z-20">
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Quality
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight mb-6 text-text-primary tracking-tighter transition-colors duration-500">
              UNCOMPROMISING<br/>
              <span className="text-costa-green">STANDARDS.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light border-l-4 border-costa-green pl-6 transition-colors duration-500">
              AS 6081 · AS 9120B · ISO 9001:2015 certified — zero tolerance for anything less than authentic.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="lg:col-span-6 relative">
            <div className="relative h-[350px] lg:h-[450px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group transform transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none">
                <video 
                  src="/videos/Home_Quality_UNCOMPROMISING.mp4"
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

      {/* Certification Cards */}
      <section className="py-24 bg-bg-secondary transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-12">Internationally Recognized Certifications</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {CERTIFICATIONS.map((cert, idx) => (
              <ScrollReveal key={cert.id} delay={0.1}>
                <a 
                  href={cert.pdf || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-bg-primary border border-glass-border h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:border-costa-green/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer rounded-xl block"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.15] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: `url('${['/images/products/automation.png', '/images/industries/power-distribution.png', '/images/products/capacitors.png'][idx % 3]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-glass-border group-hover:bg-costa-green transition-colors duration-500 z-10" />
                  
                  {/* Top Badge Block */}
                  <div className="p-8 pb-4 flex items-start justify-between relative z-10">
                    <div className="w-12 h-12 bg-costa-green/10 border border-costa-green/20 rounded-xl flex items-center justify-center group-hover:bg-costa-green/20 transition-colors">
                      <ShieldCheck size={24} strokeWidth={1.5} className="text-costa-green" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-costa-green/10 border border-costa-green/20 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-costa-green" />
                      <span className="font-mono text-[9px] text-costa-green font-bold uppercase tracking-wider">Verified</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 pt-4 flex-1 relative z-10">
                    <h3 className="font-heading text-xl font-black text-text-primary tracking-tight mb-2 transition-colors duration-500">{cert.name}</h3>
                    <p className="font-mono text-xs text-costa-green font-bold tracking-widest uppercase mb-4">{cert.fullName}</p>
                    <p className="text-text-secondary text-sm leading-relaxed transition-colors duration-500">{cert.description}</p>
                  </div>
                  
                  {/* Footer with visible CTA */}
                  <div className="p-6 bg-bg-secondary border-t border-glass-border flex items-center justify-between transition-colors duration-500 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-widest">{cert.entity}</span>
                      <span className="font-mono text-xs text-costa-green font-bold">{cert.year}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-costa-green font-semibold text-xs group-hover:gap-2.5 transition-all duration-300">
                      View Certificate <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counterfeit Detection Pipeline */}
      <section className="py-24 border-t border-glass-border transition-colors duration-500">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-4">Quality Assurance</h2>
              <h3 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight transition-colors duration-500">8-STEP QUALITY <span className="green-gradient-text">INSPECTION</span></h3>
              <p className="text-text-secondary font-light max-w-xl mx-auto mt-6 transition-colors duration-500">
                Our AS 6081 certified, 8-step inspection process ensures every component meets the highest authenticity standards before it ever hits your production floor.
              </p>
            </div>
          </ScrollReveal>

          {/* Physical Lab Realism Section */}
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center mb-10">
              <h4 className="font-heading text-sm font-bold tracking-[0.3em] text-costa-green uppercase mb-2">Physical Lab Realism</h4>
              <h3 className="font-heading text-3xl font-black text-text-primary tracking-tight">ADVANCED <span className="green-gradient-text">TESTING</span></h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <ScrollReveal delay={0.1}>
              <div className="bg-bg-primary border border-glass-border rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-48 relative flex flex-col items-center justify-center overflow-hidden">
                   <img src="/images/testing/x_ray.png" alt="X-Ray Inspection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-costa-green/20" />
                   <p className="font-mono text-white/20 text-6xl font-black tracking-tighter z-10 group-hover:scale-110 transition-transform duration-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">X-RAY</p>
                   <p className="font-heading font-bold text-white text-lg mt-12 z-10">Real-Time X-Ray Inspection</p>
                </div>
                <div className="p-6 bg-white border-t border-glass-border">
                  <p className="text-text-secondary text-sm">Validating die structures and wire bonds against manufacturer gold standards to detect counterfeits instantly.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-bg-primary border border-glass-border rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-48 relative flex flex-col items-center justify-center overflow-hidden">
                   <img src="/images/testing/decap.png" alt="Chemical Decapsulation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-costa-green/20" />
                   <p className="font-mono text-white/20 text-6xl font-black tracking-tighter z-10 group-hover:scale-110 transition-transform duration-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">DECAP</p>
                   <p className="font-heading font-bold text-white text-lg mt-12 z-10">Chemical Decapsulation</p>
                </div>
                <div className="p-6 bg-white border-t border-glass-border">
                  <p className="text-text-secondary text-sm">Acid-etching component surfaces to expose and verify the original silicon die topography and markings.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-bg-primary border border-glass-border rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-48 relative flex flex-col items-center justify-center overflow-hidden">
                   <img src="/images/testing/solder.png" alt="Solderability Testing" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-costa-green/20" />
                   <p className="font-mono text-white/20 text-6xl font-black tracking-tighter z-10 group-hover:scale-110 transition-transform duration-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">SOLDER</p>
                   <p className="font-heading font-bold text-white text-lg mt-12 z-10">Solderability Testing</p>
                </div>
                <div className="p-6 bg-white border-t border-glass-border">
                  <p className="text-text-secondary text-sm">J-STD-002 compliance testing to guarantee leads will accept solder flawlessly during your SMT process.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="max-w-[900px] mx-auto">
            <ProcessFlowchart />
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 text-center bg-bg-secondary transition-colors duration-500">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <Award size={48} strokeWidth={1} className="text-costa-green mx-auto mb-8" />
            <blockquote className="font-heading text-2xl md:text-4xl font-black mb-8 leading-[1.1] text-text-primary tracking-tighter transition-colors duration-500">
              &ldquo;ZERO TOLERANCE FOR COMPROMISE.&rdquo;
            </blockquote>
            <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto font-light transition-colors duration-500">Every component we deliver is tested, verified, and certified for mission-critical applications.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {CERTIFICATIONS.map((cert) => (
                <a key={cert.id} href={cert.pdf || "#"} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-bg-primary border border-glass-border flex items-center gap-2 transition-all duration-300 rounded-lg hover:border-costa-green/50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group">
                  <CheckCircle2 size={16} className="text-costa-green" />
                  <span className="font-heading font-black text-text-primary text-sm tracking-widest uppercase transition-colors duration-500">{cert.name}</span>
                  <ArrowRight size={12} className="text-costa-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 bg-bg-elevated overflow-hidden border-t border-glass-border">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-costa-green/10 blur-[150px] z-0 rounded-t-full pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <ShieldCheck size={48} className="mx-auto text-costa-green mb-8" strokeWidth={1} />
            <h2 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black text-text-primary leading-tight tracking-tighter mb-8 max-w-4xl mx-auto transition-colors duration-500">
              MISSION-CRITICAL CERTIFICATION.
            </h2>
            <p className="text-text-secondary text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto transition-colors duration-500">
              Request our certification documents or discuss your quality requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="rounded-lg bg-[#111111] text-white hover:bg-costa-green transition-colors rounded-lg px-12 py-5 text-sm tracking-[0.15em] group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-3 font-bold">Request Certifications <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
