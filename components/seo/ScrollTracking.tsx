"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/gtag";

const THRESHOLDS = [25, 50, 75, 100];

export default function ScrollTracking() {
  useEffect(() => {
    const fired = new Set<number>();

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        return;
      }
      const percent = Math.round(
        (window.scrollY / scrollable) * 100,
      );

      for (const threshold of THRESHOLDS) {
        if (!fired.has(threshold) && percent >= threshold) {
          fired.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}