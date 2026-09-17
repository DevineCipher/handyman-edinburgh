import blinds from "@/assets/work-blinds.jpg";
import electrical from "@/assets/work-electrical.jpg";
import garden from "@/assets/work-garden.jpg";
import painting from "@/assets/work-painting.jpg";
import tools from "@/assets/work-tools.jpg";
import tvMounting from "@/assets/work-tv-mounting.jpg";
import { Reveal } from "./Reveal";

/**
 * To swap an image, drop a replacement into src/assets/ and change the import
 * above (or the `src` below). Keep the caption and alt text accurate.
 */
const items = [
  {
    src: tvMounting,
    alt: "TV being mounted on a living room wall in an Edinburgh flat",
    caption: "TV mounting",
    className: "lg:col-span-5 lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: electrical,
    alt: "Ceiling light fitting being installed with a screwdriver",
    caption: "Electrical work",
    className: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: blinds,
    alt: "Newly fitted window blinds in a bright tenement living room",
    caption: "Blinds & window fitting",
    className: "lg:col-span-3",
    ratio: "aspect-[4/3]",
  },
  {
    src: painting,
    alt: "Interior wall being painted with a roller and masked skirting",
    caption: "Painting & maintenance",
    className: "lg:col-span-3 lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: garden,
    alt: "Small Edinburgh garden being cleared with a hedge trimmer and waste bags",
    caption: "Garden & outdoor jobs",
    className: "lg:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: tools,
    alt: "Handyman tool bag beside a door handle being repaired",
    caption: "General repairs",
    className: "lg:col-span-5",
    ratio: "aspect-[16/10]",
  },
];

export function Gallery() {
  return (
    <section id="our-work" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our work</p>
          <h2 className="display-xl mt-3 text-[clamp(2rem,5vw,3.25rem)]">
            Practical work. Real results.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft ${item.className ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${item.ratio}`}
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-semibold text-ink-foreground backdrop-blur-sm">
                {item.caption}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
