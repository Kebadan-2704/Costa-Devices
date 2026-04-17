import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Server, Globe, Cpu, ChevronRight, Activity } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { COMPANY, CLIENTS, DISTRIBUTOR_BRANDS, PRODUCT_CATEGORIES, STATS, CERTIFICATIONS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="bg-[#030712] min-h-screen text-slate-300 selection:bg-[#059669] selection:text-white">
      {/* =========================================
          HERO ARCHITECTURE (THE APEX TIER)
      ========================================= */}
      <section className="relative min-h-[95vh] flex items-end pb-32 overflow-hidden border-b border-[#1f2937]">
        {/* Absolute Architectural Grid Background */}
        <div className="absolute inset-0 bg-[#030712] z-0">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)", backgroundSize: "100px 100px", opacity: 0.15 }} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#059669]/10 to-transparent blur-[150px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#059669]/10 border border-[#059669]/30 rounded-none mb-8">
                <div className="w-1.5 h-1.5 bg-[#059669] animate-pulse" />
                <span className="font-mono text-[10px] text-[#10b981] font-bold tracking-[0.3em] uppercase">Enterprise Component Sourcing</span>
              </div>
              <h1 className="font-heading text-[clamp(3rem,8vw,7.5rem)] font-black text-white leading-[0.95] tracking-tighter mb-8">
                INDUSTRIAL<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#047857]">SUPPLY CHAIN</span><br />
                EXECUTION.
              </h1>
              <p className="text-slate-400 text-lg md:text-2xl max-w-2xl leading-relaxed font-light mb-12 border-l-4 border-[#059669] pl-6">
                Mastering the global shortage. Authorized distributor of Eaton Bussmann, ABB, and Schneider for high-voltage and EV architectures.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <Link href="/request-quote" className="group flex items-center justify-between gap-6 bg-white text-black px-8 py-5 rounded-none font-bold text-sm tracking-widest uppercase hover:bg-slate-200 transition-colors">
                  Initiate RFQ
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link href="/company" className="group flex items-center gap-4 text-white font-mono text-xs uppercase tracking-widest hover:text-[#10b981] transition-colors">
                  <Globe className="w-5 h-5 text-[#059669]" />
                  Global Infrastructure <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="border border-slate-800 bg-[#0a0f12] p-8 w-full max-w-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#059669]/20 blur-[50px] group-hover:bg-[#059669]/40 transition-all duration-700" />
              <Activity className="w-6 h-6 text-[#10b981] mb-12" />
              <div className="font-mono text-[10px] text-slate-500 tracking-[0.2em] mb-2 uppercase">System Status</div>
              <div className="font-heading text-4xl font-bold text-white mb-8">OPTIMAL</div>
              
              <div className="space-y-4 font-mono text-xs text-slate-400">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>API LATENCY</span><span className="text-white">12ms</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>INVENTORY</span><span className="text-[#10b981]">SYNCED</span>
                </div>
                <div className="flex justify-between">
                  <span>NETWORK</span><span className="text-white">GLOBAL HUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          GLOBAL PARTNERS (BENTO LOGOS)
      ========================================= */}
      <section className="border-b border-[#1f2937] bg-[#030712] py-8">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
            Authorized Integration With
          </div>
          <div className="flex-1 w-full flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {DISTRIBUTOR_BRANDS.slice(0, 5).map(brand => (
              <span key={brand.name} className="font-heading text-xl md:text-2xl font-black text-white tracking-widest">{brand.name.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
           DATA ENGINEERING (THE MATRIX)
      ========================================= */}
      <section className="py-32 relative">
        <div className="max-w-[1600px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-[#059669] uppercase mb-12">Performance Metrics</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-800">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="bg-[#0a0f12] p-12 h-full hover:bg-[#111827] transition-colors relative group">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-[#059669] group-hover:w-full transition-all duration-500 delay-100" />
                  <div className="font-heading text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                    <AnimatedCounter end={stat.value} duration={2000} />
                    <span className="text-[#059669]">{stat.suffix}</span>
                  </div>
                  <div className="font-mono text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-slate-400 text-xs mt-4 leading-relaxed">{stat.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CATALOG BENTO BOX ARCHITECTURE
      ========================================= */}
      <section className="py-32 bg-[#0a0f12] border-y border-slate-800/50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <ScrollReveal>
              <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-[#059669] uppercase mb-4">Hardware Matrix</h2>
              <h3 className="font-heading text-4xl md:text-6xl font-black text-white tracking-tight">COMPONENT<br/>ROUTING</h3>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/products" className="inline-flex items-center gap-4 text-white font-mono text-xs uppercase tracking-widest group">
                Access Full Catalog
                <div className="w-10 h-10 border border-slate-700 flex items-center justify-center group-hover:border-[#059669] transition-colors">
                 <ArrowRight size={16} className="group-hover:text-[#059669] transition-colors" />
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {PRODUCT_CATEGORIES.slice(0, 5).map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.1}>
                {/* Make the first item span 2 columns dynamically */}
                <Link href={`/products#${cat.id}`} className={`block relative h-full w-full bg-[#030712] border border-slate-800/80 group overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
                  <div className="absolute inset-0">
                    <Image src={cat.image} alt={cat.title} fill className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[1500ms] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
                  </div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="font-mono text-[10px] text-[#10b981] font-bold tracking-widest uppercase mb-3 px-3 py-1 bg-[#059669]/10 border border-[#059669]/30 w-fit backdrop-blur-sm">
                      {cat.products.length} Classifications
                    </div>
                    <h4 className="font-heading text-3xl font-bold text-white mb-4 group-hover:text-[#10b981] transition-colors">{cat.title}</h4>
                    <p className="text-slate-400 text-sm max-w-md hidden md:block group-hover:text-white transition-colors">{cat.description}</p>
                    
                    {/* Hover Reveal Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#059669] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          COMPLIANCE ENGINE (CERTIFICATIONS)
      ========================================= */}
      <section className="py-32 bg-[#030712]">
        <div className="max-w-[1600px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-sm font-bold tracking-[0.3em] text-[#059669] uppercase mb-16 text-center">Protocol & Compliance</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 0.1}>
                {/* The "Platinum" layout we built, but engineered into dark mode */}
                <div className="bg-[#0a0f12] border border-slate-800 h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-[#059669] transition-colors duration-500" />
                  <div className="p-8 flex-1">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-[#059669]/50 transition-colors">
                      <ShieldCheck className="text-[#10b981]" size={24} strokeWidth={1} />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-white mb-4">{cert.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                  <div className="p-6 bg-slate-900/50 border-t border-slate-800 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex justify-between">
                    <span>{cert.scope}</span>
                    <span className="text-[#10b981]">VERIFIED</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          THE MASSIVE FOOTER CTA
      ========================================= */}
      <section className="relative py-40 bg-[#059669] overflow-hidden">
        <div className="absolute inset-0 bg-[#030712] opacity-90 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10b981] to-transparent" />
        
        <div className="max-w-[1600px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <ShieldCheck size={48} className="mx-auto text-[#10b981] mb-8" strokeWidth={1} />
            <h2 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black text-white leading-tight tracking-tighter mb-8 max-w-4xl mx-auto">
              SECURE YOUR SUPPLY CHAIN. ELIMINATE DOWNTIME.
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">
              Access the largest authorized technical inventory in the Middle East & Asia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/request-quote" className="group flex items-center justify-center gap-4 bg-white text-black px-12 py-6 font-bold text-sm tracking-[0.2em] uppercase hover:bg-slate-200 transition-colors w-full sm:w-auto">
                 Initiate Sourcing Protocol
                 <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link href="/contact" className="group flex items-center justify-center gap-4 bg-transparent border border-white/20 text-white px-12 py-6 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-colors w-full sm:w-auto">
                 Contact Global Desk
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
