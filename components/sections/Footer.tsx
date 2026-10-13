import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { BUSINESS } from "@/data/businessInfo";

const FOOTER_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark pb-8 pt-16 text-white transition-colors duration-200 dark:border-t dark:border-neutral-900 dark:bg-black">
      <Container>
        <h2 className="sr-only">Informasi Tambahan dan Kontak Footer</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emergency-red">
                <Icon name="cross" className="h-5 w-5" />
              </span>
              <span>Prime Rescue</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-clinical-white/70 dark:text-neutral-400">
              Prime Rescue adalah layanan ambulans 24 jam yang melayani Gunung
              Sindur, Bogor, dan daerah sekitarnya dengan profesionalisme dan
              kecepatan.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-clinical-white/50 dark:text-neutral-400">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-clinical-white/70 transition-colors hover:text-white dark:text-neutral-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-clinical-white/50 dark:text-neutral-400">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-clinical-white/70 dark:text-neutral-400">
              <li className="flex items-center gap-2">
                <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-white dark:text-emerald-400" />
                <span>{BUSINESS.whatsappDisplay}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-white dark:text-red-400" />
                <span>{BUSINESS.addressText}</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 shrink-0 text-white dark:text-slate-300" />
                <span>{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-clinical-white/50 dark:border-neutral-900 dark:text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Prime Rescue. All rights reserved.</p>
          <p>Crafted by SixLabs</p>
        </div>
      </Container>
    </footer>
  );
}