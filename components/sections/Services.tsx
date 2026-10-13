import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";
import { SERVICES } from "@/data/services";
import { BUSINESS } from "@/data/businessInfo";

export default function Services() {
  return (
    <section id="layanan" className="relative bg-clinical-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Layanan Ambulans Kami"
          subtitle="Pilihan transportasi medis darurat dan rujukan terencana di Gunung Sindur dan sekitarnya."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 shadow-xs transition-colors hover:border-slate-300 sm:p-8"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-emergency-red">
                  <Icon
                    name={service.icon as IconName}
                    className="h-6 w-6"
                  />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy-dark">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-slate-gray">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <a
                  href={`${BUSINESS.whatsappLink}&text=${encodeURIComponent(`Halo Prime Rescue, saya butuh informasi ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emergency-red hover:text-red-700"
                >
                  <span>Pesan Layanan Ini</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}