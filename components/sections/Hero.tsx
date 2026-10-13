"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import armadaImg from "@/public/images/armada-1.webp";
import { BUSINESS } from "@/data/businessInfo";
import { trackPhoneClick } from "@/lib/gtag";

const TRUST_POINTS = ["Operasional 24/7", "Tim Terlatih", "Respons Cepat"];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-clinical-white py-16 md:py-24">
      {/* Subtle 3D background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            {/* Live radar badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span>Siap Beroperasi 24 Jam</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy-dark sm:text-4xl lg:text-5xl">
              Ambulans 24 Jam Siap Membantu Anda
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-gray sm:text-lg">
              Layanan transportasi medis darurat & non-darurat dengan armada standar medis lengkap dan respons cepat di wilayah Gunung Sindur, Bogor & sekitarnya.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <WhatsAppButton trackLabel="hero" className="w-full sm:w-auto">
                Hubungi Via WhatsApp
              </WhatsAppButton>
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackPhoneClick("hero")}
                className="btn-tactile inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border-light bg-white px-6 py-3 text-base font-semibold text-navy-dark shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-clinical-white active:translate-y-0.5 sm:w-auto"
              >
                <Icon name="phone" className="h-4 w-4 text-slate-gray" />
                Panggilan Telepon
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-navy-dark shadow-xs backdrop-blur-xs sm:text-sm"
                >
                  <Icon name="check" className="h-4 w-4 text-medical-green" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Depth Image Container with Floating Badges */}
          <div className="perspective-1000 lg:order-1">
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              {/* Floating Badge 1 - Top Left */}
              <div className="animate-float-slow absolute -top-4 -left-2 z-20 flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/95 px-3.5 py-2 shadow-3d backdrop-blur-md sm:-top-5 sm:-left-4 sm:px-4 sm:py-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-emergency-red">
                  <Icon name="gauge" className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold leading-none text-navy-dark">Respons Cepat</p>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-gray">15–30 Menit Tiba</p>
                </div>
              </div>

              {/* Main Armada Image */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-3d transition-transform duration-500 hover:scale-[1.01]">
                <Image
                  src={armadaImg}
                  alt="Ambulans Prime Rescue siap melayani 24 jam di Gunung Sindur, Bogor"
                  priority={true}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 665px, 600px"
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="animate-float-slow-reverse absolute -bottom-4 -right-2 z-20 flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/95 px-3.5 py-2 shadow-3d backdrop-blur-md sm:-bottom-5 sm:-right-4 sm:px-4 sm:py-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-medical-green">
                  <Icon name="cross" className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold leading-none text-navy-dark">Standar Medis</p>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-gray">Oksigen & Paramedis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
