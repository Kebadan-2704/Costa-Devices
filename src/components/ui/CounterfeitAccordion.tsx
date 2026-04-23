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
        <ScrollReveal key={step.step} delay={i * 0.05}>
          <button
            onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
            className="w-full bg-bg-secondary border border-glass-border p-5 flex items-center gap-4 text-left group cursor-pointer hover:border-costa-green/50 transition-colors duration-500 rounded-xl"
            aria-expanded={expandedStep === step.step}
            aria-controls={`step-content-${step.step}`}
          >
            <div className="w-10 h-10 bg-bg-tertiary border border-glass-border flex items-center justify-center shrink-0 group-hover:border-costa-green/50 transition-colors rounded-lg">
              <span className="font-mono text-sm font-bold text-costa-green">{String(step.step).padStart(2, "0")}</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="font-heading text-base font-bold text-text-primary group-hover:text-costa-green transition-colors duration-500">{step.title}</h4>
              <div
                id={`step-content-${step.step}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  expandedStep === step.step ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-text-secondary text-sm mt-3 leading-relaxed transition-colors duration-500">{step.description}</p>
                </div>
              </div>
            </div>
            {expandedStep === step.step ? (
              <ChevronUp size={18} className="text-costa-green shrink-0" />
            ) : (
              <ChevronDown size={18} className="text-text-muted shrink-0 group-hover:text-costa-green transition-colors" />
            )}
          </button>
        </ScrollReveal>
      ))}
    </div>
  );
}
