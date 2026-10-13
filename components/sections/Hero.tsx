"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import armadaImg from "@/public/images/armada-1.webp";
import { BUSINESS } from "@/data/businessInfo";
import { trackPhoneClick } from "@/lib/gtag";

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-clinical-white py-12 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Authoritative Emergency Information */}
          <div className="lg:col-span-7">
            {/* Clean Medical Service Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/80 px-3.5 py-1 text-xs font-semibold text-emergency-red">
              <Icon name="cross" className="h-3.5 w-3.5" />
              <span>Layanan Ambulans 24 Jam • Gunung Sindur, Bogor</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy-dark sm:text-4xl lg:text-5xl">
              Ambulans 24 Jam Siap Membantu Anda
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-gray sm:text-lg">
              Layanan transportasi medis darurat & non-darurat dengan armada standar medis lengkap dan respons cepat di wilayah Gunung Sindur, Bogor & sekitarnya.
            </p>

            {/* Emergency Action Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <WhatsAppButton trackLabel="hero" className="w-full sm:w-auto">
                Hubungi Via WhatsApp
              </WhatsAppButton>
              <a
                href={`tel:${BUSINESS.phoneE164}`}
                onClick={() => trackPhoneClick("hero")}
                className="btn-tactile inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-navy-dark shadow-xs transition-all hover:border-slate-400 hover:bg-slate-50 active:translate-y-0.5 sm:w-auto"
              >
                <Icon name="phone" className="h-4 w-4 text-slate-gray" />
                Panggilan Telepon
              </a>
            </div>

            {/* Reassurance Metric Bar (Medical & Concrete) */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
              <div>
                <p className="text-xl font-bold text-navy-dark sm:text-2xl">24 Jam</p>
                <p className="mt-0.5 text-xs font-medium text-slate-gray sm:text-sm">Siaga Darurat</p>
              </div>
              <div>
                <p className="text-xl font-bold text-navy-dark sm:text-2xl">15–30 Mnt</p>
                <p className="mt-0.5 text-xs font-medium text-slate-gray sm:text-sm">Estimasi Tiba</p>
              </div>
              <div>
                <p className="text-xl font-bold text-navy-dark sm:text-2xl">Lengkap</p>
                <p className="mt-0.5 text-xs font-medium text-slate-gray sm:text-sm">Oksigen & Medis</p>
              </div>
            </div>
          </div>

          {/* Right Column: Real Ambulance Photography */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 sm:aspect-[16/10]">
                <Image
                  src={armadaImg}
                  alt="Armada ambulans Prime Rescue siap melayani 24 jam di Gunung Sindur, Bogor"
                  priority={true}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/90 px-4 py-3 text-xs sm:px-5">
                <div className="flex items-center gap-2 font-medium text-navy-dark">
                  <span className="flex h-2 w-2 rounded-full bg-emergency-red" />
                  <span>Armada Resmi Prime Rescue</span>
                </div>
                <span className="font-semibold text-slate-gray">Gunung Sindur, Bogor</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
