"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TechBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      
      {/* 1. Ultra-Subtle Mesh Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0fdf8] to-white" />

      {/* 2. Elegant, Slow-Moving Light Orbs (Very subtle, soft lighting) */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#e6faf2] blur-[150px] opacity-70"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-[#f0fdf4] blur-[120px] opacity-60"
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-30%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#f8fafc] blur-[140px] opacity-80"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* 3. Extremely Crisp, Subtle Micro-Grid */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
        }}
      />

      {/* 4. Elegant Glowing Accents (Replacing the chaotic particles) */}
      <motion.div
        className="absolute top-[25%] left-[15%] w-24 h-24 bg-costa-green/10 rounded-full blur-[30px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[25%] w-32 h-32 bg-emerald-300/10 rounded-full blur-[40px]"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* 5. Clean Fade at the bottom so it seamlessly transitions into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}
