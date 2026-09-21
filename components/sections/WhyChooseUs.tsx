import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";

const VALUES = [
  {
    icon: "check" as IconName,
    title: "Profesional & Terlatih",
    text: "Tim kami terdiri dari profesional yang berpengalaman dan terlatih dalam penanganan pasien emergency.",
  },
  {
    icon: "bolt" as IconName,
    title: "Respons Cepat",
    text: "Kami berkomitmen untuk sampai di lokasi Anda dalam waktu 15-30 menit di area Gunung Sindur.",
  },
  {
    icon: "chat" as IconName,
    title: "Mudah Dihubungi",
    text: "Hubungi via WhatsApp kapan saja. Tim siap menerima pesanan 24 jam setiap hari.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="bg-background-soft py-16 md:py-24">
      <Container>
        <SectionHeading title="Mengapa Memilih Prima Rescue?" />
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {VALUES.map((value) => (
            <div key={value.title} className="max-w-[300px]">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-sm">
                <Icon name={value.icon} className="h-8 w-8 text-medical-green" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy-dark">
                {value.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-gray">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}