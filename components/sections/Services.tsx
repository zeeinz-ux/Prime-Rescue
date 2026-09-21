import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="layanan" className="bg-clinical-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Layanan Kami"
          subtitle="Kami menyediakan berbagai layanan ambulans untuk memenuhi kebutuhan Anda."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-lg border border-border-light bg-white p-8 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-soft">
                <Icon
                  name={service.icon as IconName}
                  className="h-6 w-6 text-medical-green"
                />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}