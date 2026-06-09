"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, FileSpreadsheet, FileText, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BOMUploadZone() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Fake upload simulation
  const handleFakeDrop = () => {
    setIsUploading(true);
    setTimeout(() => {
      // Route to contact page after fake upload
      router.push('/contact?ref=bom_upload');
    }, 1500);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleFakeDrop}
      className={`relative w-full max-w-md rounded-3xl border border-white/40 bg-white/10 backdrop-blur-2xl transition-all duration-500 cursor-pointer overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] ${
        isHovered 
          ? 'border-costa-green/50 bg-white/20 shadow-[0_12px_48px_rgba(26,175,93,0.15)]' 
          : 'hover:border-white/60'
      }`}
    >
      {/* Background animated pulse when hovered */}
      {isHovered && !isUploading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,175,93,0.08)_0%,transparent_70%)] pointer-events-none"
        />
      )}

      <div className="p-5 flex items-center gap-4 relative z-10">
        {isUploading ? (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 w-full"
          >
            <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-costa-green border-t-transparent rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Processing Payload...</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Extracting Line Items</p>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div 
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 shrink-0 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.05)] group-hover:shadow-costa-green/20"
            >
              <UploadCloud size={20} className={isHovered ? "text-costa-green" : "text-gray-400"} />
            </motion.div>
            
            <div className="flex-1 text-left">
              <h3 className="text-[15px] font-bold text-gray-900 mb-0.5">Drag & Drop BOM Payload</h3>
              <p className="text-xs text-gray-500 font-medium mb-2">Upload Excel or CSV for algorithmic sourcing.</p>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-100 text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                  <FileSpreadsheet size={10} /> .XLSX
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-gray-100 text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                  <FileText size={10} /> .CSV
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
