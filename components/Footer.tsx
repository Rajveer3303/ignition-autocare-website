import Link from "next/link";
import { BRANCHES, QUICK_LINKS, SERVICE_LINKS, SITE } from "@/lib/site";
import RegLookupForm from "@/components/RegLookupForm";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-slate-50">
      {/* Reg lookup strip */}
      <div className="bg-brand-600">
        <div className="container-site py-10 text-center">
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-brand-100">
            Book in seconds
          </p>
          <h2 className="mb-6 font-heading text-2xl font-extrabold text-white">
            Enter your reg for an instant price
          </h2>
          <div className="mx-auto max-w-xl">
            <RegLookupForm compact />
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
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
          <div className="mt-5 flex items-center gap-3">
            <span className="rounded-lg border border-ink-900/10 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-700">
              Bosch Approved
            </span>
            <span className="rounded-lg border border-ink-900/10 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-700">
              DVSA Approved
            </span>
          </div>
        </div>

        {/* Quick links */}
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

        {/* Services */}
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

        {/* Locations */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-ink-900">Our Locations</h3>
          <ul className="mt-4 space-y-4">
            {BRANCHES.map((b) => (
              <li key={b.name}>
                <p className="text-sm font-semibold text-ink-800">{b.name}</p>
                <p className="text-xs text-ink-500">{b.address}</p>
                {!b.phone.startsWith("[VERIFY") && (
                  <a href={b.phoneHref} className="text-xs text-brand-600 hover:underline">
                    {b.phone}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-900/5 py-5">
        <div className="container-site flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Ignition Autocare. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-ink-400">
            <Link href="/contact-us" className="hover:text-brand-600">Contact</Link>
            <Link href="/about" className="hover:text-brand-600">About</Link>
            <Link href="/bosch-approved" className="hover:text-brand-600">Bosch Approved</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
