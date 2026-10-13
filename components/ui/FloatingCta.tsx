"use client";

import { BUSINESS } from "@/data/businessInfo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";
import Icon from "./Icon";

export default function FloatingCta() {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 sm:bottom-6 sm:right-6"
      aria-label="Kontak cepat Prime Rescue"
    >
      {/* Phone Call Quick Action */}
      <a
        href={`tel:${BUSINESS.phoneE164}`}
        onClick={() => trackPhoneClick("floating_cta")}
        aria-label={`Panggilan telepon darurat ${BUSINESS.whatsappDisplay}`}
        title="Panggilan Telepon Darurat"
        className="btn-tactile flex h-12 w-12 items-center justify-center rounded-full bg-navy-dark text-white shadow-lg transition-all hover:bg-slate-800 active:translate-y-0.5"
      >
        <Icon name="phone" className="h-5 w-5 text-white" />
      </a>

      {/* WhatsApp Primary Action */}
      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_cta")}
        aria-label="Chat WhatsApp Prime Rescue"
        className="btn-tactile flex h-12 items-center justify-center gap-2 rounded-full bg-[#075E54] px-5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#128C7E] active:translate-y-0.5 sm:text-base"
      >
        <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-white" />
        <span>WhatsApp 24 Jam</span>
      </a>
    </div>
  );
}
