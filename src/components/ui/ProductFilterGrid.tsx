"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export default function ProductFilterGrid() {
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
      <section style={{ backgroundColor: "var(--bg-primary)" }} className="pb-12">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <div className="relative">
              <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, category, or spec..."
                className="w-full py-4 pl-14 pr-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#059669]/50 transition-all font-mono text-sm shadow-sm"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-primary)",
                }}
                id="product-search"
              />
            </div>
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-4 font-medium transition-colors">
              Can't find your part number?{" "}
              <Link href="/request-quote" className="text-[#059669] hover:text-emerald-500 transition-colors font-bold group">
                Request global sourcing <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.08}>
                <div id={cat.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden group h-full flex flex-col hover:shadow-xl hover:border-[#059669]/30 transition-all duration-500">
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#059669] to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] text-white font-mono bg-black/40 backdrop-blur-md border border-white/20">
                      {cat.products.length} products
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-[#059669] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed flex-1">{cat.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cat.products.map((p) => (
                        <span key={p} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 group-hover:text-[#059669] transition-colors border border-transparent group-hover:border-emerald-100 dark:group-hover:border-emerald-800">
                          {p}
                        </span>
                      ))}
                    </div>
                    <Link href="/request-quote" className="text-[#059669] text-sm font-bold inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto group/btn">
                      Request Quote <ChevronRight size={14} className="group-hover/btn:text-emerald-500 delay-75" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-400" />
              </div>
              <p className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">No components found for &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Our global network can source any obsolete or allocated part.</p>
              <Link href="/contact" className="btn-primary inline-flex">
                Contact Global Sourcing
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
