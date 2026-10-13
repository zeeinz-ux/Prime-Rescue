import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";

const QUICK_INFO = [
  {
    icon: "clock" as IconName,
    tag: "Siaga 24 Jam",
    title: "24/7 Siap Melayani",
    body: "Hubungi kapan saja, siang atau malam.",
    accent: "text-emergency-red bg-red-50 ring-red-100",
  },
  {
    icon: "gauge" as IconName,
    tag: "Estimasi Waktu",
    title: "Respons 15-30 Menit",
    body: "Pengantaran cepat ke lokasi Anda.",
    accent: "text-emerald-600 bg-emerald-50 ring-emerald-100",
  },
  {
    icon: "whatsapp" as IconName,
    tag: "Respons Instan",
    title: "Hubungi WhatsApp",
    body: "Segera terhubung dengan tim kami.",
    accent: "text-emerald-700 bg-emerald-50 ring-emerald-100",
  },
];

export default function QuickInfo() {
  return (
    <section id="info" className="relative -mt-6 z-20 py-8 md:py-12">
      <Container>
        <h2 className="sr-only">Ringkasan Layanan Cepat Prime Rescue</h2>
        <div className="perspective-1000 grid gap-6 md:grid-cols-3">
          {QUICK_INFO.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-3d transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-2xl sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-4 transition-transform duration-300 group-hover:scale-110 ${item.accent}`}
                >
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-gray">
                  {item.tag}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold text-navy-dark transition-colors group-hover:text-emergency-red">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-gray">
                  {item.body}
                </p>
              </div>

              {/* Subtle bottom accent line on hover */}
              <div className="mt-4 h-1 w-0 rounded-full bg-emergency-red transition-all duration-300 group-hover:w-12" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}