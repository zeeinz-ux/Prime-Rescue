"use client";

import type { ReactNode } from "react";
import { BUSINESS } from "@/data/businessInfo";
import Icon from "./Icon";
import { trackWhatsAppClick } from "@/lib/gtag";

type WhatsAppButtonProps = {
  variant?: "primary" | "onRed";
  trackLabel?: string;
  className?: string;
  children: ReactNode;
};

export default function WhatsAppButton({
  variant = "primary",
  trackLabel = "whatsapp",
  className,
  children,
}: WhatsAppButtonProps) {
  const style =
    variant === "primary"
      ? "bg-emergency-red text-white hover:bg-red-700"
      : "bg-white text-emergency-red hover:bg-clinical-white";

  return (
    <a
      href={BUSINESS.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(trackLabel)}
      className={`inline-flex h-11 min-w-0 items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors ${style} ${className ?? ""}`}
    >
      <Icon name="whatsapp" className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}