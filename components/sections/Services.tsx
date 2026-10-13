import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-clinical-white py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Layanan Kami"
          subtitle="Kami menyediakan berbagai layanan ambulans untuk memenuhi kebutuhan Anda."
        />
        <div className="perspective-1000 grid gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-3d transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-2xl sm:p-8"
            >
              {/* Left border accent line on hover */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-emergency-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-emergency-red ring-4 ring-red-50/60 shadow-xs transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    name={service.icon as IconName}
                    className="h-7 w-7"
                  />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy-dark transition-colors group-hover:text-emergency-red">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-slate-gray">
                  {service.description}
                </p>
              </div>

              {/* Interactive subtle footer badge */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-emergency-red">
                <span>Siap 24 Jam</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}