"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";

function Particles({ count = 4000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  // Calculate golden spiral points on a sphere for perfectly even distribution
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; 
      const radius = Math.sqrt(1 - y * y); 
      const theta = phi * i; 
      
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      
      // Scale up the sphere radius to 4.5
      temp.push({ 
        x: x * 4.5, 
        y: y * 4.5, 
        z: z * 4.5,
        offset: Math.random() * Math.PI * 2 
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Smooth, slow rotation for the entire sphere
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    mesh.current.rotation.z = state.clock.getElapsedTime() * 0.05;

    // Optional: Add a subtle breathing effect to the points
    particles.forEach((particle, i) => {
      dummy.position.set(particle.x, particle.y, particle.z);
      
      // Tiny floating oscillation per point
      const wave = Math.sin(state.clock.elapsedTime * 2 + particle.offset) * 0.05;
      dummy.position.x += wave * (particle.x / 4.5);
      dummy.position.y += wave * (particle.y / 4.5);
      dummy.position.z += wave * (particle.z / 4.5);
      
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null as any, null as any, count]}>
      {/* Tiny circle geometries face the camera better than spheres for this effect */}
      <circleGeometry args={[0.015, 8]} />
      <meshBasicMaterial color="#0A8B46" transparent opacity={0.6} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

export default function ParticleSphere() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply"
    >
      <div className="w-full h-full scale-[1.5] md:scale-[1.2] translate-y-12 md:translate-y-24 translate-x-0 md:translate-x-12">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <fog attach="fog" args={["#ffffff", 8, 15]} /> {/* Fades the back of the sphere into white */}
          <Particles count={4000} />
        </Canvas>
      </div>
    </motion.div>
  );
}
