"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export interface MarqueeItem {
  id: string;
  name: string;
  logo?: string;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[] | string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export default function InfiniteMarquee({
  items,
  direction = "left",
  speed = "normal",
  className = "",
}: InfiniteMarqueeProps) {
  // Determine animation duration based on speed and item count
  const baseDuration = speed === "slow" ? 60 : speed === "fast" ? 20 : 40;
  // Scale duration slightly based on number of items so long lists don't fly by too fast
  const duration = baseDuration * (items.length / 10);

  return (
    <div className={`relative flex overflow-hidden w-full ${className}`}>
      {/* Fade masks for the edges */}
      <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-4 md:gap-8 px-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {/* We duplicate the items array twice to ensure seamless infinite scrolling */}
        {[...items, ...items, ...items, ...items].map((item, idx) => {
          const name = typeof item === "string" ? item : item.name;
          const logo = typeof item === "string" ? undefined : item.logo;
          
          return (
            <div
              key={`${name}-${idx}`}
              className="flex items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-bg-secondary border border-glass-border hover:border-costa-green/50 transition-colors duration-300 rounded-xl md:rounded-2xl shrink-0 group cursor-default min-w-[160px]"
            >
              {logo ? (
                <div className="relative w-32 h-12 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image src={logo} alt={name} fill sizes="150px" className="object-contain" unoptimized />
                </div>
              ) : (
                <span className="font-heading text-lg md:text-2xl font-black text-text-muted group-hover:text-text-primary transition-colors duration-300 tracking-tighter">
                  {name}
                </span>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
