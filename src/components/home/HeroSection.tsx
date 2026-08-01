"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2, Clock, ArrowUpRight } from "lucide-react";
import { motion, Variants, useScroll, useTransform, useReducedMotion } from "framer-motion";
import TechBackground from "@/components/ui/TechBackground";
import BOMUploadZone from "@/components/ui/BOMUploadZone";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const SPRING_CONFIG = { type: "spring", stiffness: 100, damping: 20 } as const;
const SPRING_BOUNCY = { type: "spring", stiffness: 120, damping: 14 } as const;

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  
  // Scroll Parallax Effects (disabled if user prefers reduced motion)
  const yBg = useTransform(scrollY, [0, 1000], [0, shouldReduceMotion ? 0 : 200]);
  const yVideo = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 120]);
  const opacityVideo = useTransform(scrollY, [0, 600], [1, shouldReduceMotion ? 1 : 0.8]);

  return (
    <section className="relative w-full pt-[130px] pb-2 lg:pt-[150px] lg:pb-4 overflow-hidden border-b border-gray-100">
      
      {/* Stunning Animated Enterprise Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <TechBackground />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        
        {/* Split Content: Text Left, Search Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 min-h-[58vh] pb-4">
          
          {/* ─── LEFT COLUMN: Text Content ─── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start text-left flex-shrink-0 lg:w-[45%]"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, ...SPRING_BOUNCY }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dcfce7] border border-costa-green/30 text-xs font-bold text-costa-green tracking-[0.2em] uppercase w-fit mb-7 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-costa-green animate-pulse"></span>
              Global Sourcing Network
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading text-[clamp(3rem,5.5vw,5.2rem)] font-black leading-[1.0] tracking-tight text-[#0f172a] mb-6">
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.15, ...SPRING_CONFIG }}
                className="inline-block"
              >
                Mission-Critical
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.30, ...SPRING_CONFIG }}
                className="inline-block"
              >
                Component
              </motion.span>
              <br />
              <span className="relative inline-block mt-1">
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.45, ...SPRING_CONFIG }}
                  className="inline-block text-costa-green"
                >
                  Distribution.
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, ...SPRING_CONFIG }}
                  className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-costa-green to-emerald-400 rounded-full origin-left"
                />
              </span>
            </h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, ...SPRING_CONFIG }}
              className="text-[#64748b] text-base md:text-lg font-normal leading-[1.75] max-w-lg mb-10"
            >
              Securing obsolete, Active &amp; Passive electronic components, heavy electrical, active high-voltage components, Aerospace, and Industrial infrastructure. Sub-24h dispatch.
            </motion.p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              {[
                { icon: <ShieldCheck size={14} />, label: "AS6081 Certified" },
                { icon: <CheckCircle2 size={14} />, label: "ISO 9001:2015" },
                { icon: <ShieldCheck size={14} />, label: "AS 9120:2016 B" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, ...SPRING_BOUNCY }}
                  className="flex items-center gap-2 text-[#64748b]"
                >
                  <span className="text-costa-green">{item.icon}</span>
                  <span className="text-xs font-bold tracking-wider uppercase">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* BOM Upload Zone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, ...SPRING_CONFIG }}
              className="mt-2 w-full max-w-lg"
            >
              <BOMUploadZone />
            </motion.div>
          </motion.div>

          
          {/* ─── RIGHT COLUMN: Video Dashboard ─── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, ...SPRING_CONFIG }}
            style={{ y: yVideo, opacity: opacityVideo }}
            className="flex-shrink-0 lg:w-[50%] w-full relative mt-12 lg:mt-0"
          >
            {/* Soft shadow glow behind video */}
            <div className="absolute -inset-4 bg-gradient-to-br from-costa-green/20 via-teal-500/10 to-emerald-500/20 rounded-[3rem] blur-3xl opacity-70"></div>
            
            <div className="relative w-full aspect-[4/3] rounded-[2rem] p-2 overflow-hidden border border-white/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] bg-white/40 backdrop-blur-2xl group flex flex-col">
              
              {/* UI Chrome Bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 opacity-90 absolute top-0 left-0 right-0 z-20 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/90 border border-red-500/20 shadow-inner"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 border border-amber-500/20 shadow-inner"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 border border-emerald-500/20 shadow-inner"></div>
              </div>

              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-900 shadow-inner mt-6">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/hero/video-poster.jpg"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                >
                  <source src="/videos/Intro.mp4" type="video/mp4" />
                </video>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none"></div>

                {/* Live Feed Badge */}
                <div className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white tracking-[0.2em] uppercase shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  Live Feed
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="relative z-20 w-full mt-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
                {[
                  { label: "Global Uptime", value: "99.99%", desc: "Sourcing Network", icon: <Zap size={16} className="text-costa-green" /> },
                  { label: "Avg. Turnaround", value: "< 4 Hrs", desc: "RFQ Response", icon: <Clock size={16} className="text-costa-green" /> },
                  { label: "Active Suppliers", value: "1,402", desc: "Franchised", icon: <ArrowUpRight size={16} className="text-costa-green" /> },
                  { label: "Quality Pass", value: "100%", desc: "AS6081 Inspected", icon: <ShieldCheck size={16} className="text-costa-green" /> }
                ].map((metric, i) => (
                  <motion.div 
                    key={metric.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.08, ...SPRING_CONFIG }}
                    className="bg-white border border-gray-100 rounded-[1rem] p-3 md:p-4 shadow-xl shadow-gray-900/5 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 rounded-md bg-costa-green/8 border border-costa-green/10">
                        {metric.icon}
                      </div>
                      <p className="text-xs text-gray-400 font-bold tracking-[0.1em] uppercase">{metric.label}</p>
                    </div>
                    <p className="font-heading text-lg md:text-xl font-black text-gray-900 tracking-tight mb-0.5 group-hover:text-costa-green transition-colors">{metric.value}</p>
                    <p className="text-xs text-costa-green font-bold tracking-[0.15em] uppercase">{metric.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>


      </div>
    </section>
  );
}
