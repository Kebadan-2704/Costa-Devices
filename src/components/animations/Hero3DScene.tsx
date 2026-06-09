"use client";

import { useEffect, useRef, useCallback } from "react";

// ============================================
// PREMIUM ANIMATED CIRCUIT NETWORK BACKGROUND
// Inspired by: Isometric 3D glow-path aesthetic
// Uses Costa Green palette with subtle glow FX
// ============================================

interface Node {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  glowIntensity: number;
  type: "hub" | "node" | "endpoint";
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
  width: number;
  delay: number;
  active: boolean;
  pulsePos: number;
  pulseSpeed: number;
}

interface FloatingParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export default function Hero3DScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const particlesRef = useRef<FloatingParticle[]>([]);
  const timeRef = useRef(0);

  const COSTA_GREEN = "#1AAF5D";
  const COSTA_GREEN_LIGHT = "#2ED573";
  const COSTA_GREEN_GLOW = "rgba(26, 175, 93, 0.15)";

  // Initialize network
  const initNetwork = useCallback((w: number, h: number) => {
    const nodes: Node[] = [];
    const connections: Connection[] = [];
    const particles: FloatingParticle[] = [];

    // Create hub nodes (larger, central)
    const hubPositions = [
      { x: w * 0.5, y: h * 0.35 },
      { x: w * 0.25, y: h * 0.55 },
      { x: w * 0.75, y: h * 0.55 },
      { x: w * 0.15, y: h * 0.3 },
      { x: w * 0.85, y: h * 0.3 },
    ];

    hubPositions.forEach((pos) => {
      nodes.push({
        x: pos.x,
        y: pos.y,
        radius: 6 + Math.random() * 4,
        baseRadius: 6 + Math.random() * 4,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.5 + Math.random() * 0.5,
        glowIntensity: 0.8 + Math.random() * 0.2,
        type: "hub",
      });
    });

    // Create satellite nodes
    const nodeCount = 35;
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2 + Math.random() * 0.5;
      const dist = 80 + Math.random() * Math.min(w, h) * 0.35;
      const cx = w * 0.5 + Math.cos(angle) * dist * (0.8 + Math.random() * 0.4);
      const cy = h * 0.42 + Math.sin(angle) * dist * 0.6;

      if (cx > -50 && cx < w + 50 && cy > -50 && cy < h + 50) {
        nodes.push({
          x: cx,
          y: cy,
          radius: 2 + Math.random() * 3,
          baseRadius: 2 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.3 + Math.random() * 0.7,
          glowIntensity: 0.3 + Math.random() * 0.5,
          type: Math.random() > 0.5 ? "node" : "endpoint",
        });
      }
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      const maxConnections = nodes[i].type === "hub" ? 6 : 2;
      let connCount = 0;

      // Sort other nodes by distance
      const distances = nodes
        .map((n, j) => ({ idx: j, dist: Math.hypot(n.x - nodes[i].x, n.y - nodes[i].y) }))
        .filter((d) => d.idx !== i && d.dist < 300)
        .sort((a, b) => a.dist - b.dist);

      for (const d of distances) {
        if (connCount >= maxConnections) break;
        // Avoid duplicate connections
        const exists = connections.some(
          (c) => (c.from === i && c.to === d.idx) || (c.from === d.idx && c.to === i)
        );
        if (!exists) {
          connections.push({
            from: i,
            to: d.idx,
            progress: 0,
            speed: 0.002 + Math.random() * 0.003,
            width: nodes[i].type === "hub" || nodes[d.idx].type === "hub" ? 1.5 : 0.8,
            delay: Math.random() * 200,
            active: Math.random() > 0.3,
            pulsePos: Math.random(),
            pulseSpeed: 0.003 + Math.random() * 0.005,
          });
          connCount++;
        }
      }
    }

    // Create floating ambient particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;
    particlesRef.current = particles;
  }, []);

  // Draw glowing line between two points
  const drawGlowLine = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      width: number,
      opacity: number,
      glowSize: number
    ) => {
      // Outer glow
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(26, 175, 93, ${opacity * 0.15})`;
      ctx.lineWidth = width + glowSize;
      ctx.lineCap = "round";
      ctx.stroke();

      // Mid glow
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(26, 175, 93, ${opacity * 0.3})`;
      ctx.lineWidth = width + glowSize * 0.5;
      ctx.stroke();

      // Core line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(46, 213, 115, ${opacity * 0.6})`;
      ctx.lineWidth = width;
      ctx.stroke();
    },
    []
  );

  // Draw a glowing node
  const drawGlowNode = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, intensity: number, type: string) => {
      // Outer glow halo
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * (type === "hub" ? 8 : 5));
      gradient.addColorStop(0, `rgba(26, 175, 93, ${intensity * 0.25})`);
      gradient.addColorStop(0.4, `rgba(26, 175, 93, ${intensity * 0.08})`);
      gradient.addColorStop(1, "rgba(26, 175, 93, 0)");

      ctx.beginPath();
      ctx.arc(x, y, radius * (type === "hub" ? 8 : 5), 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Mid ring
      ctx.beginPath();
      ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(26, 175, 93, ${intensity * 0.12})`;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      coreGrad.addColorStop(0, `rgba(46, 213, 115, ${intensity})`);
      coreGrad.addColorStop(1, `rgba(26, 175, 93, ${intensity * 0.7})`);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Bright center spot
      if (type === "hub") {
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${intensity * 0.8})`;
        ctx.fill();
      }
    },
    []
  );

  // Draw pulse traveling along a connection
  const drawPulse = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      pos: number,
      intensity: number
    ) => {
      const px = x1 + (x2 - x1) * pos;
      const py = y1 + (y2 - y1) * pos;

      const grad = ctx.createRadialGradient(px, py, 0, px, py, 12);
      grad.addColorStop(0, `rgba(46, 213, 115, ${intensity * 0.9})`);
      grad.addColorStop(0.3, `rgba(26, 175, 93, ${intensity * 0.4})`);
      grad.addColorStop(1, "rgba(26, 175, 93, 0)");

      ctx.beginPath();
      ctx.arc(px, py, 12, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Bright core
      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${intensity * 0.9})`;
      ctx.fill();
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      initNetwork(rect.width, rect.height);
    };

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    let resizeObserver: ResizeObserver;
    if (canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => resizeCanvas());
      resizeObserver.observe(canvas.parentElement);
    }

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      timeRef.current += 1;
      const t = timeRef.current;

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const particles = particlesRef.current;

      // Subtle mouse parallax offset
      const mx = (mouseRef.current.x - 0.5) * 15;
      const my = (mouseRef.current.y - 0.5) * 10;

      // 1. Draw ambient floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += 0.02;

        // Wrap around
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const pulseOpacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulsePhase));
        ctx.beginPath();
        ctx.arc(p.x + mx * 0.3, p.y + my * 0.3, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 175, 93, ${pulseOpacity})`;
        ctx.fill();
      });

      // 2. Draw connections with glow
      connections.forEach((conn) => {
        if (!conn.active) return;

        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        if (!fromNode || !toNode) return;

        const x1 = fromNode.x + mx * 0.5;
        const y1 = fromNode.y + my * 0.5;
        const x2 = toNode.x + mx * 0.5;
        const y2 = toNode.y + my * 0.5;

        // Base opacity with subtle breathing
        const baseOpacity = 0.15 + 0.08 * Math.sin(t * 0.01 + conn.delay * 0.01);
        drawGlowLine(ctx, x1, y1, x2, y2, conn.width, baseOpacity, 6);

        // Traveling pulse
        conn.pulsePos += conn.pulseSpeed;
        if (conn.pulsePos > 1) conn.pulsePos = 0;

        const pulseIntensity = 0.4 + 0.3 * Math.sin(t * 0.02);
        drawPulse(ctx, x1, y1, x2, y2, conn.pulsePos, pulseIntensity);
      });

      // 3. Draw nodes with glow
      nodes.forEach((node) => {
        node.pulsePhase += node.pulseSpeed * 0.02;
        const pulse = Math.sin(node.pulsePhase) * 0.3;
        node.radius = node.baseRadius * (1 + pulse * 0.3);

        const nx = node.x + mx * (node.type === "hub" ? 0.6 : 0.4);
        const ny = node.y + my * (node.type === "hub" ? 0.6 : 0.4);

        drawGlowNode(ctx, nx, ny, node.radius, node.glowIntensity * (0.7 + pulse * 0.3), node.type);
      });

      // 4. Draw concentric wave rings from center hub
      const centerX = w * 0.5 + mx;
      const centerY = h * 0.35 + my;
      for (let ring = 0; ring < 4; ring++) {
        const baseRadius = 60 + ring * 80;
        const waveRadius = baseRadius + Math.sin(t * 0.015 + ring * 0.8) * 15;
        const waveOpacity = 0.03 - ring * 0.006;
        if (waveOpacity <= 0) continue;

        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(26, 175, 93, ${waveOpacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [initNetwork, drawGlowLine, drawGlowNode, drawPulse]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.7 }}
      />
      {/* Ambient gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(26, 175, 93, 0.06), transparent 70%)",
        }}
      />
    </div>
  );
}
