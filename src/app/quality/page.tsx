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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-900/50" />
        <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-[#059669]/5 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" aria-hidden="true" />
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
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${expandedStep === step.step ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">{step.description}</p>
                      </div>
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



