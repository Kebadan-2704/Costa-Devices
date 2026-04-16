"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Zap, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PRODUCT_CATEGORIES, BRANDS } from "@/lib/constants";
import { useState } from "react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    const q = searchQuery.toLowerCase();
    return (
      cat.title.toLowerCase().includes(q) ||
      cat.description.toLowerCase().includes(q) ||
      cat.products.some((p) => p.toLowerCase().includes(q))
    );
  });

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

      {/* Search Bar */}
      <section style={{ backgroundColor: "var(--bg-primary)" }} className="pb-12">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <div className="relative">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, category, or brand..."
                className="w-full py-4 pl-14 pr-6 rounded-2xl focus:outline-none focus:shadow-[0_0_30px_rgba(0,200,83,0.1)] transition-all"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-primary)",
                }}
                id="product-search"
              />
            </div>
            <p className="text-center text-text-muted text-sm mt-4">
              Can&apos;t find your part?{" "}
              <Link href="/request-quote" className="text-costa-green hover:underline">
                Request custom sourcing →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="section-padding pt-0" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.08}>
                <div id={cat.id} className="glass-card overflow-hidden group h-full flex flex-col">
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-costa-green to-costa-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] text-white font-mono backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.15)" }}>
                      {cat.products.length} products
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-costa-green transition-colors" style={{ color: "var(--text-primary)" }}>
                      {cat.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-5 leading-relaxed flex-1">{cat.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cat.products.map((p) => (
                        <span key={p} className="text-xs px-3 py-1.5 rounded-lg text-text-muted transition-colors" style={{ background: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)" }}>
                          {p}
                        </span>
                      ))}
                    </div>
                    <Link href="/request-quote" className="text-costa-green text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                      Get Quote <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <Search size={48} className="text-text-muted mx-auto mb-4" />
              <p className="text-text-secondary text-lg mb-2">No products found for &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-text-muted text-sm">Try a different search term or <Link href="/request-quote" className="text-costa-green hover:underline">contact us for custom sourcing</Link></p>
            </div>
          )}
        </div>
      </section>

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



