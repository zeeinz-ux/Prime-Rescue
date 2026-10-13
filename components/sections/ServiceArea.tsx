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
    <section id="jangkauan" className="relative bg-clinical-white py-16 transition-colors duration-200 dark:bg-[#080808] md:py-24">
      <Container>
        <SectionHeading
          title="Area Pelayanan Kami"
          subtitle="Pos siaga di Gunung Sindur melayani penjemputan cepat wilayah Bogor dan sekitarnya."
        />

        <div className="mx-auto max-w-4xl">
          {/* Map Container */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs dark:border-neutral-800 dark:bg-[#121212]">
            <div
              ref={mapContainerRef}
              className="relative h-[320px] w-full overflow-hidden bg-slate-100 dark:bg-[#181818] md:h-[400px]"
            >
              {shouldLoadMap ? (
                <iframe
                  src={MAP_EMBED_URL}
                  title="Lokasi Prime Rescue di Gunung Sindur, Bogor"
                  className="h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="animate-shimmer flex h-full w-full flex-col items-center justify-center gap-2 text-sm font-medium text-slate-gray dark:text-neutral-400">
                  <Icon name="map-pin" className="h-6 w-6 text-slate-400 dark:text-neutral-500" />
                  <span>Memuat peta lokasi Prime Rescue...</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Priority Zone Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-[#121212]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-medical-green dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <h3 className="text-base font-bold text-navy-dark dark:text-white">
                  Zona Prioritas (Respons Tercepat)
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {PRIORITY_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-slate-gray dark:text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-medical-green" />
                    <span className="font-semibold text-navy-dark dark:text-white">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extended Coordination Zone Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-neutral-800 dark:bg-[#121212]">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-emergency-red dark:bg-red-950/50 dark:text-red-400">
                  <Icon name="map-pin" className="h-4 w-4" />
                </span>
                <h3 className="text-base font-bold text-navy-dark dark:text-white">
                  Zona Koordinasi & Antar Kota
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {EXTENDED_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-slate-gray dark:text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emergency-red" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-navy-dark shadow-xs transition-colors hover:bg-slate-50 active:translate-y-0.5 dark:border-neutral-800 dark:bg-[#161616] dark:text-neutral-100 dark:hover:bg-[#222]"
            >
              <Icon name="map-pin" className="h-4 w-4 text-slate-gray dark:text-neutral-400" />
              <span>Petunjuk Arah Google Maps</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}