import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <Container>
        <SectionHeading
          title="Pertanyaan Umum"
          subtitle="Jawaban singkat untuk pertanyaan yang sering diajukan."
        />
        <div className="mx-auto max-w-3xl divide-y divide-border-light rounded-lg border border-border-light bg-white px-6">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-navy-dark [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Icon
                  name="chevron"
                  className="h-4 w-4 shrink-0 text-slate-gray transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-base leading-relaxed text-slate-gray">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}