import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/data/businessInfo";

const STEPS = [
  {
    number: "01",
    title: "Hubungi Kami",
    description: `Hubungi Prime Rescue melalui WhatsApp ${BUSINESS.whatsappDisplay}.`,
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
    <section id="cara-pesan" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Cara Pesan Layanan Ambulans"
          subtitle="Proses sederhana dan cepat untuk mendapatkan bantuan."
        />

        {/* Mobile Vertical Timeline (< md) */}
        <div className="relative mx-auto max-w-lg md:hidden">
          {/* Vertical dashed line */}
          <div className="absolute top-6 bottom-6 left-6 -translate-x-1/2 border-l-2 border-dashed border-red-200" />

          <ol className="space-y-8">
            {STEPS.map((step) => (
              <li key={step.number} className="relative flex items-start gap-5">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emergency-red font-bold text-white shadow-3d-red ring-4 ring-red-100">
                  {step.number}
                </span>
                <div className="rounded-xl border border-slate-200/80 bg-clinical-white p-4.5 shadow-xs flex-1">
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

        {/* Desktop Horizontal Timeline (>= md) */}
        <div className="mx-auto hidden max-w-5xl md:block">
          <ol className="relative grid grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <li
                key={step.number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Horizontal dashed line connecting steps */}
                {index < STEPS.length - 1 ? (
                  <div className="absolute top-7 left-1/2 w-full -z-0 border-t-2 border-dashed border-red-200 transition-colors group-hover:border-emergency-red" />
                ) : null}

                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-emergency-red text-lg font-bold text-white shadow-3d-red ring-4 ring-red-100 transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>

                <div className="mt-6 rounded-2xl border border-transparent p-4 transition-all duration-300 group-hover:border-slate-200/80 group-hover:bg-clinical-white group-hover:shadow-md">
                  <h3 className="text-lg font-bold text-navy-dark transition-colors group-hover:text-emergency-red">
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