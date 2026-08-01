"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

const LogisticsGlobe = dynamic(() => import("@/components/ui/LogisticsGlobe"), {
  ssr: false,
  loading: () => <div className="w-[350px] h-[350px] bg-gray-50 animate-pulse rounded-full" />,
});

const SPRING_CONFIG = { type: "spring", stiffness: 100, damping: 20 } as const;

export default function CapabilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: SPRING_CONFIG }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  };

  return (
    <section id="divisions" className="py-8 bg-[#fafafa] border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 border-l-4 border-gray-900 pl-6">
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-gray-900">
            CAPABILITIES &<br />INFRASTRUCTURE
          </h2>
          <p className="text-sm mt-4 text-gray-500 uppercase tracking-widest">
            System Architecture — Global Logistics
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]"
        >

          {/* Box 1: Sourcing */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? {} : { y: -8 }}
            className="md:col-span-8 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="text-sm text-gray-500 font-bold tracking-[0.2em] uppercase bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">01 — Global Sourcing</div>
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-costa-green group-hover:text-white group-hover:border-costa-green transition-all duration-300 shadow-sm bg-white">
                <ArrowUpRight size={20} strokeWidth={2} />
              </div>
            </div>
            <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/circuit-protection.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="relative z-10 my-auto flex flex-col items-center text-center">
              <h3 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight group-hover:text-costa-green transition-colors duration-300 text-gray-900">Active & Obsolete Parts</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg font-medium">
                Direct access to franchised lines, OEMs, and EMS excess inventory. Specialized in EOL (End-of-Life) components.
              </p>
            </div>
          </motion.div>

          {/* Box 2: Quality */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? {} : { y: -8 }}
            className="md:col-span-4 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,175,93,0.05),transparent_70%)] group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="text-sm text-costa-green font-bold tracking-[0.2em] uppercase bg-costa-green/5 px-4 py-1.5 rounded-full w-fit relative z-10 border border-costa-green/20">02 — QA LAB</div>
            <div className="relative z-10 my-auto flex flex-col items-center text-center">
              <h3 className="font-heading text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 group-hover:-translate-y-2 group-hover:text-costa-green transition-all duration-300">Counterfeit Detection</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed mb-2 group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                <span className="text-costa-green font-bold">AS6081 Certified</span> • X-Ray
              </p>
              <p className="text-sm text-gray-400 uppercase tracking-widest group-hover:-translate-y-2 transition-transform duration-300 delay-100">Decapsulation & Visual Insp.</p>
            </div>
          </motion.div>

          {/* Box 3: Speed */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? {} : { y: -8 }}
            className="md:col-span-4 relative overflow-hidden group p-10 flex flex-col justify-start bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,175,93,0.05),transparent_70%)] group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
            <div className="text-sm text-costa-green font-bold tracking-[0.2em] uppercase bg-costa-green/5 px-4 py-1.5 rounded-full w-fit border border-costa-green/20 relative z-10">03 — SPEED</div>
            <div className="relative z-10 mt-12">
              <h3 className="font-heading text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 group-hover:translate-x-2 group-hover:text-costa-green transition-all duration-300">Sub-24h Dispatch</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                AOG (Aircraft on Ground) and Line-Down specialist response times.
              </p>
            </div>
          </motion.div>

          {/* Box 4: Global */}
          <motion.div
            variants={fadeUpVariant}
            whileHover={shouldReduceMotion ? {} : { y: -8 }}
            className="md:col-span-8 relative group p-10 flex flex-col justify-start bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
          >
            {/* Background elements clipped to border radius */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
              <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 w-2/3 h-full" style={{ backgroundImage: 'radial-gradient(circle, rgba(26,175,93,1) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
            </div>

            <div className="text-sm text-gray-500 font-bold tracking-[0.2em] uppercase bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100 w-fit relative z-10">04 — GLOBAL REACH</div>

            {/* The Interactive Globe - allowed to overflow outside the card */}
            <div className="absolute right-[-20px] top-[-40px] md:right-[-30px] md:top-[-60px] opacity-90 group-hover:opacity-100 transition-opacity duration-700 pointer-events-auto z-10 origin-center scale-90 md:scale-100">
              <LogisticsGlobe />
            </div>

            <div className="relative z-10 max-w-sm mt-12">
              <h3 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900 group-hover:translate-y-[-5px] group-hover:text-costa-green transition-all duration-300">Secure Supply Chain</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:translate-y-[-5px] transition-transform duration-300 delay-75">
                Vetted Tier-1 vendors only. Full traceability and ISO 9001:2015 compliance on every single order.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
