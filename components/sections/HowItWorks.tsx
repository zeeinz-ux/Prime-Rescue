import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Hubungi Kami",
    description: "Hubungi Prima Rescue melalui WhatsApp 085770918098.",
  },
  {
    number: "02",
    title: "Informasi Pasien",
    description: "Berikan informasi lokasi dan kondisi pasien dengan singkat.",
  },
  {
    number: "03",
    title: "Konfirmasi",
    description: "Tim kami mengonfirmasi dan memberikan estimasi waktu tiba.",
  },
  {
    number: "04",
    title: "Penjemputan",
    description: "Ambulans siap menjemput dan membawa ke tujuan aman.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-pesan" className="bg-clinical-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Cara Pesan Layanan Ambulans"
          subtitle="Proses sederhana dan cepat untuk mendapatkan bantuan."
        />

        <div className="mx-auto max-w-4xl">
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, index) => (
              <li
                key={step.number}
                className={`relative flex flex-col items-center text-center ${
                  index < STEPS.length - 1
                    ? "md:after:absolute md:after:left-[60%] md:after:top-8 md:after:h-0.5 md:after:w-[80%] md:after:bg-medical-green"
                    : ""
                }`}
              >
                <span className="flex h-15 w-15 items-center justify-center rounded-full bg-navy-dark text-lg font-semibold text-white md:h-16 md:w-16">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-dark">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-slate-gray">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}