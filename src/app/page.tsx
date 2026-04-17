import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowDown, Shield, Zap, Package, Truck, Wrench, ShieldCheck,
  ChevronRight, Globe, Award, Clock, Star, Quote, Search,
  PlugZap, Car, BatteryCharging, Gauge, Factory, Power
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  COMPANY, CLIENTS, DISTRIBUTOR_BRANDS, SERVICES, INDUSTRIES,
  PRODUCT_CATEGORIES, STATS, OFFICES, TESTIMONIALS, CERTIFICATIONS
} from "@/lib/constants";

// ============================================
// ICON MAPS
// ============================================
function getServiceIcon(iconName: string) {
  const icons: Record<string, React.ElementType> = { Search, Package, Truck, CircuitBoard: Zap, ShieldCheck, Wrench };
  return icons[iconName] || Zap;
}

function getIndustryIcon(iconName: string) {
  const icons: Record<string, React.ElementType> = { PlugZap, Car, BatteryCharging, Gauge, Factory, Power, Zap };
  return icons[iconName] || Zap;
}

// ============================================
// HOMEPAGE
// ============================================
export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0F1C]">
        <div className="absolute inset-0 z-[1] opacity-70">
          <Image src="/images/hero/hero-products.png" alt="Industrial electrical components" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0A0F1C]/60 via-[#0A0F1C]/40 to-white dark:to-[#0B1120]" />

        {/* Removed decorative glow orbs in favor of sharp MNC-level imagery */}

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center pt-16 pb-20 text-white">
          {/* Badge */}
          <div className="hero-animate inline-flex items-center gap-3 px-5 py-2 rounded-full mb-12" style={{ border: "1px solid var(--glass-border)", background: "var(--glass-bg)", backdropFilter: "blur(12px)", animationDelay: "0.2s" }}>
            <span className="w-2 h-2 rounded-full bg-costa-green animate-pulse" />
            <span className="font-mono text-xs text-text-secondary tracking-wider">SINCE 2011 · DUBAI · INDIA · HONG KONG</span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate font-heading text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] mb-10 max-w-5xl mx-auto text-white dark:text-white" style={{ animationDelay: "0.4s" }}>
            POWERING THE FUTURE OF{" "}
            <span className="green-gradient-text">ELECTRIC MOBILITY</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-animate text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: "0.6s" }}>
            {COMPANY.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center mb-20" style={{ animationDelay: "0.8s" }}>
            <Link href="/products" className="btn-primary text-base !py-4 !px-8">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-ghost text-base !py-4 !px-8">
              Get In Touch
            </Link>
          </div>

          {/* Client Logos */}
          <div className="hero-animate mt-12" style={{ animationDelay: "1s" }}>
            <p className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase mb-8">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 items-center">
              {CLIENTS.slice(0, 7).map((client) => (
                <span key={client.name} className="font-heading text-xs md:text-sm font-semibold tracking-wide hover:text-costa-green hover:border-costa-green/30 transition-all cursor-default px-4 py-2 rounded-full" style={{ color: "var(--text-muted)", border: "1px solid var(--glass-border)", background: "var(--glass-bg)" }}>
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-animate absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animationDelay: "1.5s" }}>
          <span className="text-text-muted text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="text-costa-green" style={{ animation: "scroll-indicator 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal><div className="section-label">About Us</div></ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="section-title">14 Years of Powering Industries <span className="green-gradient-text">Worldwide</span></h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-text-secondary leading-relaxed mb-4">Founded in 2011, Costa Devices Electric Ltd is Bussmann &amp; Eaton Moeller&apos;s top distributor in the renewable energy and automation circuit protection field — especially in the EV, EV Charger, and Energy Storage industry.</p>
                <p className="text-text-secondary leading-relaxed mb-8">With offices in Dubai, India, and Hong Kong, we deliver mission-critical components to the world&apos;s most demanding industries.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[{ value: 14, suffix: "+", label: "Years" }, { value: 9, suffix: "+", label: "Brands" }, { value: 3, suffix: "", label: "Offices" }].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-mono text-3xl md:text-4xl font-bold text-costa-green"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                      <div className="text-text-muted text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link href="/company" className="inline-flex items-center gap-2 text-costa-green font-medium hover:gap-3 transition-all group">Our Story <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative" style={{ border: "1px solid var(--glass-border)" }}>
                  <Image src="/images/about/warehouse.png" alt="Costa Devices warehouse" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute -top-3 -right-3 w-full h-full border-2 border-costa-green/20 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SERVICES BENTO GRID ===== */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal><div className="section-label">What We Do</div></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title max-w-2xl">Comprehensive Solutions for Every <span className="green-gradient-text">Power Challenge</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {SERVICES.map((service, i) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <ScrollReveal key={service.id} delay={i * 0.08}>
                  <div className="glass-card p-8 h-full flex flex-col group relative overflow-hidden">
                    {/* Accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-costa-green via-costa-green-light to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-costa-green/10 flex items-center justify-center shrink-0 group-hover:bg-costa-green/20 transition-colors">
                        <Icon size={28} className="text-costa-green" />
                      </div>
                      <span className="font-mono text-sm text-text-muted tracking-wider">0{i + 1}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>{service.title}</h3>
                    <p className="text-text-secondary text-base leading-relaxed mb-6 flex-1">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[12px] px-3 py-1.5 rounded-full text-text-muted" style={{ background: "var(--card-tag-bg)", border: "1px solid var(--card-tag-border)" }}>{f}</span>
                      ))}
                    </div>
                    <Link href="/services" className="text-costa-green text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto pt-2">{service.cta} <ChevronRight size={16} /></Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal><div className="section-label">Our Products</div></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title max-w-3xl">World-Class Components for <span className="green-gradient-text">Critical Applications</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" style={{ alignItems: "stretch" }}>
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.08}>
                <Link href={`/products#${cat.id}`} className="group block">
                  <div className="glass-card overflow-hidden h-full">
                    <div className="h-48 relative overflow-hidden">
                      <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-costa-green to-costa-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-costa-green transition-colors" style={{ color: "var(--text-primary)" }}>{cat.title}</h3>
                      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{cat.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.products.slice(0, 4).map((p) => (
                          <span key={p} className="text-[10px] px-2 py-1 rounded text-text-muted" style={{ background: "var(--card-tag-bg)" }}>{p}</span>
                        ))}
                        {cat.products.length > 4 && <span className="text-[10px] px-2 py-1 rounded bg-costa-green/10 text-costa-green">+{cat.products.length - 4} more</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12"><Link href="/products" className="btn-primary">View All Products <ArrowRight size={16} /></Link></div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 90+ BRAND MASSIVE MARQUEE ===== */}
      <section className="py-20 overflow-hidden bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="text-center mb-10">
          <p className="font-mono text-sm tracking-[0.25em] text-slate-500 uppercase font-semibold">AUTHORIZED DISTRIBUTOR FOR</p>
        </div>
        
        {/* Top Marquee (Moves Left) */}
        <div className="marquee-container mb-6">
          <div className="marquee-content shadow-sm">
            {[...DISTRIBUTOR_BRANDS, ...DISTRIBUTOR_BRANDS].map((brand, i) => (
              <div key={`brand-top-${i}`} className="brand-card">
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee (Moves Right) */}
        <div className="marquee-container marquee-reverse">
          <div className="marquee-content shadow-sm">
            {[...DISTRIBUTOR_BRANDS, ...DISTRIBUTOR_BRANDS].reverse().map((brand, i) => (
              <div key={`brand-bottom-${i}`} className="brand-card">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS OVERHAUL ===== */}
      <section className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-extrabold mb-16 text-slate-900 dark:text-white">
              Internationally Recognized <span className="text-[#059669]">Certifications</span>
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {CERTIFICATIONS.map((cert) => (
              <ScrollReveal key={cert.id} delay={0.1}>
                <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all hover:shadow-xl hover:border-[#059669]/30 flex flex-col h-full relative cursor-pointer">
                  {/* Top Badge Block */}
                  <div className="bg-[#F0FDF4] dark:bg-[#059669]/10 rounded-xl p-8 flex flex-col items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                    <Shield size={40} strokeWidth={1.5} className="text-[#059669] mb-4" />
                    <span className="font-heading font-bold text-[#059669] text-base tracking-wide">
                      {cert.name}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base mb-2 text-slate-900 dark:text-white">{cert.name}</h3>
                    <p className="text-[10px] font-bold text-[#059669] tracking-widest uppercase leading-snug mb-4">{cert.fullName}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">{cert.description}</p>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between text-[#8ba39a] dark:text-slate-500 font-mono text-[10px] tracking-[0.15em] uppercase">
                    <span>{cert.entity}</span>
                    <span>{cert.year}</span>
                  </div>

                  {cert.pdf && (
                    <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View ${cert.name} PDF`} />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES — WITH DYNAMIC ICONS ===== */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal><div className="section-label">Industries</div></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title max-w-2xl">Powering Every Industry, <span className="green-gradient-text">Everywhere</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {INDUSTRIES.map((ind, i) => {
              const IndIcon = getIndustryIcon(ind.icon);
              return (
                <ScrollReveal key={ind.id} delay={i * 0.08}>
                  <Link href={`/industries#${ind.id}`} className="group block">
                    <div className="relative h-64 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--glass-border)" }}>
                      <Image src={ind.image} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-costa-green/20 flex items-center justify-center backdrop-blur-sm">
                            <IndIcon size={16} className="text-costa-green" />
                          </div>
                          <h3 className="font-heading text-base font-semibold text-white group-hover:text-costa-green-light transition-colors">{ind.title}</h3>
                        </div>
                        <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{ind.tagline}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS — FEATURED LAYOUT (BREAKS MONOTONY) ===== */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
        {/* Gradient mesh background — distinct from other sections */}
        <div className="absolute top-0 left-[20%] w-[600px] h-[400px] rounded-full blur-[150px] bg-costa-green/[4%] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-[15%] w-[500px] h-[350px] rounded-full blur-[120px] bg-costa-green/[3%] pointer-events-none" aria-hidden="true" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Testimonials</div>
              <h2 className="section-title">What Our <span className="green-gradient-text">Clients Say</span></h2>
            </div>
          </ScrollReveal>

          {/* Featured testimonial — large, full-width for visual variety */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-10 md:p-14 mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-costa-green to-transparent" />
              <Quote size={56} className="text-costa-green/10 absolute top-6 right-8 hidden md:block" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[0].rating }).map((_, j) => (
                  <Star key={j} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-4xl font-medium" style={{ color: "var(--text-primary)" }}>
                &ldquo;{TESTIMONIALS[0].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-costa-green/10 flex items-center justify-center" style={{ border: "1px solid var(--glass-border)" }}>
                  <span className="font-heading text-costa-green font-bold text-sm">{TESTIMONIALS[0].author[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold" style={{ color: "var(--text-primary)" }}>{TESTIMONIALS[0].author}</p>
                  <p className="text-costa-green text-sm font-medium">{TESTIMONIALS[0].company}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary testimonials — 2-column for asymmetry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(1).map((t, i) => (
              <ScrollReveal key={t.id} delay={0.2 + i * 0.1}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote size={20} className="text-costa-green/20 mb-3" />
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="pt-4" style={{ borderTop: "1px solid var(--glass-border)" }}>
                    <p className="font-heading text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.author}</p>
                    <p className="text-costa-green text-xs font-medium">{t.company}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIATORS — GLASS CARDS ===== */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Why Us</div>
              <h2 className="section-title">The Costa Devices <span className="green-gradient-text">Advantage</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Engineering DNA", description: "Our engineers come from Eaton Bussmann, TE Connectivity, and Molex — decades of design experience in every solution." },
              { icon: Clock, title: "Rapid Response", description: "24-48hr quote turnaround. Most stock available. We don\u0027t just distribute — we solve problems." },
              { icon: Shield, title: "Certified Excellence", description: "AS 9120B, AS 6081, ISO 9001:2015 certified. Zero tolerance for anything less than authentic." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="glass-card p-8 text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-costa-green/20 group-hover:scale-110 transition-all duration-500">
                    <item.icon size={28} className="text-costa-green" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GLOBAL PRESENCE ===== */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal><div className="section-label">Global Presence</div></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="section-title">Operating Across <span className="green-gradient-text">3 Continents</span></h2></ScrollReveal>
              <ScrollReveal delay={0.2}><p className="text-text-secondary leading-relaxed mb-8">With strategic offices in Dubai, India, and Hong Kong, we provide localized support with global reach.</p></ScrollReveal>
              <div className="space-y-6">
                {OFFICES.map((office, i) => (
                  <ScrollReveal key={office.id} delay={0.2 + i * 0.1}>
                    <div className="glass-card p-6 flex items-center gap-5 !transform-none">
                      <div className="flex items-center gap-4 flex-1">
                        <span className="text-4xl">{office.flag}</span>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-heading text-lg font-bold" style={{ color: "var(--text-primary)" }}>{office.city}</h4>
                          <p className="text-text-muted text-sm">{office.label}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-costa-green" style={{ animation: "pulse-green 2s infinite" }} />
                        <span className="text-sm text-text-muted font-mono">{office.timezone}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="w-full h-full rounded-3xl overflow-hidden relative" style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--glass-border)" }}>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 p-8 opacity-[0.15]">
                      <Image src="/images/world-map.svg" alt="Global Operations Map" fill className="object-contain" style={{ filter: "invert(0.5) sepia(1) saturate(3) hue-rotate(90deg)" }} />
                    </div>
                    {/* Concentric radar rings */}
                    <div className="absolute w-[80%] h-[80%] border border-costa-green/10 rounded-full" />
                    <div className="absolute w-[50%] h-[50%] border border-costa-green/20 rounded-full" />
                    <div className="absolute w-[20%] h-[20%] border border-costa-green/30 rounded-full bg-costa-green/5" />
                  </div>
                  {[{ x: "60.5%", y: "41.5%", label: "Dubai" }, { x: "70.5%", y: "47%", label: "India" }, { x: "78%", y: "44%", label: "Hong Kong" }].map((marker) => (
                    <div key={marker.label} className="absolute group cursor-pointer" style={{ left: marker.x, top: marker.y }}>
                      <div className="w-4 h-4 rounded-full bg-costa-green" style={{ animation: "pulse-green 2s infinite" }} />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded text-xs text-costa-green font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--glass-border)" }}>{marker.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== STATS — WITH GRADIENT MESH ===== */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)", borderTop: "1px solid var(--glass-border)" }}>
        {/* Gradient mesh for visual depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px] bg-costa-green/[4%] pointer-events-none" aria-hidden="true" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Impact</div>
              <h2 className="section-title">Trusted by <span className="green-gradient-text">Industry Leaders</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-costa-green mb-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} /></div>
                  <div className="text-text-muted text-xs font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {CLIENTS.map((client) => (
                <div key={client.name} className="px-5 py-3 rounded-xl transition-all duration-500 cursor-default" style={{ border: "1px solid var(--glass-border)", background: "var(--card-tag-bg)" }}>
                  <span className="font-heading text-sm font-semibold text-text-secondary hover:text-costa-green transition-colors">{client.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA — WITH DECORATIVE ELEMENTS ===== */}
      <section className="section-padding relative overflow-hidden" style={{ backgroundColor: "var(--bg-secondary)" }}>
        {/* Decorative glow orbs */}
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full blur-[150px] bg-costa-green/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] rounded-full blur-[120px] bg-costa-green/[3%] pointer-events-none" aria-hidden="true" />

        <div className="max-w-[900px] mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 leading-tight" style={{ color: "var(--text-primary)" }}>Ready to Secure Your <span className="green-gradient-text">Supply Chain?</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">Get a quote within 24 hours. 14+ years of experience, certified quality, global delivery.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote" className="btn-primary text-base !py-4 !px-10">Request a Quote <ArrowRight size={18} /></Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-ghost text-base !py-4 !px-10"><Zap size={16} /> Call Us</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
