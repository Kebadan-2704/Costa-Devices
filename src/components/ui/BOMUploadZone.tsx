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
      className={`relative w-full max-w-md rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer overflow-hidden ${
        isHovered 
          ? 'border-costa-green bg-costa-green/5 shadow-[0_0_30px_rgba(26,175,93,0.15)]' 
          : 'border-gray-300 bg-white hover:border-costa-green'
      }`}
    >
      {/* Background animated pulse when hovered */}
      {isHovered && !isUploading && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,175,93,0.1)_0%,transparent_70%)]"
        />
      )}

      <div className="p-6 flex flex-col items-center justify-center text-center relative z-10 min-h-[140px]">
        {isUploading ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-costa-green border-t-transparent rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Processing BOM Payload...</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Extracting Line Items</p>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div 
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 shadow-sm group-hover:bg-white"
            >
              <UploadCloud size={24} className={isHovered ? "text-costa-green" : "text-gray-400"} />
            </motion.div>
            <h3 className="font-bold text-gray-900 mb-1">Drag & Drop BOM Payload</h3>
            <p className="text-xs text-gray-500 font-medium mb-3">Upload Excel or CSV for instant algorithmic sourcing.</p>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-100 text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                <FileSpreadsheet size={10} /> .XLSX
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-100 text-[9px] font-bold text-gray-500 uppercase tracking-wider">
                <FileText size={10} /> .CSV
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
