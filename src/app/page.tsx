"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cpu, Zap, ArrowUpRight, ArrowUp, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import dynamic from "next/dynamic";
import { playMechanicalClick } from "@/utils/audio";

const WireframeGlobe = dynamic(() => import("@/components/animations/WireframeGlobe"), { ssr: false });

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-hidden">

      {/* 1. HERO */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden flex items-center min-h-screen">

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
              "radial-gradient(circle at 80% 20%, #1AAF5D 0%, transparent 40%)",
              "radial-gradient(circle at 90% 80%, #2ED573 0%, transparent 40%)",
              "radial-gradient(circle at 80% 20%, #1AAF5D 0%, transparent 40%)"
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
            COMPONENT PROCUREMENT /// MISSION CRITICAL /// COSTA DEVICES ///
          </motion.div>
        </div>

        <div className="relative z-10 w-full px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 flex flex-col items-start relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30, rotateZ: 2 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[clamp(2rem,10vw,7.5rem)] font-black text-text-primary leading-[1.05] tracking-tight mb-4 origin-bottom-left break-words"
            >
              Mission-Critical <br className="hidden md:block" />
              <span className="text-costa-green">Component</span> Procurement.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-text-secondary text-sm md:text-base max-w-[550px] leading-[1.8] mb-8"
            >
              Securing obsolete, Active & Passive electronic components, heavy electrical, active high-voltage components, Aerospace, and Industrial infrastructure. Sub-24h dispatch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/request-quote"
                onMouseEnter={playMechanicalClick}
                className="group inline-flex items-center gap-3 bg-costa-green text-white text-sm font-bold uppercase py-5 px-10 hover:bg-costa-green-dark transition-all shadow-[0_10px_30px_rgba(26,175,93,0.2)] hover:shadow-[0_15px_40px_rgba(26,175,93,0.35)] rounded-sm"
              >
                TRANSMIT BOM
                <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={12} strokeWidth={3} />
                </div>
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Data Boxes floating over the WebGL Globe */}
          <div className="lg:col-span-5 relative flex flex-col gap-4 lg:gap-6 items-center lg:items-end justify-center pointer-events-auto">
            {/* Data Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 0 }}
              animate={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
              transition={{
                opacity: { duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                x: { duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-sm border border-black/10 w-full max-w-[400px] shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-costa-green/10 to-transparent skew-x-[-20deg] w-[50%]"
                animate={{ x: ["-200%", "400%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-2 h-2 rounded-full bg-costa-green animate-radar-ping"></div>
                <span className="text-[10px] font-bold text-text-muted tracking-widest">LIVE INVENTORY</span>
              </div>
              <p className="font-heading text-4xl font-black text-text-primary tracking-tighter relative z-10"><AnimatedNumber value={1.2} />M<span className="text-costa-green">+</span></p>
              <p className="mt-2 text-[10px] text-text-muted tracking-widest uppercase relative z-10">Components verified & in stock</p>
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
              className="bg-costa-green backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10 w-full max-w-[400px] shadow-[0_20px_50px_rgba(26,175,93,0.3)] lg:mr-8 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Scanning laser line effect */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 z-20"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="flex justify-between items-center mb-5 border-b border-white/20 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                  <span className="text-[10px] font-bold text-white/80 tracking-widest uppercase">LIVE NODE // SUB-24H</span>
                </div>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[9px] font-black tracking-widest text-costa-green bg-white border border-white px-2.5 py-1 rounded-full uppercase shadow-sm"
                >
                  VERIFIED
                </motion.span>
              </div>
              <div className="flex flex-col gap-4 text-[13px] relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Eaton Bussmann</span>
                  <span className="text-[10px] text-white font-bold tracking-widest bg-black/20 px-2.5 py-1 rounded-sm uppercase">IN STOCK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Nexperia</span>
                  <span className="text-[10px] text-white font-bold tracking-widest bg-black/20 px-2.5 py-1 rounded-sm uppercase">IN STOCK</span>
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
              <span key={idx} className="font-heading text-4xl md:text-5xl font-black uppercase tracking-widest px-16 text-costa-green transition-colors duration-300 hover:text-costa-green-dark cursor-default">
                {brand}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 3. LIVE DATA TERMINAL (By the Numbers Upgrade) */}
      <section className="py-24 bg-costa-green border-y border-costa-green/30 relative overflow-hidden">

        {/* Terminal Background Scanning Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.03) 49px, rgba(255,255,255,0.03) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.03) 49px, rgba(255,255,255,0.03) 50px)' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">

          <div className="flex items-center gap-4 mb-12 border-b border-white/20 pb-4">
            <div className="w-3 h-3 bg-white animate-radar-ping rounded-full"></div>
            <span className="text-sm text-white font-bold tracking-widest uppercase">Live Global Telemetry</span>
            <span className="text-xs text-white/50 ml-auto hidden md:block">COSTA DEVICES GLOBAL</span>
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
                className="bg-white p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group relative shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                {/* Soft gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-costa-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <p className="text-[10px] text-text-muted mb-6 tracking-widest font-bold relative z-10">{stat.sys}</p>
                <h3 className="font-heading text-5xl md:text-6xl font-black text-text-primary mb-2 tracking-tighter group-hover:text-costa-green transition-colors duration-300 relative z-10">
                  {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix}
                </h3>
                <p className="text-xs font-bold text-text-secondary uppercase tracking-widest relative z-10">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-24 bg-bg-primary border-b border-glass-border relative overflow-hidden">
        <div className="absolute top-0 right-6 text-[10px] font-mono font-bold text-text-muted tracking-widest uppercase z-10 bg-bg-primary px-2">Client Trust</div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-l-4 border-costa-green pl-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-text-primary">
                TRUSTED <span className="text-costa-green">GLOBALLY</span>
              </h2>
              <p className="mt-4 text-text-secondary max-w-xl font-medium">Hear from engineering leads and procurement managers at top-tier OEMs who rely on Costa Devices for mission-critical sourcing.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white border border-glass-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              <div className="text-costa-green mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z"/></svg>
              </div>
              <p className="text-text-primary font-medium mb-8 leading-relaxed">&ldquo;Costa Devices was able to secure 10,000 obsolete IGBT modules for our legacy wind turbine controllers when franchised distributors quoted a 52-week lead time. Their lab testing reports gave us 100% confidence.&rdquo;</p>
              <div className="border-t border-black/5 pt-6 mt-auto">
                <p className="font-bold text-sm text-text-primary">Sr. Procurement Manager</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Renewable Energy OEM</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-costa-green border border-costa-green p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(26,175,93,0.2)] transition-all duration-300 relative group transform md:-translate-y-4">
              <div className="text-white mb-6 opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z"/></svg>
              </div>
              <p className="text-white font-medium mb-8 leading-relaxed text-lg">&ldquo;The level of technical expertise is unmatched. We needed a drop-in replacement for a critical Eaton Bussmann EV fuse for our new charger line. Costa provided the parts in 3 days with complete traceability.&rdquo;</p>
              <div className="border-t border-white/20 pt-6 mt-auto">
                <p className="font-bold text-sm text-white">Lead Hardware Engineer</p>
                <p className="text-xs text-white/70 uppercase tracking-wider mt-1">EV Infrastructure</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white border border-glass-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative group">
              <div className="text-costa-green mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z"/></svg>
              </div>
              <p className="text-text-primary font-medium mb-8 leading-relaxed">&ldquo;Costa Devices has been our primary sourcing partner for 4 years. Their global network and strict anti-counterfeit protocols mean we never have to worry about line-down situations or quality failures in production.&rdquo;</p>
              <div className="border-t border-black/5 pt-6 mt-auto">
                <p className="font-bold text-sm text-text-primary">VP Operations</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Aerospace Defense</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CAPABILITIES & INFRASTRUCTURE (BENTO GRID UPGRADE) */}
      <section id="divisions" className="py-24 bg-bg-secondary border-b border-glass-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-l-4 border-text-primary pl-6">
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase">
              CAPABILITIES &<br />INFRASTRUCTURE
            </h2>
            <p className="text-sm mt-4 text-text-secondary uppercase tracking-widest">
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
              className="md:col-span-8 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-black/5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(26,175,93,0.1)]"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="text-[11px] text-text-muted font-bold tracking-[0.2em] uppercase bg-black/5 px-4 py-1.5 rounded-full backdrop-blur-sm">01 — Global Sourcing</div>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-text-secondary group-hover:bg-costa-green group-hover:text-white group-hover:border-costa-green transition-all duration-300 shadow-sm bg-white/50 backdrop-blur-md">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </div>
              </div>
              <div className="absolute inset-0 z-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/products/circuit-protection.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="relative z-10">
                <h3 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight group-hover:text-costa-green transition-colors duration-300">Active & Obsolete Parts</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-lg font-medium">
                  Direct access to franchised lines, OEMs, and EMS excess inventory. Specialized in EOL (End-of-Life) components.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Quality */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-4 relative overflow-hidden group p-10 flex flex-col justify-between bg-gradient-to-br from-[#1AAF5D] to-[#0D6B3D] border border-costa-green/20 rounded-3xl shadow-[0_8px_30px_rgb(26,175,93,0.2)] transition-all duration-300 hover:border-costa-green/50 text-white"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,175,93,0.15),transparent_70%)] group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
              <div className="absolute inset-0 z-0 opacity-[0.2] group-hover:opacity-[0.35] transition-opacity duration-700 mix-blend-overlay" style={{ backgroundImage: "url('/images/products/transformers.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              
              <div className="text-[11px] text-costa-green font-bold tracking-[0.2em] uppercase bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full w-fit relative z-10 border border-costa-green/20">02 — QA LAB</div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="font-heading text-3xl md:text-4xl font-black mb-4 tracking-tight text-white group-hover:-translate-y-2 transition-transform duration-300">Counterfeit Detection</h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed mb-2 group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                  <span className="text-costa-green font-bold">AS6081 Certified</span> • X-Ray
                </p>
                <p className="text-[11px] text-white/40 uppercase tracking-widest group-hover:-translate-y-2 transition-transform duration-300 delay-100">Decapsulation & Visual Insp.</p>
              </div>
            </motion.div>

            {/* Box 3: Speed */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-4 relative overflow-hidden group p-10 flex flex-col justify-between bg-gradient-to-br from-[#1AAF5D] to-[#0D6B3D] text-white rounded-3xl shadow-[0_8px_30px_rgb(26,175,93,0.2)] transition-all duration-300"
            >
              <div className="absolute inset-0 z-0 opacity-[0.2] group-hover:opacity-[0.35] transition-opacity duration-700 mix-blend-overlay" style={{ backgroundImage: "url('/images/industries/power-distribution.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="text-[11px] text-white font-bold tracking-[0.2em] uppercase bg-black/20 px-4 py-1.5 rounded-full w-fit backdrop-blur-md border border-white/10 relative z-10">03 — SPEED</div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="font-heading text-3xl md:text-4xl font-black mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">Sub-24h Dispatch</h3>
                <p className="text-sm text-white/90 font-medium leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  AOG (Aircraft on Ground) and Line-Down specialist response times.
                </p>
              </div>
            </motion.div>

            {/* Box 4: Global */}
            <motion.div
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="md:col-span-8 relative overflow-hidden group p-10 flex flex-col justify-between bg-white border border-black/5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_20px_40px_rgb(26,175,93,0.1)]"
            >
              <div className="text-[11px] text-text-muted font-bold tracking-[0.2em] uppercase bg-black/5 px-4 py-1.5 rounded-full w-fit relative z-10 backdrop-blur-sm">04 — GLOBAL REACH</div>

              <div className="absolute inset-0 z-0 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700 mix-blend-multiply" style={{ backgroundImage: "url('/images/industries/industrial-automation.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none w-2/3 h-full z-0" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>

              <div className="relative z-10 max-w-lg mt-auto">
                <h3 className="font-heading text-4xl md:text-5xl font-black mb-4 tracking-tight group-hover:translate-y-[-5px] transition-transform duration-300">Secure Supply Chain</h3>
                <p className="text-sm text-text-secondary font-medium leading-relaxed group-hover:translate-y-[-5px] transition-transform duration-300 delay-75">
                  Vetted Tier-1 vendors only. Full traceability and ISO 9001:2015 compliance on every single order.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. PROCUREMENT PROTOCOL (ELITE UPGRADE) */}
      <section className="py-32 bg-gradient-to-br from-[#F4F9F6] via-[#FAFAFA] to-[#E6F4EB] text-text-primary border-b border-glass-border relative overflow-hidden">

        {/* Soft ambient glowing orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-costa-green/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-costa-green/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(26,175,93,0.05) 39px, rgba(26,175,93,0.05) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(26,175,93,0.05) 39px, rgba(26,175,93,0.05) 40px)' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-24 md:w-1/2">
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-black uppercase tracking-tighter leading-none mb-6">
              The Protocol.
            </h2>
            <p className="text-sm text-text-secondary uppercase tracking-widest leading-relaxed">
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
                className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-8 md:p-10 bg-white border border-black/5 rounded-3xl hover:border-costa-green/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] overflow-hidden cursor-pointer"
              >
                {/* Background Image with varying transparency levels */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105 pointer-events-none mix-blend-luminosity"
                  style={{ 
                    backgroundImage: 'url(/images/electronics-hero-bg.png)',
                    opacity: 0.04 + (i * 0.04) 
                  }}
                />

                {/* Subtle gradient overlay to ensure text readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>

                {/* Full-card link */}
                <Link href="/contact" className="absolute inset-0 z-20" aria-label={`Proceed to ${step.title}`} />

                {/* Glowing subtle background on hover */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-costa-green/0 via-costa-green/0 to-costa-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                <div className="relative z-10 text-[11px] font-bold text-costa-green bg-costa-green/10 border border-costa-green/20 px-4 py-1.5 rounded-full w-fit tracking-widest">
                  PHASE {step.num}
                </div>
                
                <div className="flex-1 relative z-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-black mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300 text-text-primary">{step.title}</h3>
                </div>
                
                <div className="md:w-[450px] relative z-10">
                  <p className="text-sm text-text-secondary leading-relaxed font-medium group-hover:text-text-primary transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
                
                <div className="flex w-12 h-12 rounded-full bg-black/5 border border-black/10 items-center justify-center group-hover:bg-costa-green group-hover:border-costa-green group-hover:shadow-[0_0_15px_rgba(26,175,93,0.4)] transition-all duration-300 shrink-0 relative z-10">
                  <ArrowRight size={20} className="text-black/50 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLASSIFIED MISSION DEBRIEF (Case Study Upgrade) */}
      <section className="py-32 relative bg-white text-text-primary border-b border-glass-border overflow-hidden">

        {/* Topographic Map Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/5 pb-8">
            <div>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-text-primary">
                Mission Debrief
              </h2>
              <p className="text-sm mt-4 text-text-secondary uppercase tracking-widest flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-radar-ping-alert"></span>
                CLASSIFIED AOG PROCUREMENT
              </p>
            </div>
            <div className="text-[11px] font-bold text-costa-green mt-6 md:mt-0 border border-costa-green/30 bg-costa-green/10 rounded-full px-5 py-2 tracking-widest">
              STATUS: ACCOMPLISHED
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* The Dossier File */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 bg-gradient-to-br from-white to-[#F5F7F5] border border-black/5 p-10 md:p-14 rounded-3xl relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              {/* Premium Pill tab */}
              <div className="bg-black/5 text-text-primary border-black/10 text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase w-fit mb-8 border">
                CASE STUDY #CD-8842-EV
              </div>

              <h3 className="font-heading text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase mb-10 mt-4 text-text-primary transition-all duration-700">
                &quot;Sourced 12,000 obsolete MCUs for our EV controller board when others failed. Delivered in <span className="text-costa-green">9 days</span>.&quot;
              </h3>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-costa-green font-bold text-xl">
                  VP
                </div>
                <div>
                  <span className="text-text-primary font-bold block text-sm tracking-wide">VP Engineering</span>
                  <span className="text-[11px] text-text-secondary tracking-widest uppercase">Global Tier-1 EV Manufacturer</span>
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
                <div key={i} className="bg-white border border-black/5 p-7 rounded-2xl hover:border-costa-green/30 transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center flex-1">
                  <p className="text-[11px] text-text-muted mb-2 uppercase tracking-widest font-semibold">{stat.label}</p>
                  <p className="text-lg font-bold text-text-primary tracking-wide group-hover:text-costa-green transition-colors">{stat.val}</p>
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
            TRANSMIT BOM. <br />RECEIVE QUOTE.
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-[600px] uppercase tracking-widest mb-10">
            Guaranteed response within 24h. Authorized distribution & global shortage sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              onMouseEnter={playMechanicalClick}
              className="bg-bg-primary text-text-primary text-sm font-bold uppercase py-5 px-10 hover:bg-bg-secondary transition-colors border-2 border-transparent hover:border-bg-primary"
            >
              Submit Requirements
            </Link>
            <a
              href="mailto:info@costadevices.com"
              onMouseEnter={playMechanicalClick}
              className="bg-transparent text-bg-primary text-sm font-bold uppercase py-5 px-10 border-2 border-bg-primary hover:bg-bg-primary hover:text-text-primary transition-colors"
            >
              info@costadevices.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
