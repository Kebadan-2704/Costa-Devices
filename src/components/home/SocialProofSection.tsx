"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";

export default function SocialProofSection() {
  return (
    <section className="relative overflow-hidden py-4 border-y border-gray-100" style={{ background: 'linear-gradient(135deg, #f0fdf8 0%, #ffffff 35%, #f7fffe 65%, #edfcf5 100%)' }}>

      {/* BG Layer 1: Fine grid lines */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="sp-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(26,175,93,0.06)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sp-grid)"/>
      </svg>

      {/* BG Layer 2: Soft glowing orbs */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(26,175,93,0.08) 0%, transparent 65%)' }}></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 65%)' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)' }}></div>

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f0fdf8, transparent)' }}></div>
      <div className="absolute inset-y-0 right-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #edfcf5, transparent)' }}></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 text-center mb-6 px-6"
      >
        <p className="text-xs font-bold text-costa-green tracking-[0.3em] uppercase mb-2">Vetted Partner Network</p>
        <p className="text-2xl font-black text-gray-900 tracking-tight">Trusted by the Best in the Industry</p>
      </motion.div>

      {/* ROW 1 — Manufacturers */}
      <div className="relative z-10 mb-6" aria-label="Partner manufacturers">
        <Marquee speed="normal" direction="left" className="overflow-y-hidden">
          {["NVIDIA", "EATON", "INTEL", "TEXAS INSTRUMENTS", "STMICROELECTRONICS", "ABB", "SCHNEIDER", "INFINEON", "NXP", "RENESAS", "MICROCHIP"].map((brand) => (
            <div key={brand} className="flex items-center mx-8">
              <span className="text-2xl md:text-3xl font-black text-gray-500 uppercase tracking-tight hover:text-costa-green transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                {brand}
              </span>
              <span className="ml-8 w-2 h-2 rounded-full bg-costa-green/30 flex-shrink-0"></span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* ROW 2 — Clients */}
      <div className="relative z-10" aria-label="Client companies">
        <Marquee speed="slow" direction="right" className="overflow-y-hidden">
          {["Ather Energy", "Ola Electric", "Foxconn", "HP", "Kaynes Technology", "GIGA", "Biosense Webster", "Uno Minda", "CoreCentric Solutions", "Bosch", "Siemens"].map((client) => (
            <div key={client} className="flex items-center mx-8">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-costa-green transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                {client}
              </span>
              <span className="ml-8 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Stats strip */}
    </section>
  );
}
