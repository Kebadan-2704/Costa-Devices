"use client";

import React, { useState, useRef, Suspense } from "react";
import { UploadCloud, ShieldCheck, FileText, Lock, Cpu, CheckCircle2, Send, X } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

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
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size <= 25 * 1024 * 1024) {
        setSelectedFile(file);
      } else {
        toast.error("File size exceeds 25MB limit");
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size <= 25 * 1024 * 1024) {
        setSelectedFile(file);
      } else {
        toast.error("File size exceeds 25MB limit");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email");
      return;
    }
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          subject: "BOM / RFQ Submission",
          message: `Timeline: ${formData.timeline}\n\nAdditional Notes:\n${formData.notes}\n\n${selectedFile ? `Attached File: ${selectedFile.name}` : "No file attached"}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setFormState("success");
      toast.success("BOM submitted successfully. Our team will respond within 24 hours.");
    } catch {
      toast.error("Failed to submit. Please try again or email sales@costadevices.com directly.");
      setFormState("idle");
    }
  };

  return (
    <div className="min-h-screen pt-[100px] flex flex-col bg-transparent">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Information & Trust Signals */}
        <div className="bg-bg-secondary p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden border-r border-glass-border">
          {/* Subtle Industrial Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
              alt="Data Center" 
              fill sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale opacity-[0.03] mix-blend-multiply"
            />
          </div>

          <div className="relative z-10 max-w-[500px]">
            <div className="font-mono text-xs font-bold text-costa-green uppercase tracking-widest border border-costa-green/30 px-3 py-1 mb-12 inline-flex items-center gap-2 bg-bg-primary">
              <span className="w-2 h-2 bg-costa-green rounded-full animate-pulse"></span>
              SECURE UPLOAD TERMINAL
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-black leading-[1.05] tracking-tighter mb-8 uppercase text-text-primary">
              TRANSMIT BILL OF MATERIALS
            </h1>
            
            <p className="font-mono text-sm text-text-secondary leading-relaxed mb-12 uppercase tracking-wider">
              Submit your shortage list or full BOM. Our algorithmic sourcing network will scan global franchised and EMS excess inventory to secure your components in under 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-text-primary uppercase tracking-tight">AS6081 Verification</h4>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">All parts subject to microscopic inspection, X-Ray, and decapsulation before dispatch.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Lock className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-text-primary uppercase tracking-tight">End-to-End Encryption</h4>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">Your IP and component requirements are strictly confidential under NDA protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Cpu className="text-costa-green mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-heading text-lg font-black text-text-primary uppercase tracking-tight">High Voltage Experts</h4>
                  <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">Authorized sourcing for Eaton Bussmann, ABB, and Schneider infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-20 pt-8 border-t border-glass-border">
             <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
               SUPPORT HOTLINE // <a href="tel:+918248982286" className="text-text-primary hover:text-costa-green font-bold">+91 824 898 2286</a><br/>
               DIRECT INQUIRIES // <a href="mailto:sales@costadevices.com" className="text-text-primary hover:text-costa-green font-bold">SALES@COSTADEVICES.COM</a>
             </div>
          </div>
        </div>

        {/* Right Side: The Form & Upload Zone */}
        <div className="bg-bg-primary p-8 md:p-16 lg:p-24 flex items-center justify-center relative">
          {formState === "success" ? (
            <div className="w-full max-w-[600px] border-2 border-costa-green/30 p-12 relative bg-bg-secondary/50 text-center">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-costa-green -translate-x-[2px] -translate-y-[2px]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-costa-green translate-x-[2px] -translate-y-[2px]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-costa-green -translate-x-[2px] translate-y-[2px]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-costa-green translate-x-[2px] translate-y-[2px]"></div>
              
              <CheckCircle2 size={64} className="text-costa-green mx-auto mb-6" strokeWidth={1} />
              <h3 className="font-heading text-2xl font-black mb-4 text-text-primary tracking-tighter uppercase">BOM RECEIVED</h3>
              <p className="text-text-secondary mb-8 font-mono text-xs uppercase tracking-widest">
                Our sourcing team has been notified and will respond within 24 hours with availability and pricing.
              </p>
              <button 
                onClick={() => { setFormState("idle"); setFormData({ name: "", company: "", email: "", timeline: "IMMEDIATE (LINE DOWN)", notes: "" }); setSelectedFile(null); }} 
                className="font-mono text-xs text-costa-green hover:underline uppercase tracking-[0.2em] transition-colors"
              >
                Submit Another BOM →
              </button>
            </div>
          ) : (
            <div className="w-full max-w-[600px] border-2 border-glass-border p-8 md:p-10 relative bg-bg-secondary/50">
              {/* Terminal Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-text-primary -translate-x-[2px] -translate-y-[2px]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-text-primary translate-x-[2px] -translate-y-[2px]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-text-primary -translate-x-[2px] translate-y-[2px]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-text-primary translate-x-[2px] translate-y-[2px]"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Operator Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border border-black/10 text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors" placeholder="JOHN DOE" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Organization ID</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-black/10 text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors" placeholder="COMPANY INC." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Secure Comms (Email) *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white border border-black/10 text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors" placeholder="J.DOE@COMPANY.COM" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Target Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-white border border-black/10 text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors appearance-none">
                      <option>IMMEDIATE (LINE DOWN)</option>
                      <option>STANDARD (3-5 DAYS)</option>
                      <option>PROACTIVE SOURCING</option>
                    </select>
                  </div>
                </div>

                {/* Upload Zone */}
                <div className="space-y-2 pt-4">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">BOM Payload Upload</label>
                  <div 
                    className={`border-2 border-dashed transition-colors p-12 flex flex-col items-center justify-center text-center cursor-pointer group ${
                      dragActive ? "border-costa-green bg-costa-green/5" : selectedFile ? "border-costa-green/50 bg-costa-green/5" : "border-black/10 hover:border-costa-green bg-white"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept=".csv,.xlsx,.xls,.pdf,.doc,.docx"
                      onChange={handleFileSelect}
                    />
                    {selectedFile ? (
                      <>
                        <FileText className="text-costa-green mb-4" size={32} />
                        <p className="font-heading text-lg font-bold text-text-primary uppercase tracking-tight mb-1">{selectedFile.name}</p>
                        <p className="font-mono text-xs text-text-muted uppercase tracking-widest">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                        <button 
                          type="button" 
                          onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }} 
                          className="mt-4 inline-flex items-center gap-1 text-red-500 hover:text-red-600 font-mono text-xs font-bold uppercase tracking-widest transition-colors"
                        >
                          <X size={14} /> REMOVE FILE
                        </button>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="text-text-muted group-hover:text-costa-green transition-colors mb-4" size={32} />
                        <p className="font-heading text-lg font-bold text-text-primary uppercase tracking-tight mb-1">Drag & Drop BOM File</p>
                        <p className="font-mono text-xs text-text-muted uppercase tracking-widest">Supports .CSV, .XLSX, .PDF (Max 25MB)</p>
                        <span className="mt-6 border border-black/10 hover:border-costa-green bg-bg-secondary px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest text-text-primary transition-colors inline-block">
                          BROWSE DIRECTORY
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest">Additional Parameters</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-white border border-black/10 text-text-primary px-4 py-3 font-mono text-sm focus:border-costa-green focus:outline-none transition-colors resize-none" placeholder="Enter target pricing, acceptable date codes, or specific manufacturer instructions..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === "submitting"} 
                  className="w-full bg-costa-green text-white font-mono text-sm font-bold uppercase py-5 px-8 hover:bg-[#15964f] transition-all shadow-[0_0_20px_rgba(26,175,93,0.3)] hover:shadow-[0_0_30px_rgba(26,175,93,0.5)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
      <div className="min-h-screen pt-[100px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-costa-green/30 border-t-costa-green rounded-full animate-spin" />
      </div>
    }>
      <RequestQuoteForm />
    </Suspense>
  );
}
