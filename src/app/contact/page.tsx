"use client";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY, OFFICES } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", subject: "general", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      toast.success("Message sent successfully! We'll respond within 24 hours.");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    backgroundColor: "var(--input-bg)",
    border: "1px solid var(--input-border)",
    color: "var(--text-primary)",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="absolute inset-0 bg-[var(--bg-secondary)]" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Contact
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Let&apos;s Power Your{" "}
              <span className="green-gradient-text">Next Project</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Our team responds within 24 hours. Reach out for quotes, technical support, or partnership inquiries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding pt-0" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {formState === "success" ? (
                  <div className="glass-card p-12 text-center">
                    <CheckCircle2 size={64} className="text-costa-green mx-auto mb-6" />
                    <h3 className="font-heading text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Message Sent!</h3>
                    <p className="text-text-secondary mb-8">We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => { setFormState("idle"); setFormData({ name: "", company: "", email: "", phone: "", subject: "general", message: "" }); }} className="btn-ghost">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
                    <h3 className="font-heading text-xl font-semibold mb-8" style={{ color: "var(--text-primary)" }}>Send us a message</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="contact-name" className="text-text-muted text-sm font-medium mb-2 block">Name *</label>
                        <input id="contact-name" name="name" value={formData.name} onChange={handleChange} required className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/30 transition-all" style={inputStyle} placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="text-text-muted text-sm font-medium mb-2 block">Company</label>
                        <input id="contact-company" name="company" value={formData.company} onChange={handleChange} className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/30 transition-all" style={inputStyle} placeholder="Your Company" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="contact-email" className="text-text-muted text-sm font-medium mb-2 block">Email *</label>
                        <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/30 transition-all" style={inputStyle} placeholder="john@company.com" />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="text-text-muted text-sm font-medium mb-2 block">Phone</label>
                        <input id="contact-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/30 transition-all" style={inputStyle} placeholder="+91 XXXXXXXXXX" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label htmlFor="contact-subject" className="text-text-muted text-sm font-medium mb-2 block">Subject</label>
                      <select id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/30 transition-all appearance-none cursor-pointer" style={inputStyle}>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="spot">Spot Market Sourcing</option>
                        <option value="distribution">Distribution Program</option>
                        <option value="pcb">PCB Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="contact-message" className="text-text-muted text-sm font-medium mb-2 block">Message *</label>
                      <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-costa-green/30 transition-all resize-none" style={inputStyle} placeholder="Tell us about your requirements..." />
                    </div>
                    <button type="submit" disabled={formState === "submitting"} className="btn-primary w-full justify-center !py-4 disabled:opacity-50">
                      {formState === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">Send Message <Send size={16} /></span>
                      )}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="glass-card p-6">
                  <h4 className="font-heading text-base font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Direct Contact</h4>
                  <div className="space-y-4">
                    <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-text-primary hover:text-costa-green transition-colors font-medium">
                      <Mail size={18} className="text-costa-green shrink-0" />
                      <span className="text-sm">{COMPANY.email}</span>
                    </a>
                    <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-text-primary hover:text-costa-green transition-colors font-medium">
                      <Phone size={18} className="text-costa-green shrink-0" />
                      <span className="text-sm font-mono">{COMPANY.phone}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {OFFICES.map((office, i) => (
                <ScrollReveal key={office.id} delay={0.15 + i * 0.1}>
                  <div className="glass-card p-6" style={{ transform: "none" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <h4 className="font-heading text-base font-semibold" style={{ color: "var(--text-primary)" }}>{office.city}</h4>
                        <span className="text-costa-green text-xs font-medium">{office.label}</span>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-text-secondary font-medium">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-costa-green shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-costa-green shrink-0" />
                        <span className="font-mono text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-costa-green shrink-0" />
                        <span className="font-mono text-sm">{office.timezone}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



