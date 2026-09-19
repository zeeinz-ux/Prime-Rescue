export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const gaEnabled = Boolean(
  GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX",
);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function event(action: string, category: string, label?: string) {
  if (
    gaEnabled &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  ) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackWhatsAppClick(label: string) {
  event("whatsapp_click", "engagement", label);
}

export function trackScrollDepth(percent: number) {
  event("scroll_depth", "engagement", `${percent}%`);
}