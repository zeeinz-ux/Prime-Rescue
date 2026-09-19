type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2 className="text-3xl font-semibold text-navy-dark">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-gray">{subtitle}</p>
      ) : null}
    </div>
  );
}