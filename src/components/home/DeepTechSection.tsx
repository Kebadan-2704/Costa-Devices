"use client";

import { Activity } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MarketIntelligence from "@/components/ui/MarketIntelligence";

const Microchip3D = dynamic(() => import("@/components/ui/Microchip3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-50 animate-pulse rounded-3xl flex items-center justify-center">
      <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Loading 3D Model...</span>
    </div>
  ),
});

export default function DeepTechSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-white text-gray-900 border-y border-gray-100">
      
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-costa-green/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Market Intelligence Widget */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-costa-green/10 border border-costa-green/20 text-xs font-bold text-costa-green tracking-[0.2em] uppercase w-fit mb-4">
                <Activity size={12} />
                Live Component Data
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-4 text-gray-900">
                Algorithmic Market Intelligence.
              </h2>
              <p className="text-gray-600 font-medium">
                We don&apos;t guess. We scrape global spot markets, OEM excess inventory, and franchised lines to give you real-time visibility into lead times, price trends, and availability.
              </p>
            </div>
            
            <MarketIntelligence />
          </motion.div>

          {/* Right: Interactive 3D Microchip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-costa-green animate-pulse"></span>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Interactive 3D Model</span>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 opacity-60 pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Drag to Rotate</span>
            </div>
            <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing pointer-events-auto">
              <Microchip3D />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
