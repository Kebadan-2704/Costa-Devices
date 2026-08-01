"use client";

import { motion } from "framer-motion";

export default function CaseStudySection() {
  return (
    <section className="py-32 relative bg-bg-primary text-text-primary border-b border-glass-border overflow-hidden" aria-label="Enterprise case study">

      {/* Topographic Map Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/5 pb-8">
          <div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-text-primary">
              Enterprise Case Study
            </h2>
            <p className="text-sm mt-4 text-costa-green uppercase tracking-widest flex items-center gap-3 font-bold">
              <span className="w-2 h-2 bg-costa-green rounded-full"></span>
              GLOBAL SUPPLY CHAIN SOLUTIONS
            </p>
          </div>
          <div className="text-sm font-bold text-costa-green mt-6 md:mt-0 border border-costa-green/30 bg-costa-green/10 rounded-full px-5 py-2 tracking-widest">
            SUCCESS RATE: 100%
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* The Dossier File */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-gradient-to-br from-bg-elevated to-bg-secondary border border-glass-border p-10 md:p-14 rounded-3xl relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
          >
            {/* Premium Pill tab */}
            <div className="relative z-10 bg-bg-tertiary text-text-primary border-glass-border text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase w-fit mb-8 border">
              CASE STUDY #CD-8842-EV
            </div>

            <h3 className="relative z-10 font-heading text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-10 mt-4 text-text-primary transition-all duration-700">
              &quot;Sourced 12,000 obsolete MCUs for our EV controller board when others failed. Saved <span className="text-costa-green">$2.4M</span> in downtime.&quot;
            </h3>

            <div className="relative z-10 flex items-center gap-4 mt-8">
              <div>
                <span className="text-sm text-text-secondary tracking-widest uppercase">VP Engineering • Global EV Manufacturer</span>
              </div>
            </div>
          </motion.div>

          {/* The Hard Data */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { label: "Component", val: "Obsolete 32-bit MCU" },
              { label: "Volume", val: "12,000 Units" },
              { label: "Execution", val: "9 Days (AOG)" },
              { label: "Verification", val: "AS6081 / X-Ray" }
            ].map((stat) => (
              <div key={stat.label} className="bg-bg-elevated border border-glass-border p-7 rounded-2xl hover:border-costa-green/30 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center flex-1">
                <p className="text-sm text-text-muted mb-2 uppercase tracking-widest font-semibold">{stat.label}</p>
                <p className="text-lg font-bold text-text-primary tracking-wide group-hover:text-costa-green transition-colors">{stat.val}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
