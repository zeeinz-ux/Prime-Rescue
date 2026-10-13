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
    <section id="galeri" className="relative bg-white py-16 transition-colors duration-200 dark:bg-slate-950 md:py-24">
      <Container>
        <SectionHeading
          title="Galeri Armada & Tim"
          subtitle="Dokumentasi armada ambulans dan kesiapan tim Prime Rescue di lapangan."
        />

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-navy-dark shadow-sm dark:border-slate-800">
          <div
            className="group relative overflow-hidden"
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
                <div key={photo.caption} className="relative aspect-[16/9] w-full shrink-0">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 896px, 100vw"
                    className="object-cover"
                    draggable={false}
                  />
                  {/* Subtle Gradient & Integrated Bottom Caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-6">
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 sm:flex"
            >
              <Icon name="chevron" className="h-5 w-5 rotate-90" />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 sm:flex"
            >
              <Icon name="chevron" className="h-5 w-5 -rotate-90" />
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-4 right-4 z-10 flex gap-2 sm:bottom-6 sm:right-6">
              {GALLERY_PHOTOS.map((photo, dotIndex) => (
                <button
                  key={photo.caption}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Lihat foto ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                  className={`h-2 rounded-full transition-all ${
                    dotIndex === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
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
