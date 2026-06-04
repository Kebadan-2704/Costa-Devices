import Link from "next/link";
import { ArrowRight, Search, Globe, Package, Layers, Microscope, Wrench } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Global Supply Chain Solutions",
  description: "End-to-end component procurement, rigorous AS6081 testing, and customized distribution models to secure production lines against global shortages.",
};

// Icon mapping helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Search": return <Search size={28} />;
    case "Globe": return <Globe size={28} />;
    case "Package": return <Package size={28} />;
    case "Layers": return <Layers size={28} />;
    case "Microscope": return <Microscope size={28} />;
    case "Wrench": return <Wrench size={28} />;
    default: return <Globe size={28} />;
  }
};

const bgImages = [
  '/images/products/capacitors.png',
  '/images/products/automation.png',
  '/images/industries/power-distribution.png',
  '/images/products/circuit-protection.png',
  '/images/products/transformers.png',
  '/images/products/industrial-fuses.png'
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-costa-green/5 blur-[100px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6 relative z-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/10 border border-costa-green/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-costa-green rounded-full animate-pulse"></span>
              <span className="font-mono text-[10px] text-costa-green font-bold tracking-[0.2em] uppercase">
                Global Operations
              </span>
            </div>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight mb-6 text-text-primary">
              SUPPLY CHAIN <br />
              <span className="text-costa-green">SOLUTIONS.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mb-10">
              End-to-end component procurement, rigorous testing, and customized distribution models built to secure your production lines against global shortages.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-6 relative">
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group transform transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none">
                <video 
                  src="/videos/Global_Operations_SUPPLY_CHAIN.mp4"
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

      {/* Services Grid Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.1}>
                <div className="bg-white/95 backdrop-blur-md border border-glass-border p-10 flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-costa-green/30 transition-all duration-500 group relative overflow-hidden">
                  
                  <div className="absolute inset-0 z-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: `url('${bgImages[idx % bgImages.length]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                  {/* Hover Graphic */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-costa-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                  <div className="relative z-10 w-16 h-16 rounded-sm border border-glass-border bg-bg-secondary flex items-center justify-center mb-8 text-costa-green group-hover:bg-costa-green group-hover:text-white group-hover:border-costa-green transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  
                  <div className="relative z-10 font-mono text-[10px] text-text-muted font-bold tracking-widest uppercase mb-3 bg-white/50 inline-block px-2 py-1 rounded backdrop-blur-sm">
                    0{idx + 1} {"//"} {service.shortDesc}
                  </div>
                  
                  <h3 className="relative z-10 font-heading text-2xl font-black mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="relative z-10 text-text-secondary leading-relaxed text-sm mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  <ul className="relative z-10 space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 font-mono text-[11px] text-text-primary uppercase tracking-widest">
                        <div className="w-1 h-1 bg-costa-green"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/request-quote" className="relative z-10 inline-flex items-center gap-2 font-mono text-xs font-bold text-costa-green uppercase tracking-widest group/link mt-auto pt-6 border-t border-glass-border">
                    {service.cta}
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-glass-border">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1AAF5D] to-[#0D6B3D] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] z-0" />
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">Need Supply Chain Support?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Submit your BOM or shortage list. Our global sourcing team will respond within 24 hours with availability and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote" className="bg-white text-costa-green rounded-full px-12 py-5 font-bold inline-flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                Submit BOM <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="bg-transparent text-white border-2 border-white rounded-full px-12 py-5 font-bold inline-flex items-center gap-3 hover:bg-white hover:text-costa-green transition-all duration-300">
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
