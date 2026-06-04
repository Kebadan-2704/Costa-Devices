"use client";

import { BRANDS } from "@/lib/constants";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function BrandGrid() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {BRANDS.map((brand: any) => {
        return (
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            key={brand.name}
            className="group relative bg-white border border-glass-border p-8 rounded-[2rem] flex flex-col items-center justify-between text-center h-[260px] hover:border-costa-green/30 hover:shadow-[0_20px_40px_rgba(13,107,61,0.08)] transition-all duration-500 overflow-hidden"
          >
             {/* Subtle Background Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-costa-green/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
             
             {/* Logo Container */}
             <div className="w-full h-[80px] relative z-10 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
               <img 
                 src={encodeURI(brand.image)} 
                 alt={`${brand.name} logo`}
                 className="max-w-[140px] max-h-[60px] object-contain mix-blend-multiply filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
               />
             </div>
             
             {/* Text Content */}
             <div className="relative z-10 flex flex-col items-center gap-4 mt-auto w-full">
               <div className="space-y-1">
                 <h4 className="font-heading font-black text-lg text-text-primary group-hover:text-costa-green transition-colors duration-300">
                   {brand.name}
                 </h4>
                 <p className="text-text-secondary text-xs font-light leading-tight h-8 flex items-center justify-center">
                   {brand.description}
                 </p>
               </div>
               
               <p className="text-[9px] text-text-muted font-bold font-mono uppercase tracking-[0.2em] bg-bg-secondary border border-glass-border px-4 py-1.5 rounded-full group-hover:bg-costa-green/10 group-hover:text-costa-green group-hover:border-costa-green/20 transition-all duration-300 w-max shadow-sm">
                 {brand.products.split(',')[0]}
               </p>
             </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
