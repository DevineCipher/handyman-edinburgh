import {
  ArrowUpRight,
  Hammer,
  Leaf,
  ListChecks,
  Monitor,
  PanelTop,
  Plug,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { services } from "@/config/business-config";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  electrical: Plug,
  repairs: Hammer,
  mounting: Monitor,
  blinds: PanelTop,
  garden: Leaf,
  "odd-jobs": ListChecks,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="display-xl mt-3 text-[clamp(2rem,5vw,3.25rem)]">
          Practical help, right across the house.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Repairs, installations and maintenance for homes and flats in Leith and across
          Edinburgh.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.id] ?? Hammer;
          return (
            <Reveal as="li" key={service.id} delay={(i % 3) * 80}>
              <a
                href="#quote"
                className="surface-card lift-on-hover group flex h-full flex-col p-7 hover:border-primary/25"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary transition-colors group-hover:bg-accent">
                  <Icon className="size-5.5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold">
                  {service.title}
                </h3>
                <p className="mt-2.5 grow text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {service.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
