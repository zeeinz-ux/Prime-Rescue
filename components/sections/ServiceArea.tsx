"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { BUSINESS } from "@/data/businessInfo";

const PRIORITY_AREAS = ["Gunung Sindur", "Bogor"];

const EXTENDED_AREAS = [
  "Daerah sekitar Bogor",
  "Kota Depok",
  "Jakarta Selatan",
];

const MAP_EMBED_URL = BUSINESS.mapsEmbedUrl;
const MAP_DIRECTIONS_URL = BUSINESS.mapsDirectionsUrl;

export default function ServiceArea() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="jangkauan" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Area Pelayanan Kami"
          subtitle="Kami melayani Gunung Sindur dan sekitarnya, serta area Bogor lainnya melalui koordinasi."
        />

        <div className="mx-auto max-w-4xl">
          {/* 3D Map Plinth Frame */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-2 shadow-3d sm:p-3">
            <div
              ref={mapContainerRef}
              className="relative h-[320px] w-full overflow-hidden rounded-xl bg-slate-100 md:h-[420px]"
            >
              {shouldLoadMap ? (
                <iframe
                  src={MAP_EMBED_URL}
                  title="Lokasi Prime Rescue di Gunung Sindur, Bogor"
                  className="h-full w-full border-0 rounded-xl"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="animate-shimmer flex h-full w-full flex-col items-center justify-center gap-3 text-sm font-semibold text-slate-gray">
                  <Icon name="map-pin" className="h-6 w-6 text-slate-400 animate-bounce" />
                  <span>Memuat peta lokasi Prime Rescue...</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Priority Zone Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-clinical-white p-7 shadow-xs transition-all hover:shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-medical-green">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-bold text-navy-dark">
                  Zona Prioritas
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {PRIORITY_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-base text-slate-gray">
                    <span className="h-2 w-2 rounded-full bg-medical-green" />
                    <span className="font-medium text-navy-dark">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extended Coordination Zone Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-clinical-white p-7 shadow-xs transition-all hover:shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-emergency-red">
                  <Icon name="map-pin" className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-bold text-navy-dark">
                  Zona Koordinasi
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {EXTENDED_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2.5 text-base text-slate-gray">
                    <span className="h-2 w-2 rounded-full bg-emergency-red" />
                    <span>{area}</span>
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
              className="btn-tactile inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-navy-dark px-7 text-base font-semibold text-white shadow-3d transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:translate-y-0.5 sm:w-auto"
            >
              <Icon name="map-pin" className="h-4 w-4" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}