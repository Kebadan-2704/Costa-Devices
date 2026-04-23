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
                  title: "1. Acceptance of Master Services Agreement (MSA)",
                  content: "By accessing the Costa Devices B2B procurement platform or submitting a Request for Quote (RFQ), you agree to be bound by these Terms of Service. These terms constitute a legally binding Master Services Agreement between your enterprise and COSTA DEVICES FZCO (Dubai Silicon Oasis, UAE)."
                },
                {
                  title: "2. Quotations, Pricing, and Market Volatility",
                  content: "Due to the dynamic nature of the global semiconductor spot market, all quotations are valid for 24-48 hours unless explicitly stated otherwise in the RFQ response. Prices are subject to change based on factory allocation, currency fluctuations, and geopolitical supply chain impacts. No order is binding until a formal Purchase Order (PO) is accepted by our Dubai headquarters."
                },
                {
                  title: "3. Compliance & End-Use Certification",
                  content: "Costa Devices strictly adheres to international trade compliance laws. Buyers must not divert, re-export, or transfer components to embargoed nations or prohibited entities. By purchasing, you certify that the end-use of these components does not violate UAE, US (EAR/ITAR), or EU export control regulations."
                },
                {
                  title: "4. Quality Guarantee & Counterfeit Mitigation",
                  content: "All components are subjected to our proprietary AS 6081 compliant 8-step counterfeit mitigation pipeline. We guarantee form, fit, and function for 12 months from the date of delivery. In the rare event of a failure, our liability is strictly limited to the replacement of the defective component or a refund of the purchase price, subject to independent laboratory verification."
                },
                {
                  title: "5. Shipping, Title, and Incoterms",
                  content: "Unless otherwise specified, all international shipments are executed under EXW (Ex Works) or FCA (Free Carrier) Incoterms 2020. Title and risk of loss transfer to the buyer upon handover to the designated carrier (e.g., DHL, FedEx) at our Hong Kong, Dubai, or India logistics hubs."
                },
                {
                  title: "6. Limitation of Liability",
                  content: "Under no circumstances shall Costa Devices FZCO be liable for indirect, incidental, punitive, or consequential damages, including but not limited to line-down costs, lost profits, or product recall expenses, arising from delayed delivery or component failure."
                },
                {
                  title: "7. Governing Law & Jurisdiction",
                  content: "These terms shall be governed by and construed in accordance with the laws of the Dubai International Financial Centre (DIFC). Any dispute arising out of or in connection with these terms, including any question regarding their existence, validity, or termination, shall be referred to and finally resolved by arbitration under the Arbitration Rules of the DIFC-LCIA."
                },
                {
                  title: "8. Corporate Inquiries",
                  content: `For legal notices, enterprise distribution agreements, or compliance documentation requests, please direct correspondence to our legal department at ${COMPANY.email} or our physical headquarters in Dubai Silicon Oasis.`
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



