import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,175,93,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-costa-green/20 blur-xl rounded-full animate-pulse"></div>
          <div className="w-16 h-16 bg-white dark:bg-black border border-glass-border rounded-2xl flex items-center justify-center relative shadow-xl">
            <Loader2 size={32} className="text-costa-green animate-spin" />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="font-heading font-black text-xl tracking-tight text-text-primary">Loading Component...</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-costa-green rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
            <span className="w-1.5 h-1.5 bg-costa-green rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
            <span className="w-1.5 h-1.5 bg-costa-green rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
