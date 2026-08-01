"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden" aria-label="Client testimonials">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 border-l-4 border-costa-green pl-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase mb-4 inline-block bg-gray-50 px-3 py-1 rounded-full border border-gray-100">Client Trust</div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-black leading-none tracking-tighter uppercase text-gray-900">
              TRUSTED <span className="text-costa-green">GLOBALLY</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl font-medium">Hear from engineering leads and procurement managers at top-tier OEMs who rely on Costa Devices for mission-critical sourcing.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-[#fafafa] border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative group hover:border-costa-green/30 overflow-hidden flex flex-col">
            <div className="relative z-10 text-costa-green mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z" /></svg>
            </div>
            <p className="relative z-10 text-gray-700 font-medium mb-8 leading-relaxed">&ldquo;Costa Devices was able to secure 10,000 obsolete IGBT modules for our legacy wind turbine controllers when franchised distributors quoted a 52-week lead time. Their lab testing reports gave us 100% confidence.&rdquo;</p>
            <div className="relative z-10 border-t border-gray-200 pt-6 mt-auto">
              <p className="font-bold text-sm text-gray-900">Procurement Lead</p>
              <p className="text-xs text-costa-green font-bold uppercase tracking-wider mt-1">Ather Energy</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-costa-green border border-costa-green p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(26,175,93,0.2)] transition-all duration-300 relative group transform md:-translate-y-4 overflow-hidden flex flex-col">
            <div className="relative z-10 text-white mb-6 opacity-50">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z" /></svg>
            </div>
            <p className="relative z-10 text-white font-medium mb-8 leading-relaxed text-lg">&ldquo;The level of technical expertise is unmatched. We needed a drop-in replacement for a critical Eaton Bussmann EV fuse for our new charger line. Costa provided the parts in 3 days with complete traceability.&rdquo;</p>
            <div className="relative z-10 border-t border-white/20 pt-6 mt-auto">
              <p className="font-bold text-sm text-white">Supply Chain Manager</p>
              <p className="text-xs text-emerald-100 uppercase font-bold tracking-wider mt-1">Kaynes Technology</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-[#fafafa] border border-gray-200 p-8 rounded-3xl shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 relative group hover:border-costa-green/30 overflow-hidden flex flex-col">
            <div className="relative z-10 text-costa-green mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14.017 21L16.439 14C16.439 14 15.228 14 14.808 14C12.75 14 12.181 12.585 12.181 10.923C12.181 9.261 13.596 8 15.257 8C16.918 8 18 9.261 18 10.923C18 12.585 15.228 21 15.228 21H14.017ZM6.017 21L8.439 14C8.439 14 7.228 14 6.808 14C4.75 14 4.181 12.585 4.181 10.923C4.181 9.261 5.596 8 7.257 8C8.918 8 10 9.261 10 10.923C10 12.585 7.228 21 7.228 21H6.017Z" /></svg>
            </div>
            <p className="relative z-10 text-gray-700 font-medium mb-8 leading-relaxed">&ldquo;We consolidated our fuse and contactor sourcing with Costa Devices and reduced shipping costs by 35%. Their combined shipping program is a game-changer for our production line.&rdquo;</p>
            <div className="relative z-10 border-t border-gray-200 pt-6 mt-auto">
              <p className="font-bold text-sm text-gray-900">VP of Operations</p>
              <p className="text-xs text-costa-green uppercase font-bold tracking-wider mt-1">GIGA</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
