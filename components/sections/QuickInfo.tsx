import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";

const QUICK_INFO = [
  {
    icon: "clock" as IconName,
    tag: "Siaga 24 Jam",
    title: "Layanan 24/7 Siaga",
    body: "Siap berangkat kapan saja, siang maupun malam tanpa henti.",
    iconColor: "text-emergency-red bg-red-50",
  },
  {
    icon: "gauge" as IconName,
    tag: "Area Gunung Sindur",
    title: "Respons 15–30 Menit",
    body: "Estimasi tiba cepat langsung ke lokasi penjemputan Anda.",
    iconColor: "text-navy-dark bg-slate-100",
  },
  {
    icon: "whatsapp" as IconName,
    tag: "Respons Cepat",
    title: "Hubungi WhatsApp",
    body: "Pemesanan instan dengan koordinasi rujukan rumah sakit.",
    iconColor: "text-[#075E54] bg-emerald-50",
  },
];

export default function QuickInfo() {
  return (
    <section id="info" className="relative z-10 py-6 md:py-10">
      <Container>
        <h2 className="sr-only">Ringkasan Layanan Cepat Prime Rescue</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {QUICK_INFO.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition-colors hover:border-slate-300 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${item.iconColor}`}
                >
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {item.tag}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold text-navy-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-gray">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}