import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/data/businessInfo";

const PRIORITY_AREAS = ["Gunung Sindur", "Bogor"];

const EXTENDED_AREAS = [
  "Daerah sekitar Bogor",
  "Kota Depok",
  "Jakarta Selatan",
];

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(BUSINESS.addressText) +
  "&t=&z=13&ie=UTF8&iwloc=&output=embed";

const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(BUSINESS.addressText);

export default function ServiceArea() {
  return (
    <section id="jangkauan" className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Area Pelayanan Kami"
          subtitle="Kami melayani Gunung Sindur dan sekitarnya, serta area Bogor lainnya melalui koordinasi."
        />

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg border border-border-light">
            <iframe
              src={MAP_EMBED_URL}
              title="Lokasi Prima Rescue di Gunung Sindur, Bogor"
              className="h-[300px] w-full border-0 md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border-light bg-clinical-white p-8">
              <h3 className="text-lg font-semibold text-navy-dark">
                Zona Prioritas
              </h3>
              <ul className="mt-3 space-y-2">
                {PRIORITY_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-base text-slate-gray">
                    <span className="h-2 w-2 rounded-full bg-medical-green" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border-light bg-clinical-white p-8">
              <h3 className="text-lg font-semibold text-navy-dark">
                Zona Koordinasi
              </h3>
              <ul className="mt-3 space-y-2">
                {EXTENDED_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-base text-slate-gray">
                    <span className="h-2 w-2 rounded-full bg-emergency-red" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-base text-slate-gray">
            Untuk area di luar Gunung Sindur, hubungi kami untuk informasi
            ketersediaan layanan.
          </p>

          <div className="mt-6 text-center">
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-navy-dark px-6 text-base font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}