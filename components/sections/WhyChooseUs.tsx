import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";

const VALUES = [
  {
    icon: "check" as IconName,
    title: "Tim Profesional & Berpengalaman",
    text: "Didukung paramedis dan driver terlatih dalam penanganan dan pendampingan kondisi pasien darurat.",
  },
  {
    icon: "bolt" as IconName,
    title: "Respons Cepat 15–30 Menit",
    text: "Pos siaga di Gunung Sindur memastikan waktu tempuh ke kediaman Anda secepat dan seefisien mungkin.",
  },
  {
    icon: "chat" as IconName,
    title: "Komunikasi Langsung & Siaga 24/7",
    text: "Tanpa prosedur rumit. Hubungi via WhatsApp kapan saja, operator siap merespons kebutuhan Anda.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="relative bg-navy-dark py-16 text-white transition-colors duration-200 dark:border-y dark:border-neutral-800 dark:bg-black md:py-24">
      <Container>
        <SectionHeading title="Mengapa Memilih Prime Rescue?" variant="dark" />
        <div className="grid gap-6 sm:grid-cols-3">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col justify-between rounded-xl border border-slate-700/60 bg-slate-800/40 p-7 transition-colors dark:border-neutral-800 dark:bg-[#121212]"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-medical-green dark:bg-emerald-950/40 dark:text-emerald-400">
                  <Icon name={value.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300 dark:text-neutral-300">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}