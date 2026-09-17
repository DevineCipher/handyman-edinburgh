import { Check } from "lucide-react";

import { Reveal } from "./Reveal";

const points = [
  { title: "Quick response", text: "Short-notice jobs considered" },
  { title: "Fair pricing", text: "Clear communication before work" },
  { title: "Attention to detail", text: "Clean, careful workmanship" },
  { title: "No job too small", text: "From odd jobs to installations" },
];

export function TrustStrip() {
  return (
    <section aria-label="Why choose us" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-7 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {points.map((point, i) => (
          <Reveal key={point.title} delay={i * 70} className="flex gap-3">
            <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent">
              <Check className="size-3.5 text-accent-foreground" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-base font-bold">{point.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{point.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
