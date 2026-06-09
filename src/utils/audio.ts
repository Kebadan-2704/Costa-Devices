/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// Web Audio API utility to generate procedural industrial sound effects
// Zero dependencies, zero asset loading time, perfectly crisp.

export const playMechanicalClick = () => {
  if (typeof window === 'undefined') return;
  
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Square wave creates a harsh, mechanical tone
    osc.type = 'square';
    // Rapid pitch drop simulates the physical "thud" of a heavy industrial switch
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);
    
    // Very short decay (50ms)
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // Keep volume low/subtle
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Gracefully degrade if audio context is blocked by browser policy
    console.warn("Audio Context failed to initialize");
  }
};
