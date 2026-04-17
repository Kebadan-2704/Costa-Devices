import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, CheckCircle2, PlugZap, Car, BatteryCharging, Gauge, Factory, Power } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { INDUSTRIES } from "@/lib/constants";

function getIndustryIcon(iconName: string) {
  const icons: Record<string, React.ElementType> = { PlugZap, Car, BatteryCharging, Gauge, Factory, Power, Zap };
  return icons[iconName] || Zap;
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Industries
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Powering Every Industry, <span className="text-text-secondary">Everywhere</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              From electric vehicles to smart grids — we deliver the critical components that keep industries moving.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Sections */}
      {INDUSTRIES.map((industry, i) => {
        const IndIcon = getIndustryIcon(industry.icon);
        return (
        <section
          key={industry.id}
          id={industry.id}
          className={`section-padding border-b border-slate-200 dark:border-slate-800/50 ${i % 2 === 0 ? "bg-white dark:bg-[#0a0f12]" : "bg-slate-50 dark:bg-slate-900/40"}`}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FDF4] dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 mb-6">
                    <IndIcon size={14} className="text-[#059669]" />
                    <span className="text-[#059669] text-xs font-bold uppercase tracking-widest">{industry.title}</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">{industry.tagline}</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">{industry.description}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="mb-8">
                    <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-4">Key Architectures</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((p) => (
                        <span key={p} className="text-xs font-bold px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 shadow-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                {industry.customers.length > 0 && (
                  <ScrollReveal delay={0.25}>
                    <div className="mb-8">
                      <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-4">Supported Partners</h4>
                      <div className="flex flex-wrap gap-3">
                        {industry.customers.map((c) => (
                          <div key={c} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F0FDF4] dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/40">
                            <CheckCircle2 size={14} className="text-[#059669]" />
                            <span className="text-[#059669] text-sm font-bold tracking-wide">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}
                <ScrollReveal delay={0.3}>
                  <Link href="/request-quote" className="btn-primary">
                    Request Quote <ArrowRight size={16} />
                  </Link>
                </ScrollReveal>
              </div>

              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <ScrollReveal delay={0.1} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group border-4 border-white dark:border-slate-800 shadow-2xl">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      );
      })}

      {/* CTA */}
      <section className="section-padding text-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Your industry, our expertise
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Whatever your industry, we have the components and expertise to power your success.
          </p>
          <Link href="/contact" className="btn-primary">
            Discuss Your Requirements <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}



