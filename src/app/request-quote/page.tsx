"use client";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, FileText, X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { useState, useRef, useEffect, useMemo } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { toast } from "sonner";

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState<boolean | "submitting">(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const rfqId = useMemo(() => `RFQ-${Date.now().toString(36).toUpperCase()}`, []);
  
  useEffect(() => setIsMounted(true), []);

  const [formData, setFormData] = useLocalStorage("costa-rfq-payload", {
    name: "", company: "", email: "", phone: "",
    category: "", partNumbers: "", quantity: "", targetPrice: "",
    notes: "", timeline: "standard",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Packet exceeds 10MB limit");
        return;
      }
      setUploadedFile(file);
      toast.success(`Packet "${file.name}" attached successfully`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Packet exceeds 10MB limit");
        return;
      }
      setUploadedFile(file);
      toast.success(`Packet "${file.name}" attached successfully`);
    }
  };

  const handleSubmit = async () => {
    if (honeypot) return; // spam bot caught
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      toast.error("All contact fields are required (Step 1)");
      setStep(1);
      return;
    }
    setSubmitted("submitting");

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value as string);
      });
      if (uploadedFile) {
        payload.append("file", uploadedFile);
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Transmission failed");
      
      setSubmitted(true);
      toast.success("Packet received. Processing logic initiated.");
    } catch (error) {
      toast.error("Server connection failed. Retransmit.");
      setSubmitted(false);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.company || !formData.phone) {
        toast.error("All contact fields are required (Step 1)");
        return;
      }
    }
    setStep((s) => Math.min(s + 1, 4));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  if (submitted === true || submitted === "submitting") {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 transition-colors duration-500">
        <div className="bg-bg-secondary border border-glass-border p-12 text-center max-w-lg w-full flex flex-col items-center justify-center min-h-[400px] transition-colors duration-500 rounded-2xl">
          {submitted === "submitting" ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 mb-8 relative">
                <div className="absolute inset-0 rounded-full border-4 border-glass-border transition-colors duration-500" />
                <div className="absolute inset-0 rounded-full border-4 border-costa-green border-t-transparent animate-spin" />
              </div>
              <h2 className="font-heading text-2xl font-black mb-3 text-text-primary tracking-tighter transition-colors duration-500">SUBMITTING REQUEST</h2>
              <p className="text-text-secondary font-light transition-colors duration-500">Submitting your requirements to our sales team...</p>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500 w-full">
              <div className="w-20 h-20 bg-costa-green/10 border border-costa-green/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm transition-colors duration-500">
                <CheckCircle2 size={40} className="text-costa-green" strokeWidth={1} />
              </div>
              <h2 className="font-heading text-3xl font-black mb-4 text-text-primary tracking-tighter transition-colors duration-500">REQUEST RECEIVED</h2>
              <p className="text-text-secondary font-light mb-8 transition-colors duration-500">
                Your RFQ has been submitted. Our team will contact you within 24 hours.
              </p>
              <div className="bg-bg-primary border border-glass-border p-6 inline-block w-full text-center mb-8 transition-colors duration-500 rounded-xl">
                <p className="font-mono text-[10px] text-text-muted font-bold uppercase tracking-widest mb-2">Quote ID</p>
                <p className="font-mono text-xl text-costa-green font-bold tracking-wider">
                  {rfqId}
                </p>
              </div>
              <Link href="/" className="btn-primary rounded-lg w-full py-5 text-sm tracking-[0.15em] group">
                <span className="flex items-center justify-center gap-3">Return to Homepage <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen text-text-secondary transition-colors duration-500">
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-glass-border transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg-primary transition-colors duration-500" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Request Quote
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight mb-6 text-text-primary tracking-tighter transition-colors duration-500">
              COMPONENT <span className="text-costa-green">QUOTE</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light border-l-4 border-costa-green pl-6 mb-8 transition-colors duration-500">
              Submit your requirements for a fast, competitive quote. Our systems cross-reference 5M+ inventory lines globally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 transition-colors duration-500">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Progress Bar */}
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-16 overflow-x-auto pb-4 hide-scrollbar">
              {[
                { num: 1, label: "Contact" },
                { num: 2, label: "Hardware" },
                { num: 3, label: "Shipping" },
                { num: 4, label: "Verify" },
              ].map((s, idx) => (
                <div key={s.num} className="flex items-center gap-2 shrink-0">
                  <div className={`flex items-center gap-3 px-4 py-3 border rounded-lg transition-colors duration-500 ${
                    step >= s.num
                      ? "border-costa-green bg-costa-green/10 text-text-primary"
                      : "border-glass-border bg-bg-secondary text-text-muted"
                  }`}>
                    <span className={`w-6 h-6 flex items-center justify-center font-mono text-xs font-bold rounded-md transition-colors duration-500 ${
                      step >= s.num ? "bg-costa-green text-white" : "bg-bg-secondary border border-glass-border text-text-secondary"
                    }`}>
                      {step > s.num ? <CheckCircle2 size={12} /> : s.num}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold hidden sm:inline-block">
                      {s.label}
                    </span>
                  </div>
                  {idx < 3 && <div className={`w-8 h-px transition-colors duration-500 ${step > s.num ? "bg-costa-green" : "bg-glass-border"}`} />}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form Container */}
          {isMounted && (
            <ScrollReveal delay={0.1}>
              <div className="bg-bg-secondary border border-glass-border p-8 sm:p-12 relative overflow-hidden transition-colors duration-500">
                {/* Step 1: Contact Detail */}
                {step === 1 && (
                  <div className="animate-in slide-in-from-right-4 fade-in duration-500">
                    <h2 className="font-heading text-2xl font-black mb-8 text-text-primary tracking-tighter transition-colors duration-500">CONTACT INFORMATION</h2>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Your Name *</label>
                          <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm dark:shadow-none" placeholder="Name" />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Organization *</label>
                          <input required name="company" value={formData.company} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm dark:shadow-none" placeholder="Company Name" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Email Address *</label>
                          <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm dark:shadow-none" placeholder="email@company.com" />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Phone Number *</label>
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm dark:shadow-none" placeholder="Phone Number" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Requirements */}
                {step === 2 && (
                  <div className="animate-in slide-in-from-right-4 fade-in duration-500">
                    <h2 className="font-heading text-2xl font-black mb-8 text-text-primary tracking-tighter transition-colors duration-500">HARDWARE CLASSIFICATION</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Hardware Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 cursor-pointer appearance-none shadow-sm dark:shadow-none">
                          <option value="">Select Primary Classification...</option>
                          {PRODUCT_CATEGORIES.map(cat => (
                            <option key={cat.id} value={cat.title}>{cat.title}</option>
                          ))}
                          <option value="other">Other / Mixed Requirements</option>
                        </select>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block">Primary Part Numbers / Disti SKUs</label>
                        </div>
                        <textarea name="partNumbers" value={formData.partNumbers} onChange={handleChange} rows={4} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 resize-none shadow-sm dark:shadow-none" placeholder="e.g. 170M6814, JANTX1N4148UR-1" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Volume Required</label>
                          <input name="quantity" value={formData.quantity} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm dark:shadow-none" placeholder="e.g. 5,000 pcs / mo" />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Target Pricing (USD/INR)</label>
                          <input name="targetPrice" value={formData.targetPrice} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm dark:shadow-none" placeholder="Optional" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Logistics & Upload */}
                {step === 3 && (
                  <div className="animate-in slide-in-from-right-4 fade-in duration-500">
                    <h2 className="font-heading text-2xl font-black mb-8 text-text-primary tracking-tighter transition-colors duration-500">SHIPPING & DELIVERY</h2>
                    
                    <div className="mb-8">
                      <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-4">Required Delivery Velocity</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: "urgent", label: "URGENT", desc: "AOG / Stock out. Under 48hrs." },
                          { id: "standard", label: "STANDARD", desc: "1-2 Weeks Delivery" },
                          { id: "scheduled", label: "SCHEDULED", desc: "Call-offs & Future Qtrs" }
                        ].map((tl) => (
                          <div 
                            key={tl.id}
                            onClick={() => setFormData({...formData, timeline: tl.id})}
                            className={`p-4 border cursor-pointer transition-all duration-500 ${formData.timeline === tl.id ? "border-costa-green bg-costa-green/10" : "border-glass-border bg-bg-primary hover:border-costa-green/30 dark:hover:border-costa-green/30"}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className={`font-mono text-xs font-bold tracking-widest uppercase transition-colors duration-500 ${formData.timeline === tl.id ? "text-text-primary" : "text-text-muted"}`}>{tl.label}</span>
                              <div className={`w-3 h-3 rounded-full flex items-center justify-center border transition-colors duration-500 ${formData.timeline === tl.id ? "border-costa-green" : "border-glass-border"}`}>
                                {formData.timeline === tl.id && <div className="w-1.5 h-1.5 bg-costa-green rounded-full" />}
                              </div>
                            </div>
                            <p className="text-[10px] text-text-muted">{tl.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-4">Upload B.O.M. (Excel/PDF)</label>
                      
                      {!uploadedFile ? (
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          className={`border border-dashed p-8 text-center cursor-pointer transition-all duration-500 group shadow-sm dark:shadow-none ${
                            isDragging ? "border-costa-green bg-costa-green/10" : "border-glass-border bg-bg-primary hover:border-costa-green hover:bg-costa-green/5"
                          }`}
                        >
                          <Upload size={24} className={`mx-auto mb-4 transition-colors ${isDragging ? "text-costa-green" : "text-text-muted group-hover:text-costa-green"}`} />
                          <p className="font-heading text-lg font-bold text-text-primary mb-1 tracking-tight transition-colors duration-500">
                            {isDragging ? "Drop BOM File Here" : "Drag & Drop BOM File"}
                          </p>
                          <p className="text-xs text-text-muted font-mono">Excel, CSV, or PDF up to 10MB. Or click to browse.</p>
                        </div>
                      ) : (
                        <div className="border border-costa-green bg-costa-green/10 p-6 flex justify-between items-center group transition-colors duration-500">
                          <div className="flex items-center gap-4">
                            <FileText className="text-costa-green" size={24} />
                            <div>
                              <p className="font-mono text-sm text-text-primary font-bold transition-colors duration-500">{uploadedFile.name}</p>
                              <p className="text-xs text-costa-green font-mono">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                          </div>
                          <button onClick={() => setUploadedFile(null)} className="text-text-muted hover:text-red-500 dark:hover:text-red-400 p-2 border border-glass-border hover:border-red-500 dark:hover:border-red-400 bg-bg-primary transition-colors shadow-sm dark:shadow-none">
                            <X size={16} />
                          </button>
                        </div>
                      )}
                      
                      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.zip" />
                    </div>

                    <div>
                      <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">Additional Notes</label>
                      <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 focus:outline-none focus:border-costa-green transition-colors duration-500 resize-none shadow-sm dark:shadow-none" placeholder="Certifications required, target datecodes, etc." />
                    </div>
                  </div>
                )}

                {/* Step 4: Verification */}
                {step === 4 && (
                  <div className="animate-in slide-in-from-right-4 fade-in duration-500">
                    <h2 className="font-heading text-2xl font-black mb-8 text-text-primary tracking-tighter transition-colors duration-500">REVIEW & SUBMIT</h2>
                    
                    <div className="bg-bg-primary border border-glass-border divide-y divide-glass-border mb-8 transition-colors duration-500 shadow-sm dark:shadow-none">
                      <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 group hover:bg-bg-secondary transition-colors duration-500">
                        <div>
                          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Contact Info</p>
                          <p className="font-heading text-lg font-bold text-text-primary transition-colors duration-500">{formData.name}</p>
                          <p className="text-sm font-mono text-costa-green">{formData.email}</p>
                        </div>
                        <button onClick={() => setStep(1)} className="font-mono text-[10px] text-text-muted uppercase hover:text-text-primary transition-colors duration-500">Edit</button>
                      </div>
                      
                      <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 group hover:bg-bg-secondary transition-colors duration-500">
                        <div>
                          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Hardware Request</p>
                          {formData.partNumbers ? (
                            <p className="font-mono text-sm text-text-primary mt-2 border-l-2 border-costa-green pl-3 whitespace-pre-line leading-relaxed overflow-hidden line-clamp-3 transition-colors duration-500">
                              {formData.partNumbers}
                            </p>
                          ) : (
                            <p className="font-mono text-sm text-text-muted">No manual SKUs specified.</p>
                          )}
                          <p className="text-xs text-text-muted mt-2 font-mono">Volume: {formData.quantity || 'TBD'} | Target: {formData.targetPrice || 'N/A'}</p>
                        </div>
                        <button onClick={() => setStep(2)} className="font-mono text-[10px] text-text-muted uppercase hover:text-text-primary transition-colors duration-500">Edit</button>
                      </div>

                      <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 group hover:bg-bg-secondary transition-colors duration-500">
                        <div>
                          <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">Shipping Speed</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="bg-costa-green/10 border border-costa-green/30 text-costa-green font-mono text-[10px] uppercase px-3 py-1 font-bold tracking-widest">
                              {formData.timeline}
                            </span>
                            {uploadedFile && (
                              <span className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono text-[10px] uppercase px-3 py-1 font-bold tracking-widest flex items-center gap-1 transition-colors duration-500">
                                <FileText size={10} /> File Attached
                              </span>
                            )}
                          </div>
                        </div>
                        <button onClick={() => setStep(3)} className="font-mono text-[10px] text-text-muted uppercase hover:text-text-primary transition-colors duration-500">Edit</button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-glass-border transition-colors duration-500">
                  <button 
                    onClick={prevStep} 
                    className={`font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-3 transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : "text-text-muted hover:text-text-primary"}`}
                  >
                    <ArrowLeft size={14} /> Back
                  </button>

                  <button 
                    onClick={step === 4 ? handleSubmit : nextStep} 
                    className="group flex items-center justify-center gap-4 bg-text-primary text-bg-primary px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-text-secondary transition-colors"
                  >
                    {step === 4 ? "SUBMIT REQUEST" : "PROCEED"}
                    <ArrowRight size={16} className={`transition-transform ${step !== 4 && "group-hover:translate-x-1"}`} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}

