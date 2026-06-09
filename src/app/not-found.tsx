"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_50%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-costa-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[clamp(6rem,15vw,12rem)] font-black leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-300 select-none drop-shadow-sm"
        >
          404
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs text-gray-500 font-bold tracking-[0.2em] uppercase">
              System Error
            </span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
            Component <span className="text-costa-green">Not Found.</span>
          </h1>
          
          <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto font-medium leading-relaxed">
            The page or supply route you are looking for has either been moved, discontinued, or doesn&apos;t exist in our global registry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticWrapper>
              <Link href="/" className="group inline-flex items-center gap-3 bg-gray-900 text-white rounded-xl px-8 py-4 font-bold shadow-xl shadow-gray-900/10 hover:bg-costa-green transition-colors hover:-translate-y-1">
                <Home size={18} /> Return Home
              </Link>
            </MagneticWrapper>
            
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 rounded-xl px-8 py-4 font-bold hover:border-costa-green hover:text-costa-green transition-all hover:-translate-y-1">
              Contact Support <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
