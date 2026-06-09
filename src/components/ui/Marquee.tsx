"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | "slower" | "slowest";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const duration = 
    speed === "fast" ? "20s" : 
    speed === "normal" ? "40s" : 
    speed === "slow" ? "80s" :
    speed === "slower" ? "150s" :
    "300s"; // slowest

  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex w-full", className)}>
      <div 
        className={cn(
          "flex shrink-0 min-w-full items-center justify-around gap-8 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${duration} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal"
        }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
