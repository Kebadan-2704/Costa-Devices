"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TechBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      
      {/* 1. Ultra-Subtle Mesh Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0fdf8] to-white" />

      {/* 2. Elegant, Light Circuit Lines SVG */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="clean-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="30" x2="40" y2="30" stroke="#1aaf5d" strokeWidth="1"/>
            <line x1="80" y1="30" x2="120" y2="30" stroke="#1aaf5d" strokeWidth="1"/>
            {/* Vertical lines */}
            <line x1="40" y1="0" x2="40" y2="30" stroke="#1aaf5d" strokeWidth="1"/>
            <line x1="80" y1="30" x2="80" y2="60" stroke="#1aaf5d" strokeWidth="1"/>
            <line x1="60" y1="60" x2="60" y2="120" stroke="#1aaf5d" strokeWidth="1"/>
            
            {/* Corner dots */}
            <circle cx="40" cy="30" r="2.5" fill="none" stroke="#1aaf5d" strokeWidth="1"/>
            <circle cx="80" cy="30" r="2.5" fill="none" stroke="#1aaf5d" strokeWidth="1"/>
            <circle cx="80" cy="60" r="2.5" fill="none" stroke="#1aaf5d" strokeWidth="1"/>
            <circle cx="60" cy="60" r="2.5" fill="none" stroke="#1aaf5d" strokeWidth="1"/>
            
            {/* Small nodes */}
            <rect x="38" y="58" width="4" height="4" fill="none" stroke="#1aaf5d" strokeWidth="1"/>
            <rect x="78" y="88" width="4" height="4" fill="none" stroke="#1aaf5d" strokeWidth="1"/>
            
            {/* Cross junction */}
            <line x1="20" y1="90" x2="50" y2="90" stroke="#1aaf5d" strokeWidth="1"/>
            <line x1="35" y1="75" x2="35" y2="105" stroke="#1aaf5d" strokeWidth="1"/>
            <circle cx="35" cy="90" r="2" fill="#1aaf5d"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clean-circuit)"/>
      </svg>

      {/* 3. Extremely Soft Floating Light Orbs (for depth, pushed to the edges) */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-costa-green/5 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-costa-green/5 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 4. A Few Slow, Tiny Glowing Nodes moving along the circuits */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-costa-green rounded-full shadow-[0_0_10px_2px_rgba(26,175,93,0.4)]"
        style={{ left: '20%', top: '30%' }}
        animate={{ y: [0, 120, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 bg-costa-green rounded-full shadow-[0_0_10px_2px_rgba(26,175,93,0.4)]"
        style={{ left: '70%', top: '60%' }}
        animate={{ x: [0, -120, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
      />

      {/* 5. Clean Fade at the bottom so it seamlessly transitions into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}
