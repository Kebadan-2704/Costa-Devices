"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setIsDark(current !== "light");
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("costa-theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        background: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
        border: `1px solid ${isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.12)"}`,
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-slate-600" />
      )}
    </button>
  );
}
