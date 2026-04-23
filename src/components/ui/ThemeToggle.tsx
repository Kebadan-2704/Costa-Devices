"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-glass-border animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden relative group border border-glass-border bg-bg-primary hover:bg-bg-secondary"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-costa-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {isDark ? (
          <Sun size={18} className="text-amber-400" />
        ) : (
          <Moon size={18} className="text-text-secondary" />
        )}
      </div>
    </button>
  );
}
