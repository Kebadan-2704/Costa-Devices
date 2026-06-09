"use client";
import { COMPANY } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = COMPANY.phone.replace(/[\s+\-]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Costa%20Devices%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.`;

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-[90]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-bg-primary/90 backdrop-blur-md text-text-primary pr-4 pl-1.5 py-1.5 rounded-lg border border-glass-border shadow-sm hover:border-costa-green/50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
        aria-label="Contact Support"
      >
        <div className="flex items-center justify-center w-8 h-8 bg-bg-secondary rounded-md group-hover:bg-costa-green/10 transition-colors duration-300">
          <MessageCircle size={16} className="text-text-muted group-hover:text-costa-green transition-colors duration-300" />
        </div>
        <div className="flex flex-col items-start pr-1">
          <span className="text-xs font-bold tracking-widest uppercase text-text-muted group-hover:text-costa-green transition-colors leading-none mb-0.5">Live Support</span>
          <span className="text-sm font-medium leading-none">Message Team</span>
        </div>
      </a>
    </div>
  );
}
