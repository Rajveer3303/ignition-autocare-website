import type { Metadata } from "next";
import Link from "next/link";
import ContactButtons from "@/components/ContactButtons";
import RegLookupForm from "@/components/RegLookupForm";
import { SERVICE_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found | Ignition Autocare Castleford",
  robots: { index: false, follow: true },
};

/**
 * Old links (the previous BookMyGarage site, Google Ads sitelinks, bookmarks)
 * can land on addresses that no longer exist. Rather than a bare 404, give the
 * visitor the booking form and the main pages so the click isn't wasted.
 */
export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-site py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Page moved</span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Sorry, that page has moved
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Our website has been updated. You can still book in seconds: enter your reg below for an
            instant price, or call or WhatsApp us.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">
            Book online with your reg
          </p>
          <RegLookupForm compact />
          <div className="mt-5 border-t border-ink-900/5 pt-5">
            <ContactButtons message="Hi Ignition Autocare! I'd like to book my car in." className="justify-center" />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="text-center text-lg font-bold text-ink-900">Popular pages</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between rounded-2xl border border-ink-900/5 bg-white px-5 py-3.5 text-sm font-semibold text-ink-900 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                {s.label}
                <span aria-hidden="true" className="text-brand-600">→</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-500">
            Or go to our{" "}
            <Link href="/" className="font-semibold text-brand-600 hover:text-brand-700">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
