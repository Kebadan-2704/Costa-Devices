"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProtocolSection() {
  return (
    <section className="py-32 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">

      {/* Soft ambient glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-costa-green/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, black 39px, black 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, black 39px, black 40px)' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24 md:w-1/2">
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
            The Protocol.
          </h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest leading-relaxed">
            Our military-grade process for securing obsolete components when OEM supply chains fail.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {[
            { num: "01", title: "DISCOVERY", desc: "Share BOM requirements. Real-time global availability assessment across 50+ data sources." },
            { num: "02", title: "SOURCING", desc: "Algorithmic scan of franchised, OEM excess, and spot markets globally." },
            { num: "03", title: "VERIFICATION", desc: "AS6081 testing: 200x magnification, XRF, decapsulation, and heated solvent testing." },
            { num: "04", title: "DISPATCH", desc: "Class 1 ESD-safe packaging. Certificate of Conformance included. Sub-24h global dispatch." }
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-8 md:p-10 bg-white border border-gray-200 rounded-3xl hover:border-costa-green/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(26,175,93,0.1)] overflow-hidden cursor-pointer"
            >
              {/* Full-card link */}
              <Link href="/contact" className="absolute inset-0 z-20" aria-label={`Learn more about ${step.title} phase`} />

              {/* Glowing subtle background on hover */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-costa-green/0 via-costa-green/0 to-costa-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

              <div className="relative z-10 text-sm font-bold text-costa-green bg-costa-green/5 border border-costa-green/20 px-4 py-1.5 rounded-full w-fit tracking-widest">
                PHASE {step.num}
              </div>

              <div className="flex-1 relative z-10">
                <h3 className="font-heading text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300 text-gray-900">{step.title}</h3>
              </div>

              <div className="md:w-[450px] relative z-10">
                <p className="text-sm text-gray-500 leading-relaxed font-medium transition-colors duration-300">
                  {step.desc}
                </p>
              </div>

              <div className="flex w-12 h-12 rounded-full bg-gray-50 border border-gray-200 items-center justify-center group-hover:bg-costa-green group-hover:border-costa-green group-hover:shadow-[0_0_15px_rgba(26,175,93,0.4)] transition-all duration-300 shrink-0 relative z-10">
                <ArrowRight size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
