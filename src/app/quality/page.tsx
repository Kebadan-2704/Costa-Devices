"use client";
import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Award } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { CERTIFICATIONS, COUNTERFEIT_STEPS } from "@/lib/constants";
import { useState } from "react";

export default function QualityPage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

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
              Home / Quality
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Uncompromising Quality{" "}
              <span className="green-gradient-text">Standards</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              AS 6081 · AS 9120B · ISO 9001:2015 certified — zero tolerance for anything less than authentic.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Certification Cards */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="section-label">Certifications</div>
            <h2 className="section-title mb-12">Internationally Recognized <span className="green-gradient-text">Certifications</span></h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <ScrollReveal key={cert.id} delay={i * 0.15}>
                <div className="glass-card p-8 h-full flex flex-col group">
                  {/* Certificate Visual */}
                  <div className="h-44 bg-gradient-to-br from-costa-green/10 to-transparent rounded-xl mb-6 flex items-center justify-center transition-colors" style={{ border: "1px solid var(--glass-border)" }}>
                    <div className="text-center">
                      <Shield size={48} className="text-costa-green/30 mx-auto mb-3 group-hover:text-costa-green/50 transition-colors" />
                      <span className="font-mono text-lg font-bold text-costa-green">{cert.name}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                  <p className="text-costa-green text-xs font-medium uppercase tracking-wider mb-3">{cert.fullName}</p>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{cert.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-muted pt-4" style={{ borderTop: "1px solid var(--glass-border)" }}>
                    <span>{cert.entity}</span>
                    <span className="font-mono">{cert.year}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counterfeit Detection Pipeline */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="section-label justify-center">Quality Assurance</div>
              <h2 className="section-title">Counterfeit Detection <span className="green-gradient-text">Pipeline</span></h2>
              <p className="text-text-secondary max-w-xl mx-auto mt-4">
                Our AS 6081 certified, 8-step inspection process ensures every component meets the highest authenticity standards.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {COUNTERFEIT_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.06}>
                <button
                  onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
                  className="w-full glass-card p-5 flex items-center gap-4 text-left group cursor-pointer"
                  style={{ transform: "none" }}
                  aria-expanded={expandedStep === step.step}
                  aria-controls={`step-content-${step.step}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-costa-green/10 flex items-center justify-center shrink-0 group-hover:bg-costa-green/20 transition-colors">
                    <span className="font-mono text-sm font-bold text-costa-green">{String(step.step).padStart(2, "0")}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading text-base font-semibold" style={{ color: "var(--text-primary)" }}>{step.title}</h4>
                    <div
                      id={`step-content-${step.step}`}
                      className={`overflow-hidden transition-all duration-300 ${expandedStep === step.step ? "max-h-20 mt-2" : "max-h-0"}`}
                    >
                      <p className="text-text-secondary text-sm">{step.description}</p>
                    </div>
                  </div>
                  {expandedStep === step.step ? (
                    <ChevronUp size={18} className="text-costa-green shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-text-muted shrink-0" />
                  )}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding text-center" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <Award size={48} className="text-costa-green mx-auto mb-6" />
            <blockquote className="font-heading text-2xl md:text-3xl font-bold mb-6 leading-snug" style={{ color: "var(--text-primary)" }}>
              &ldquo;Every component we deliver is tested, verified, and certified — because in mission-critical applications, there&apos;s zero room for compromise.&rdquo;
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="px-4 py-2 rounded-lg" style={{ background: "var(--card-tag-bg)", border: "1px solid var(--glass-border)" }}>
                  <span className="font-mono text-xs text-costa-green font-semibold">{cert.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ backgroundColor: "var(--bg-primary)" }}>
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Quality you can trust
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Request our certification documents or discuss your quality requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Quality Team <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}



