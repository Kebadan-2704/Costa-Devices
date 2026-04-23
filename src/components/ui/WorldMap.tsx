"use client";
import { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";
import gsap from "gsap";

export default function WorldMap() {
  const [mounted, setMounted] = useState(false);
  const radarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    if (radarRef.current) {
      const rings = radarRef.current.querySelectorAll('.radar-ring');
      gsap.fromTo(rings, 
        { scale: 0.8, opacity: 0.1 },
        {
          scale: 1.5,
          opacity: 0,
          duration: 4,
          stagger: 1,
          repeat: -1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const locations = [
    { id: "il", name: "Tel Aviv, Israel", top: "39.5%", left: "58.5%" },
    { id: "uae", name: "Dubai, UAE", top: "42.5%", left: "64%" },
    { id: "india", name: "Coimbatore, India", top: "49%", left: "69.6%" },
    { id: "hk", name: "Hong Kong", top: "44%", left: "79.5%" },
  ];

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-bg-secondary rounded-2xl overflow-hidden flex items-center justify-center p-4 md:p-12 border border-glass-border">
      
      {/* Massive subtle background concentric circles centering around UAE */}
      <div ref={radarRef} className="absolute top-[42.5%] left-[64%] -translate-x-1/2 -translate-y-1/2 w-[300%] aspect-square pointer-events-none">
        <div className="radar-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-[2px] border-costa-green/20" />
        <div className="radar-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border-[2px] border-costa-green/20" />
        <div className="radar-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border-[2px] border-costa-green/30" />
        <div className="radar-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full border-[2px] border-costa-green/40" />
      </div>

      {/* The World Map SVG */}
      <div className="relative w-full max-w-5xl mx-auto aspect-[950/620] opacity-80 transition-opacity duration-1000" style={{ opacity: mounted ? 1 : 0 }}>
        {/* High-res World Map Mask */}
        <div 
          className="absolute inset-0 w-full h-full bg-costa-green/40 dark:bg-costa-green/20"
          style={{ 
            WebkitMaskImage: 'url(/images/world-map.svg)', 
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            maskImage: 'url(/images/world-map.svg)',
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />

        {/* Global Markers */}
        {locations.map((loc, i) => (
          <div key={loc.id} className="absolute group z-20" style={{ top: loc.top, left: loc.left }}>
            
            {/* Pulsing Ripple Effect surrounding the dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 rounded-full bg-costa-green/20 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-12 md:h-12 rounded-full bg-costa-green/30" />
            
            {/* The Hard Dot - Distinct Color */}
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-bg-primary rounded-full shadow-[0_0_15px_rgba(13,107,61,0.7)] border-[3px] border-costa-green" />
            
            {/* Tooltip Label */}
            <div className={`absolute whitespace-nowrap px-3 py-1.5 bg-bg-elevated text-text-primary border border-glass-border text-[10px] font-bold tracking-widest uppercase rounded-lg opacity-0 transition-all duration-300 transform scale-90
              ${i === 0 ? "bottom-full mb-3 left-1/2 -translate-x-1/2" : ""}
              ${i === 1 ? "left-full ml-3 top-1/2 -translate-y-1/2" : ""}
              ${i === 2 ? "top-full mt-3 left-1/2 -translate-x-1/2" : ""}
              ${i === 3 ? "right-full mr-3 top-1/2 -translate-y-1/2" : ""}
              group-hover:opacity-100 group-hover:scale-100 cursor-default shadow-xl z-30`}>
              <span className="relative z-10">{loc.name}</span>
            </div>

            {/* Hover Trigger Box to make hitting the tooltip easier */}
            <div className="absolute -inset-8 z-10 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

