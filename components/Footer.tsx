import Link from "next/link";
import { QUICK_LINKS, SERVICE_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-slate-50">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5" aria-label="Ignition Autocare home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold leading-tight tracking-tight">
                Ignition <span className="text-brand-600">Autocare</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-ink-400">
                MOT &bull; Tyres &bull; Autocare
              </span>
            </div>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-500">{SITE.tagline}</p>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink-900">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-ink-500 transition-colors hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink-900">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-ink-500 transition-colors hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink-900">Reach Us</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
            <li>
              <a href={SITE.phoneHref} className="transition-colors hover:text-brand-600">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-brand-600">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address}</li>
          </ul>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-ink-900">Office Hours</h3>
          <ul className="mt-4 space-y-1.5 text-sm text-ink-500">
            {SITE.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="font-medium text-ink-700">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-900/5 py-5">
        <p className="container-site text-center text-xs text-ink-500">
          © {new Date().getFullYear()} Ignition Autocare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
