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
      className="relative bg-emergency-red py-16 text-white transition-colors duration-200 dark:border-y dark:border-neutral-800 dark:bg-black md:py-20"
    >
      <Container>
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-700/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white dark:border dark:border-red-900/60 dark:bg-red-950/60 dark:text-red-400">
            <Icon name="cross" className="h-3.5 w-3.5" />
            <span>Layanan Darurat 24 Jam</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Butuh Bantuan Ambulans Cepat?
          </h2>

          <p className="mt-3 text-base leading-relaxed text-red-100 dark:text-neutral-300 sm:text-lg">
            Hubungi Prime Rescue sekarang untuk penjemputan darurat maupun rujukan rumah sakit terjadwal di Gunung Sindur & sekitarnya.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row">
            <WhatsAppButton
              variant="onRed"
              trackLabel="contact_cta"
              className="h-11 w-full px-7 text-base shadow-md sm:w-auto"
            >
              Hubungi Via WhatsApp
            </WhatsAppButton>

            <a
              href={`tel:${BUSINESS.phoneE164}`}
              onClick={() => trackPhoneClick("contact_cta")}
              className="btn-tactile inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/40 bg-red-700/50 px-7 text-base font-semibold text-white shadow-xs transition-colors hover:bg-red-700 active:translate-y-0.5 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 sm:w-auto"
            >
              <Icon name="phone" className="h-4 w-4" />
              <span>{BUSINESS.whatsappDisplay}</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-red-100 dark:text-neutral-400 sm:text-sm">
            <div className="flex items-center gap-2">
              <Icon name="map-pin" className="h-4 w-4 text-white dark:text-red-400" />
              <span>{BUSINESS.addressText}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-white dark:text-red-400" />
              <span>{BUSINESS.hours}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}