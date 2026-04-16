import type { Metadata } from "next";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Costa Devices Electric Ltd terms of service — governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-costa-green/5 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4">Home / Terms</p>
            <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Terms of <span className="green-gradient-text">Service</span>
            </h1>
            <p className="text-text-secondary text-lg">Last updated: April 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <div className="space-y-8">
              {[
                {
                  title: "Acceptance of Terms",
                  content: "By accessing and using the Costa Devices website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services."
                },
                {
                  title: "Services",
                  content: "Costa Devices Electric Ltd provides electronic component distribution, spot market sourcing, PCB design and assembly, and related technical services. All quotes provided are subject to availability and final confirmation."
                },
                {
                  title: "Quotations & Orders",
                  content: "All quotations are valid for 7 days unless otherwise stated. Prices are subject to change based on market conditions. Orders are confirmed only upon written acceptance and payment terms agreement."
                },
                {
                  title: "Quality Guarantee",
                  content: "All components distributed by Costa Devices undergo our AS 6081 certified inspection process. We guarantee the authenticity of every component we deliver. Any quality concerns must be reported within 30 days of delivery."
                },
                {
                  title: "Intellectual Property",
                  content: "All content on this website, including text, graphics, logos, and software, is the property of Costa Devices Electric Ltd and protected by applicable intellectual property laws."
                },
                {
                  title: "Limitation of Liability",
                  content: "Costa Devices shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the value of the specific order in question."
                },
                {
                  title: "Governing Law",
                  content: "These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through arbitration in Dubai, UAE."
                },
                {
                  title: "Contact",
                  content: `For questions about these terms, contact us at ${COMPANY.email}.`
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{section.title}</h2>
                  <p className="text-text-secondary leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}



