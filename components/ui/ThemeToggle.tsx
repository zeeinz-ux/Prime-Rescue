"use client";

import { useEffect } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Ganti mode terang atau gelap"
      title="Ganti mode tampilan"
      className="btn-tactile flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-dark shadow-xs transition-colors hover:bg-slate-100 hover:text-emergency-red dark:border-neutral-800 dark:bg-[#151515] dark:text-neutral-100 dark:hover:bg-[#222] dark:hover:text-amber-400"
    >
      {/* Icon Sun appears in dark mode, Moon appears in light mode (pure CSS, 100% hydration-safe) */}
      <span className="flex items-center justify-center dark:hidden">
        <Icon name="moon" className="h-4.5 w-4.5 text-slate-700" />
      </span>
      <span className="hidden items-center justify-center dark:flex">
        <Icon name="sun" className="h-4.5 w-4.5 text-amber-400" />
      </span>
    </button>
  );
}
