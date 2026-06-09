"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function LogisticsGlobe() {
  const globeRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateSize = () => {
      // Responsive sizing
      const width = Math.min(window.innerWidth - 48, 550);
      setDimensions({ width, height: width });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.0;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.2 });
    }
  }, [isMounted]);

  const arcsData = [
    { startLat: 22.5431, startLng: 114.0579, endLat: 37.7749, endLng: -122.4194 }, // Shenzhen to SF
    { startLat: 25.0330, startLng: 121.5654, endLat: 40.7128, endLng: -74.0060 }, // Taipei to NY
    { startLat: 30.2672, startLng: -97.7431, endLat: 51.5074, endLng: -0.1278 }, // Austin to London
    { startLat: 35.6762, startLng: 139.6503, endLat: 48.8566, endLng: 2.3522 }, // Tokyo to Paris
    { startLat: 48.1351, startLng: 11.5820, endLat: 1.3521, endLng: 103.8198 }, // Munich to Singapore
  ];

  if (!isMounted) return <div className="w-[500px] h-[500px] bg-gray-50 animate-pulse rounded-full" />;

  return (
    <div className="flex justify-center items-center cursor-grab active:cursor-grabbing w-full relative z-10">
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#1AAF5D"
        atmosphereAltitude={0.15}
        arcsData={arcsData}
        arcColor={() => "#1AAF5D"}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        arcStroke={1.5}
      />
    </div>
  );
}
