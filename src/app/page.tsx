"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Zap, ArrowUpRight, ArrowUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import WireframeGlobe from "@/components/animations/WireframeGlobe";
import { playMechanicalClick } from "@/utils/audio";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-hidden">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center min-h-[90vh]">
        
        {/* High-End Wireframe Globe Background */}
        <WireframeGlobe />

        {/* Film Grain & Interactive Dot Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none dot-grid"></div>
        <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none noise-bg mix-blend-multiply"></div>

        {/* Deep background ambient glow */}
        <motion.div 
          className="absolute inset-0 rounded-full blur-[150px] opacity-10 z-0 pointer-events-none"
          animate={{ 
            background: [
              "radial-gradient(circle at 80% 20%, #0A8B46 0%, transparent 40%)",
              "radial-gradient(circle at 90% 80%, #1AAF5D 0%, transparent 40%)",
              "radial-gradient(circle at 80% 20%, #0A8B46 0%, transparent 40%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Massive Background Typography Marquee */}
        <div className="absolute top-[15%] left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none flex flex-col gap-8 z-0">
          <motion.div 
            className="whitespace-nowrap font-heading text-[15rem] md:text-[25rem] font-black leading-none tracking-tighter text-text-primary"
            animate={{ x: [0, -2000] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            CIRCUIT PROCUREMENT /// MISSION CRITICAL /// EATON BUSSMANN ///
          </motion.div>
        </div>

        <div className="relative z-10 w-full px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30, rotateZ: 2 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(3.5rem,7vw,7.5rem)] font-black text-text-primary leading-[1.05] tracking-tight mb-4 origin-bottom-left"
            >
              Mission-Critical <br className="hidden md:block" />
              <span className="text-costa-green">Circuit Procurement.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-mono text-text-secondary text-sm md:text-base max-w-[550px] leading-[1.8] mb-8"
            >
              Securing obsolete and active high-voltage components for EV, Aerospace, and Industrial infrastructure. Sub-24h dispatch.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href="/request-quote" 
                onMouseEnter={playMechanicalClick}
                className="group inline-flex items-center gap-3 bg-costa-green text-white font-mono text-sm font-bold uppercase py-5 px-10 hover:bg-costa-green-dark transition-all shadow-[0_10px_30px_rgba(10,139,70,0.2)] hover:shadow-[0_15px_40px_rgba(10,139,70,0.35)] rounded-sm"
              >
                TRANSMIT BOM
                <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={12} strokeWidth={3} />
                </div>
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Data Boxes floating over the WebGL Globe */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col gap-6 items-end justify-center pointer-events-auto">
            {/* Data Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
              transition={{ 
                opacity: { duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                x: { duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-sm border border-black/10 w-full max-w-[400px] shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-costa-green/10 to-transparent skew-x-[-20deg] w-[50%]"
                animate={{ x: ["-200%", "400%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-costa-green animate-radar-ping"></div>
                <span className="font-mono text-[10px] font-bold text-text-muted tracking-widest">LIVE INVENTORY</span>
              </div>
              <p className="font-heading text-4xl font-black text-text-primary tracking-tighter relative z-10"><AnimatedNumber value={1.2} />M<span className="text-costa-green">+</span></p>
              <p className="mt-2 font-mono text-[10px] text-text-muted tracking-widest uppercase relative z-10">Components verified & in stock</p>
            </motion.div>

            {/* Data Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [8, -8, 8] }}
              transition={{ 
                opacity: { duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] },
                x: { duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-[#0A0A0A]/95 backdrop-blur-sm text-white p-6 rounded-sm border border-white/10 w-full max-w-[400px] shadow-2xl mr-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Scanning laser line effect */}
              <motion.div 
                className="absolute left-0 right-0 h-[1px] bg-costa-green shadow-[0_0_8px_rgba(10,139,70,0.8)] opacity-0 group-hover:opacity-100 z-20"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex justify-between items-center mb-5 border-b border-white/10 pb-4 relative z-10">
                <span className="font-mono text-xs text-white/50">SUB-24H</span>
                <motion.span 
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-mono text-xs font-bold text-costa-green"
                >
                  VERIFIED
                </motion.span>
              </div>
              <div className="flex flex-col gap-3 font-mono text-xs relative z-10">
                <div className="flex justify-between overflow-hidden">
                  <span className="text-white/60">Eaton Bussmann</span>
                  <span className="text-white">IN STOCK</span>
                </div>
                <div className="flex justify-between overflow-hidden">
                  <span className="text-white/60">Infineon IGBT</span>
                  <span className="text-costa-green animate-pulse">SOURCING</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* 2. ELITE PARTNER MARQUEE */}
      <section className="py-12 bg-white border-b border-glass-border overflow-hidden relative">
         <div className="absolute top-0 left-6 text-[10px] font-mono font-bold text-text-muted tracking-widest uppercase z-10 bg-white px-2">Vetted Network</div>
         <div 
           className="flex flex-col"
           style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
         >
            <Marquee speed="normal" direction="left" className="overflow-y-hidden">
               {["NVIDIA", "EATON", "INTEL", "TEXAS INSTRUMENTS", "STMICROELECTRONICS", "ABB", "SCHNEIDER"].map((brand, idx) => (
                 <span key={idx} className="font-heading text-4xl md:text-5xl font-black uppercase tracking-widest px-16 text-transparent transition-colors duration-300 hover:text-costa-green cursor-default" style={{ WebkitTextStroke: '1.5px #0A8B46' }}>
                   {brand}
                 </span>
               ))}
            </Marquee>
         </div>
      </section>

      {/* 3. LIVE DATA TERMINAL (By the Numbers Upgrade) */}
      <section className="py-24 bg-[#031c0e] border-y border-[#0A8B46]/30 relative overflow-hidden">
        
        {/* Terminal Background Scanning Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.03) 49px, rgba(255,255,255,0.03) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.03) 49px, rgba(255,255,255,0.03) 50px)' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
            <div className="w-3 h-3 bg-costa-green animate-radar-ping rounded-full"></div>
            <span className="font-mono text-sm text-costa-green font-bold tracking-widest uppercase">Live Global Telemetry</span>
            <span className="font-mono text-xs text-white/30 ml-auto hidden md:block">SERVER: COSTA-SECURE-09</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 14, label: "Years Operations", suffix: "+", sys: "SYS.UPTIME" },
              { value: 99, label: "Quality Accuracy", prefix: "", suffix: ".8%", sys: "QA.TOLERANCE" },
              { value: 5400, label: "Components Stock", suffix: "+", sys: "DB.INDEX" },
              { value: 24, label: "Dispatch Time", prefix: "<", suffix: "h", sys: "LOGISTICS.SLA" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#062c17] border border-[#0A8B46]/20 p-8 rounded-sm hover:border-costa-green transition-colors group relative"
              >
                {/* Terminal Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>

                <p className="font-mono text-[10px] text-white/40 mb-6">{stat.sys}</p>
                <h3 className="font-heading text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-costa-green transition-colors">
                  {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix}
                </h3>
                <p className="font-mono text-xs font-bold text-white/70 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CAPABILITIES & INFRASTRUCTURE (BENTO GRID UPGRADE) */}
      <section id="divisions" className="py-24 bg-bg-secondary border-b border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-l-4 border-text-primary pl-6">
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase">
              CAPABILITIES &<br/>INFRASTRUCTURE
            </h2>
            <p className="font-mono text-sm mt-4 text-text-secondary uppercase tracking-widest">
              SYSTEM ARCHITECTURE // GLOBAL LOGISTICS
            </p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[350px] perspective-[2000px]"
          >
            
            {/* Box 1: Sourcing (Flat Brutalist Upgrade) */}
            <motion.div 
              variants={fadeUpVariant} 
              whileHover={{ y: -8 }}
              className="md:col-span-8 bg-white relative overflow-hidden group p-10 flex flex-col justify-end border border-black/10 rounded-sm transition-all duration-300 hover:border-costa-green"
            >
              <div className="absolute top-8 left-8 font-mono text-xs text-text-muted font-bold tracking-widest">01 // GLOBAL SOURCING</div>
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-glass-border flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:bg-costa-green group-hover:text-white group-hover:border-costa-green transition-all duration-300">
                <ArrowUpRight size={20} strokeWidth={2} />
              </div>
              <h3 className="font-heading text-4xl font-black mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">Active & Obsolete Parts</h3>
              <p className="font-mono text-xs text-text-secondary leading-relaxed max-w-md uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 delay-75">
                Direct access to franchised lines, OEMs, and EMS excess inventory. Specialized in EOL (End-of-Life) components.
              </p>
            </motion.div>
            
            {/* Box 2: Quality */}
            <motion.div 
              variants={fadeUpVariant} 
              whileHover={{ y: -8 }}
              className="md:col-span-4 bg-[#0A0A0A] relative overflow-hidden group p-10 flex flex-col justify-end border border-white/10 rounded-sm transition-all duration-300 hover:border-costa-green"
            >
               {/* Premium Dark Tech Background */}
               <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(26,175,93,0.2)_0%,transparent_70%)] group-hover:opacity-100 transition-opacity duration-700"></div>

               <div className="absolute top-8 left-8 font-mono text-xs text-white/40 font-bold z-10 tracking-widest">02 // QA LAB</div>
               <h3 className="font-heading text-3xl font-black mb-3 tracking-tight text-white relative z-10 group-hover:-translate-y-2 transition-transform duration-300">Counterfeit Detection</h3>
               <p className="font-mono text-xs text-costa-green uppercase tracking-widest relative z-10 font-bold mb-1 group-hover:-translate-y-2 transition-transform duration-300 delay-75">AS6081 Certified • X-Ray</p>
               <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest relative z-10 group-hover:-translate-y-2 transition-transform duration-300 delay-100">Decapsulation & Visual Insp.</p>
            </motion.div>
            
            {/* Box 3: Speed */}
            <motion.div 
              variants={fadeUpVariant} 
              whileHover={{ y: -8 }}
              className="md:col-span-4 bg-costa-green text-white relative overflow-hidden group p-10 flex flex-col justify-end border border-costa-green rounded-sm transition-all duration-300"
            >
              <div className="absolute top-8 left-8 font-mono text-xs text-white/60 font-bold tracking-widest">03 // SPEED</div>
              <h3 className="font-heading text-3xl font-black mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-300">Sub-24h Dispatch</h3>
              <p className="font-mono text-xs text-white/80 uppercase tracking-widest leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                AOG (Aircraft on Ground) and Line-Down specialist response times. 
              </p>
            </motion.div>
            
            {/* Box 4: Global */}
            <motion.div 
              variants={fadeUpVariant} 
              whileHover={{ y: -8 }}
              className="md:col-span-8 bg-white relative overflow-hidden group p-10 flex flex-col justify-end border border-black/10 rounded-sm transition-all duration-300 hover:border-costa-green"
            >
              <div className="absolute top-8 left-8 font-mono text-xs text-text-muted font-bold tracking-widest">04 // GLOBAL REACH</div>
              
              {/* Animated Network Map Placeholder */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity duration-700" style={{ backgroundImage: 'radial-gradient(circle, rgba(10,139,70,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

              <h3 className="font-heading text-4xl font-black mb-4 tracking-tight group-hover:translate-y-[-10px] transition-transform duration-300">Secure Supply Chain</h3>
              <p className="font-mono text-xs text-text-secondary leading-relaxed max-w-md uppercase tracking-widest group-hover:translate-y-[-10px] transition-transform duration-300 delay-75">
                Vetted Tier-1 vendors only. Full traceability and ISO 9001:2015 compliance on every order.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. PROCUREMENT PROTOCOL (ELITE UPGRADE) */}
      <section className="py-32 bg-[#050A08] text-white border-b border-glass-border relative overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.04) 39px, rgba(255,255,255,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.04) 39px, rgba(255,255,255,0.04) 40px)' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-24 md:w-1/2">
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
              The Protocol.
            </h2>
            <p className="font-mono text-sm text-white/50 uppercase tracking-widest leading-relaxed">
              Our military-grade process for securing obsolete components when OEM supply chains fail.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { num: "01", title: "DISCOVERY", desc: "Share BOM requirements. Real-time global availability assessment across 50+ data sources." },
              { num: "02", title: "SOURCING", desc: "Algorithmic scan of franchised, OEM excess, and spot markets globally." },
              { num: "03", title: "VERIFICATION", desc: "AS6081 testing: 200x magnification, XRF, decapsulation, and heated solvent testing." },
              { num: "04", title: "DISPATCH", desc: "Class 1 ESD-safe packaging. Certificate of Conformance included. Sub-24h global dispatch." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 border-b border-white/10 hover:border-costa-green/50 transition-colors"
              >
                {/* Hover Highlight (Brutalist Block) */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border-l-2 border-transparent group-hover:border-costa-green"></div>

                <div className="font-heading text-5xl md:text-7xl font-black text-white/10 group-hover:text-costa-green transition-colors duration-500 min-w-[120px]">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl md:text-4xl font-black mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">{step.title}</h3>
                </div>
                <div className="md:w-[400px]">
                  <p className="font-mono text-xs text-white/50 leading-relaxed uppercase tracking-widest group-hover:text-white/80 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:bg-costa-green group-hover:border-costa-green transition-all duration-300">
                  <ArrowRight size={20} className="text-white/30 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLASSIFIED MISSION DEBRIEF (Case Study Upgrade) */}
      <section className="py-32 relative bg-[#0A0A0A] text-white border-b border-glass-border overflow-hidden">
        
        {/* Topographic Map Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-white">
                Mission Debrief
              </h2>
              <p className="font-mono text-sm mt-4 text-white/50 uppercase tracking-widest flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-radar-ping-alert"></span>
                CLASSIFIED AOG PROCUREMENT
              </p>
            </div>
            <div className="font-mono text-xs font-bold text-costa-green mt-6 md:mt-0 border border-costa-green/30 px-4 py-2">
              STATUS: ACCOMPLISHED
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* The Dossier File */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 bg-[#111] border border-white/10 p-8 md:p-16 relative group"
            >
              {/* Folder tab */}
              <div className="absolute top-0 left-0 -mt-[1px] -ml-[1px] bg-white text-black font-mono text-[10px] font-bold px-4 py-1 tracking-widest uppercase">
                FILE: #CD-8842-EV
              </div>
              
              <h3 className="font-heading text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-8 mt-4 text-white transition-all duration-700">
                "Sourced 12,000 obsolete MCUs for our EV controller board when others failed. Delivered in <span className="text-costa-green">9 days</span>."
              </h3>
              
              <div className="font-mono text-sm uppercase tracking-widest text-white/40 mt-12 border-l-2 border-costa-green pl-6 py-2">
                <span className="text-white font-bold block mb-1">VP Engineering</span> 
                Global Tier-1 EV Manufacturer
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
                <div key={i} className="bg-[#111] border border-white/10 p-6 hover:bg-[#1A1A1A] transition-colors group relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-costa-green scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                  <p className="font-mono text-[10px] text-white/40 mb-2 uppercase tracking-widest">{stat.label}</p>
                  <p className="font-mono text-lg font-bold text-white tracking-wide">{stat.val}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - BRUTALIST */}
      <section className="py-32 bg-costa-green text-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] font-black leading-[1] uppercase tracking-tighter mb-8">
            TRANSMIT BOM. <br/>RECEIVE QUOTE.
          </h2>
          <p className="font-mono text-sm md:text-base opacity-90 max-w-[600px] uppercase tracking-widest mb-10">
            Guaranteed response within 24h. Authorized distribution & global shortage sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              onMouseEnter={playMechanicalClick}
              className="bg-bg-primary text-text-primary font-mono text-sm font-bold uppercase py-5 px-10 hover:bg-bg-secondary transition-colors border-2 border-transparent hover:border-bg-primary"
            >
              Submit Requirements
            </Link>
            <a 
              href="mailto:sales@costadevices.com" 
              onMouseEnter={playMechanicalClick}
              className="bg-transparent text-bg-primary font-mono text-sm font-bold uppercase py-5 px-10 border-2 border-bg-primary hover:bg-bg-primary hover:text-text-primary transition-colors"
            >
              sales@costadevices.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
