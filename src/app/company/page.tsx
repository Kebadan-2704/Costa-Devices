"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Clock, Users, Globe, Shield, MapPin, Mail, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { COMPANY, TEAM, OFFICES, TIMELINE, STATS } from "@/lib/constants";

export default function CompanyPage() {
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
              Home / Company
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              The Costa Devices <span className="text-text-secondary">Story</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              14+ years of powering industries worldwide — from a startup distributor to a trusted global partner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-costa-green/10 flex items-center justify-center mb-5">
                  <Award size={24} className="text-costa-green" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Mission</h3>
                <p className="text-text-secondary leading-relaxed">{COMPANY.mission}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="glass-card p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-costa-green/10 flex items-center justify-center mb-5">
                  <Globe size={24} className="text-costa-green" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Our Vision</h3>
                <p className="text-text-secondary leading-relaxed">{COMPANY.vision}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Our Journey</div>
              <h2 className="section-title">A Legacy of <span className="text-text-secondary">Growth</span></h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-costa-green via-costa-green/30 to-transparent" />

            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.08}>
                <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-12 md:pl-0`}>
                    <div className="font-mono text-sm text-costa-green font-bold mb-1">{item.year}</div>
                    <h4 className="font-heading text-lg font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-costa-green z-10" style={{ borderWidth: 4, borderStyle: "solid", borderColor: "var(--bg-primary)" }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Leadership</div>
              <h2 className="section-title">Meet Our <span className="text-text-secondary">Team</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="glass-card p-8 text-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-costa-green/20 to-transparent flex items-center justify-center mx-auto mb-5 group-hover:from-costa-green/30 transition-colors" style={{ border: "2px solid var(--glass-border)" }}>
                    <span className="font-heading text-3xl font-bold text-costa-green">{member.name[0]}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{member.name}</h3>
                  <p className="text-costa-green text-sm mb-3">{member.title}</p>
                  <a href={`mailto:${member.email}`} className="text-text-muted text-sm hover:text-costa-green transition-colors flex items-center justify-center gap-2">
                    <Mail size={14} /> {member.email}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-8 mt-12 max-w-3xl mx-auto text-center" style={{ transform: "none" }}>
              <p className="text-lg text-text-secondary leading-relaxed">
                &ldquo;Our engineers previously worked at{" "}
                <span className="text-costa-green font-semibold">Eaton Bussmann</span>,{" "}
                <span className="text-costa-green font-semibold">TE Connectivity</span>, and{" "}
                <span className="text-costa-green font-semibold">Molex</span>{" "}
                — bringing decades of rich design experience to every solution we deliver.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Offices */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Locations</div>
              <h2 className="section-title">Our <span className="text-text-secondary">Global Offices</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.id} delay={i * 0.1}>
                <div className="glass-card p-8 text-center h-full">
                  <span className="text-4xl mb-4 block">{office.flag}</span>
                  <h3 className="font-heading text-xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{office.city}</h3>
                  <span className="text-costa-green text-xs font-semibold uppercase tracking-wider">{office.label}</span>
                  <p className="text-text-muted text-sm mt-4 mb-3">{office.address}</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                    <Clock size={12} />
                    <span className="font-mono">{office.timezone}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {STATS.slice(0, 5).map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="font-mono text-3xl md:text-4xl font-bold text-costa-green">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="text-text-muted text-xs mt-2">{stat.label}</div>
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
            Ready to partner with us?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Join 50+ global clients who trust Costa Devices for their critical power component needs.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}



