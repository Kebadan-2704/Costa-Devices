/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { ArrowLeft, Target, BarChart3, Clock, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

// Mock database for the case studies content
const CASE_STUDIES_DB: Record<string, any> = {
  "ev-manufacturing": {
    client: "Ather Energy",
    industry: "EV Manufacturing",
    title: "Securing 12,000 Obsolete MCUs in 9 Days",
    metrics: [
      { label: "Downtime Prevented", value: "$2.4M" },
      { label: "Lead Time Reduction", value: "14 Weeks" },
      { label: "Quality Pass Rate", value: "100%" }
    ],
    challenge: "Ather Energy faced a catastrophic line-down situation when their primary microcontroller for the battery management system (BMS) went obsolete and was allocated for 52 weeks across franchised distribution channels.",
    solution: "Using the Costa Devices algorithmic sourcing API, we mapped the specific MCU against 5,400+ EMS and OEM excess inventory pools globally. We secured 12,000 units from a verified Tier-1 automotive supplier in Germany.",
    results: "The components were air-freighted, passed through our 8-step AS6081 testing facility, and delivered to the assembly line in 9 days, preventing $2.4M in stalled production costs."
  },
  "aerospace-defense": {
    client: "Tier-1 Defense Contractor",
    industry: "Aerospace & Defense",
    title: "AS6081 Counterfeit Mitigation for Radar Systems",
    metrics: [
      { label: "Components Screened", value: "50,000+" },
      { label: "Counterfeits Caught", value: "3 Batches" },
      { label: "Compliance", value: "AS9120B" }
    ],
    challenge: "A leading defense contractor needed to source legacy RF components for a naval radar system retrofit. The open market for these parts is highly saturated with sophisticated counterfeits featuring laser black-topping and die remarking.",
    solution: "Costa Devices acted as the exclusive quality firewall. Every sourced component was subjected to our zero-trust protocol: heated solvent testing, X-ray inspection, and decapsulation with die verification against the original manufacturer's golden sample.",
    results: "We successfully intercepted and destroyed 3 batches of counterfeit components that had bypassed the contractor's previous suppliers, ensuring 100% compliance and zero field failures."
  },
  "energy-storage": {
    client: "GIGA Storage",
    industry: "Renewable Energy",
    title: "Consolidated Procurement of High-Voltage Contactors",
    metrics: [
      { label: "BOM Cost Reduction", value: "18%" },
      { label: "Logistics Savings", value: "35%" },
      { label: "JIT Delivery", value: "99.8%" }
    ],
    challenge: "GIGA Storage was managing procurement across 14 different regional suppliers for their grid-scale Battery Energy Storage Systems (BESS), resulting in pricing inefficiencies and inconsistent delivery schedules.",
    solution: "We negotiated global volume purchasing agreements for their primary high-voltage contactors and DC fuses, consolidating their supply chain into a single predictable pipeline managed through our portal.",
    results: "GIGA achieved an 18% reduction in overall BOM costs and eliminated the need for heavy local warehousing by utilizing our JIT (Just-In-Time) buffer stock program."
  },
  "medical-devices": {
    client: "Biosense Webster",
    industry: "Medical Devices",
    title: "End-of-Life (EOL) Transition Management",
    metrics: [
      { label: "Inventory Secured", value: "3 Years" },
      { label: "Price Lock", value: "Guaranteed" },
      { label: "Yield Loss", value: "0%" }
    ],
    challenge: "The core processing unit for a legacy MRI control system received an End-of-Life (EOL) notice. Engineering needed 3 years to transition to the new architecture, but the manufacturer only offered a 6-month Last Time Buy (LTB) window.",
    solution: "Costa Devices structured a long-term buffer inventory program. We financed the LTB volume, secured the inventory in our climate-controlled AS9120B certified facility, and scheduled monthly releases.",
    results: "Biosense maintained seamless production for 3 years without tying up capital in raw inventory, while completely mitigating the risk of future obsolescence pricing spikes."
  },
  "industrial-automation": {
    client: "Foxconn",
    industry: "Industrial Automation",
    title: "Emergency Line-Down Recovery for Factory Robotics",
    metrics: [
      { label: "Time to Quote", value: "45 Mins" },
      { label: "Time to Door", value: "38 Hours" },
      { label: "Factory Uptime", value: "Restored" }
    ],
    challenge: "A localized power surge destroyed the high-speed fuses protecting the main robotic assembly arms. The specialized fuses were backordered globally for 8 weeks, threatening an immediate factory shutdown.",
    solution: "Our Spot Market Resolution team leveraged our global network to find matching Eaton Bussmann fuses sitting in excess stock at an industrial facility in South Korea.",
    results: "From initial RFQ to factory floor delivery, the entire operation took just 38 hours, ensuring Foxconn's production schedule remained completely unaffected."
  }
};

export default async function CaseStudyPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const study = CASE_STUDIES_DB[id];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-24">
      {/* Header */}
      <section className="max-w-[1000px] mx-auto px-6 mb-16">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-costa-green transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Case Studies
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-costa-green/10 border border-costa-green/20 text-costa-green text-xs font-bold uppercase tracking-widest rounded-full">
            {study.industry}
          </span>
          <span className="text-sm font-semibold text-gray-500">Client: {study.client}</span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight mb-12 text-gray-900">
          {study.title}
        </h1>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {study.metrics.map((metric: any, i: number) => (
            <div key={i} className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-costa-green/30 transition-colors">
              <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">{metric.label}</p>
              <p className="text-4xl font-black text-costa-green">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[800px] mx-auto px-6">
        <div className="space-y-16">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100">
                <Target size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {study.challenge}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100">
                <Clock size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">The Solution</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {study.solution}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-costa-green/10 text-costa-green flex items-center justify-center shrink-0 border border-costa-green/20">
                <CheckCircle2 size={20} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">The Results</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              {study.results}
            </p>
          </div>
          
        </div>
        
        <div className="mt-24 pt-12 border-t border-gray-100 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Ready to build supply chain resilience?</h3>
          <MagneticWrapper>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-costa-green transition-colors shadow-xl shadow-gray-900/10 hover:-translate-y-1">
              Speak to a Solutions Engineer
            </Link>
          </MagneticWrapper>
        </div>
      </section>
    </div>
  );
}
