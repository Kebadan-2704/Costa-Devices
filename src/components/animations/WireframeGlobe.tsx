"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";

function ComplexGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  // Generate random data nodes on the surface
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      const phi = Math.acos(-1 + (2 * i) / 40);
      const theta = Math.sqrt(40 * Math.PI) * phi;
      temp.push({
        x: 4.5 * Math.cos(theta) * Math.sin(phi),
        y: 4.5 * Math.sin(theta) * Math.sin(phi),
        z: 4.5 * Math.cos(phi),
      });
    }
    return temp;
  }, []);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.05;
      groupRef.current.rotation.x = t * 0.02;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.2;
      ring1Ref.current.rotation.y = t * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.15;
      ring2Ref.current.rotation.z = t * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.1;
      ring3Ref.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner solid core for occlusion and depth */}
      <mesh>
        <sphereGeometry args={[4.4, 64, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.95} />
      </mesh>

      {/* Primary high-tech wireframe grid */}
      <mesh>
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshBasicMaterial color="#1AAF5D" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Secondary geometric structure (Icosahedron) */}
      <lineSegments>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(4.55, 2)]} />
        <lineBasicMaterial color="#1AAF5D" transparent opacity={0.3} linewidth={1} />
      </lineSegments>

      {/* Orbiting Data Rings representing sub-24h logistics */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[5.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#2ED573" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[5.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#1AAF5D" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[6.5, 0.03, 16, 100]} />
        <meshBasicMaterial color="#2ED573" transparent opacity={0.2} />
      </mesh>

      {/* Data Nodes (glowing procurement hubs) */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <circleGeometry args={[0.08, 16]} />
          <meshBasicMaterial color="#1AAF5D" side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function WireframeGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply"
    >
      <div className="w-full h-full flex items-center justify-center scale-[0.9] md:scale-[1.2] translate-y-24 md:translate-y-24 md:translate-x-12">
        <Canvas camera={{ position: [0, 0, 11], fov: 50 }} frameloop={isInView ? "always" : "demand"}>
          <fog attach="fog" args={["#ffffff", 8, 16]} /> 
          <ComplexGlobe />
        </Canvas>
      </div>
    </motion.div>
  );
}
