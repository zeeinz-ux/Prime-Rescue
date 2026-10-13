type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
};

export default function SectionHeading({
  title,
  subtitle,
  variant = "light",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-navy-dark dark:text-white"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-3.5 h-1 w-12 rounded-full bg-emergency-red" />
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-slate-300" : "text-slate-gray dark:text-slate-300"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}