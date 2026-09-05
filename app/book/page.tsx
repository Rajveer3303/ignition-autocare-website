import type { Metadata } from "next";
import RegLookupForm from "@/components/RegLookupForm";
import ReviewStrip from "@/components/ReviewStrip";
import { BRANCHES, SITE } from "@/lib/site";
import Link from "next/link";
import { ShieldCheckIcon, GaugeIcon, CarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book Online | Ignition Autocare — Instant Price, No Card Required",
  description:
    "Enter your car registration for an instant price and book your MOT, service or repair at Ignition Autocare in Castleford, Shrewsbury, Bury or Thetford. No card required.",
};

const REASSURANCE = [
  {
    icon: <ShieldCheckIcon />,
    text: "No payment upfront — pay at the garage on the day",
  },
  {
    icon: <GaugeIcon />,
    text: "Instant price when you enter your reg",
  },
  {
    icon: <CarIcon />,
    text: "Same-day and next-day slots often available",
  },
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white pt-32 pb-20">
      <div className="container-site mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Book Online
          </p>
          <h1 className="font-heading text-4xl font-extrabold text-ink-900 sm:text-5xl">
            Get an Instant Price
          </h1>
          <p className="mt-4 text-lg text-ink-600">
            Enter your registration number below. We&apos;ll look up your vehicle and show you prices for MOT, servicing, tyres and more — instantly.
          </p>
        </div>

        {/* Reg lookup — the main action */}
        <div className="rounded-2xl border border-ink-900/5 bg-white p-8 shadow-card sm:p-10">
          <RegLookupForm />
          <ReviewStrip className="mt-5" />
        </div>

        {/* Reassurance strip */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {REASSURANCE.map((r) => (
            <div
              key={r.text}
              className="flex items-start gap-3 rounded-xl border border-ink-900/5 bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 shrink-0 text-brand-500">{r.icon}</span>
              <p className="text-sm text-ink-700">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Branch selector info */}
        <div className="mt-10">
          <h2 className="mb-5 text-center text-lg font-bold text-ink-900">
            Choose Your Nearest Branch
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {BRANCHES.map((b) => (
              <div
                key={b.name}
                className="rounded-xl border border-ink-900/5 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-ink-900">{b.name}</p>
                <p className="mt-0.5 text-sm text-ink-500">{b.address}</p>
                {!b.phone.startsWith("[VERIFY") && (
                  <a
                    href={b.phoneHref}
                    className="mt-2 inline-block text-sm font-medium text-brand-600 hover:underline"
                  >
                    {b.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-ink-400">
            [VERIFY: confirm whether branch selection is part of the online booking flow]
          </p>
        </div>

        {/* Alternative: call */}
        <div className="mt-10 rounded-xl bg-brand-50 p-6 text-center">
          <p className="text-sm font-medium text-ink-700">
            Prefer to book by phone?
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-flex items-center gap-2 text-xl font-extrabold text-brand-700 hover:underline"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE.phone}
          </a>
          <p className="mt-1 text-xs text-ink-400">Mon–Fri 8am–5pm · Sat 8am–1pm</p>
        </div>

        {/* Links back to service info */}
        <p className="mt-8 text-center text-sm text-ink-400">
          Not sure what you need?{" "}
          <Link href="/mot" className="text-brand-600 hover:underline">
            Learn about MOT testing
          </Link>{" "}
          ·{" "}
          <Link href="/car-servicing" className="text-brand-600 hover:underline">
            Servicing options
          </Link>{" "}
          ·{" "}
          <Link href="/tyres" className="text-brand-600 hover:underline">
            Tyre prices
          </Link>
        </p>
      </div>
    </main>
  );
}
