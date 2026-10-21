// Shared by the prebuild script and the daily refresh function.
// Uses Places API (New). Rating + review count is the Enterprise tier, which
// has 1,000 free calls a month; we make at most a couple a day.

const SEARCH = "Ignition Autocare, Colorado Way, Glasshoughton, Castleford WF10 4FA";

/** Returns { rating, count }, or null when no API key is configured. */
export async function fetchGoogleReviewStats() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return null;

  const placeId = process.env.GOOGLE_PLACE_ID;
  const headers = { "X-Goog-Api-Key": key };
  let place;

  if (placeId) {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: { ...headers, "X-Goog-FieldMask": "displayName,rating,userRatingCount" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    place = await res.json();
  } else {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount",
      },
      body: JSON.stringify({ textQuery: SEARCH, maxResultCount: 1 }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Places API ${res.status}`);
    place = (await res.json()).places?.[0];
  }

  // Never publish another business's numbers if the search matched the wrong place.
  if (!/ignition/i.test(place?.displayName?.text ?? "")) throw new Error("place not found");
  const rating = Number(place.rating);
  const count = Number(place.userRatingCount);
  if (!(rating > 0 && rating <= 5) || !(count > 0)) throw new Error("unexpected response");
  return { rating: Math.round(rating * 10) / 10, count };
}
