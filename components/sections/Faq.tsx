import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <section id="faq" className="relative bg-clinical-white py-16 md:py-24">
      <Container>
        <SectionHeading
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Informasi penting mengenai layanan, jangkauan, dan prosedur ambulans Prime Rescue."
        />
        <div className="mx-auto max-w-3xl space-y-3.5">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-colors hover:border-slate-300 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-navy-dark sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="transition-colors group-hover:text-emergency-red group-open:text-emergency-red">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-gray transition-transform duration-200 group-open:rotate-180">
                  <Icon name="chevron" className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3.5 border-t border-slate-100 pt-3.5 text-sm leading-relaxed text-slate-gray sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}