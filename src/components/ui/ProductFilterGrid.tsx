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
      <section className="bg-bg-primary pb-12 transition-colors duration-500">
        <div className="max-w-[800px] mx-auto px-6 relative z-20">
          <ScrollReveal>
            <div className="relative">
              <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-costa-green" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search global inventory..."
                className="w-full py-6 pl-16 pr-6 bg-bg-secondary border border-glass-border text-text-primary font-mono focus:outline-none focus:border-costa-green transition-colors shadow-xl rounded-xl"
                id="product-search"
              />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-glass-border pt-4 transition-colors duration-500">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
                Search via Part Number, Spec, or Category
              </p>
              <Link href="/request-quote" className="font-mono text-xs text-costa-green uppercase tracking-widest hover:text-text-primary transition-colors group flex items-center gap-2">
                Launch Global Ping <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-bg-secondary border-t border-glass-border transition-colors duration-500">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.05}>
                <div id={cat.id} className="bg-bg-primary border border-glass-border group h-full flex flex-col hover:border-costa-green/50 transition-colors relative overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-glass-border group-hover:bg-costa-green transition-colors duration-500 z-10 rounded-t-2xl" />
                  
                  <div className="h-64 relative overflow-hidden border-b border-glass-border">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover opacity-60 dark:opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent transition-colors duration-500" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-bg-secondary border border-glass-border font-mono text-xs text-costa-green font-bold tracking-widest uppercase transition-colors duration-500 rounded-lg">
                      {cat.products.length} CLASSIFICATIONS
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col relative bg-bg-primary transition-colors duration-500">
                    <h3 className="font-heading text-xl font-bold mb-3 text-text-primary tracking-tight group-hover:text-costa-green transition-colors duration-500">
                      {cat.title}
                    </h3>
                    <p className="text-text-secondary font-light text-sm mb-8 leading-relaxed flex-1 transition-colors duration-500">{cat.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cat.products.map((p) => (
                        <span key={p} className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-2 bg-bg-secondary border border-glass-border text-text-secondary group-hover:border-costa-green/20 transition-colors duration-500 rounded-lg">
                          {p}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 border-t border-glass-border pt-6 mt-auto transition-colors duration-500">
                      <Link href="/request-quote" className="group/btn flex items-center justify-between flex-1">
                        <span className="font-mono text-xs text-text-primary font-bold tracking-widest uppercase group-hover/btn:text-costa-green transition-colors duration-500">
                          Request Sourcing
                        </span>
                        <ChevronRight size={14} className="text-text-muted group-hover/btn:text-costa-green group-hover/btn:translate-x-1 transition-all" />
                      </Link>
                      <div className="w-px h-6 bg-glass-border" />
                      <a href={`/datasheets/${cat.id}.pdf`} className="group/btn flex items-center justify-center shrink-0" title="Download Specification Datasheet">
                        <span className="font-mono text-xs text-text-muted font-bold tracking-widest uppercase hover:text-costa-green transition-colors duration-500 flex items-center gap-1">
                          Datasheet
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-32">
              <Search size={48} className="mx-auto text-text-muted/30 mb-8 transition-colors duration-500" strokeWidth={1} />
              <h3 className="font-heading text-3xl font-black text-text-primary tracking-tighter mb-4 transition-colors duration-500">NO HARDWARE LOCATED</h3>
              <p className="text-text-secondary font-light max-w-md mx-auto mb-8 transition-colors duration-500">
                Our active directory does not explicitly list &ldquo;{searchQuery}&rdquo;. We can source obsolete/allocated parts globally.
              </p>
              <Link href="/contact" className="rounded-lg bg-[#111111] text-white hover:bg-costa-green transition-colors rounded-lg px-12 py-5 text-sm tracking-[0.15em]">
                Ping Global Network
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
