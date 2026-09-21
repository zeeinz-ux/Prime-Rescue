"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { BUSINESS } from "@/data/businessInfo";
import { trackWhatsAppClick } from "@/lib/gtag";

const NAV_LINKS = [
  { href: "#beranda", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-dark/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#beranda"
          className={`flex items-center gap-2 text-lg font-semibold transition-colors ${
            scrolled || open ? "text-white" : "text-navy-dark"
          }`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emergency-red">
            <Icon name="cross" className="h-5 w-5 text-white" />
          </span>
          Prima Rescue
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-clinical-white/80 hover:text-white" : "text-navy-dark hover:text-emergency-red"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-emergency-red px-6 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Hubungi Sekarang
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center md:hidden ${scrolled ? "text-white" : "text-navy-dark"}`}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {open ? (
        <nav
          className="border-t border-white/10 bg-navy-dark/95 backdrop-blur-xl md:hidden"
          aria-label="Navigasi mobile"
        >
          <Container className="flex flex-col gap-2 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-2 text-base font-medium text-clinical-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header_mobile")}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emergency-red px-6 text-sm font-semibold text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Hubungi Sekarang
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
