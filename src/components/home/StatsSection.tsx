"use client";

import AnimatedNumber from "@/components/ui/AnimatedNumber";

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#fafafa] relative z-20 border-b border-gray-100" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
            <AnimatedNumber value={15} />
            <span className="text-costa-green ml-1">+</span>
          </div>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Years Experience</p>
        </div>
        <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
            <AnimatedNumber value={500} />
            <span className="text-costa-green ml-1">+</span>
          </div>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Global Partners</p>
        </div>
        <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
            <AnimatedNumber value={99} />
            <span className="text-costa-green ml-1">%</span>
          </div>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Quality Pass Rate</p>
        </div>
        <div className="flex flex-col items-center text-center group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
          <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 flex items-center justify-center">
            <AnimatedNumber value={24} />
            <span className="text-costa-green ml-1">/7</span>
          </div>
          <p className="text-xs font-bold text-gray-500 tracking-widest uppercase group-hover:text-costa-green transition-colors">Global Support</p>
        </div>
      </div>
    </section>
  );
}
