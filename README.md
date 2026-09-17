# Handyman Edinburgh — website

Marketing site for Handyman Edinburgh (local to Leith, serving Edinburgh).
Built with TanStack Start (React + TypeScript + Vite) and Tailwind CSS v4.

## 1. Running the website

```bash
bun install      # or: npm install
bun run dev      # local dev server on http://localhost:8080
bun run build    # production build
```

## 2. Changing contact details

Everything business-related lives in **`src/config/business-config.ts`**:

- `business.phone` — display text and `tel:` link
- `business.email` — display text and `mailto:` link
- `business.whatsapp` — display number and `wa.me` link (digits only, no `+`)
- `business.location` — base town, city, list of areas, utility-bar line
- `services` — the six service cards (title, description, CTA)
- `fallbackReviews` / `reviewSummary` — reviews shown when live Google data
  isn't available, plus the headline rating and review count
- `googleProfileUrl` — the "See Google profile" link
- `googleReviewsEndpoint` — the live reviews endpoint (default `/api/google-reviews`)

No contact details are hardcoded anywhere else.

## 3. Replacing gallery images

Gallery photos live in `src/assets/` and are imported at the top of
`src/components/Gallery.tsx`:

1. Drop the new image into `src/assets/` (JPG, roughly 1200px wide).
2. Update the matching `import` in `Gallery.tsx`, or point the item's `src` at
   the new file.
3. Update the item's `alt` text and `caption` so they describe the new photo.

The hero photo works the same way in `src/components/Hero.tsx`
(`src/assets/hero-handyman.jpg`). Gallery images are lazy-loaded; the hero
image is eager with high fetch priority for a fast LCP.

## 4. Connecting the Google Places API

Live reviews are served by **`src/routes/api/google-reviews.ts`** — a
server-side route. The API key is read on the server only and is never sent to
the browser.

1. In Google Cloud Console, enable **Places API (New)** and create an API key.
2. Find the business's **Place ID**
   (https://developers.google.com/maps/documentation/places/web-service/place-id).
3. Set both values as server environment variables:

```
GOOGLE_PLACES_API_KEY=your-server-key
GOOGLE_PLACE_ID=ChIJ...
```

Restrict the key to the Places API. Do **not** prefix it with `VITE_` — that
would expose it in the frontend bundle.

## 5. Configuring the live reviews endpoint

`GET /api/google-reviews` responds with:

```json
{
  "rating": 5,
  "totalReviews": 31,
  "reviews": [
    {
      "name": "...",
      "rating": 5,
      "text": "...",
      "time": "...",
      "authorPhoto": "..."
    }
  ]
}
```

Behaviour:

- Both env vars set → live Google reviews (cached for 1 hour).
- Env vars missing → `503`, and the frontend shows the genuine fallback
  reviews from `business-config.ts`.
- Google request fails → `502`, same fallback behaviour.

The frontend (`src/components/Reviews.tsx`) always tries the endpoint first and
silently falls back. Only real reviews are ever displayed — never add invented
ones to `fallbackReviews`.

If you'd rather host this on Supabase, move the same logic into an Edge
Function and point `business.googleReviewsEndpoint` at its URL. The response
shape must stay the same.

## 6. Deploying

Publish from Lovable (Publish button) for `.lovable.app` hosting or a custom
domain. For any other host, run `bun run build` and deploy the output; the
site needs a Node/edge runtime so that `/api/google-reviews` keeps working.
After changing server environment variables, re-publish so production picks
them up.

## Structure

```
src/
  config/business-config.ts   all editable business content
  components/                 Header, Hero, TrustStrip, Services, Gallery,
                              Reviews, About, QuoteForm, FAQ, Footer,
                              FloatingWhatsApp, Reveal
  routes/index.tsx            the page + SEO metadata + LocalBusiness JSON-LD
  routes/api/google-reviews.ts  server-side Google reviews endpoint
  styles.css                  design tokens (colours, fonts, shadows)
```

## Quote form

Submitting the quote form opens the visitor's email app with a pre-filled
message to the business address. To switch to a stored/emailed submission
later, replace the handler in `src/components/QuoteForm.tsx`.
