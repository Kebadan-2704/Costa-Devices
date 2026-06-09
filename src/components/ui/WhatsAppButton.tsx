"use client";
import { COMPANY } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = COMPANY.phone.replace(/[\s+\-]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Costa%20Devices%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.`;

  return (
    <div className="fixed bottom-24 md:bottom-20 right-6 z-[160]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2.5 bg-costa-green text-white px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(26,175,93,0.4)] hover:shadow-[0_12px_40px_rgba(26,175,93,0.6)] hover:-translate-y-1 transition-all duration-300"
        aria-label="Contact Support"
      >
        <MessageCircle size={20} className="text-white fill-white/20 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-sm font-bold tracking-widest uppercase">Live Support</span>
      </a>
    </div>
  );
}
