"use client";

import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { BUSINESS } from "@/data/businessInfo";
import { trackPhoneClick } from "@/lib/gtag";

export default function ContactCta() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-gradient-to-br from-emergency-red via-red-600 to-rose-950 py-20 text-white md:py-28"
    >
      {/* 3D Radiant Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/25 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          {/* Emergency Pulse Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span>Layanan Darurat Siaga 24/7</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Butuh Ambulans Sekarang?
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            Hubungi Prime Rescue 24/7 melalui WhatsApp.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <WhatsAppButton
              variant="onRed"
              trackLabel="contact_cta"
              className="h-12 w-full px-8 text-base shadow-2xl sm:w-auto"
            >
              Hubungi WhatsApp
            </WhatsAppButton>

            <a
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => trackPhoneClick("contact_cta")}
              className="btn-tactile inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 text-base font-semibold text-white shadow-md backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0.5 sm:w-auto"
            >
              <Icon name="phone" className="h-5 w-5" />
              {BUSINESS.whatsappDisplay}
            </a>
          </div>

          <div className="mt-12 space-y-3.5 text-sm text-white/85">
            <p className="flex flex-col items-center justify-center gap-2 sm:flex-row">
              <Icon name="map-pin" className="h-4 w-4 shrink-0 text-white/90" />
              <span>{BUSINESS.addressText}</span>
            </p>
            <p className="flex flex-col items-center justify-center gap-2 sm:flex-row">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-white/90" />
              <span>{BUSINESS.hours}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}