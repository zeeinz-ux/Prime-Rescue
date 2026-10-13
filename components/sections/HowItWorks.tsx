import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/data/businessInfo";

const STEPS = [
  {
    number: "1",
    title: "Hubungi WhatsApp",
    description: `Hubungi kami langsung melalui WhatsApp ${BUSINESS.whatsappDisplay}.`,
  },
  {
    number: "2",
    title: "Kirim Lokasi & Kondisi",
    description: "Kirimkan titik jemput (share location) dan kondisi singkat pasien.",
  },
  {
    number: "3",
    title: "Konfirmasi & Estimasi",
    description: "Tim mengonfirmasi armada terdekat dan memberikan estimasi waktu tiba.",
  },
  {
    number: "4",
    title: "Penjemputan Medis",
    description: "Ambulans dan paramedis tiba untuk menjemput dan mengantar dengan aman.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-pesan" className="relative bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Cara Pesan Ambulans"
          subtitle="4 langkah cepat mendapatkan bantuan transportasi medis darurat."
        />

        {/* Mobile Vertical Timeline */}
        <div className="relative mx-auto max-w-lg md:hidden">
          <div className="absolute top-4 bottom-4 left-5 -translate-x-1/2 border-l border-slate-200" />

          <ol className="space-y-6">
            {STEPS.map((step) => (
              <li key={step.number} className="relative flex items-start gap-4">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emergency-red font-bold text-white shadow-xs">
                  {step.number}
                </span>
                <div className="flex-1 rounded-xl border border-slate-200 bg-clinical-white p-4">
                  <h3 className="text-base font-bold text-navy-dark">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-gray">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="mx-auto hidden max-w-5xl md:block">
          <ol className="grid grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <li
                key={step.number}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emergency-red text-base font-bold text-white shadow-xs">
                  {step.number}
                </span>

                <div className="mt-4">
                  <h3 className="text-base font-bold text-navy-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-gray">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}