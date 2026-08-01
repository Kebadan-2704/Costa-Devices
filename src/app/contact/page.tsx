"use client";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY, OFFICES } from "@/lib/constants";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", subject: "general", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // spam bot caught
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setFormState("submitting");

    try {
      const payload = {
        ...formData,
        access_key: "090fe3b4-684c-4f8f-8817-80756b1f7ffe",
        from_name: "Costa Devices Contact Form",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();
      
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to send");
      
      setFormState("success");
      toast.success("Message sent. Our sales team has been notified.");
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again.");
      setFormState("idle");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen text-text-secondary transition-colors duration-500" style={{ fontFamily: 'Calibri, Carlito, "Segoe UI", system-ui, sans-serif' }}>
      {/* Hero */}
      <section className="relative pt-40 pb-8 overflow-hidden border-b border-glass-border transition-colors duration-500">
        <div className="absolute inset-0 z-0 bg-bg-secondary transition-colors duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_80%,transparent_100%)] transition-opacity duration-500" />
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-costa-green/5 blur-[100px]" />
          <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-bg-primary to-transparent" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-costa-green/5 border border-costa-green/20 text-costa-green text-sm font-semibold mb-8 backdrop-blur-sm shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-costa-green animate-pulse" />
              Home / Contact
            </div>
            <h1 className="font-heading text-[clamp(3rem,7vw,5.5rem)] font-bold uppercase leading-[1.1] mb-8 text-text-primary tracking-tight transition-colors duration-500" style={{ fontFamily: 'var(--font-body), sans-serif' }}>
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-green to-emerald-400 drop-shadow-sm">Sales.</span>
            </h1>
            <div className="relative p-6 rounded-2xl bg-bg-secondary/40 border border-glass-border backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-costa-green to-emerald-300 rounded-l-2xl" />
              <p className="text-text-secondary text-lg max-w-2xl leading-relaxed transition-colors duration-500">
                Our global team responds within 24 hours. Contact us for quotes, technical support, or enterprise partnership inquiries.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-6 relative">
            <div className="relative h-[350px] lg:h-[450px] w-full rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white group transform transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-[2s] ease-out pointer-events-none">
                <video 
                  src="/videos/Home_Contact_CONTACT_SALES.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info (Offices Grid) */}
      <section className="pt-8 pb-12 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap gap-6">
            {/* Global HQ */}
            <ScrollReveal delay={0.1} className="flex-1 min-w-[300px] lg:min-w-[400px]">
              <div className="bg-bg-secondary border border-glass-border p-8 lg:p-10 h-full group hover:border-costa-green/50 transition-colors duration-500 rounded-3xl flex flex-col shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-glass-border transition-colors duration-500">
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-text-primary tracking-tight transition-colors duration-500 mb-1">Global Headquarters</h4>
                    <span className="text-sm font-bold text-costa-green tracking-widest uppercase">Main Hub</span>
                  </div>
                </div>
                <div className="space-y-5 text-base font-medium text-text-secondary transition-colors duration-500 flex-1">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 hover:text-costa-green transition-colors duration-300 w-fit">
                    <Mail size={20} className="text-costa-green shrink-0" />
                    <span>{COMPANY.email}</span>
                  </a>
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 hover:text-costa-green transition-colors duration-300 w-fit">
                    <Phone size={20} className="text-costa-green shrink-0" />
                    <span>{COMPANY.phone}</span>
                  </a>
                  <a href="tel:+971503413793" className="flex items-center gap-4 hover:text-costa-green transition-colors duration-300 w-fit">
                    <Phone size={20} className="text-costa-green shrink-0" />
                    <span>+971 50 341 3793</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Offices */}
            {OFFICES.map((office, i) => (
              <ScrollReveal key={office.id} delay={0.15 + i * 0.1} className="flex-1 min-w-[300px]">
                <div className="bg-bg-secondary border border-glass-border p-8 lg:p-10 h-full group hover:border-costa-green/50 transition-colors duration-500 rounded-3xl flex flex-col shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-glass-border transition-colors duration-500">
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-text-primary tracking-tight transition-colors duration-500 mb-1">{office.city} Office</h4>
                      <span className="text-sm font-bold text-costa-green tracking-widest uppercase">{office.label}</span>
                    </div>
                  </div>
                  <div className="space-y-5 text-base font-medium text-text-secondary transition-colors duration-500 flex-1">
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-costa-green shrink-0 mt-1" />
                      <span className="leading-relaxed whitespace-pre-line">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone size={20} className="text-costa-green shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock size={20} className="text-costa-green shrink-0" />
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Contact Form */}
      <section className="pb-8 pt-12 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal>
            {formState === "success" ? (
              <div className="bg-bg-secondary border border-glass-border p-16 text-center transition-colors duration-500 rounded-3xl flex flex-col justify-center items-center">
                <CheckCircle2 size={80} className="text-costa-green mx-auto mb-8" strokeWidth={1} />
                <h3 className="font-heading text-3xl font-semibold mb-4 text-text-primary tracking-tight transition-colors duration-500">Message Sent Successfully</h3>
                <p className="text-text-secondary text-lg mb-10 font-light transition-colors duration-500 max-w-lg mx-auto">Our sales team has received your inquiry and will respond within our standard 24-hour window.</p>
                <button onClick={() => { setFormState("idle"); setFormData({ name: "", company: "", email: "", phone: "", subject: "general", message: "" }); }} className="text-base font-bold tracking-wide uppercase text-costa-green hover:text-costa-green-dark transition-colors px-8 py-4 bg-costa-green/10 rounded-xl hover:bg-costa-green/20">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bg-secondary border border-glass-border p-6 lg:p-8 transition-colors duration-500 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4 border-b border-glass-border pb-6">
                  <div>
                    <h3 className="font-heading text-3xl font-semibold text-text-primary tracking-tight transition-colors duration-500 mb-2">Get in Touch</h3>
                    <p className="text-text-secondary text-sm font-medium">Fill out the form below and we'll get back to you shortly.</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-costa-green/10 border border-costa-green/20 text-costa-green text-xs font-bold tracking-wide uppercase">
                    <Clock size={14} />
                    Avg. Response: 4 Hours
                  </div>
                </div>
                
                {/* Honeypot field - hidden from users */}
                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Left Column: Details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-bold tracking-wide uppercase text-text-secondary block mb-3 transition-colors duration-500">Your Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-bg-primary border border-glass-border text-text-primary text-base p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="Full Name" />
                      </div>
                      <div>
                        <label className="text-sm font-bold tracking-wide uppercase text-text-secondary block mb-3 transition-colors duration-500">Organization</label>
                        <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary text-base p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="Company Name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-bold tracking-wide uppercase text-text-secondary block mb-3 transition-colors duration-500">Email Address *</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-bg-primary border border-glass-border text-text-primary text-base p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="work@email.com" />
                      </div>
                      <div>
                        <label className="text-sm font-bold tracking-wide uppercase text-text-secondary block mb-3 transition-colors duration-500">Phone Number</label>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary text-base p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-bold tracking-wide uppercase text-text-secondary block mb-3 transition-colors duration-500">Inquiry Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary text-base p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 cursor-pointer appearance-none shadow-sm">
                        <option value="general">General Inquiry</option>
                        <option value="quote">Hardware Sourcing (RFQ)</option>
                        <option value="spot">Emergency Shortage Resolution</option>
                        <option value="distribution">Enterprise Agreement</option>
                      </select>
                    </div>
                  </div>

                  {/* Right Column: Message & Submit */}
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex-1 flex flex-col">
                      <label className="text-sm font-bold tracking-wide uppercase text-text-secondary block mb-3 transition-colors duration-500">Your Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full h-full min-h-[200px] bg-bg-primary border border-glass-border text-text-primary text-base p-5 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 resize-none shadow-sm flex-1" placeholder="Provide detailed requirements, part numbers, or questions..." />
                    </div>

                    <button type="submit" disabled={formState === "submitting"} className="rounded-xl bg-[#111111] text-white hover:bg-costa-green transition-colors w-full py-5 text-sm font-bold uppercase tracking-widest group disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_-10px_rgba(26,175,93,0.5)] hover:-translate-y-1 transform duration-300">
                      {formState === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>


    </div>
  );
}
