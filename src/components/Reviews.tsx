import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Star } from "lucide-react";

import {
  business,
  fallbackReviews,
  reviewSummary,
  type Review,
} from "@/config/business-config";
import { Reveal } from "./Reveal";

type ReviewsPayload = {
  rating: number | null;
  totalReviews: number | null;
  reviews: Review[];
};

async function fetchGoogleReviews(): Promise<ReviewsPayload> {
  const res = await fetch(business.googleReviewsEndpoint);
  if (!res.ok) throw new Error(`Reviews unavailable (${res.status})`);
  const data = (await res.json()) as ReviewsPayload;
  if (!Array.isArray(data.reviews) || data.reviews.length === 0) {
    throw new Error("No live reviews returned");
  }
  return data;
}

function Stars({ rating, label }: { rating: number; label?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={label ?? `${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={
            i < Math.round(rating)
              ? "size-4 fill-star text-star"
              : "size-4 text-muted-foreground/40"
          }
        />
      ))}
    </span>
  );
}

export function Reviews() {
  // 1) Try live Google reviews. 2) Fall back to genuine supplied reviews.
  const { data } = useQuery({
    queryKey: ["google-reviews"],
    queryFn: fetchGoogleReviews,
    retry: false,
    staleTime: 1000 * 60 * 30,
  });

  const reviews = data?.reviews ?? fallbackReviews;
  const rating = data?.rating ?? reviewSummary.rating;
  const total = data?.totalReviews ?? reviewSummary.totalReviews;

  return (
    <section id="reviews" className="border-y border-border bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="display-xl mt-3 text-[clamp(2rem,5vw,3.25rem)]">
              What Edinburgh customers say.
            </h2>
          </Reveal>

          <Reveal delay={80} className="surface-card flex items-center gap-5 p-6">
            <div>
              <p className="font-display text-4xl leading-none font-extrabold">
                {rating.toFixed(1)}
              </p>
              <Stars rating={rating} label={`Rated ${rating} out of 5 on Google`} />
              <p className="mt-1.5 text-sm text-muted-foreground">
                {total} reviews · Google Reviews
              </p>
            </div>
            <a
              href={business.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors hover:bg-secondary"
            >
              See Google profile
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal as="li" key={`${review.name}-${i}`} delay={(i % 3) * 80}>
              <figure className="surface-card lift-on-hover flex h-full flex-col p-7">
                <Stars rating={review.rating} />
                <blockquote className="mt-4 grow text-[0.97rem] leading-relaxed text-foreground/85">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {review.authorPhoto ? (
                    <img
                      src={review.authorPhoto}
                      alt=""
                      loading="lazy"
                      className="size-9 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="grid size-9 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-primary"
                    >
                      {review.name.charAt(0)}
                    </span>
                  )}
                  <span>
                    <span className="block text-sm font-semibold">{review.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {review.time ?? "Google review"}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
