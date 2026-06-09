
"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Zap, ArrowUpRight, ArrowUp, CheckCircle2, Clock, Search, Activity } from "lucide-react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import TechBackground from "@/components/ui/TechBackground";
import LogisticsGlobe from "@/components/ui/LogisticsGlobe";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import MarketIntelligence from "@/components/ui/MarketIntelligence";
import BOMUploadZone from "@/components/ui/BOMUploadZone";
import Microchip3D from "@/components/ui/Microchip3D";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax text
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-hidden" ref={containerRef}>
      
      {/* Spacer for fixed Navbar + Ticker */}
      <div className="pt-[116px] lg:pt-[132px]"></div>

      {/* 1. HERO — Split Layout (Text Left, Premium Search Right) */}
      <section className="relative w-full pt-6 pb-16 lg:pt-8 lg:pb-20 overflow-hidden border-b border-gray-100">
        
        {/* Stunning Animated Enterprise Background */}
        <TechBackground />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
          
          {/* Split Content: Text Left, Search Right — perfectly vertically centered */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20 min-h-[58vh] py-4 lg:pt-12">
            
            {/* ─── LEFT COLUMN: Text Content ─── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-start text-left flex-shrink-0 lg:w-[52%]"
            >
              {/* Badge — slides down with a bounce */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dcfce7] border border-costa-green/30 text-[10px] font-bold text-costa-green tracking-[0.2em] uppercase w-fit mb-7 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-costa-green animate-pulse"></span>
                Global Sourcing Network
              </motion.div>

              {/* Headline — each word animates in with blur+scale */}
              <h1 className="font-heading text-[clamp(3rem,5.5vw,5.2rem)] font-black leading-[1.0] tracking-tight text-[#0f172a] mb-6">
                {['The', 'Enterprise'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {['Standard', 'for'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <span className="relative inline-block mt-1">
                  <motion.span
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-costa-green"
                  >
                    Sourcing.
                  </motion.span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-costa-green to-emerald-400 rounded-full origin-left"
                  />
                </span>
              </h1>

              {/* Sub-headline — fades up with slight delay */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                className="text-[#64748b] text-base md:text-lg font-normal leading-[1.75] max-w-lg mb-10"
              >
                Direct access to 1B+ verified components. Avoid line-downs and secure obsolete parts globally with our algorithmic sourcing infrastructure.
              </motion.p>

              {/* Trust indicators — each badge staggers in */}
              <div className="flex flex-wrap items-center gap-6 mb-10">
                {[
                  { icon: <ShieldCheck size={14} />, label: "AS6081 Certified" },
                  { icon: <CheckCircle2 size={14} />, label: "ISO 9001:2015" },
                  { icon: <Zap size={14} />, label: "1B+ Components" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-2 text-[#64748b]"
                  >
                    <span className="text-costa-green">{item.icon}</span>
                    <span className="text-xs font-bold tracking-wider uppercase">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* BOM Drag & Drop Zone */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 w-full max-w-md"
              >
                <BOMUploadZone />
              </motion.div>
            </motion.div>

            {/* ─── RIGHT COLUMN: Premium Search Console — FLOATING ─── */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 lg:w-[44%] w-full relative"
            >
              {/* Perpetual floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Animated glow halo — pulses gently */}
                <motion.div
                  animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -inset-6 bg-gradient-to-br from-costa-green/20 via-emerald-300/15 to-teal-300/10 rounded-[3rem] blur-3xl"
                ></motion.div>

                {/* Main Card */}
                <div className="relative bg-white border border-gray-100 rounded-[2rem] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(26,175,93,0.06)] overflow-hidden">
                  
                  {/* Animated top accent bar — shimmer effect */}
                  <div className="h-1 w-full bg-gradient-to-r from-costa-green via-emerald-400 to-teal-400 relative overflow-hidden">
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />
                  </div>
                  
                  <div className="p-8 md:p-10">
                    
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-7">
                      <div className="flex items-center gap-3">
                        {/* Icon with rotation on mount */}
                        <motion.div
                          initial={{ rotate: -15, scale: 0.7, opacity: 0 }}
                          animate={{ rotate: 0, scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-costa-green to-emerald-500 flex items-center justify-center shadow-lg shadow-costa-green/30"
                        >
                          <Zap size={18} className="text-white" />
                        </motion.div>
                        <div>
                          <p className="font-black text-[#0f172a] text-sm tracking-widest uppercase">Algorithmic Search</p>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-costa-green animate-pulse"></span>
                            {/* Animated live counter text */}
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                              className="text-[10px] font-bold text-costa-green uppercase tracking-[0.2em]"
                            >
                              Network Active · 1,402 Suppliers
                            </motion.span>
                          </div>
                        </div>
                      </div>
                      {/* Animated signal bars — each bar animates independently */}
                      <div className="flex items-end gap-1">
                        {[3, 5, 7].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ height: `${h * 4}px`, transformOrigin: 'bottom' }}
                            className={`w-1.5 rounded-full ${i === 2 ? 'bg-costa-green' : i === 1 ? 'bg-emerald-300' : 'bg-gray-200'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Search Input */}
                    <motion.form
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      onSubmit={handleSearch}
                      className="mb-3"
                    >
                      <div className="relative flex items-center bg-[#f8fafc] border-2 border-gray-100 rounded-xl px-4 py-3 mb-3 focus-within:border-costa-green focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(26,175,93,0.08)] transition-all duration-200 group">
                        <Search size={18} className="text-gray-400 mr-3 flex-shrink-0 group-focus-within:text-costa-green transition-colors" />
                        <input 
                          type="text" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Part number, manufacturer, or keyword..." 
                          className="flex-1 bg-transparent border-none outline-none text-[#0f172a] text-base placeholder:text-[#94a3b8] placeholder:font-normal font-semibold"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2.5 bg-[#0f172a] text-white py-3.5 px-6 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-costa-green transition-all duration-300 shadow-xl shadow-gray-900/15 hover:shadow-costa-green/30 group"
                      >
                        <Search size={16} className="group-hover:scale-110 transition-transform" />
                        Scan Global Inventory
                      </motion.button>
                    </motion.form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                      <div className="flex-1 h-px bg-gray-100"></div>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Trending</span>
                      <div className="flex-1 h-px bg-gray-100"></div>
                    </div>

                    {/* Trending Tags — each one staggers in */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'Microcontrollers', count: '2.4M+' },
                        { label: 'FPGAs', count: '180K+' },
                        { label: 'Connectors', count: '4.1M+' },
                        { label: 'IGBTs', count: '620K+' },
                        { label: 'Capacitors', count: '8.2M+' },
                      ].map((tag, i) => (
                        <motion.button
                          key={tag.label}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.85 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          onClick={() => router.push(`/search?q=${tag.label}`)}
                          className="group flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg hover:bg-costa-green/5 hover:border-costa-green/30 cursor-pointer transition-all duration-200"
                        >
                          <span className="text-[11px] font-semibold text-[#64748b] group-hover:text-costa-green transition-colors">{tag.label}</span>
                          <span className="text-[9px] font-bold text-gray-300 group-hover:text-costa-green/50 transition-colors">{tag.count}</span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Bottom stat strip — each stat counts up */}
                    <div className="mt-7 pt-5 border-t border-gray-100 grid grid-cols-3 gap-4">
                      {[
                        { value: '< 4h', label: 'RFQ Response' },
                        { value: '99.99%', label: 'Uptime' },
                        { value: '100%', label: 'Quality Pass' },
                      ].map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 + i * 0.1, duration: 0.5 }}
                          className="text-center"
                        >
                          <p className="font-black text-[#0f172a] text-lg tracking-tight">{stat.value}</p>
                          <p className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-widest mt-0.5">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="mt-24 relative max-w-6xl mx-auto"
          >
            {/* Soft shadow glow behind video */}
            <div className="absolute -inset-2 bg-gradient-to-r from-costa-green/20 via-teal-500/15 to-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-60"></div>
            
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] bg-gray-900 group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              >
                <source src="/videos/Intro.mp4" type="video/mp4" />
              </video>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10"></div>

              {/* Live Feed Badge */}
              <div className="absolute top-5 left-5 md:top-7 md:left-7 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                Live Feed
              </div>

              {/* Trust Badges */}
              <div className="absolute top-5 right-5 md:top-7 md:right-7 z-10 sm:flex gap-2 hidden">
                {['AS6081', 'ISO 9001'].map((badge) => (
                  <div key={badge} className="px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-costa-green" />
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid overlapping the video container */}
            <div className="relative z-20 max-w-5xl mx-auto -mt-8 md:-mt-14 px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { label: "Global Uptime", value: "99.99%", desc: "Sourcing Network", icon: <Zap size={16} className="text-costa-green" /> },
                  { label: "Avg. Turnaround", value: "< 4 Hrs", desc: "RFQ Response", icon: <Clock size={16} className="text-costa-green" /> },
                  { label: "Active Suppliers", value: "1,402", desc: "Franchised", icon: <ArrowUpRight size={16} className="text-costa-green" /> },
                  { label: "Quality Pass", value: "100%", desc: "AS6081 Inspected", icon: <ShieldCheck size={16} className="text-costa-green" /> }
                ].map((metric, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                    className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-xl shadow-gray-900/8 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="p-1.5 rounded-lg bg-costa-green/8 border border-costa-green/10">
                        {metric.icon}
                      </div>
                      <p className="text-[8px] text-gray-400 font-bold tracking-[0.15em] uppercase">{metric.label}</p>
                    </div>
                    <p className="font-heading text-2xl font-black text-gray-900 tracking-tight mb-0.5 group-hover:text-costa-green transition-colors">{metric.value}</p>
                    <p className="text-[9px] text-costa-green font-bold tracking-widest uppercase">{metric.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 1.5 DEEP-TECH HARDWARE LAYER (Market Intel & 3D Microchip) */}
      <section className="relative overflow-hidden py-24 bg-white text-gray-900 border-y border-gray-100">
        
        {/* Subtle grid bg for light section */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-costa-green/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Market Intelligence Widget */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-costa-green/10 border border-costa-green/20 text-[10px] font-bold text-costa-green tracking-[0.2em] uppercase w-fit mb-4">
                  <Activity size={12} />
                  Live Component Data
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-4 text-gray-900">
                  Algorithmic Market Intelligence.
                </h2>
                <p className="text-gray-600 font-medium">
                  We don't guess. We scrape global spot markets, OEM excess inventory, and franchised lines to give you real-time visibility into lead times, price trends, and availability.
                </p>
              </div>
              
              <MarketIntelligence />
            </motion.div>

            {/* Right: Interactive 3D Microchip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[500px] rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-costa-green animate-pulse"></span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Interactive 3D Model</span>
              </div>
              <div className="absolute inset-0 z-10 pointer-events-auto">
                <Microchip3D />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF — Bold marquee */}
      <section className="relative overflow-hidden py-16 border-y border-gray-100" style={{ background: 'linear-gradient(135deg, #f0fdf8 0%, #ffffff 35%, #f7fffe 65%, #edfcf5 100%)' }}>

        {/* ── BG Layer 1: Fine grid lines ── */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sp-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(26,175,93,0.06)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sp-grid)"/>
        </svg>

        {/* ── BG Layer 2: Soft glowing orbs ── */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(26,175,93,0.08) 0%, transparent 65%)' }}></div>
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 65%)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)' }}></div>

        {/* Left + Right fade masks — matched to bg */}
        <div className="absolute inset-y-0 left-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f0fdf8, transparent)' }}></div>
        <div className="absolute inset-y-0 right-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #edfcf5, transparent)' }}></div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 text-center mb-12 px-6"
        >
          <p className="text-[10px] font-bold text-costa-green tracking-[0.3em] uppercase mb-2">Vetted Partner Network</p>
          <p className="text-2xl font-black text-gray-900 tracking-tight">Trusted by the Best in the Industry</p>
        </motion.div>

        {/* ROW 1 — Manufacturers scrolling left — BOLD */}
        <div className="relative z-10 mb-6">
          <Marquee speed="normal" direction="left" className="overflow-y-hidden">
            {["NVIDIA", "EATON", "INTEL", "TEXAS INSTRUMENTS", "STMICROELECTRONICS", "ABB", "SCHNEIDER", "INFINEON", "NXP", "RENESAS", "MICROCHIP"].map((brand, idx) => (
              <div key={idx} className="flex items-center mx-8">
                <span className="text-2xl md:text-3xl font-black text-gray-500 uppercase tracking-tight hover:text-costa-green transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                  {brand}
                </span>
                <span className="ml-8 w-2 h-2 rounded-full bg-costa-green/30 flex-shrink-0"></span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* ROW 2 — Clients scrolling right */}
        <div className="relative z-10">
          <Marquee speed="slow" direction="right" className="overflow-y-hidden">
            {["Ather Energy", "Ola Electric", "Foxconn", "HP", "Kaynes Technology", "GIGA", "Biosense Webster", "Uno Minda", "CoreCentric Solutions", "Bosch", "Siemens"].map((client, idx) => (
              <div key={idx} className="flex items-center mx-8">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-costa-green transition-colors duration-300 cursor-default select-none whitespace-nowrap">
                  {client}
                </span>
                <span className="ml-8 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-10 flex items-center justify-center gap-0 mt-12 border-t border-gray-100/80 pt-8"
        >
          {[
            { value: "1,402", label: "Active Suppliers" },
            { value: "1B+", label: "Components Sourced" },
            { value: "50+", label: "Countries" },
            { value: "15+", label: "Years Experience" },
          ].map((s, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <span className="w-px h-8 bg-gray-200 mx-8"></span>}
              <div className="text-center">
                <p className="text-xl font-black text-gray-900">{s.value}</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.18em] mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. PERFORMANCE STATS */}
      <section className="py-24 bg-[#fafafa] relative z-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
              <AnimatedNumber value={15} />
              <span className="text-costa-green ml-1">+</span>
            </div>
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Years Experience</p>
          </div>
          <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
              <AnimatedNumber value={500} />
              <span className="text-costa-green ml-1">+</span>
            </div>
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Global Partners</p>
          </div>
          <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
              <AnimatedNumber value={99} />
              <span className="text-costa-green ml-1">%</span>
            </div>
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Quality Pass Rate</p>
          </div>
          <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
              <AnimatedNumber value={24} />
              <span className="text-costa-green ml-1">/7</span>
            </div>
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Global Support</p>
          </div>
        </div>
      </section>


      {/* 4. TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-6 text-xs font-mono font-bold text-gray-300 tracking-widest uppercase z-10 bg-white px-2 py-2">Client Trust</div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-l-4 border-costa-green pl-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-gray-900">
                TRUSTED <span className="text-costa-green">GLOBALLY</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl font-medium">Hear from engineering leads and procurement managers at top-tier OEMs who rely on Costa Devices for mission-critical sourcing.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#fafafa] border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative group hover:border-costa-green/30">
              <div className="text-costa-green mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z" /></svg>
              </div>
              <p className="text-gray-700 font-medium mb-8 leading-relaxed">&ldquo;Costa Devices was able to secure 10,000 obsolete IGBT modules for our legacy wind turbine controllers when franchised distributors quoted a 52-week lead time. Their lab testing reports gave us 100% confidence.&rdquo;</p>
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <p className="font-bold text-sm text-gray-900">Procurement Lead</p>
                <p className="text-xs text-costa-green font-bold uppercase tracking-wider mt-1">Ather Energy</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-costa-green border border-costa-green p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(26,175,93,0.2)] transition-all duration-300 relative group transform md:-translate-y-4">
              <div className="text-white mb-6 opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z" /></svg>
              </div>
              <p className="text-white font-medium mb-8 leading-relaxed text-lg">&ldquo;The level of technical expertise is unmatched. We needed a drop-in replacement for a critical Eaton Bussmann EV fuse for our new charger line. Costa provided the parts in 3 days with complete traceability.&rdquo;</p>
              <div className="border-t border-white/20 pt-6 mt-auto">
                <p className="font-bold text-sm text-white">Supply Chain Manager</p>
                <p className="text-xs text-emerald-100 uppercase font-bold tracking-wider mt-1">Kaynes Technology</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#fafafa] border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative group hover:border-costa-green/30">
              <div className="text-costa-green mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z" /></svg>
              </div>
              <p className="text-gray-700 font-medium mb-8 leading-relaxed">&ldquo;We consolidated our fuse and contactor sourcing with Costa Devices and reduced shipping costs by 35%. Their combined shipping program is a game-changer for our production line.&rdquo;</p>
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <p className="font-bold text-sm text-gray-900">VP of Operations</p>
                <p className="text-xs text-costa-green uppercase font-bold tracking-wider mt-1">GIGA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES & INFRASTRUCTURE (BENTO GRID UPGRADE) */}
      <section id="divisions" className="py-24 bg-[#fafafa] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-l-4 border-gray-900 pl-6">
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-gray-900">
              CAPABILITIES &<br />INFRASTRUCTURE
            </h2>
            <p className="text-sm mt-4 text-gray-500 uppercase tracking-widest">
              System Architecture — Global Logistics
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]"
          >

            {/* Box 1: Sourcing */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-8 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="text-sm text-gray-500 font-bold tracking-[0.2em] uppercase bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100">01 — Global Sourcing</div>
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-costa-green group-hover:text-white group-hover:border-costa-green transition-all duration-300 shadow-sm bg-white">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </div>
              </div>
              <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/circuit-protection.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="relative z-10 mt-auto">
                <h3 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight group-hover:text-costa-green transition-colors duration-300 text-gray-900">Active & Obsolete Parts</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg font-medium">
                  Direct access to franchised lines, OEMs, and EMS excess inventory. Specialized in EOL (End-of-Life) components.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Quality */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-4 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,175,93,0.05),transparent_70%)] group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
              <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/transformers.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

              <div className="text-sm text-costa-green font-bold tracking-[0.2em] uppercase bg-costa-green/5 px-4 py-1.5 rounded-full w-fit relative z-10 border border-costa-green/20">02 — QA LAB</div>

              <div className="relative z-10 mt-auto">
                <h3 className="font-heading text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 group-hover:-translate-y-2 transition-transform duration-300">Counterfeit Detection</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mb-2 group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                  <span className="text-costa-green font-bold">AS6081 Certified</span> • X-Ray
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-widest group-hover:-translate-y-2 transition-transform duration-300 delay-100">Decapsulation & Visual Insp.</p>
              </div>
            </motion.div>

            {/* Box 3: Speed */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-4 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,175,93,0.05),transparent_70%)] group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
              <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/industries/power-distribution.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="text-sm text-costa-green font-bold tracking-[0.2em] uppercase bg-costa-green/5 px-4 py-1.5 rounded-full w-fit border border-costa-green/20 relative z-10">03 — SPEED</div>

              <div className="relative z-10 mt-auto">
                <h3 className="font-heading text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 group-hover:translate-x-2 transition-transform duration-300">Sub-24h Dispatch</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  AOG (Aircraft on Ground) and Line-Down specialist response times.
                </p>
              </div>
            </motion.div>

            {/* Box 4: Global */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-8 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(26,175,93,0.1)] hover:border-costa-green/30"
            >
              <div className="text-sm text-gray-500 font-bold tracking-[0.2em] uppercase bg-gray-50 px-4 py-1.5 rounded-full border border-gray-100 w-fit relative z-10">04 — GLOBAL REACH</div>

              <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/industries/industrial-automation.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none w-2/3 h-full z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(26,175,93,1) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>

              {/* The Interactive Globe */}
              <div className="absolute right-[-100px] top-[-50px] md:top-[-100px] opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-75 md:scale-100 origin-top-right">
                <LogisticsGlobe />
              </div>

              <div className="relative z-10 max-w-sm mt-auto">
                <h3 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900 group-hover:translate-y-[-5px] transition-transform duration-300">Secure Supply Chain</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed group-hover:translate-y-[-5px] transition-transform duration-300 delay-75">
                  Vetted Tier-1 vendors only. Full traceability and ISO 9001:2015 compliance on every single order.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. PROCUREMENT PROTOCOL (ELITE UPGRADE) */}
      <section className="py-32 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">

        {/* Soft ambient glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-costa-green/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, black 39px, black 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, black 39px, black 40px)' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-24 md:w-1/2">
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
              The Protocol.
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-widest leading-relaxed">
              Our military-grade process for securing obsolete components when OEM supply chains fail.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              { num: "01", title: "DISCOVERY", desc: "Share BOM requirements. Real-time global availability assessment across 50+ data sources." },
              { num: "02", title: "SOURCING", desc: "Algorithmic scan of franchised, OEM excess, and spot markets globally." },
              { num: "03", title: "VERIFICATION", desc: "AS6081 testing: 200x magnification, XRF, decapsulation, and heated solvent testing." },
              { num: "04", title: "DISPATCH", desc: "Class 1 ESD-safe packaging. Certificate of Conformance included. Sub-24h global dispatch." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-8 md:p-10 bg-white border border-gray-200 rounded-3xl hover:border-costa-green/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(26,175,93,0.1)] overflow-hidden cursor-pointer"
              >
                {/* Full-card link */}
                <Link href="/contact" className="absolute inset-0 z-20" aria-label={`Proceed to ${step.title}`} />

                {/* Glowing subtle background on hover */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-costa-green/0 via-costa-green/0 to-costa-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                <div className="relative z-10 text-sm font-bold text-costa-green bg-costa-green/5 border border-costa-green/20 px-4 py-1.5 rounded-full w-fit tracking-widest">
                  PHASE {step.num}
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300 text-gray-900">{step.title}</h3>
                </div>

                <div className="md:w-[450px] relative z-10">
                  <p className="text-sm text-gray-500 leading-relaxed font-medium transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                <div className="flex w-12 h-12 rounded-full bg-gray-50 border border-gray-200 items-center justify-center group-hover:bg-costa-green group-hover:border-costa-green group-hover:shadow-[0_0_15px_rgba(26,175,93,0.4)] transition-all duration-300 shrink-0 relative z-10">
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ENTERPRISE CASE STUDY */}
      <section className="py-32 relative bg-bg-primary text-text-primary border-b border-glass-border overflow-hidden">

        {/* Topographic Map Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/5 pb-8">
            <div>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-text-primary">
                Enterprise Case Study
              </h2>
              <p className="text-sm mt-4 text-costa-green uppercase tracking-widest flex items-center gap-3 font-bold">
                <span className="w-2 h-2 bg-costa-green rounded-full"></span>
                GLOBAL SUPPLY CHAIN SOLUTIONS
              </p>
            </div>
            <div className="text-sm font-bold text-costa-green mt-6 md:mt-0 border border-costa-green/30 bg-costa-green/10 rounded-full px-5 py-2 tracking-widest">
              SUCCESS RATE: 100%
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* The Dossier File */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 bg-gradient-to-br from-bg-elevated to-bg-secondary border border-glass-border p-10 md:p-14 rounded-3xl relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {/* Premium Pill tab */}
              <div className="bg-bg-tertiary text-text-primary border-glass-border text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase w-fit mb-8 border">
                CASE STUDY #CD-8842-EV
              </div>

              <h3 className="font-heading text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-10 mt-4 text-text-primary transition-all duration-700">
                &quot;Sourced 12,000 obsolete MCUs for our EV controller board when others failed. Saved <span className="text-costa-green">$2.4M</span> in downtime.&quot;
              </h3>

              <div className="flex items-center gap-4 mt-8">
                <div>
                  <span className="text-sm text-text-secondary tracking-widest uppercase">VP Engineering • Ather Energy</span>
                </div>
              </div>
            </motion.div>

            {/* The Hard Data */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {[
                { label: "Component", val: "Obsolete 32-bit MCU" },
                { label: "Volume", val: "12,000 Units" },
                { label: "Execution", val: "9 Days (AOG)" },
                { label: "Verification", val: "AS6081 / X-Ray" }
              ].map((stat, i) => (
                <div key={i} className="bg-bg-elevated border border-glass-border p-7 rounded-2xl hover:border-costa-green/30 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center flex-1">
                  <p className="text-sm text-text-muted mb-2 uppercase tracking-widest font-semibold">{stat.label}</p>
                  <p className="text-lg font-bold text-text-primary tracking-wide group-hover:text-costa-green transition-colors">{stat.val}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 bg-costa-green text-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold tracking-widest uppercase mb-8">
            <Clock size={14} />
            Avg. Response Time: 4 Hours
          </div>
          <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] font-black leading-[1] uppercase tracking-tighter mb-8">
            TRANSMIT BOM. <br />RECEIVE QUOTE.
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-[600px] uppercase tracking-widest mb-10">
            Guaranteed response within 24h. Authorized distribution & global shortage sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/request-quote"
              className="bg-bg-primary text-text-primary text-sm font-bold uppercase py-5 px-10 rounded-lg hover:bg-bg-secondary transition-colors border-2 border-transparent hover:border-bg-primary"
            >
              Submit Requirements
            </Link>
            <a
              href="mailto:info@costadevices.com"
              className="bg-transparent text-bg-primary text-sm font-bold uppercase py-5 px-10 rounded-lg border-2 border-bg-primary hover:bg-bg-primary hover:text-text-primary transition-colors"
            >
              info@costadevices.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
