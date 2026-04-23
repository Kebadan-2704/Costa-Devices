"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function GsapParallax({ children, speed = 1, className = "" }: GsapParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    const trigger = containerRef.current;
    if (!el || !trigger) return;

    const yVal = speed * 100;

    const animation = gsap.fromTo(
      el,
      { y: yVal },
      {
        y: -yVal,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === trigger) t.kill();
      });
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={itemRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
