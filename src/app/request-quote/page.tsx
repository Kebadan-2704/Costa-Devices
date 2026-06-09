"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { UploadCloud, ShieldCheck, FileText, Lock, Cpu, CheckCircle2, Send, X, Search, FileCog } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

function RequestQuoteForm() {
  const searchParams = useSearchParams();
  const prefilledPart = searchParams.get("part") || "";

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    timeline: "IMMEDIATE (LINE DOWN)",
    notes: prefilledPart ? `Part Number: ${prefilledPart}\n` : "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<"idle" | "scanning" | "ready">("idle");
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (file.size <= 25 * 1024 * 1024) {
      setUploadState("scanning");
      // Simulate algorithmic scanning delay
      setTimeout(() => {
        setSelectedFile(file);
        setUploadState("ready");
      }, 2500);
    } else {
      toast.error("File size exceeds 25MB limit");
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { name: "", email: "" };
    
    if (!formData.name) {
      newErrors.name = "Operator Name is required.";
      hasError = true;
    }
    if (!formData.email) {
      newErrors.email = "Secure Comms (Email) is required.";
      hasError = true;
    }
    
    if (hasError) {
      setErrors(newErrors);
      toast.error("Please resolve the highlighted errors.");
      return;
    }
    setFormState("submitting");

    try {
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("company", formData.company);
      submitData.append("email", formData.email);
      submitData.append("subject", "BOM / RFQ Submission");
      submitData.append("message", `Timeline: ${formData.timeline}\n\nAdditional Notes:\n${formData.notes}`);
      if (selectedFile) {
        submitData.append("file", selectedFile);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: submitData,
      });

      if (!res.ok) throw new Error("Failed to send");

      setFormState("success");
      toast.success("BOM submitted successfully. Our team will respond within 24 hours.");
    } catch {
      toast.error("Failed to submit. Please try again or email info@costadevices.com directly.");
      setFormState("idle");
    }
  };

  return (
    <div className="min-h-screen pt-[100px] flex flex-col bg-transparent">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Information & Trust Signals */}
        <div className="bg-[#fafafa] p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden border-r border-gray-200">
          {/* Subtle Light Mode Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
            <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-costa-green/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-[500px]">
            <div className="font-mono text-xs font-bold text-costa-green uppercase tracking-widest border border-costa-green/30 px-3 py-1 mb-12 inline-flex items-center gap-2 bg-white rounded-full shadow-sm">
              <span className="w-2 h-2 bg-costa-green rounded-full animate-pulse"></span>
              SECURE UPLOAD TERMINAL
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter mb-8 uppercase text-gray-900">
              TRANSMIT BILL OF MATERIALS
            </h1>
            
            <p className="font-mono text-sm text-gray-500 leading-relaxed mb-12 uppercase tracking-wider">
              Submit your shortage list or full BOM. Our algorithmic sourcing network will scan global franchised and EMS excess inventory to secure your components in under 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-gray-900 uppercase tracking-tight">AS6081 Verification</h4>
                  <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-widest">All parts subject to microscopic inspection, X-Ray, and decapsulation before dispatch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Lock className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-gray-900 uppercase tracking-tight">End-to-End Encryption</h4>
                  <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-widest">Your IP and component requirements are strictly confidential under NDA protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Cpu className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-gray-900 uppercase tracking-tight">High Voltage Experts</h4>
                  <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-widest">Authorized sourcing for Eaton Bussmann, ABB, and Schneider infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-20 pt-8 border-t border-gray-200">
             <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
               SUPPORT HOTLINE // <a href="tel:+918248982286" className="text-gray-900 hover:text-costa-green font-bold transition-colors">+91 824 898 2286</a><br/>
               DIRECT INQUIRIES // <a href="mailto:info@costadevices.com" className="text-gray-900 hover:text-costa-green font-bold transition-colors">INFO@COSTADEVICES.COM</a>
             </div>
          </div>
        </div>

        {/* Right Side: The Form & Upload Zone */}
        <div className="bg-white p-8 md:p-16 lg:p-24 flex items-center justify-center relative">
          {formState === "success" ? (
            <div className="w-full max-w-[600px] border border-gray-200 p-12 relative bg-white shadow-xl rounded-2xl text-center">
              <CheckCircle2 size={64} className="text-costa-green mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-heading text-2xl font-black mb-4 text-gray-900 tracking-tighter uppercase">BOM RECEIVED</h3>
              <p className="text-gray-500 mb-8 font-mono text-xs uppercase tracking-widest">
                Our sourcing team has been notified and will respond within 24 hours with availability and pricing.
              </p>
              <button 
                onClick={() => { setFormState("idle"); setUploadState("idle"); setFormData({ name: "", company: "", email: "", timeline: "IMMEDIATE (LINE DOWN)", notes: "" }); setSelectedFile(null); }} 
                className="font-mono text-xs text-costa-green hover:underline uppercase tracking-[0.2em] transition-colors"
              >
                Submit Another BOM →
              </button>
            </div>
          ) : (
            <div className="w-full max-w-[600px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 md:p-10 relative bg-white">
              
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">Operator Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl text-gray-900 px-4 py-3 font-mono text-sm focus:border-costa-green focus:bg-white focus:outline-none transition-colors`} placeholder="JOHN DOE" />
                    {errors.name && <p className="text-red-500 text-xs font-mono mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">Organization ID</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 px-4 py-3 font-mono text-sm focus:border-costa-green focus:bg-white focus:outline-none transition-colors" placeholder="COMPANY INC." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">Secure Comms (Email) *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl text-gray-900 px-4 py-3 font-mono text-sm focus:border-costa-green focus:bg-white focus:outline-none transition-colors`} placeholder="J.DOE@COMPANY.COM" />
                    {errors.email && <p className="text-red-500 text-xs font-mono mt-1">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">Target Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 px-4 py-3 font-mono text-sm focus:border-costa-green focus:bg-white focus:outline-none transition-colors appearance-none">
                      <option>IMMEDIATE (LINE DOWN)</option>
                      <option>STANDARD (3-5 DAYS)</option>
                      <option>PROACTIVE SOURCING</option>
                    </select>
                  </div>
                </div>

                {/* Upload Zone */}
                <div className="space-y-2 pt-4">
                  <label className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">BOM Payload Upload</label>
                  <div 
                    className={`border-2 border-dashed rounded-2xl transition-all duration-300 p-12 flex flex-col items-center justify-center text-center relative overflow-hidden ${
                      dragActive ? "border-costa-green bg-costa-green/5" : uploadState !== "idle" ? "border-costa-green/30 bg-gray-50" : "border-gray-300 hover:border-costa-green bg-gray-50 cursor-pointer"
                    }`}
                    onDragEnter={uploadState === "idle" ? handleDrag : undefined}
                    onDragLeave={uploadState === "idle" ? handleDrag : undefined}
                    onDragOver={uploadState === "idle" ? handleDrag : undefined}
                    onDrop={uploadState === "idle" ? handleDrop : undefined}
                    onClick={() => uploadState === "idle" && fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept=".csv,.xlsx,.xls,.pdf,.doc,.docx"
                      onChange={handleFileSelect}
                    />

                    <AnimatePresence mode="wait">
                      {uploadState === "idle" && (
                        <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center pointer-events-none">
                          <UploadCloud className="text-gray-400 group-hover:text-costa-green transition-colors mb-4" size={32} />
                          <p className="font-heading text-lg font-bold text-gray-900 uppercase tracking-tight mb-1">Drag & Drop BOM File</p>
                          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Supports .CSV, .XLSX, .PDF (Max 25MB)</p>
                          <span className="mt-6 border border-gray-200 hover:border-costa-green bg-white rounded-lg px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest text-gray-700 transition-colors inline-block shadow-sm pointer-events-auto cursor-pointer">
                            BROWSE DIRECTORY
                          </span>
                        </motion.div>
                      )}

                      {uploadState === "scanning" && (
                        <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full">
                          <div className="relative mb-6">
                            <FileCog className="text-costa-green animate-pulse" size={48} />
                            {/* Scanning Laser Line */}
                            <motion.div 
                              initial={{ top: 0 }}
                              animate={{ top: "100%" }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              className="absolute left-0 right-0 h-[2px] bg-costa-green shadow-[0_0_10px_#1AAF5D] z-10"
                            />
                          </div>
                          <p className="font-mono text-sm font-bold text-gray-900 uppercase tracking-widest mb-2 animate-pulse">ALGORITHMIC SCAN IN PROGRESS...</p>
                          <p className="font-mono text-xs text-costa-green uppercase tracking-widest">Parsing Manufacturer Part Numbers</p>
                          
                          {/* Progress Bar */}
                          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-6 overflow-hidden">
                            <motion.div 
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2.5, ease: "easeInOut" }}
                              className="h-full bg-costa-green"
                            />
                          </div>
                        </motion.div>
                      )}

                      {uploadState === "ready" && selectedFile && (
                        <motion.div key="ready" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-costa-green/10 flex items-center justify-center mb-4">
                            <FileText className="text-costa-green" size={32} />
                          </div>
                          <p className="font-heading text-lg font-bold text-gray-900 uppercase tracking-tight mb-1">{selectedFile.name}</p>
                          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">{(selectedFile.size / 1024).toFixed(1)} KB — PARSED SUCCESSFULLY</p>
                          <button 
                            type="button" 
                            onClick={(e) => { e.stopPropagation(); setSelectedFile(null); setUploadState("idle"); }} 
                            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-red-500 bg-white border border-gray-200 rounded-lg px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
                          >
                            <X size={14} /> REMOVE FILE
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">Additional Parameters</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-xl text-gray-900 px-4 py-3 font-mono text-sm focus:border-costa-green focus:bg-white focus:outline-none transition-colors resize-none" placeholder="Enter target pricing, acceptable date codes, or specific manufacturer instructions..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === "submitting" || uploadState === "scanning"} 
                  className="w-full bg-gray-900 text-white rounded-xl font-mono text-sm font-bold uppercase py-5 px-8 hover:bg-costa-green transition-all shadow-md hover:shadow-[0_10px_30px_rgba(26,175,93,0.3)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formState === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      INITIATE SOURCING PROTOCOL
                    </>
                  )}
                </button>

              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-[100px] flex items-center justify-center bg-[#fafafa]">
        <div className="w-8 h-8 border-2 border-costa-green/30 border-t-costa-green rounded-full animate-spin" />
      </div>
    }>
      <RequestQuoteForm />
    </Suspense>
  );
}
