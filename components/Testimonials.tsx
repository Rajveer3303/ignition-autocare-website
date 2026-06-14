import Reveal from "@/components/Reveal";
import { StarIcon } from "@/components/Icons";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.slice(0, 6).map((t, i) => (
        <Reveal key={t.name} delay={(i % 3) * 0.1} className="h-full">
          <figure className="flex h-full flex-col rounded-3xl border border-ink-900/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
            <div className="flex gap-1 text-amber-400" aria-label="5 star Google review">
              {Array.from({ length: 5 }).map((_, s) => (
                <StarIcon key={s} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-bold text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-500">Google Review</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
