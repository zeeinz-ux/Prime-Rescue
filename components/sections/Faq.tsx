import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-clinical-white py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Pertanyaan Umum"
          subtitle="Jawaban singkat untuk pertanyaan yang sering diajukan."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md open:bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-navy-dark sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="transition-colors group-hover:text-emergency-red group-open:text-emergency-red">
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-gray transition-all duration-300 group-open:rotate-180 group-open:bg-red-50 group-open:text-emergency-red">
                  <Icon name="chevron" className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-base leading-relaxed text-slate-gray">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}