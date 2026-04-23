"use client";
import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("costa-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("costa-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("costa-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[150] animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="bg-bg-elevated border border-glass-border rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-costa-green/10 border border-costa-green/20 flex items-center justify-center shrink-0">
            <Cookie size={18} className="text-costa-green" />
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-sm font-bold text-text-primary mb-2">Cookie Preferences</h4>
            <p className="text-text-secondary text-xs leading-relaxed mb-4">
              We use essential cookies for site functionality and analytics cookies to improve your experience.{" "}
              <Link href="/privacy" className="text-costa-green hover:underline">Learn more</Link>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="bg-costa-green text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg hover:bg-costa-green-dark transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={decline}
                className="text-text-muted text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg border border-glass-border hover:border-costa-green/30 hover:text-text-primary transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
          <button onClick={decline} className="text-text-muted hover:text-text-primary transition-colors p-1">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
