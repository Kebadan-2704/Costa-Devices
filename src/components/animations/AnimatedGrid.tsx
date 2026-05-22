"use client";
import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-primary">
      
      {/* 1. Dynamic Ambient Orbs */}
      <motion.div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-costa-green/20 rounded-full blur-[100px]"
        animate={{ x: [100, -50, 100], y: [-100, 50, -100] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-costa-green/15 rounded-full blur-[100px]"
        animate={{ x: [-100, 50, -100], y: [100, -50, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-costa-green/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Topographical / Architectural Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(var(--brand-green) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0"
        }}
      />
      
      {/* 3. Horizontal Scanning Line */}
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-costa-green/40 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* 4. Film Grain Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      {/* Soft overlay mask to fade out the grid at the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-transparent to-bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 via-transparent to-bg-primary/80" />
    </div>
  );
}
