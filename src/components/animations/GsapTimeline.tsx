"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapTimeline({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const items = container.querySelectorAll(".gsap-timeline-item");
    const dots = container.querySelectorAll(".gsap-timeline-dot");

    // Animate the vertical line drawing down
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    tl.fromTo(
      line,
      { scaleY: 0, transformOrigin: "top center" },
      { scaleY: 1, ease: "none" }
    );

    // Fade in items and pop dots as the line reaches them
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
      
      if (dots[i]) {
        gsap.fromTo(
          dots[i],
          { scale: 0, backgroundColor: "transparent" },
          {
            scale: 1,
            backgroundColor: "var(--brand-green)",
            duration: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container || Array.from(items).includes(t.trigger as Element)) t.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* The background static line */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-glass-border" />
      
      {/* The animated drawing line */}
      <div 
        ref={lineRef}
        className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-costa-green to-costa-green/50 origin-top shadow-[0_0_10px_var(--brand-green)]" 
      />
      
      {children}
    </div>
  );
}
