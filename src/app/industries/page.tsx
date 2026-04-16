"use client";
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
          className="section-padding"
          style={{ backgroundColor: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-costa-green/10 border border-costa-green/20 mb-6">
                    <IndIcon size={14} className="text-costa-green" />
                    <span className="text-costa-green text-xs font-semibold uppercase tracking-wider">{industry.title}</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{industry.tagline}</h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">{industry.description}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="mb-8">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-primary)" }}>Key Products</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.products.map((p) => (
                        <span key={p} className="text-sm px-4 py-2 rounded-lg text-text-secondary" style={{ background: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)" }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                {industry.customers.length > 0 && (
                  <ScrollReveal delay={0.25}>
                    <div className="mb-8">
                      <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-primary)" }}>Key Customers</h4>
                      <div className="flex flex-wrap gap-3">
                        {industry.customers.map((c) => (
                          <div key={c} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-costa-green/5 border border-costa-green/20">
                            <CheckCircle2 size={14} className="text-costa-green" />
                            <span className="text-costa-green text-sm font-medium">{c}</span>
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
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group" style={{ border: "1px solid var(--glass-border)" }}>
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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



