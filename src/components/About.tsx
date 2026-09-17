import { Check } from "lucide-react";

import tools from "@/assets/work-tools.jpg";
import { business } from "@/config/business-config";
import { Reveal } from "./Reveal";

const points = [
  "Short-notice work considered",
  "Clear, friendly communication",
  "Small jobs welcome",
  "Free quote enquiries",
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <img
            src={tools}
            alt="Tool bag and door hardware ready for a repair job"
            loading="lazy"
            decoding="async"
            width={1200}
            height={912}
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={90}>
          <p className="eyebrow">About</p>
          <h2 className="display-xl mt-3 text-[clamp(2rem,5vw,3.1rem)]">
            A handyman you can actually call back.
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              {business.name} is local to {business.location.base} and works right across{" "}
              {business.location.city}. The focus is practical repairs, installations and
              maintenance — the everyday jobs that keep a home in good order.
            </p>
            <p>
              Small jobs are welcome. If it&apos;s one shelf, one light fitting or a short
              list of things you&apos;ve been putting off, it&apos;s worth asking. The work
              is done carefully, cleanly and with straightforward communication from the
              first message.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent">
                  <Check className="size-3 text-accent-foreground" aria-hidden="true" />
                </span>
                <span className="text-[0.95rem] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
