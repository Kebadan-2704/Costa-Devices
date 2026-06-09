"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// The actual microchip mesh
function ChipModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow constant rotation
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Body (Black Epoxy) */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[3, 0.4, 3]} />
        <meshStandardMaterial 
          color="#0f172a" 
          roughness={0.7} 
          metalness={0.2} 
        />
      </mesh>

      {/* Top Silicon/Circuit Detail */}
      <mesh position={[0, 0.21, 0]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial 
          color="#1e293b" 
          roughness={0.4} 
          metalness={0.8}
        />
      </mesh>

      {/* Glowing Center Logo / Node */}
      <mesh position={[0, 0.22, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshBasicMaterial color="#1aaf5d" toneMapped={false} />
      </mesh>
      
      {/* Surrounding Circuit Lines */}
      <mesh position={[0, 0.22, 0]}>
        <ringGeometry args={[0.7, 0.8, 4]} />
        <meshBasicMaterial color="#1aaf5d" toneMapped={false} transparent opacity={0.6} />
      </mesh>

      {/* Pins Generator */}
      {Array.from({ length: 8 }).map((_, i) => {
        const offset = -1.4 + i * 0.4;
        return (
          <group key={`pins-${i}`}>
            {/* Left Pins */}
            <mesh position={[-1.6, -0.1, offset]}>
              <boxGeometry args={[0.4, 0.1, 0.15]} />
              <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.2} />
            </mesh>
            {/* Right Pins */}
            <mesh position={[1.6, -0.1, offset]}>
              <boxGeometry args={[0.4, 0.1, 0.15]} />
              <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.2} />
            </mesh>
            {/* Top Pins */}
            <mesh position={[offset, -0.1, -1.6]}>
              <boxGeometry args={[0.15, 0.1, 0.4]} />
              <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.2} />
            </mesh>
            {/* Bottom Pins */}
            <mesh position={[offset, -0.1, 1.6]}>
              <boxGeometry args={[0.15, 0.1, 0.4]} />
              <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function Microchip3D() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 4, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PresentationControls
          global
          snap={true}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
            <ChipModel />
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
