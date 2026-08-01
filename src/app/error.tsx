"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-bg-primary">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6 border border-red-200">
        <AlertTriangle size={32} className="text-red-500" />
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 font-heading">
        System Malfunction
      </h2>
      
      <p className="text-base text-text-secondary max-w-md mx-auto mb-8 font-medium">
        We encountered an unexpected error while processing your request. Our technical team has been notified.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-costa-green text-white font-bold tracking-widest uppercase text-xs hover:bg-costa-green-dark transition-colors shadow-sm"
        >
          <RefreshCcw size={16} /> Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bg-secondary text-text-primary border border-glass-border font-bold tracking-widest uppercase text-xs hover:bg-black/5 transition-colors shadow-sm"
        >
          <Home size={16} /> Return to Base
        </Link>
      </div>
    </div>
  );
}
