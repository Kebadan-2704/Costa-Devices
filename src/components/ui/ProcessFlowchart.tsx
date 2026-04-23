"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COUNTERFEIT_STEPS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function ProcessFlowchart() {
  return (
    <div className="relative py-12 max-w-5xl mx-auto">
      {/* Central Line */}
      <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border" />
      
      <div className="space-y-12 md:space-y-0">
        {COUNTERFEIT_STEPS.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''} md:py-8`}>
                
                {/* Node Connector Line (Desktop) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-glass-border z-0 ${isEven ? 'right-1/2' : 'left-1/2'}`} />

                {/* Node */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 bg-bg-primary border-2 border-costa-green rounded-xl flex items-center justify-center z-10 shadow-[0_0_30px_rgba(13,107,61,0.3)]">
                  <span className="font-mono font-black text-costa-green text-lg">{String(step.step).padStart(2, '0')}</span>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} relative z-10`}>
                  <div className="bg-bg-secondary border border-glass-border p-8 rounded-2xl hover:border-costa-green/50 transition-colors duration-500 group relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-costa-green/10 group-hover:bg-costa-green transition-colors duration-500" />
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                      <ShieldCheck size={20} className="text-costa-green shrink-0" />
                      <h4 className="font-heading text-xl font-black text-text-primary tracking-tight transition-colors duration-500">{step.title}</h4>
                    </div>
                    <p className="text-text-secondary leading-relaxed font-light transition-colors duration-500">{step.description}</p>
                  </div>
                </div>

                {/* Empty Space for Grid Alignment on Desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
