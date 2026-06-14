import RegLookupForm from "@/components/RegLookupForm";
import Reveal from "@/components/Reveal";

export default function PageHero({
  title,
  intro,
  formLabel = "Book a Service Online",
}: {
  title: string;
  intro: string;
  formLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div className="container-site relative py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">{intro}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8 max-w-xl rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card">
          <h2 className="mb-1 text-lg font-bold text-ink-900">{formLabel}</h2>
          <RegLookupForm />
        </Reveal>
      </div>
    </section>
  );
}
