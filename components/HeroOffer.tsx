import { SITE } from "@/lib/site";

export type HeroPrice = {
  /** What the price is for, e.g. "MOT" or "Full Service". */
  label: string;
  /** e.g. "£40", "from £136.37", "FREE". Must match the booking app's price. */
  amount: string;
  /** Small print under the price, e.g. other service levels. */
  note?: string;
};

const TRUST_POINTS = [
  "Bosch Car Service",
  "Free video health check",
  "Free collection & delivery",
  "Courtesy cars available",
];

function Tick() {
  return (
    <svg viewBox="0 0 20 20" width={14} height={14} fill="currentColor" aria-hidden="true" className="shrink-0">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * Price + trust points at the top of the hero booking card, so an ad visitor
 * sees the same price the ad quoted, and our strengths, without scrolling.
 */
export function HeroPriceBlock({ price }: { price: HeroPrice }) {
  return (
    <div className="mb-5 border-b border-ink-900/5 pb-5">
      <p className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-sm font-semibold uppercase tracking-wide text-ink-500">{price.label}</span>
        <span className="text-3xl font-extrabold text-brand-600">{price.amount}</span>
      </p>
      {price.note && <p className="mt-1 text-sm text-ink-500">{price.note}</p>}
      <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm font-medium text-ink-700">
        {TRUST_POINTS.map((t) => (
          <li key={t} className="flex items-center gap-1.5">
            <span className="text-brand-600">
              <Tick />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Secondary tap-to-call under the reg form (97% of ad clicks are on mobile). */
export function HeroCallLink() {
  return (
    <a
      href={SITE.phoneHref}
      className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 font-bold text-brand-700 transition hover:bg-brand-50"
    >
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
      Or call {SITE.phone}
    </a>
  );
}
