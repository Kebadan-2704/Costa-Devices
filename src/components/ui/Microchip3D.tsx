/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows, MeshTransmissionMaterial, Edges, Html } from "@react-three/drei";
import * as THREE from "three";

// Floating glowing data nodes inside the glass
function DataNodes({ count = 50 }) {
  // Use useState instead of useMemo to avoid calling impure Math.random() during render
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.7;
      const y = (Math.random() - 0.5) * 0.2;
      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * r;
    }
    return pos;
  });

  const points = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * -0.2;
    }
  });

  return (
    <points ref={points} position={[0, 0.25, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#10b981" toneMapped={false} transparent opacity={0.9} />
    </points>
  );
}

// Holographic projection logo
function HologramLogo() {
  const logoRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (logoRef.current) {
      // Gentle floating for the logo
      logoRef.current.position.y = 0.95 + Math.sin(t * 2.5) * 0.05;
    }
    if (beamRef.current) {
      // Flicker effect on the projection beam
      const mat = beamRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.08 + Math.sin(t * 15) * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Light beam projecting up from the core */}
      <mesh ref={beamRef} position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.8, 0.3, 0.6, 32, 1, true]} />
        <meshBasicMaterial 
          color="#10b981" 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </mesh>

      {/* Holographic Logo using Html for crisp SVG rendering */}
      <group ref={logoRef} position={[0, 0.95, 0]}>
        <Html transform center sprite scale={0.7} zIndexRange={[100, 0]}>
          <div 
            className="pointer-events-none" 
            style={{ 
              opacity: 0.9,
              filter: 'drop-shadow(0 0 12px #10b981) drop-shadow(0 0 24px #10b981)'
            }}
          >
            <img 
              src="/logos/costa-white.svg" 
              alt="Costa Devices Hologram" 
              style={{ width: '280px', height: 'auto', display: 'block' }} 
            />
          </div>
        </Html>
      </group>
    </group>
  );
}

function ChipModel() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating animation with continuous rotation
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.05;
      groupRef.current.rotation.y = t * 0.4;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
    }
    if (coreRef.current) {
       // Pulsing core intensity
       const mat = coreRef.current.material as THREE.MeshStandardMaterial;
       mat.emissiveIntensity = 1.2 + Math.sin(t * 3) * 0.8;
    }
  });

  return (
    <group ref={groupRef}>
      {/* ─── BASE SILICON BODY ─── */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.2, 3.2]} />
        <meshStandardMaterial 
          color="#0f172a" 
          roughness={0.4} 
          metalness={0.8} 
        />
        {/* Subtle grid edges for tech look */}
        <Edges scale={1} threshold={15} color="#1e293b" />
      </mesh>

      {/* ─── RAISED PLATFORM ─── */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.1, 2.2]} />
        <meshStandardMaterial 
          color="#1e293b" 
          roughness={0.6} 
          metalness={0.5} 
        />
      </mesh>

      {/* ─── GLOWING INNER CORE ─── */}
      <mesh position={[0, 0.12, 0]} ref={coreRef}>
        <boxGeometry args={[1.2, 0.02, 1.2]} />
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* ─── GLASS CASING (Holographic effect) ─── */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[1.8, 0.4, 1.8]} />
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.08}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
          transmission={0.95}
          roughness={0.1}
        />
      </mesh>

      {/* ─── DATA NODES INSIDE GLASS ─── */}
      <DataNodes />

      {/* ─── HOLOGRAPHIC PROJECTION TEXT ─── */}
      <HologramLogo />

      {/* ─── CORNER MOUNTING NODES ─── */}
      {[-1.3, 1.3].map((x) => 
        [-1.3, 1.3].map((z) => (
          <group key={`node-${x}-${z}`} position={[x, 0.05, z]}>
            <mesh>
              <cylinderGeometry args={[0.1, 0.1, 0.12, 16]} />
              <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.2} />
            </mesh>
            {/* Glowing dot in center of mounting node */}
            <mesh position={[0, 0.065, 0]} rotation={[-Math.PI / 2, 0, 0]}>
               <circleGeometry args={[0.04, 16]} />
               <meshBasicMaterial color="#34d399" toneMapped={false} />
            </mesh>
          </group>
        ))
      )}

      {/* ─── HIGH-DENSITY GOLD PINS ─── */}
      {Array.from({ length: 18 }).map((_, i) => {
        const offset = -2.55 + i * 0.3; // Distribute across edge
        return (
          <group key={`pins-${i}`}>
            {/* Left Pins */}
            {Math.abs(offset) < 1.5 && (
              <mesh position={[-1.75, -0.1, offset]}>
                <boxGeometry args={[0.3, 0.05, 0.1]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
              </mesh>
            )}
            {/* Right Pins */}
            {Math.abs(offset) < 1.5 && (
              <mesh position={[1.75, -0.1, offset]}>
                <boxGeometry args={[0.3, 0.05, 0.1]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
              </mesh>
            )}
            {/* Top Pins */}
            {Math.abs(offset) < 1.5 && (
              <mesh position={[offset, -0.1, -1.75]}>
                <boxGeometry args={[0.1, 0.05, 0.3]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
              </mesh>
            )}
            {/* Bottom Pins */}
            {Math.abs(offset) < 1.5 && (
              <mesh position={[offset, -0.1, 1.75]}>
                <boxGeometry args={[0.1, 0.05, 0.3]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.2} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* ─── GLOWING CIRCUIT RINGS ─── */}
      <mesh position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.7, 0.72, 32]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.5} toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.105, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.85, 0.86, 64]} />
        <meshBasicMaterial color="#059669" transparent opacity={0.3} toneMapped={false} />
      </mesh>
    </group>
  );
}

// Fallback component while loading HDRI
function Loader() {
  return (
    <Float floatIntensity={2} speed={2}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#10b981" wireframe />
      </mesh>
    </Float>
  );
}

export default function Microchip3D() {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing relative">
      <Canvas camera={{ position: [0, 2.8, 7], fov: 40 }} gl={{ antialias: true }}>
        <Suspense fallback={<Loader />}>
          {/* Soft, premium lighting */}
          <ambientLight intensity={0.6} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow shadow-mapSize={2048} color="#ffffff" />
          <pointLight position={[-10, 5, -10]} intensity={1} color="#10b981" />
          <pointLight position={[0, -5, 0]} intensity={0.5} color="#38bdf8" />

          {/* Environment map for realistic glass/metal reflections */}
          <Environment preset="city" />

          <PresentationControls
            global
            snap={true}
            rotation={[0.1, -0.4, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float rotationIntensity={0.2} floatIntensity={0.5} speed={1.5}>
              <ChipModel />
            </Float>
          </PresentationControls>

          {/* Realistic drop shadow */}
          <ContactShadows 
            position={[0, -1.8, 0]} 
            opacity={0.3} 
            scale={20} 
            blur={2.5} 
            far={4} 
            color="#0f172a"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

