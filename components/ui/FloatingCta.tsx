"use client";

import { BUSINESS } from "@/data/businessInfo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";
import Icon from "./Icon";

const BASE_BUTTON_CLASSES =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:h-12 md:px-6 md:text-base";

export default function FloatingCta() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      aria-label="Kontak cepat Prima Rescue"
    >
      <a
        href={`tel:${BUSINESS.phoneE164}`}
        onClick={() => trackPhoneClick("floating_cta")}
        aria-label={`Hubungi Kami via telepon ${BUSINESS.whatsappDisplay}`}
        className={`${BASE_BUTTON_CLASSES} bg-blue-600 hover:bg-blue-700`}
      >
        <Icon name="phone" className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
        Hubungi Kami
      </a>
      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_cta")}
        aria-label="Chat WhatsApp Prima Rescue"
        className={`${BASE_BUTTON_CLASSES} bg-[#25D366] hover:bg-[#1dae55]`}
      >
        <Icon name="whatsapp" className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
        Chat WhatsApp
      </a>
    </div>
  );
}
