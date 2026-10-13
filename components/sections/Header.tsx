"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { BUSINESS } from "@/data/businessInfo";
import { trackWhatsAppClick } from "@/lib/gtag";

const NAV_LINKS = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-200 dark:border-neutral-800 dark:bg-black/95 ${
        scrolled ? "shadow-xs" : ""
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#beranda"
          className="flex items-center gap-2 text-lg font-bold text-navy-dark dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emergency-red text-white">
            <Icon name="cross" className="h-5 w-5" />
          </span>
          <span>Prime Rescue</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-emergency-red dark:text-neutral-300 dark:hover:text-emergency-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="btn-tactile inline-flex h-10 items-center gap-2 rounded-lg bg-emergency-red px-5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-red-700 active:translate-y-0.5"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span>Hubungi Sekarang</span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy-dark transition-colors dark:border-neutral-800 dark:bg-[#151515] dark:text-neutral-100"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          className="border-t border-slate-200 bg-white dark:border-neutral-800 dark:bg-black md:hidden"
          aria-label="Navigasi mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-emergency-red dark:text-neutral-300 dark:hover:bg-[#121212] dark:hover:text-emergency-red"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header_mobile")}
              className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emergency-red px-6 text-sm font-semibold text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              <span>Hubungi Sekarang</span>
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
