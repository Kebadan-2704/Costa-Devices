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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) throw new Error("Failed to send");
      
      setFormState("success");
      toast.success("Message sent. Our sales team has been notified.");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      setFormState("idle");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen text-text-secondary transition-colors duration-500">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-glass-border transition-colors duration-500">
        <div className="absolute inset-0 bg-bg-secondary transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-costa-green/5 to-transparent blur-[150px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6 relative z-20">
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-costa-green" />
              Home / Contact
            </p>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight mb-6 text-text-primary tracking-tighter transition-colors duration-500">
              CONTACT<br/>
              <span className="text-costa-green">SALES.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed font-light border-l-4 border-costa-green pl-6 transition-colors duration-500">
              Our global team responds within 24 hours. Contact us for quotes, technical support, or enterprise partnership inquiries.
            </p>
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

      {/* Contact Form + Info */}
      <section className="py-24 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {formState === "success" ? (
                  <div className="bg-bg-secondary border border-glass-border p-12 text-center h-full flex flex-col justify-center items-center transition-colors duration-500 rounded-2xl">
                    <CheckCircle2 size={64} className="text-costa-green mx-auto mb-6" strokeWidth={1} />
                    <h3 className="font-heading text-2xl font-black mb-4 text-text-primary tracking-tighter transition-colors duration-500">MESSAGE SENT</h3>
                    <p className="text-text-secondary mb-8 font-light transition-colors duration-500">Our sales team has received your inquiry and will respond shortly.</p>
                    <button onClick={() => { setFormState("idle"); setFormData({ name: "", company: "", email: "", phone: "", subject: "general", message: "" }); }} className="font-mono text-xs text-costa-green hover:underline uppercase tracking-[0.2em] transition-colors">
                      Submit Another Inquiry →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-bg-secondary border border-glass-border p-10 lg:p-12 transition-colors duration-500 rounded-2xl">
                    <h3 className="font-heading text-2xl font-black mb-8 text-text-primary tracking-tighter transition-colors duration-500">CONTACT US</h3>
                    
                    {/* Honeypot field - hidden from users */}
                    <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 transition-colors duration-500">Your Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="Name" />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 transition-colors duration-500">Organization</label>
                        <input name="company" value={formData.company} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="Company Name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 transition-colors duration-500">Email Address *</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="Email Address" />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 transition-colors duration-500">Phone Number</label>
                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 shadow-sm" placeholder="Phone Number" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 transition-colors duration-500">Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 cursor-pointer appearance-none shadow-sm">
                        <option value="general">General Inquiry</option>
                        <option value="quote">Hardware Sourcing (RFQ)</option>
                        <option value="spot">Emergency Shortage Resolution</option>
                        <option value="distribution">Enterprise Agreement</option>
                      </select>
                    </div>

                    <div className="mb-10">
                      <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 transition-colors duration-500">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-bg-primary border border-glass-border text-text-primary font-mono text-sm p-4 rounded-xl focus:outline-none focus:border-costa-green transition-colors duration-500 resize-none shadow-sm" placeholder="Provide your requirements..." />
                    </div>

                    <button type="submit" disabled={formState === "submitting"} className="btn-primary w-full rounded-lg py-5 text-sm tracking-[0.15em] group disabled:opacity-50">
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          SENDING...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Contact Info (Nodes) */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-bg-secondary border border-glass-border p-8 transition-colors duration-500 rounded-2xl">
                  <h4 className="font-heading text-xl font-black mb-6 text-text-primary tracking-tighter transition-colors duration-500">GLOBAL HEADQUARTERS</h4>
                  <div className="space-y-6">
                    <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-4">
                      <div className="w-10 h-10 bg-bg-primary border border-glass-border flex items-center justify-center group-hover:border-costa-green transition-colors duration-500 shadow-sm rounded-lg">
                        <Mail size={16} className="text-costa-green" />
                      </div>
                      <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-500">{COMPANY.email}</span>
                    </a>
                    <a href={`tel:${COMPANY.phone}`} className="group flex items-center gap-4">
                      <div className="w-10 h-10 bg-bg-primary border border-glass-border flex items-center justify-center group-hover:border-costa-green transition-colors duration-500 shadow-sm rounded-lg">
                        <Phone size={16} className="text-costa-green" />
                      </div>
                      <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-500">{COMPANY.phone}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {OFFICES.map((office, i) => (
                <ScrollReveal key={office.id} delay={0.15 + i * 0.1}>
                  <div className="bg-bg-secondary border border-glass-border p-8 group hover:border-costa-green/50 transition-colors duration-500 rounded-2xl">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-glass-border transition-colors duration-500">
                      <div>
                        <h4 className="font-heading text-lg font-black text-text-primary tracking-tighter transition-colors duration-500">{office.city.toUpperCase()} OFFICE</h4>
                        <span className="font-mono text-[10px] text-costa-green font-bold uppercase tracking-[0.2em]">{office.label}</span>
                      </div>
                    </div>
                    <div className="space-y-4 font-mono text-xs text-text-secondary transition-colors duration-500">
                      <div className="flex items-start gap-4">
                        <MapPin size={14} className="text-costa-green shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone size={14} className="text-costa-green shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Clock size={14} className="text-costa-green shrink-0" />
                        <span>{office.timezone}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <section className="border-t border-glass-border">
        <ScrollReveal className="w-full">
          <div className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps?q=Coimbatore&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Costa Devices Global Headquarters Map"
              className="absolute inset-0"
            />
            {/* Interactive Overlay for dark mode blending */}
            <div className="absolute inset-0 bg-bg-primary/20 pointer-events-none mix-blend-overlay dark:mix-blend-color" />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
