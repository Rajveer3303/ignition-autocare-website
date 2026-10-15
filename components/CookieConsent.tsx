"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BOOKING_HOST, captureAdParams, decorateBookingUrl } from "@/lib/tracking";

const STORAGE_KEY = "cookie-consent";   // "all" | "necessary"

type Gtag = (...args: unknown[]) => void;

/** Google Consent Mode v2 update for both GTM containers on the page. */
function updateConsent(granted: boolean) {
  const v = granted ? "granted" : "denied";
  try {
    const w = window as unknown as { gtag?: Gtag; dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    const gtag: Gtag = w.gtag || function () { // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    gtag("consent", "update", { ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v });
    w.dataLayer.push({ event: "consent_update", consent: v });
  } catch { /* never break the page */ }
}

/**
 * UK cookie banner (Consent Mode v2: everything denied until "Accept all"),
 * plus the ad-click safety net for links to the booking app.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try { if (!localStorage.getItem(STORAGE_KEY)) setVisible(true); } catch { setVisible(true); }
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);

    // Forward ad click ids / utm tags on every link to the booking app.
    captureAdParams();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || !a.href.includes(BOOKING_HOST)) return;
      const decorated = decorateBookingUrl(a.href);
      if (decorated !== a.href) a.href = decorated;
    };
    document.addEventListener("click", onClick, true);

    return () => {
      window.removeEventListener("open-cookie-settings", reopen);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  const choose = (value: "all" | "necessary") => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* storage blocked */ }
    updateConsent(value === "all");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink-900/10 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
    >
      <div className="container-site flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-ink-600">
          We use essential cookies to make this site work. With your permission we&apos;d also like to
          use Google and Meta cookies to measure our adverts and how the site is used. See our{" "}
          <Link href="/cookie-policy" className="font-semibold text-brand-600 underline">Cookie Policy</Link>.
        </p>
        <div className="flex w-full gap-2 sm:w-auto">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="flex-1 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-ink-900/40 sm:flex-none"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="flex-1 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500 sm:flex-none"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer link that reopens the banner. */
export function CookieSettingsLink({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
      Cookie settings
    </button>
  );
}
