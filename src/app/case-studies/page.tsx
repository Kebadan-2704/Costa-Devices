"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, DollarSign } from "lucide-react";

const CASE_STUDIES = [
  {
    id: "ev-manufacturing",
    client: "Ather Energy",
    industry: "EV Manufacturing",
    title: "Securing 12,000 Obsolete MCUs in 9 Days",
    description: "When a global chip shortage threatened to halt Ather Energy's primary assembly line, our algorithmic sourcing network located verified obsolete inventory across 3 continents.",
    metrics: [
      { label: "Downtime Prevented", value: "$2.4M" },
      { label: "Lead Time Reduction", value: "14 Weeks" },
      { label: "Quality Pass Rate", value: "100%" }
    ],
    image: "/images/industries/electric-vehicles.png"
  },
  {
    id: "aerospace-defense",
    client: "Tier-1 Defense Contractor",
    industry: "Aerospace & Defense",
    title: "AS6081 Counterfeit Mitigation for Radar Systems",
    description: "Implementing a zero-trust sourcing protocol with 8-step decapsulation and X-ray verification for mission-critical RF components.",
    metrics: [
      { label: "Components Screened", value: "50,000+" },
      { label: "Counterfeits Caught", value: "3 Batches" },
      { label: "Compliance", value: "AS9120B" }
    ],
    image: "/images/industries/ev-charging.png"
  },
  {
    id: "energy-storage",
    client: "GIGA Storage",
    industry: "Renewable Energy",
    title: "Consolidated Procurement of High-Voltage Contactors",
    description: "Streamlining the Bill of Materials for grid-scale BESS installations, reducing total cost of ownership by bypassing regional distribution monopolies.",
    metrics: [
      { label: "BOM Cost Reduction", value: "18%" },
      { label: "Logistics Savings", value: "35%" },
      { label: "JIT Delivery", value: "99.8%" }
    ],
    image: "/images/industries/energy-storage.png"
  },
  {
    id: "medical-devices",
    client: "Biosense Webster",
    industry: "Medical Devices",
    title: "End-of-Life (EOL) Transition Management",
    description: "A 3-year structured buffer stock program allowing continuous manufacturing of legacy MRI control boards while the next-gen architecture was developed.",
    metrics: [
      { label: "Inventory Secured", value: "3 Years" },
      { label: "Price Lock", value: "Guaranteed" },
      { label: "Yield Loss", value: "0%" }
    ],
    image: "/images/industries/industrial-automation.png"
  },
  {
    id: "industrial-automation",
    client: "Foxconn",
    industry: "Industrial Automation",
    title: "Emergency Line-Down Recovery for Factory Robotics",
    description: "Sourcing allocated specialized fuses for factory floor robotics after a localized power surge destroyed active inventory.",
    metrics: [
      { label: "Time to Quote", value: "45 Mins" },
      { label: "Time to Door", value: "38 Hours" },
      { label: "Factory Uptime", value: "Restored" }
    ],
    image: "/images/industries/power-distribution.png"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-text-primary pt-32 pb-24">
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight mb-6">
            Proven Results.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            How the world's most demanding procurement teams use Costa Devices to solve supply chain emergencies, bypass shortages, and guarantee quality.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-16">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={study.id} 
              className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-costa-green/10 text-costa-green text-xs font-bold uppercase tracking-widest rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm font-semibold text-text-muted">Client: {study.client}</span>
                  </div>
                  
                  <h2 className="font-heading text-3xl lg:text-4xl font-black tracking-tight mb-4 group-hover:text-costa-green transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-text-secondary text-lg leading-relaxed mb-10">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-10 border-t border-b border-black/5 py-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i}>
                        <p className="text-xs uppercase tracking-widest font-bold text-text-muted mb-1">{metric.label}</p>
                        <p className="text-xl font-black text-text-primary">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={`/case-studies/${study.id}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-costa-green transition-colors w-fit">
                    Read Full Study <ArrowRight size={16} />
                  </Link>
                </div>
                
                <div className="relative h-[300px] lg:h-auto bg-black/5 overflow-hidden">
                  <div className="absolute inset-0 bg-costa-green/5 group-hover:bg-transparent transition-colors z-10" />
                  {/* Using a placeholder div pattern instead of Next Image to avoid missing image errors */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #1AAF5D 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl font-black text-black/10 select-none">{String(idx + 1).padStart(2, '0')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
