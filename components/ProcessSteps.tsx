import Reveal from "@/components/Reveal";

export default function ProcessSteps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className={`grid gap-6 sm:grid-cols-2 ${steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.1} className="h-full">
          <li className="relative h-full rounded-3xl border border-ink-900/5 bg-white p-7 pt-9 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
            <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white shadow-md">
              {i + 1}
            </span>
            <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
