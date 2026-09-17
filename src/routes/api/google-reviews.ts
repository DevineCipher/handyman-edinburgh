import { createFileRoute } from "@tanstack/react-router";

/**
 * GET /api/google-reviews
 *
 * Returns live Google reviews for the business.
 *
 * Response shape:
 * {
 *   "rating": 5,
 *   "totalReviews": 31,
 *   "reviews": [
 *     { "name": "...", "rating": 5, "text": "...", "time": "...", "authorPhoto": "..." }
 *   ]
 * }
 *
 * To go live, set these server-side environment variables (never in frontend code):
 *   GOOGLE_PLACES_API_KEY  – Google Places API (New) key
 *   GOOGLE_PLACE_ID        – the Place ID of the Google Business Profile
 *
 * Until both are set, this route responds 503 and the frontend shows the
 * genuine fallback reviews from src/config/business-config.ts.
 * The API key is only ever read on the server; it is never sent to the browser.
 */

type ApiReview = {
  name: string;
  rating: number;
  text: string;
  time?: string | undefined;
  authorPhoto?: string | undefined;
};

type PlacesReview = {
  authorAttribution?: { displayName?: string; photoUri?: string };
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
};

export const Route = createFileRoute("/api/google-reviews")({
  server: {
    handlers: {
      GET: async () => {
        const apiKey = process.env["GOOGLE_PLACES_API_KEY"];
        const placeId = process.env["GOOGLE_PLACE_ID"];

        if (!apiKey || !placeId) {
          return Response.json(
            {
              error: "google_places_not_configured",
              message:
                "Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID on the server to enable live Google reviews.",
            },
            { status: 503 },
          );
        }

        try {
          const res = await fetch(
            `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
            {
              headers: {
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask": "rating,userRatingCount,reviews",
              },
            },
          );

          if (!res.ok) {
            const body = await res.text();
            console.error(`Google Places request failed [${res.status}]: ${body}`);
            return Response.json(
              { error: "google_places_request_failed", status: res.status },
              { status: 502 },
            );
          }

          const data = (await res.json()) as {
            rating?: number;
            userRatingCount?: number;
            reviews?: PlacesReview[];
          };

          const reviews: ApiReview[] = (data.reviews ?? [])
            .filter((r) => (r.text?.text ?? "").trim().length > 0)
            .map((r) => ({
              name: r.authorAttribution?.displayName ?? "Google user",
              rating: r.rating ?? 5,
              text: r.text?.text ?? "",
              time: r.relativePublishTimeDescription ?? r.publishTime,
              authorPhoto: r.authorAttribution?.photoUri,
            }));

          return Response.json(
            {
              rating: data.rating ?? null,
              totalReviews: data.userRatingCount ?? null,
              reviews,
            },
            { headers: { "Cache-Control": "public, max-age=3600" } },
          );
        } catch (error) {
          console.error("Google reviews route error", error);
          return Response.json({ error: "unexpected_error" }, { status: 500 });
        }
      },
    },
  },
});
