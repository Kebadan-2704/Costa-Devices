"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  splitType?: "chars" | "words" | "lines" | "none";
}

export default function GsapReveal({
  children,
  delay = 0,
  duration = 0.8,
  stagger = 0.05,
  className = "",
  splitType = "none",
}: GsapRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let elementsToAnimate: HTMLElement | HTMLElement[] | NodeListOf<Element> = el;

    // A very simple split-text approach without using the paid GSAP SplitText plugin.
    // For premium feel, we wrap words in inline-blocks.
    if (splitType === "words" && typeof children === "string") {
      const words = children.split(" ");
      el.innerHTML = "";
      words.forEach((word) => {
        const wrapper = document.createElement("span");
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "inline-block";
        wrapper.style.verticalAlign = "top";
        wrapper.style.marginRight = "0.25em";
        
        const inner = document.createElement("span");
        inner.className = "gsap-word";
        inner.style.display = "inline-block";
        inner.innerText = word;
        
        wrapper.appendChild(inner);
        el.appendChild(wrapper);
      });
      elementsToAnimate = el.querySelectorAll(".gsap-word");
    }

    const animation = gsap.fromTo(
      elementsToAnimate,
      {
        y: "110%",
        opacity: splitType === "none" ? 0 : 1,
        rotateZ: splitType !== "none" ? 3 : 0,
      },
      {
        y: "0%",
        opacity: 1,
        rotateZ: 0,
        duration,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [children, delay, duration, splitType, stagger]);

  return (
    <div ref={containerRef} className={`${className} ${splitType !== "none" ? "overflow-hidden" : ""}`}>
      {splitType === "none" ? children : null}
    </div>
  );
}
