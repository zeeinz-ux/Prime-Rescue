import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { BUSINESS } from "@/data/businessInfo";

export default function ContactCta() {
  return (
    <section id="kontak" className="bg-emergency-red py-16 text-white md:py-20">
      <Container>
        <div className="mx-auto flex max-w-[600px] flex-col items-center text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Butuh Ambulans Sekarang?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-clinical-white/90">
            Hubungi Prima Rescue 24/7 melalui WhatsApp.
          </p>
          <WhatsAppButton variant="onRed" trackLabel="contact_cta" className="mt-8 h-12 px-8 text-base">
            Hubungi WhatsApp +62 857-7091-8098
          </WhatsAppButton>
          <div className="mt-10 space-y-3 text-sm text-clinical-white/90">
            <p className="flex flex-col items-center gap-2 sm:flex-row">
              <Icon name="map-pin" className="h-4 w-4 shrink-0" />
              {BUSINESS.addressText}
            </p>
            <p className="flex flex-col items-center gap-2 sm:flex-row">
              <Icon name="clock" className="h-4 w-4 shrink-0" />
              {BUSINESS.hours}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}