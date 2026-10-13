import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";

const VALUES = [
  {
    step: "01",
    icon: "check" as IconName,
    title: "Profesional & Terlatih",
    text: "Tim kami terdiri dari profesional yang berpengalaman dan terlatih dalam penanganan pasien emergency.",
  },
  {
    step: "02",
    icon: "bolt" as IconName,
    title: "Respons Cepat",
    text: "Kami berkomitmen untuk sampai di lokasi Anda dalam waktu 15-30 menit di area Gunung Sindur.",
  },
  {
    step: "03",
    icon: "chat" as IconName,
    title: "Mudah Dihubungi",
    text: "Hubungi via WhatsApp kapan saja. Tim siap menerima pesanan 24 jam setiap hari.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="relative overflow-hidden bg-navy-dark py-20 md:py-28 text-white">
      {/* Subtle 3D background light accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-emergency-red/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-medical-green/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeading title="Mengapa Memilih Prime Rescue?" variant="dark" />
        <div className="perspective-1000 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 shadow-3d backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-2xl sm:p-8"
            >
              {/* Giant 3D Watermark Index Number */}
              <span className="pointer-events-none absolute top-3 right-4 select-none text-7xl font-black tracking-tighter text-white/[0.04] transition-colors group-hover:text-white/[0.08] sm:text-8xl">
                {value.step}
              </span>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-medical-green/15 text-medical-green ring-1 ring-medical-green/30 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon name={value.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-medical-green">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {value.text}
                </p>
              </div>

              {/* Bottom active indicator */}
              <div className="mt-6 h-1 w-8 rounded-full bg-medical-green/40 transition-all duration-300 group-hover:w-16 group-hover:bg-medical-green" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}