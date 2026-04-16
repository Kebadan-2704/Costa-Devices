import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Costa Devices Electric Ltd privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-costa-green/5 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="font-mono text-xs text-costa-green tracking-[0.2em] uppercase mb-4">Home / Privacy</p>
            <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Privacy <span className="green-gradient-text">Policy</span>
            </h1>
            <p className="text-text-secondary text-lg">Last updated: April 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding pt-0" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <div className="prose-content space-y-8">
              {[
                {
                  title: "Information We Collect",
                  content: "We collect information you provide directly when you request a quote, contact us, or subscribe to our communications. This includes your name, email, phone number, company name, and any technical requirements you share."
                },
                {
                  title: "How We Use Your Information",
                  content: "Your information is used to process quote requests, provide technical support, communicate about our products and services, and improve our offerings. We never sell your personal information to third parties."
                },
                {
                  title: "Data Protection",
                  content: "We implement industry-standard security measures to protect your personal data. Our systems use encryption for data in transit and at rest. Access to personal information is restricted to authorized personnel only."
                },
                {
                  title: "Cookies",
                  content: "Our website uses essential cookies for functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings."
                },
                {
                  title: "Your Rights",
                  content: "You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you. To exercise these rights, contact us at privacy@costadevices.com."
                },
                {
                  title: "Contact",
                  content: `For privacy-related inquiries, contact us at ${COMPANY.email} or write to our registered office in Dubai, UAE.`
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



