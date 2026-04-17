"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COUNTERFEIT_STEPS } from "@/lib/constants";

export default function CounterfeitAccordion() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
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
            <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center shrink-0 group-hover:bg-[#059669]/20 transition-colors border border-[#059669]/20">
              <span className="font-mono text-sm font-bold text-[#059669]">{String(step.step).padStart(2, "0")}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white group-hover:text-[#059669] transition-colors">{step.title}</h4>
              <div
                id={`step-content-${step.step}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  expandedStep === step.step ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
            {expandedStep === step.step ? (
              <ChevronUp size={18} className="text-[#059669] shrink-0" />
            ) : (
              <ChevronDown size={18} className="text-slate-400 shrink-0 group-hover:text-[#059669] transition-colors" />
            )}
          </button>
        </ScrollReveal>
      ))}
    </div>
  );
}
