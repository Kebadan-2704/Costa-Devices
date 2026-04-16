"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, ChevronRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { SERVICES, PRODUCT_CATEGORIES } from "@/lib/constants";

const processSteps = [
  { step: 1, title: "RFQ Received", description: "Submit your requirements via form, email, or phone" },
  { step: 2, title: "Sourcing & Verification", description: "Our global network locates authentic components" },
  { step: 3, title: "Quality Inspection", description: "AS 6081 certified testing and authentication" },
  { step: 4, title: "Logistics", description: "Optimized shipping with end-to-end tracking" },
  { step: 5, title: "Delivery & Support", description: "On-time delivery with ongoing technical support" },
];

// Map service index to product images for visual variety
const serviceImages = [
  "/images/products/ev-protection.png",
  "/images/products/circuit-protection.png",
  "/images/products/industrial-fuses.png",
  "/images/products/capacitors.png",
  "/images/products/transformers.png",
  "/images/products/automation.png",
];

export default function ServicesPage() {
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
              Home / Services
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Comprehensive Supply Chain{" "}
              <span className="green-gradient-text">Solutions</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Smart distribution, expert sourcing, and technical excellence — built around your business needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Detail Sections */}
      <section style={{ backgroundColor: "var(--bg-primary)" }}>
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            style={{ backgroundColor: i % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)" }}
            className="section-padding"
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-costa-green/10 border border-costa-green/20 mb-6">
                      <Zap size={14} className="text-costa-green" />
                      <span className="text-costa-green text-xs font-semibold uppercase tracking-wider">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                      {service.title}
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={0.15}>
                    <p className="text-text-secondary text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-costa-green shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.25}>
                    <Link href="/request-quote" className="btn-primary">
                      {service.cta} <ArrowRight size={16} />
                    </Link>
                  </ScrollReveal>
                </div>

                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <ScrollReveal delay={0.1} direction={i % 2 === 0 ? "right" : "left"}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group" style={{ border: "1px solid var(--glass-border)" }}>
                      <Image
                        src={serviceImages[i % serviceImages.length]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Timeline */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Our Process</div>
              <h2 className="section-title">How It <span className="green-gradient-text">Works</span></h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-costa-green/50 via-costa-green/20 to-transparent" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-12 md:pl-0`}>
                    <div className="glass-card p-6 inline-block" style={{ transform: "none" }}>
                      <div className="font-mono text-xs text-costa-green mb-2">Step {String(step.step).padStart(2, "0")}</div>
                      <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                      <p className="text-text-secondary text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-costa-green z-10" style={{ borderWidth: 4, borderStyle: "solid", borderColor: "var(--bg-secondary)" }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Let&apos;s optimize your supply chain
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Partner with 14+ years of trusted expertise.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}



