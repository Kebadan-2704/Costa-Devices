"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity } from "lucide-react";

export default function TechBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-white">
      
      {/* 1. Animated Energy Orbs (The Aurora glow behind the grid) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-400/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-costa-green/15 blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-400/15 blur-[120px]"
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* 2. Premium Hexagon Geometric Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.7]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='rgba(0,0,0,0.03)' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.65V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)"
        }}
      />

      {/* 3. Floating Glowing Data Packets (Sensors/Particles) */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-costa-green rounded-full shadow-[0_0_15px_3px_rgba(22,163,74,0.6)]"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -80],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeOut"
          }}
        />
      ))}

      {/* 4. Abstract Animated Tech Icons (CPU, Sensors) */}
      {[Cpu, Zap, Activity].map((Icon, idx) => (
        <motion.div
          key={`icon-${idx}`}
          className="absolute text-costa-green/10"
          style={{
            left: `${20 + idx * 30}vw`,
            top: `${30 + (idx % 2) * 40}vh`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8 + idx * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx
          }}
        >
          <Icon size={120 + idx * 40} strokeWidth={0.5} />
        </motion.div>
      ))}

      {/* 5. Smooth Fade at the bottom so it seamlessly transitions into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}
