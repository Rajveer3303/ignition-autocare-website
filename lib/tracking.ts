// Ad click tracking helpers for the jump to the booking app.
//
// GTM's Conversion Linker decorates links to book.ignitionautocare.uk with _gl
// when cookies are accepted. As a safety net (and for visitors who decline
// cookies) we also forward the ad click id and campaign tags from the landing
// URL ourselves, so the booking app can still credit the right campaign.

export const BOOKING_HOST = "book.ignitionautocare.uk";
const STORE_KEY = "ia_ad_params";

const AD_PARAMS = [
  "gclid", "gbraid", "wbraid",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id",
  "campaignid", "adgroupid", "keyword", "matchtype", "device",
];

/** Remember this visit's ad params (from the landing URL) for the session. */
export function captureAdParams() {
  try {
    const p = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const k of AD_PARAMS) {
      const v = p.get(k);
      if (v) found[k] = v.slice(0, 500);
    }
    if (Object.keys(found).length) sessionStorage.setItem(STORE_KEY, JSON.stringify(found));
  } catch { /* storage blocked — nothing to forward */ }
}

function storedParams(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Adds the stored ad params to a booking-app URL (never overwrites existing ones). */
export function decorateBookingUrl(url: string): string {
  try {
    const u = new URL(url, window.location.href);
    if (u.hostname !== BOOKING_HOST) return url;
    for (const [k, v] of Object.entries(storedParams())) {
      if (!u.searchParams.has(k)) u.searchParams.set(k, v);
    }
    return u.toString();
  } catch {
    return url;
  }
}
