import Container from "@/components/ui/Container";
import Icon, { type IconName } from "@/components/ui/Icon";

const QUICK_INFO = [
  {
    icon: "clock" as IconName,
    title: "24/7 Siap Melayani",
    body: "Hubungi kapan saja, siang atau malam.",
  },
  {
    icon: "gauge" as IconName,
    title: "Respons 15-30 Menit",
    body: "Pengantaran cepat ke lokasi Anda.",
  },
  {
    icon: "whatsapp" as IconName,
    title: "Hubungi WhatsApp",
    body: "Segera terhubung dengan tim kami.",
  },
];

export default function QuickInfo() {
  return (
    <section id="info" className="bg-white py-12 md:py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {QUICK_INFO.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-lg border border-border-light bg-white p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-soft">
                <Icon name={item.icon} className="h-6 w-6 text-medical-green" />
              </span>
              <div>
                <p className="text-lg font-semibold text-navy-dark">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-gray">
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