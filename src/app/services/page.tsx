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
      <section className="bg-white dark:bg-[#0a0f12]">
        {SERVICES.map((service, i) => (
          <div
            key={service.id}
            className={`section-padding border-b border-slate-200 dark:border-slate-800/50 ${i % 2 === 0 ? "bg-white dark:bg-[#0a0f12]" : "bg-slate-50 dark:bg-slate-900/40"}`}
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FDF4] dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 mb-6 shadow-sm">
                      <Zap size={14} className="text-[#059669]" />
                      <span className="text-[#059669] text-xs font-bold uppercase tracking-widest">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                      {service.title}
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={0.15}>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-[#059669] shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
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
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group border-4 border-white dark:border-slate-800 shadow-2xl">
                      <Image
                        src={serviceImages[i % serviceImages.length]}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Elite Logistics Architecture Timeline */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FDF4] dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 mb-6 shadow-sm">
                <span className="text-[#059669] text-xs font-bold uppercase tracking-widest">Global Logistics Architecture</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Supply Chain <span className="text-[#059669]">Execution</span></h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#059669]/50 via-[#059669]/20 to-transparent" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} pl-16 md:pl-0`}>
                    <div className="bg-white dark:bg-[#0a0f12] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl inline-block w-full max-w-sm hover:border-[#059669]/30 transition-colors">
                      <div className="font-mono text-xs font-bold text-[#059669] mb-3 uppercase tracking-widest">Node {String(step.step).padStart(2, "0")}</div>
                      <h3 className="font-heading text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#059669] z-10 flex items-center justify-center shadow-[0_0_15px_rgba(5,150,105,0.4)]" style={{ borderWidth: 4, borderStyle: "solid", borderColor: "white" }}>
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center bg-white dark:bg-[#0a0f12]">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-slate-900 dark:bg-slate-900 overflow-hidden relative rounded-3xl p-12 border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-[#059669]/10 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
                Accelerate Your Supply Chain
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                Execute flawless procurement with Costa Devices. Immediate allocation and global scale.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#059669] hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] hover:-translate-y-1">
                Initiate Procurement <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}



