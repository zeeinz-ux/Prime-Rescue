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
    <section id="galeri" className="bg-white py-12 md:py-16">
      <Container>
        <SectionHeading
          title="Galeri Tim & Armada Kami"
          subtitle="Lihat langsung ambulans dan tim Prima Rescue yang siap membantu Anda."
        />

        <div
          className="group relative overflow-hidden rounded-lg border border-border-light bg-navy-dark"
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
                    <div key={photo.src} className="relative aspect-[2/1] w-full shrink-0">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1200px) 1040px, 100vw"
                  className="object-cover"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-base font-medium text-white">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Foto sebelumnya"
            className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-dark transition hover:bg-white md:flex"
          >
            <Icon name="chevron" className="h-5 w-5 rotate-90" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Foto berikutnya"
            className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-dark transition hover:bg-white md:flex"
          >
            <Icon name="chevron" className="h-5 w-5 -rotate-90" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {GALLERY_PHOTOS.map((photo, dotIndex) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Lihat foto ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  dotIndex === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-gray">
          <Icon name="chevron" className="h-4 w-4 rotate-90" />
          Geser ke kiri/kanan untuk melihat foto lain
        </p>
      </Container>
    </section>
  );
}
