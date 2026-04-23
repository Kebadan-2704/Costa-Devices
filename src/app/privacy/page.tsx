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
                  title: "1. Scope and Consent",
                  content: "This Privacy Policy applies to all personal data collected by Costa Devices FZCO ('we', 'us', 'our') globally, including through our website, RFQ portal, and direct communications. By utilizing our B2B procurement platform, you consent to the data practices described herein. We operate in compliance with the UAE Data Protection Law, GDPR (EU), and applicable global frameworks."
                },
                {
                  title: "2. Information We Collect",
                  content: "As a B2B distributor, we collect professional data necessary for fulfilling commercial transactions. This includes: Identity Data (Name, Title, Company), Contact Data (Corporate Email, Phone, HQ Address), Technical Data (IP addresses, browser type, cookies), and Transactional Data (BOM lists, RFQ history, shipping requirements)."
                },
                {
                  title: "3. Lawful Basis for Processing (GDPR Compliance)",
                  content: "For users in the European Economic Area (EEA), our lawful basis for processing your data under the GDPR is typically Contractual Necessity (to process your RFQs and fulfill orders) or Legitimate Interests (to improve our enterprise services and prevent fraud). We do not engage in automated decision-making or profiling."
                },
                {
                  title: "4. International Data Transfers",
                  content: "As a global entity headquartered in Dubai Silicon Oasis, UAE, with hubs in Hong Kong and India, your data may be transferred internationally. We utilize Standard Contractual Clauses (SCCs) and enterprise-grade encryption (AES-256) to ensure your data maintains EU-equivalent protection regardless of where our servers are physically located."
                },
                {
                  title: "5. Data Retention Period",
                  content: "We retain B2B commercial data, including RFQs and compliance certificates, for a minimum of 7 years to comply with AS 9120B aerospace traceability requirements and international tax regulations. Marketing data is retained until you opt-out."
                },
                {
                  title: "6. Your Enterprise Data Rights",
                  content: "You retain the right to: Request access to your data, request correction of inaccurate records, request erasure ('Right to be Forgotten'), object to processing, and request data portability. To exercise these rights, submit a formal request to our Data Protection Officer."
                },
                {
                  title: "7. Contact Our Data Protection Officer (DPO)",
                  content: `For legal inquiries, GDPR data subject access requests, or privacy concerns, please contact our Legal/Compliance team at privacy@costadevices.com or via registered mail to our Dubai Silicon Oasis Headquarters.`
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl font-bold mb-3 text-text-primary tracking-tight">{section.title}</h2>
                  <p className="text-text-secondary leading-relaxed font-light">{section.content}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}



