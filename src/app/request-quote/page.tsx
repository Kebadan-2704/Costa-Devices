"use client";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, FileText, X } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { PRODUCT_CATEGORIES, COMPANY } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { toast } from "sonner";

export default function RequestQuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState<boolean | "submitting">(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
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
        toast.error("File size exceeds 10MB limit");
        return;
      }
      setUploadedFile(file);
      toast.success(`File "${file.name}" attached successfully`);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      toast.error("Please fill in required contact fields (Step 1)");
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

      if (!res.ok) throw new Error("Failed to submit RFQ");
      
      setSubmitted(true);
      toast.success("Quote request securely transmitted to our engineering team.");
    } catch (error) {
      toast.error("Server connection failed. Please try again.");
      setSubmitted(false);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const inputStyle = {
    backgroundColor: "var(--input-bg)",
    border: "1px solid var(--input-border)",
    color: "var(--text-primary)",
  };

  if (submitted === true || submitted === "submitting") {
    return (
      <section className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="glass-card p-12 text-center max-w-lg w-full flex flex-col items-center justify-center min-h-[400px] transition-all duration-700">
          {submitted === "submitting" ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 mb-8 relative">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100 dark:border-slate-800" />
                <div className="absolute inset-0 rounded-full border-4 border-[#059669] border-t-transparent animate-spin" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Processing Request</h2>
              <p className="text-text-secondary">Securely transmitting your BOM and RFQ configuration...</p>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-[#F0FDF4] dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100 dark:border-emerald-900/50">
                <CheckCircle2 size={40} className="text-[#059669]" />
              </div>
              <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Quote Request Submitted</h2>
              <p className="text-text-secondary mb-6">
                Our global engineering team is reviewing your requirements. Expect a full proposal within 24 hours.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 rounded-xl inline-block mb-8">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Secure Reference ID</p>
                <p className="font-mono text-xl text-[#059669] font-bold tracking-wider">
                  RFQ-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </p>
              </div>
              <div className="block">
                <Link href="/" className="btn-primary inline-flex justify-center px-8">
                  Return to Dashboard <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-16 pb-20 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Request Quote
            </p>
            <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Request a <span className="green-gradient-text">Quote</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours with a competitive quote.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[800px] mx-auto">
          {/* Progress Bar */}
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-12">
              {[
                { num: 1, label: "Contact" },
                { num: 2, label: "Requirements" },
                { num: 3, label: "Upload" },
                { num: 4, label: "Details" },
              ].map((s) => (
                <div key={s.num} className="flex-1 flex items-center gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      s.num <= step ? "bg-costa-green text-white shadow-lg shadow-costa-green/20" : "text-text-muted"
                    }`} style={s.num > step ? { background: "var(--card-tag-bg)", border: "1px solid var(--input-border)" } : {}}>
                      {s.num < step ? <CheckCircle2 size={18} /> : s.num}
                    </div>
                    <span className={`text-xs font-medium ${s.num <= step ? "text-costa-green" : "text-text-muted"}`}>{s.label}</span>
                  </div>
                  {s.num < 4 && <div className={`flex-1 h-px transition-colors ${s.num < step ? "bg-costa-green" : ""}`} style={s.num >= step ? { background: "var(--input-border)" } : {}} />}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card p-12 md:p-16">
              {/* Step 1: Contact */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="font-heading text-2xl font-semibold mb-8" style={{ color: "var(--text-primary)" }}>Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="rfq-name" className="text-text-muted text-sm font-medium mb-2 block">Full Name *</label>
                      <input id="rfq-name" name="name" value={formData.name} onChange={handleChange} required className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all font-medium text-base" style={inputStyle} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="rfq-company" className="text-text-muted text-sm font-medium mb-2 block">Company *</label>
                      <input id="rfq-company" name="company" value={formData.company} onChange={handleChange} required className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all font-medium text-base" style={inputStyle} placeholder="Your Company" />
                    </div>
                    <div>
                      <label htmlFor="rfq-email" className="text-text-muted text-sm font-medium mb-2 block">Email *</label>
                      <input id="rfq-email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all font-medium text-base" style={inputStyle} placeholder="john@company.com" />
                    </div>
                    <div>
                      <label htmlFor="rfq-phone" className="text-text-muted text-sm font-medium mb-2 block">Phone</label>
                      <input id="rfq-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all font-medium text-base" style={inputStyle} placeholder="+91 XXXXXXXXXX" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Requirements */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="font-heading text-2xl font-semibold mb-8" style={{ color: "var(--text-primary)" }}>Requirement Details</h3>
                  <div className="space-y-8">
                    <div>
                      <label htmlFor="rfq-category" className="text-text-muted text-sm font-medium mb-2 block">Product Category</label>
                      <select id="rfq-category" name="category" value={formData.category} onChange={handleChange} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all appearance-none cursor-pointer font-medium text-base" style={inputStyle}>
                        <option value="">Select a category</option>
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.title}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="rfq-parts" className="text-text-muted text-sm font-medium mb-2 block">Part Numbers / Components *</label>
                      <textarea id="rfq-parts" name="partNumbers" value={formData.partNumbers} onChange={handleChange} rows={4} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all resize-none font-medium text-base" style={inputStyle} placeholder="Enter part numbers, one per line..." />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="rfq-qty" className="text-text-muted text-sm font-medium mb-2 block">Quantity</label>
                        <input id="rfq-qty" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all font-medium text-base" style={inputStyle} placeholder="100" />
                      </div>
                      <div>
                        <label htmlFor="rfq-price" className="text-text-muted text-sm font-medium mb-2 block">Target Price (Optional)</label>
                        <input id="rfq-price" name="targetPrice" value={formData.targetPrice} onChange={handleChange} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all font-medium text-base" style={inputStyle} placeholder="$X.XX" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Upload */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="font-heading text-2xl font-semibold mb-8" style={{ color: "var(--text-primary)" }}>Upload BOM (Optional)</h3>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".xlsx,.csv,.pdf,.xls"
                    onChange={handleFileChange}
                    className="hidden"
                    id="bom-upload"
                    aria-label="Upload BOM file"
                  />
                  {uploadedFile ? (
                    <div className="glass-card p-8 flex items-center gap-6" style={{ transform: "none" }}>
                      <div className="w-16 h-16 rounded-2xl bg-costa-green/10 flex flex-col items-center justify-center shrink-0">
                        <FileText size={32} className="text-costa-green" />
                      </div>
                      <div className="flex-1">
                        <p className="font-heading font-medium text-lg mb-1" style={{ color: "var(--text-primary)" }}>{uploadedFile.name}</p>
                        <p className="text-text-muted text-sm">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                      </div>
                      <button
                        onClick={() => { setUploadedFile(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-text-muted hover:text-white hover:bg-red-500/80 transition-all cursor-pointer"
                        style={{ background: "var(--card-tag-bg)" }}
                        aria-label="Remove file"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="bom-upload"
                      className="block border-2 border-dashed rounded-3xl p-16 text-center transition-all cursor-pointer hover:bg-costa-green/5"
                      style={{ borderColor: "var(--input-border)" }}
                      onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.borderColor = "var(--brand-green)"; e.currentTarget.style.backgroundColor = "rgba(0, 200, 83, 0.05)"; }}
                      onDragLeave={(e) => { e.currentTarget.style.borderColor = "var(--input-border)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.style.borderColor = "var(--input-border)";
                        e.currentTarget.style.backgroundColor = "transparent";
                        const file = e.dataTransfer.files[0];
                        if (file) {
                          if (file.size > 10 * 1024 * 1024) { toast.error("File size exceeds 10MB"); return; }
                          setUploadedFile(file);
                          toast.success(`File "${file.name}" attached`);
                        }
                      }}
                    >
                      <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-costa-green/10 flex items-center justify-center">
                        <Upload size={36} className="text-costa-green" />
                      </div>
                      <p className="font-heading text-xl font-medium mb-3" style={{ color: "var(--text-primary)" }}>Drag & drop your BOM file here</p>
                      <p className="text-text-secondary text-base mb-6">or click to browse from your device</p>
                      <div className="inline-flex gap-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-costa-green/10 text-costa-green">.xlsx</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-costa-green/10 text-costa-green">.csv</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-costa-green/10 text-costa-green">.pdf</span>
                      </div>
                    </label>
                  )}
                </div>
              )}

              {/* Step 4: Additional */}
              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="font-heading text-2xl font-semibold mb-8" style={{ color: "var(--text-primary)" }}>Additional Details</h3>
                  <div className="space-y-8">
                    <div>
                      <label htmlFor="rfq-timeline" className="text-text-muted text-sm font-medium mb-2 block">Timeline</label>
                      <select id="rfq-timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all appearance-none cursor-pointer font-medium text-base" style={inputStyle}>
                        <option value="urgent">Urgent (24-48 hours)</option>
                        <option value="standard">Standard (1-2 weeks)</option>
                        <option value="flexible">Flexible (no rush)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="rfq-notes" className="text-text-muted text-sm font-medium mb-2 block">Additional Notes</label>
                      <textarea id="rfq-notes" name="notes" value={formData.notes} onChange={handleChange} rows={5} className="w-full py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/50 transition-all resize-none font-medium text-base" style={inputStyle} placeholder="Any other details or requirements..." />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-10 p-6 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--glass-border)" }}>
                    <h4 className="text-sm text-costa-green uppercase tracking-widest mb-5 font-bold flex items-center gap-2"><CheckCircle2 size={16} /> Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                      {formData.name && <p className="text-text-primary"><span className="text-text-muted text-sm block mb-1">Name</span> {formData.name}</p>}
                      {formData.email && <p className="text-text-primary"><span className="text-text-muted text-sm block mb-1">Email</span> {formData.email}</p>}
                      {formData.company && <p className="text-text-primary"><span className="text-text-muted text-sm block mb-1">Company</span> {formData.company}</p>}
                      {formData.partNumbers && <p className="text-text-primary"><span className="text-text-muted text-sm block mb-1">Parts</span> {formData.partNumbers.split("\n").length} item(s)</p>}
                      {uploadedFile && <p className="text-text-primary"><span className="text-text-muted text-sm block mb-1">BOM Attached</span> {uploadedFile.name}</p>}
                      <p className="text-text-primary"><span className="text-text-muted text-sm block mb-1">Timeline</span> <span className="capitalize">{formData.timeline}</span></p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid var(--glass-border)" }}>
                {step > 1 ? (
                  <button onClick={prevStep} className="btn-ghost !py-3 !px-6 text-sm">
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 4 ? (
                  <button onClick={nextStep} className="btn-primary !py-3 !px-6 text-sm">
                    Next <ArrowRight size={14} />
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn-primary !py-3 !px-8 text-sm">
                    Submit Quote Request <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}



