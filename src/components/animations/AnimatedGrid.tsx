"use client";
import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background ambient glow - Made much more vibrant */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-costa-green/15 dark:to-costa-green/20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-costa-green/10 dark:bg-costa-green/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-costa-green/10 dark:bg-costa-green/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

      {/* Grid pattern container with increased opacity */}
      <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.35]">
        <motion.div
          className="absolute inset-0 w-[200%] h-[200%]"
          style={{
            backgroundImage: "linear-gradient(90deg, var(--costa-green) 1px, transparent 1px), linear-gradient(var(--costa-green) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
          animate={{
            x: [0, -80],
            y: [0, -80]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Soft overlay mask to fade out the grid at edges/bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/20 to-bg-primary" />
    </div>
  );
}
