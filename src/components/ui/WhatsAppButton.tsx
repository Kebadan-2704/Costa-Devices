"use client";
import { COMPANY } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = COMPANY.phone.replace(/[\s+\-]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Costa%20Devices%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.`;

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-white text-text-primary pr-5 pl-2 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5 hover:border-[#25D366]/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,211,102,0.12)] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center w-9 h-9 bg-[#25D366]/10 rounded-full group-hover:bg-[#25D366] transition-colors duration-300">
          <MessageCircle size={18} className="text-[#25D366] group-hover:text-white relative z-10 transition-colors duration-300" />
          <span className="absolute w-full h-full rounded-full border border-[#25D366] animate-ping opacity-20"></span>
        </div>
        <span className="text-[13px] font-semibold tracking-tight">WhatsApp</span>
      </a>
    </div>
  );
}
