import sys

file_path = r"c:\Users\Keba\Desktop\Costa-Devices\src\app\page.tsx"

new_code = """
"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { playMechanicalClick } from "@/utils/audio";

const blurReveal: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(20px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax text
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
            
      {/* 1. HERO - Ultra Premium Fullscreen Video Background */}
      <section className="relative w-full h-[100vh] min-h-[800px] overflow-hidden flex items-center justify-center" ref={containerRef}>
        
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <motion.video 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/Intro.mp4"
          />
          {/* Cinematic Dark/Emerald Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a] z-10"></div>
          <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10"></div>
          
          {/* Premium Film Grain */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-20" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
        </div>

        {/* Hero Content (Centered) */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-30 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-16"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            {/* Animated Badge */}
            <motion.div 
              variants={fadeUpVariant} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white tracking-[0.2em] uppercase backdrop-blur-xl w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Global Sourcing Active
            </motion.div>
            
            {/* Masterpiece Typography */}
            <motion.h1 
              className="text-[clamp(3.5rem,7vw,7.5rem)] font-extrabold leading-[1] tracking-tighter text-white"
            >
              <motion.span variants={blurReveal} className="inline-block mr-4">The</motion.span>
              <motion.span variants={blurReveal} className="inline-block mr-4 text-white/50">Smarter,</motion.span>
              <br />
              <motion.span variants={blurReveal} className="inline-block text-emerald-400 mr-4 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">Tech-Driven</motion.span>
              <br />
              <motion.span variants={blurReveal} className="inline-block">Sourcing.</motion.span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariant}
              className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mt-6 leading-relaxed"
            >
              Direct access to trusted Tier-1 suppliers. Securing EOL, active, and obsolete electronic components globally with unparalleled speed.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center justify-center gap-6 mt-10">
              <Link href="/contact" onMouseEnter={playMechanicalClick} className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-emerald-500 text-white rounded-full font-bold text-sm overflow-hidden shadow-[0_20px_40px_-15px_rgba(16,185,129,0.5)] transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Start Sourcing
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
              </Link>
              
              <Link href="/videos/Intro.mp4" target="_blank" onMouseEnter={playMechanicalClick} className="group flex items-center gap-3 px-2 py-2 text-white/80 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all backdrop-blur-md">
                  <Play className="w-4 h-4 fill-current ml-1" />
                </div>
                <span className="font-bold text-sm tracking-wide">Watch Showreel</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-30"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ELITE PARTNER MARQUEE (Dark Theme Match) */}
      <section className="py-12 bg-[#0a0a0a] border-b border-white/10 overflow-hidden relative">
        <div className="absolute top-0 left-6 text-[10px] font-mono font-bold text-white/40 tracking-widest uppercase z-10 bg-[#0a0a0a] px-2 py-1 rounded">Vetted Network</div>
        <div
          className="flex flex-col mt-4"
          style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
        >
          <Marquee speed="normal" direction="left" className="overflow-y-hidden">
            {["NVIDIA", "EATON", "INTEL", "TEXAS INSTRUMENTS", "STMICROELECTRONICS", "ABB", "SCHNEIDER"].map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center mx-12">
                <span className="text-3xl md:text-4xl font-extrabold text-white/20 uppercase tracking-tighter hover:text-white/80 transition-colors duration-500 cursor-default">
                  {brand}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 3. PERFORMANCE STATS (Dark Theme Match) */}
      <section className="py-24 bg-[#0a0a0a] relative z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center">
              <AnimatedNumber value={15} />
              <span className="text-emerald-500 ml-1">+</span>
            </div>
            <p className="text-sm font-bold text-white/40 tracking-widest uppercase group-hover:text-emerald-400 transition-colors">Years Experience</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center">
              <AnimatedNumber value={500} />
              <span className="text-emerald-500 ml-1">+</span>
            </div>
            <p className="text-sm font-bold text-white/40 tracking-widest uppercase group-hover:text-emerald-400 transition-colors">Global Partners</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center">
              <AnimatedNumber value={99} />
              <span className="text-emerald-500 ml-1">%</span>
            </div>
            <p className="text-sm font-bold text-white/40 tracking-widest uppercase group-hover:text-emerald-400 transition-colors">Quality Pass Rate</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center">
              <AnimatedNumber value={24} />
              <span className="text-emerald-500 ml-1">/7</span>
            </div>
            <p className="text-sm font-bold text-white/40 tracking-widest uppercase group-hover:text-emerald-400 transition-colors">Global Support</p>
          </div>
        </div>
      </section>

    </div>
  );
}
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_code.strip())

print("Successfully injected Awwwards Fullscreen Video Hero.")
