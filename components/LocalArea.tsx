import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/towns";

/**
 * "Near me" block for service pages: answers the local search in plain words,
 * then gives the address, hours and links to the area pages so Google can tie
 * the page to Castleford and the surrounding towns. Each page passes its own
 * wording so the text isn't duplicated across the site.
 */
export default function LocalArea({
  eyebrow = "Local To You",
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-site py-10 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <Reveal>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-ink-600">{children}</div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card">
          <p className="font-heading text-lg font-bold text-ink-900">Find us</p>
          <p className="mt-2 text-sm text-ink-600">{SITE.fullAddress}</p>
          <ul className="mt-4 space-y-1 text-sm text-ink-600">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="font-semibold text-ink-900">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-semibold text-ink-900">Also serving</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {TOWNS.map((t) => (
              <Link
                key={t.slug}
                href={`/areas/${t.slug}`}
                className="rounded-full border border-ink-900/10 px-3 py-1 text-xs font-semibold text-ink-700 hover:border-brand-300 hover:text-brand-600"
              >
                {t.name}
              </Link>
            ))}
          </div>
          <a href={SITE.phoneHref} className="btn-primary mt-6 block w-full text-center">
            Call {SITE.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
