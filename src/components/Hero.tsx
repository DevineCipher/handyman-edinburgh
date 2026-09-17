import { MapPin, MessageCircle, Star } from "lucide-react";

import heroImage from "@/assets/hero-handyman.jpg";
import { business, reviewSummary } from "@/config/business-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-sand"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pt-20 lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wide">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            Local to Leith &amp; Edinburgh
          </p>

          <h1 className="display-xl mt-6 text-[clamp(2.6rem,8vw,4.6rem)]">
            Small jobs.
            <br />
            <span className="text-primary">Properly done.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Reliable help for repairs, installations, maintenance and those jobs around
            the house you never seem to have time for.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Request a Free Quote
            </a>
            <a
              href={business.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/20 bg-accent px-7 py-4 text-base font-semibold text-accent-foreground transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-7 sm:grid-cols-3">
            <div>
              <dt className="sr-only">Google rating</dt>
              <dd className="flex items-center gap-1.5 font-display text-2xl font-extrabold">
                {reviewSummary.rating.toFixed(1)}
                <Star
                  className="size-5 fill-star text-star"
                  aria-hidden="true"
                />
              </dd>
              <p className="mt-1 text-sm text-muted-foreground">Google rating</p>
            </div>
            <div>
              <dt className="sr-only">Google reviews</dt>
              <dd className="font-display text-2xl font-extrabold">
                {reviewSummary.totalReviews}+
              </dd>
              <p className="mt-1 text-sm text-muted-foreground">Google reviews</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="sr-only">Area covered</dt>
              <dd className="font-display text-2xl font-extrabold">Leith</dd>
              <p className="mt-1 text-sm text-muted-foreground">
                &amp; all of Edinburgh
              </p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={heroImage}
              alt="Handyman with a tool bag at the door of an Edinburgh flat"
              width={1408}
              height={1600}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
            />
          </div>

          <div className="surface-card mx-4 -mt-14 p-6 sm:mx-10 lg:mx-0 lg:absolute lg:right-[-1.5rem] lg:bottom-[-2rem] lg:mt-0 lg:max-w-[20rem]">
            <p className="font-display text-lg font-extrabold">
              Tell us what needs doing.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Send a few details or photos on WhatsApp and we&apos;ll get back to you
              about the job.
            </p>
            <a
              href={business.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
