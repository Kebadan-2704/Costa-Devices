import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";

// Dynamically import below-the-fold components to reduce initial JS payload
const SocialProofSection = dynamic(() => import("@/components/home/SocialProofSection"), { ssr: true });
const StatsSection = dynamic(() => import("@/components/home/StatsSection"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"), { ssr: true });
const CapabilitiesSection = dynamic(() => import("@/components/home/CapabilitiesSection"), { ssr: true });
const ProtocolSection = dynamic(() => import("@/components/home/ProtocolSection"), { ssr: true });
const CaseStudySection = dynamic(() => import("@/components/home/CaseStudySection"), { ssr: true });

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-hidden">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. SOCIAL PROOF */}
      <SocialProofSection />

      {/* 3. PERFORMANCE STATS */}
      <StatsSection />

      {/* 4. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 5. CAPABILITIES & INFRASTRUCTURE */}
      <CapabilitiesSection />

      {/* 6. PROCUREMENT PROTOCOL */}
      <ProtocolSection />

      {/* 7. ENTERPRISE CASE STUDY */}
      <CaseStudySection />

      {/* 8. FINAL CTA — Server-rendered (no client JS needed) */}
      <section className="py-8 bg-costa-green text-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-bold tracking-widest uppercase mb-8">
            <Clock size={14} />
            Avg. Response Time: 4 Hours
          </div>
          <h2 className="font-heading text-[clamp(3rem,6vw,5rem)] font-black leading-[1] uppercase tracking-tighter mb-8">
            TRANSMIT BOM. <br />RECEIVE QUOTE.
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-[600px] uppercase tracking-widest mb-10">
            Guaranteed response within 24h. Authorized distribution & global shortage sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/request-quote"
              className="bg-bg-primary text-text-primary text-sm font-bold uppercase py-5 px-10 rounded-lg hover:bg-bg-secondary transition-colors border-2 border-transparent hover:border-bg-primary"
            >
              Submit Requirements
            </Link>
            <a
              href="mailto:info@costadevices.com"
              className="bg-transparent text-bg-primary text-sm font-bold uppercase py-5 px-10 rounded-lg border-2 border-bg-primary hover:bg-bg-primary hover:text-text-primary transition-colors"
            >
              info@costadevices.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
