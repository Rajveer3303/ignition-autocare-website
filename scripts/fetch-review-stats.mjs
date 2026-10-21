// Runs before `next build`. Pulls the live Google rating and review count
// (Places API) into lib/review-stats.json, which REVIEW_STATS reads, and
// public/review-stats.json, which the booking app reads.
// With no API key, or if Google fails, the last saved numbers are kept and
// the build carries on.
import { readFileSync, writeFileSync } from "node:fs";
import { fetchGoogleReviewStats } from "./google-reviews.mjs";

const LIB = new URL("../lib/review-stats.json", import.meta.url);
const PUBLIC = new URL("../public/review-stats.json", import.meta.url);

let stats = JSON.parse(readFileSync(LIB, "utf8"));
try {
  const live = await fetchGoogleReviewStats();
  if (live) {
    stats = { ...live, updated: new Date().toISOString().slice(0, 10), source: "google" };
    console.log(`review stats: ${stats.rating}★ from ${stats.count} Google reviews`);
  } else {
    console.log("review stats: no GOOGLE_PLACES_API_KEY, keeping saved numbers");
    stats.source = "saved";
  }
} catch (e) {
  console.warn(`review stats: Google lookup failed, keeping saved numbers (${e.message})`);
  stats.source = "saved";
}

const json = `${JSON.stringify(stats, null, 2)}\n`;
writeFileSync(LIB, json);
writeFileSync(PUBLIC, json);
