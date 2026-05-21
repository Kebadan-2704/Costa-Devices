"use client";
import { COMPANY } from "@/lib/constants";
import { Terminal } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = COMPANY.phone.replace(/[\s+\-]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Costa%20Devices%2C%20I%27d%20like%20to%20inquire%20about%20your%20products.`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[90]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-bg-primary border border-glass-border p-3 shadow-2xl transition-all duration-300 hover:border-costa-green hover:bg-costa-green/5"
        aria-label="Comm Link (WhatsApp)"
      >
        <div className="w-2 h-2 bg-costa-green animate-pulse"></div>
        <div className="flex flex-col hidden md:flex">
          <span className="font-mono text-[8px] font-bold text-text-secondary uppercase tracking-[0.2em] group-hover:text-costa-green transition-colors">
            SECURE CHANNEL
          </span>
          <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-widest">
            COMM LINK: ONLINE
          </span>
        </div>
        <Terminal size={18} className="text-text-primary group-hover:text-costa-green transition-colors md:ml-2" />
      </a>
    </div>
  );
}
