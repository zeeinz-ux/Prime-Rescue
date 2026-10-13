"use client";

import { BUSINESS } from "@/data/businessInfo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";
import Icon from "./Icon";

export default function FloatingCta() {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3"
      aria-label="Kontak cepat Prime Rescue"
    >
      {/* Phone CTA: Compact circle on mobile, labeled pill on desktop */}
      <a
        href={`tel:${BUSINESS.phoneE164}`}
        onClick={() => trackPhoneClick("floating_cta")}
        aria-label={`Hubungi Kami via telepon ${BUSINESS.whatsappDisplay}`}
        className="btn-tactile flex h-11 w-11 items-center justify-center rounded-full bg-navy-dark text-white shadow-3d transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl active:translate-y-0.5 sm:h-12 sm:w-auto sm:px-5 sm:gap-2"
      >
        <Icon name="phone" className="h-5 w-5 shrink-0 text-white" />
        <span className="hidden text-sm font-semibold sm:inline md:text-base">
          Hubungi Kami
        </span>
      </a>

      {/* WhatsApp CTA: High-contrast primary pill */}
      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_cta")}
        aria-label="Chat WhatsApp Prime Rescue"
        className="btn-tactile flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#075E54] px-4.5 text-sm font-semibold text-white shadow-3d-green transition-all duration-300 hover:-translate-y-1 hover:bg-[#128C7E] hover:shadow-2xl active:translate-y-0.5 sm:px-6 sm:text-base"
      >
        <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-white" />
        <span>Chat WhatsApp</span>
      </a>
    </div>
  );
}
