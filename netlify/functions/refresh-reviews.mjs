// Daily check of the Google rating and review count. Only when they have
// changed does it trigger a rebuild, which bakes the new numbers into the site.
import { fetchGoogleReviewStats } from "../../scripts/google-reviews.mjs";

export default async () => {
  const live = await fetchGoogleReviewStats();
  if (!live) return new Response("no API key");

  const site = process.env.URL || "https://ignitionautocare.co.uk";
  const current = await fetch(`${site}/review-stats.json`, { cache: "no-store" })
    .then((r) => r.json())
    .catch(() => null);
  if (current && current.rating === live.rating && current.count === live.count) {
    return new Response(`unchanged: ${live.rating} / ${live.count}`);
  }

  const hook = process.env.REVIEWS_BUILD_HOOK_URL;
  if (!hook) return new Response("changed, but no build hook configured");
  await fetch(hook, { method: "POST" });
  return new Response(`rebuilding: ${live.rating} / ${live.count}`);
};

export const config = { schedule: "0 5 * * *" };
