"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedHardware() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Premium lighting tone mapping
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    if (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    const masterGroup = new THREE.Group();
    // Offset to the right so it doesn't block the main text on desktop
    masterGroup.position.x = width > 1024 ? 8 : (width > 768 ? 4 : 0);
    scene.add(masterGroup);

    // ============================================================
    // PREMIUM PBR MATERIALS (Physically Based Rendering)
    // These look incredibly sharp, heavy, and high-contrast on white
    // ============================================================
    const darkMetal = new THREE.MeshPhysicalMaterial({
      color: 0x0A0A0A,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    const greenMetal = new THREE.MeshPhysicalMaterial({
      color: 0x0A8B46,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0A8B46,
      emissiveIntensity: 0.4,
      clearcoat: 1.0,
    });

    const brightGreenGlass = new THREE.MeshPhysicalMaterial({
      color: 0x1AAF5D,
      metalness: 0.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
      transmission: 0.9,
      ior: 1.5,
    });

    // ============================================================
    // 1. THE CORE REACTOR
    // ============================================================
    const coreGroup = new THREE.Group();
    
    // Inner solid core
    const coreSolid = new THREE.Mesh(new THREE.IcosahedronGeometry(2.5, 1), darkMetal);
    coreGroup.add(coreSolid);

    // Outer glass/wireframe shell
    const coreShell = new THREE.Mesh(new THREE.IcosahedronGeometry(3.2, 2), brightGreenGlass);
    coreShell.material.wireframe = true;
    coreGroup.add(coreShell);
    
    masterGroup.add(coreGroup);

    // ============================================================
    // 2. HEAVY GYROSCOPIC RINGS
    // ============================================================
    const rings: { mesh: THREE.Mesh; speedX: number; speedY: number; speedZ: number }[] = [];
    
    const createRing = (radius: number, tube: number, speedX: number, speedY: number, speedZ: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 32, 100);
      const ring = new THREE.Mesh(ringGeo, darkMetal);
      
      // Add glowing nodes to the ring
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2;
        const node = new THREE.Mesh(new THREE.CylinderGeometry(tube * 1.5, tube * 1.5, tube * 3, 16), greenMetal);
        node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        node.rotation.z = angle + Math.PI / 2;
        ring.add(node);
      }
      
      masterGroup.add(ring);
      rings.push({ mesh: ring, speedX, speedY, speedZ });
    };

    // Inner, middle, outer rings with varying thickness
    createRing(6.0, 0.3, 0.4, 0.2, 0.1);
    createRing(8.5, 0.2, -0.2, 0.5, -0.3);
    createRing(11.0, 0.15, 0.1, -0.3, 0.4);

    // ============================================================
    // 3. ORBITAL MICROCHIPS (The Supply Chain Data Belt)
    // ============================================================
    const chipsGroup = new THREE.Group();
    const chips: { mesh: THREE.Mesh; angle: number; radius: number; speed: number; yOffset: number }[] = [];
    
    const chipGeo = new THREE.BoxGeometry(0.8, 0.15, 0.5);
    const largeChipGeo = new THREE.BoxGeometry(1.2, 0.2, 0.8);
    
    for (let i = 0; i < 80; i++) {
      const isGreen = Math.random() > 0.85;
      const isLarge = Math.random() > 0.9;
      
      const chip = new THREE.Mesh(
        isLarge ? largeChipGeo : chipGeo, 
        isGreen ? greenMetal : darkMetal
      );
      
      const angle = Math.random() * Math.PI * 2;
      const radius = 13 + Math.random() * 6;
      const speed = 0.1 + Math.random() * 0.4;
      const yOffset = (Math.random() - 0.5) * 8;
      
      chip.position.set(
        Math.cos(angle) * radius,
        yOffset,
        Math.sin(angle) * radius
      );
      
      // Chips face the center
      chip.lookAt(0, yOffset, 0);
      
      chipsGroup.add(chip);
      chips.push({ mesh: chip, angle, radius, speed, yOffset });
    }
    masterGroup.add(chipsGroup);

    // ============================================================
    // LIGHTING (Creates the premium studio-lit look)
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // Key light (strong, creates sharp highlights)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.0);
    keyLight.position.set(10, 20, 15);
    scene.add(keyLight);

    // Fill light (softer, fills in shadows)
    const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
    fillLight.position.set(-15, -10, -15);
    scene.add(fillLight);

    // Internal core glow (illuminates the inner edges of the rings)
    const coreLight = new THREE.PointLight(0x1AAF5D, 80, 25);
    coreLight.position.set(0, 0, 0);
    masterGroup.add(coreLight);

    // ============================================================
    // MOUSE TRACKING
    // ============================================================
    const handleMouseMove = (e: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouseRef.current.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ============================================================
    // ANIMATION LOOP
    // ============================================================
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.005;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Base rotation + Mouse parallax
      masterGroup.rotation.y = mouseRef.current.x * 0.2;
      masterGroup.rotation.x = mouseRef.current.y * 0.2;

      // Core pulses
      coreSolid.rotation.y = time * 0.5;
      coreSolid.rotation.x = time * 0.3;
      coreShell.rotation.y = -time * 0.4;
      
      const pulse = 1 + Math.sin(time * 4) * 0.05;
      coreGroup.scale.set(pulse, pulse, pulse);
      coreLight.intensity = 80 + Math.sin(time * 8) * 20;

      // Rotate rings
      rings.forEach((ring) => {
        ring.mesh.rotation.x = time * ring.speedX;
        ring.mesh.rotation.y = time * ring.speedY;
        ring.mesh.rotation.z = time * ring.speedZ;
      });

      // Orbit chips
      chips.forEach((chip) => {
        chip.angle += chip.speed * 0.01;
        
        // Add subtle floating bob
        const floatY = chip.yOffset + Math.sin(time * 2 + chip.angle) * 0.5;
        
        chip.mesh.position.set(
          Math.cos(chip.angle) * chip.radius,
          floatY,
          Math.sin(chip.angle) * chip.radius
        );
        
        // Keep chips facing the center orbit
        chip.mesh.lookAt(0, floatY, 0);
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Handle Resize ---
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      // Update offset on resize
      masterGroup.position.x = newWidth > 1024 ? 8 : (newWidth > 768 ? 4 : 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) child.material.dispose();
        }
      });
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full absolute inset-0 pointer-events-none" />;
}
