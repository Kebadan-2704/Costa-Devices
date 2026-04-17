import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProductFilterGrid from "@/components/ui/ProductFilterGrid";
import { BRANDS } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-costa-green/5 to-transparent" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-costa-green/[3%] blur-[120px]" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Products
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Product Solutions{" "}
              <span className="green-gradient-text">Catalog</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              World-class components from industry-leading manufacturers — for EV, energy storage, industrial automation, and power distribution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Product Filter Grid (Client Component) */}
      <ProductFilterGrid />

      {/* Brands Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="section-label">Our Brands</div>
            <h2 className="section-title">Authorized Distribution <span className="green-gradient-text">Partners</span></h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {BRANDS.map((brand, i) => (
              <ScrollReveal key={brand.name} delay={i * 0.06}>
                <div className="glass-card p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-costa-green/10 flex items-center justify-center shrink-0">
                    <span className="font-heading text-lg font-bold text-costa-green">{brand.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold" style={{ color: "var(--text-primary)" }}>{brand.name}</h4>
                    <p className="text-text-muted text-xs mt-0.5">{brand.products}</p>
                  </div>
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
            Need a specific component?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Our sourcing team can find any component, anywhere. Get a custom quote in 24 hours.
          </p>
          <Link href="/request-quote" className="btn-primary">
            Request a Quote <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}



