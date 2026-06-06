"use client";

import { useState } from "react";
import { X, Factory, Cpu, Zap, Microchip, Radio, Shield, Globe } from "lucide-react";
import { MANUFACTURERS } from "@/lib/constants";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Extended data for the first 24 manufacturers
const MANUFACTURER_DETAILS: Record<string, { desc: string, icon: any, color: string, domain: string, localImage?: string }> = {
  "NVIDIA": { desc: "Leading designer of graphics processing units (GPUs) and AI computing hardware.", icon: Cpu, color: "bg-[#76B900]", domain: "nvidia.com", localImage: "/images/Nvidia.png" },
  "Coilcraft": { desc: "Premier supplier of high-performance magnetic components including RF chip inductors, power magnetics and filters.", icon: Zap, color: "bg-red-600", domain: "coilcraft.com", localImage: "/images/colicraft.png" },
  "Xilinx": { desc: "Inventor of the FPGA, programmable SoCs, and now part of AMD. Powering highly flexible, adaptive computing.", icon: Microchip, color: "bg-black", domain: "xilinx.com", localImage: "/images/xilinx.png" },
  "ROHM": { desc: "Global manufacturer of semiconductors, ICs, and passive components with a focus on power and analog.", icon: Factory, color: "bg-red-700", domain: "rohm.com", localImage: "/images/rohm.png" },
  "MCC": { desc: "Micro Commercial Components Corp. Supplier of high-quality discrete semiconductors to the consumer markets.", icon: Shield, color: "bg-blue-600", domain: "mccsemi.com", localImage: "/images/Mcc.png" },
  "Allegro": { desc: "Global leader in power and sensing solutions for motion control and energy-efficient systems.", icon: Zap, color: "bg-red-500", domain: "allegromicro.com", localImage: "/images/allegro.png" },
  "Analog Devices": { desc: "Multinational semiconductor company specializing in data conversion, signal processing and power management.", icon: Microchip, color: "bg-blue-800", domain: "analog.com", localImage: "/images/analog devices.jpg" },
  "NXP": { desc: "Innovator in secure connectivity solutions for embedded applications, automotive, and IoT.", icon: Globe, color: "bg-orange-500", domain: "nxp.com", localImage: "/images/download.jpg" },
  "Altera": { desc: "Pioneer of programmable logic devices (PLDs) and FPGAs, now operating as a subsidiary of Intel.", icon: Cpu, color: "bg-blue-700", domain: "altera.com", localImage: "/images/altera.jpg" },
  "Texas Instruments": { desc: "Global semiconductor company that designs, manufactures, tests and sells analog and embedded processing chips.", icon: Factory, color: "bg-red-600", domain: "ti.com", localImage: "/images/texas Instrument.png" },
  "Winbond": { desc: "Specialty memory IC company, providing highly reliable memory solutions for automotive and IoT.", icon: Microchip, color: "bg-blue-600", domain: "winbond.com", localImage: "/images/windbond.png" },
  "OMRON": { desc: "Global leader in automation, sensing and control technology for industrial applications.", icon: Shield, color: "bg-blue-700", domain: "omron.com", localImage: "/images/omron.png" },
  "Qualcomm": { desc: "Multinational corporation creating semiconductors, software, and services related to wireless technology.", icon: Radio, color: "bg-blue-600", domain: "qualcomm.com", localImage: "/images/qualcomm.png" },
  "OSRAM": { desc: "High-tech photonics company specializing in intelligent lighting solutions and sensor technologies.", icon: Zap, color: "bg-orange-400", domain: "osram.com", localImage: "/images/osram.png" },
  "Intel": { desc: "World's largest semiconductor chip manufacturer by revenue, pioneering x86 microprocessors.", icon: Cpu, color: "bg-blue-500", domain: "intel.com", localImage: "/images/intel.png" },
  "Walsin": { desc: "Leading manufacturer of passive components including MLCCs, chip resistors, and RF components.", icon: Factory, color: "bg-blue-800", domain: "passivecomponent.com", localImage: "/images/walsin.png" },
  "Semtech": { desc: "Supplier of analog and mixed-signal semiconductors and advanced algorithms for infrastructure.", icon: Globe, color: "bg-teal-600", domain: "semtech.com", localImage: "/images/semtech.jpg" },
  "Quantic Evans": { desc: "Manufacturer of the most power-dense capacitors in the industry for mission-critical applications.", icon: Zap, color: "bg-blue-700", domain: "quanticevans.com", localImage: "/images/quantic evans.jpg" },
  "TSMC": { desc: "Taiwan Semiconductor Manufacturing Company. The world's most valuable semiconductor foundry.", icon: Microchip, color: "bg-red-600", domain: "tsmc.com", localImage: "/images/tsmc.jpg" },
  "NEC": { desc: "Multinational IT and electronics corporation providing network and sensor solutions.", icon: Globe, color: "bg-blue-800", domain: "nec.com", localImage: "/images/nec.png" },
  "MXIC": { desc: "Macronix International. Leading integrated device manufacturer in the non-volatile memory market.", icon: Shield, color: "bg-red-700", domain: "macronix.com", localImage: "/images/mxic.png" },
  "TE Connectivity": { desc: "Designs and manufactures connectivity and sensor products for harsh environments.", icon: Factory, color: "bg-orange-500", domain: "te.com", localImage: "/images/Te Conectivity.jpg" },
  "Broadcom": { desc: "Global technology leader that designs, develops and supplies semiconductor and infrastructure software solutions.", icon: Radio, color: "bg-red-600", domain: "broadcom.com", localImage: "/images/broadcom.png" },
  "Pulse": { desc: "Provider of electronic components for power, networking, and wireless communications.", icon: Zap, color: "bg-blue-500", domain: "pulseelectronics.com", localImage: "/images/pulse.png" },
};

function BrandLogo({ brand, details, imgClassName = "", fallbackClassName = "" }: { brand: string, details: any, imgClassName?: string, fallbackClassName?: string }) {
  const [imgError, setImgError] = useState(false);
  const Icon = details.icon;
  
  if (!imgError && details.localImage) {
    return (
      <img 
        src={details.localImage} 
        alt={`${brand} logo`}
        className={`object-contain mix-blend-darken ${imgClassName}`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-2xl ${details.color} bg-opacity-5 ${fallbackClassName}`}>
      <Icon className={`w-3/5 h-3/5 ${details.color.replace('bg-', 'text-')} opacity-70`} strokeWidth={1.5} />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function InteractiveEcosystem() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const displayBrands = MANUFACTURERS.slice(0, 24);

  return (
    <div className="relative w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
      >
        {displayBrands.map((brand) => {
          const details = MANUFACTURER_DETAILS[brand] || { desc: "Global manufacturer of high-quality electronic components.", icon: Factory, color: "bg-costa-green", domain: "" };
          
          return (
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className="group relative h-40 w-full bg-white/60 backdrop-blur-md border border-black/[0.04] rounded-[1.5rem] flex flex-col items-center justify-center gap-4 p-5 hover:bg-white hover:border-costa-green/30 hover:shadow-[0_20px_40px_-15px_rgba(26,175,93,0.2)] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-costa-green/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-full h-20 relative z-10 flex items-center justify-center opacity-100 transition-all duration-500 group-hover:scale-110 px-3">
                <BrandLogo 
                  brand={brand} 
                  details={details} 
                  imgClassName="max-w-[120px] max-h-[60px]" 
                  fallbackClassName="w-14 h-14 shrink-0" 
                />
              </div>
              <span className="font-heading font-black text-[11px] text-text-secondary text-center group-hover:text-costa-green transition-colors z-10 uppercase tracking-widest leading-tight">
                {brand}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Modal / Dialog */}
      <AnimatePresence>
        {selectedBrand && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg-primary/80 backdrop-blur-md"
              onClick={() => setSelectedBrand(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-2xl w-full max-w-lg border border-black/10 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] relative z-10 overflow-hidden"
            >
              {/* Green Accent Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-costa-green/20 blur-3xl rounded-full mix-blend-multiply pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-costa-green-light via-costa-green to-costa-green-dark" />
              
              <div className="absolute top-5 right-5 z-20">
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 text-text-secondary hover:text-white hover:bg-black transition-all duration-300"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>
              
              <div className="p-10 pt-12 relative z-10">
                <div className="flex flex-col items-center text-center gap-6 mb-8 border-b border-black/5 pb-8">
                  <div className="w-32 h-20 relative flex items-center justify-center">
                     <BrandLogo 
                        brand={selectedBrand} 
                        details={MANUFACTURER_DETAILS[selectedBrand] || { icon: Factory, color: "bg-costa-green", domain: "" }} 
                        imgClassName="w-full h-full"
                        fallbackClassName="w-20 h-20 shrink-0"
                     />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-black text-text-primary tracking-tight mb-3">{selectedBrand}</h3>
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-costa-green/10 text-costa-green text-[11px] font-bold uppercase tracking-[0.2em] rounded-full">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-costa-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-costa-green"></span>
                      </span>
                      Authorized Partner
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-10 text-sm md:text-[15px] text-center">
                  {MANUFACTURER_DETAILS[selectedBrand]?.desc || "Global manufacturer of high-quality electronic components."}
                </p>
                
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className="w-full bg-black text-white hover:bg-costa-green py-4 rounded-xl font-bold tracking-widest text-[11px] uppercase transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(26,175,93,0.2)]"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
