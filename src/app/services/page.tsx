import Link from "next/link";
import { ArrowRight, Search, Globe, Package, Layers, Microscope, Wrench } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { SERVICES } from "@/lib/constants";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary overflow-hidden pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-costa-green/5 blur-[100px]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-costa-green/10 border border-costa-green/20 rounded-full mb-8 mx-auto">
              <span className="w-2 h-2 bg-costa-green rounded-full animate-pulse"></span>
              <span className="font-mono text-[10px] text-costa-green font-bold tracking-[0.2em] uppercase">
                Global Operations
              </span>
            </div>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-tight mb-6">
              SUPPLY CHAIN <br />
              <span className="text-costa-green">SOLUTIONS.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed mx-auto mb-10">
              End-to-end component procurement, rigorous testing, and customized distribution models built to secure your production lines against global shortages.
            </p>
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
                  
                  {/* Hover Graphic */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-costa-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="w-16 h-16 rounded-sm border border-glass-border bg-bg-secondary flex items-center justify-center mb-8 text-costa-green group-hover:bg-costa-green group-hover:text-white group-hover:border-costa-green transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  
                  <div className="font-mono text-[10px] text-text-muted font-bold tracking-widest uppercase mb-3">
                    0{idx + 1} // {service.shortDesc}
                  </div>
                  
                  <h3 className="font-heading text-2xl font-black mb-4 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed text-sm mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 font-mono text-[11px] text-text-primary uppercase tracking-widest">
                        <div className="w-1 h-1 bg-costa-green"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/request-quote" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-costa-green uppercase tracking-widest group/link mt-auto pt-6 border-t border-glass-border">
                    {service.cta}
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
