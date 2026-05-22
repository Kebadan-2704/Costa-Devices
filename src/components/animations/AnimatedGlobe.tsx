"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function AnimatedGlobe() {
  const globeEl = useRef<any>();
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [ringsData, setRingsData] = useState<any[]>([]);

  useEffect(() => {
    // Generate random arcs for the globe to simulate global supply chain/procurement routes
    const N = 15;
    const arcs = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['rgba(10, 139, 70, 0.4)', 'rgba(26, 175, 93, 0.8)'][Math.round(Math.random())]
    }));
    setArcsData(arcs);

    // Generate random rings for active nodes
    const rings = [...Array(10).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      maxR: Math.random() * 20 + 10,
      propagationSpeed: (Math.random() - 0.5) * 2 + 1,
      repeatPeriod: Math.random() * 2000 + 2000
    }));
    setRingsData(rings);

    // Auto-rotate the globe slowly - wait for controls to be ready
    const initControls = setInterval(() => {
      if (globeEl.current && globeEl.current.controls && globeEl.current.controls()) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 1.0;
        globeEl.current.controls().enableZoom = false;
        globeEl.current.pointOfView({ altitude: 2.2 });
        clearInterval(initControls);
      }
    }, 200);

    return () => clearInterval(initControls);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center mix-blend-multiply md:mix-blend-normal"
    >
      <div className="scale-[1.8] md:scale-[1.2] translate-y-12">
        <Globe
          ref={globeEl}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={2000}
          arcStroke={1}
          ringsData={ringsData}
          ringColor={() => '#0A8B46'}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          atmosphereColor="#0A8B46"
          atmosphereAltitude={0.15}
          width={1000}
          height={1000}
        />
      </div>
    </motion.div>
  );
}
