"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { GALLERY_PHOTOS } from "@/data/gallery";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

function magicIndex(index: number, length: number) {
  return (index + length) % length;
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const length = GALLERY_PHOTOS.length;

  useEffect(() => {
    if (isPaused) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => magicIndex(current + 1, length));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, length]);

  const go = (dir: 1 | -1) => {
    setIndex((current) => magicIndex(current + dir, length));
  };

  const onTouchStart = (x: number) => {
    startX.current = x;
  };

  const onTouchEnd = (x: number) => {
    if (startX.current === null) {
      return;
    }
    const delta = x - startX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      go(delta < 0 ? 1 : -1);
    }
    startX.current = null;
  };

  return (
    <section id="galeri" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Galeri Tim & Armada Kami"
          subtitle="Lihat langsung ambulans dan tim Prime Rescue yang siap membantu Anda."
        />

        {/* 3D Elevated Gallery Frame */}
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-slate-50 p-2 shadow-3d sm:p-3">
          <div
            className="group relative overflow-hidden rounded-xl bg-navy-dark shadow-inner"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {GALLERY_PHOTOS.map((photo) => (
                <div key={photo.caption} className="relative aspect-[2/1] w-full shrink-0">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1200px) 1040px, 100vw"
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Glassmorphic Caption */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <div className="inline-block rounded-xl border border-white/20 bg-slate-950/70 px-4 py-2 backdrop-blur-md shadow-lg">
                      <p className="text-xs font-semibold text-white sm:text-base">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto sebelumnya"
              className="btn-tactile absolute left-3.5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/85 text-navy-dark shadow-lg backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:translate-y-0.5 md:flex"
            >
              <Icon name="chevron" className="h-5 w-5 rotate-90" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto berikutnya"
              className="btn-tactile absolute right-3.5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/85 text-navy-dark shadow-lg backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:translate-y-0.5 md:flex"
            >
              <Icon name="chevron" className="h-5 w-5 -rotate-90" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-2 sm:bottom-6 sm:right-6">
              {GALLERY_PHOTOS.map((photo, dotIndex) => (
                <button
                  key={photo.caption}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Lihat foto ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    dotIndex === index ? "w-7 bg-emergency-red shadow-sm" : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
