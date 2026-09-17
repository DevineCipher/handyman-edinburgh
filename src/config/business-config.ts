/**
 * Central business configuration.
 * Edit this file to change contact details, services, review data or links.
 * Nothing else in the site hardcodes these values.
 */

export const business = {
  name: "Handyman Edinburgh",
  tagline: "No Job Too Small – Local to Leith, Serving All of Edinburgh",
  shortDescription: "Reliable local handyman services in Edinburgh.",
  location: {
    base: "Leith",
    city: "Edinburgh",
    areas: ["Leith", "Edinburgh", "Surrounding areas"],
    utilityLine: "Local to Leith • Serving Edinburgh",
  },
  phone: {
    display: "07522 378567",
    href: "tel:+447522378567",
  },
  email: {
    display: "handyman.edinburgh20@gmail.com",
    href: "mailto:handyman.edinburgh20@gmail.com",
  },
  whatsapp: {
    display: "+44 7522 378567",
    /** wa.me link — digits only, no plus sign. */
    href: "https://wa.me/447522378567",
  },
  /** Server route that returns live Google reviews (see README). */
  googleReviewsEndpoint: "/api/google-reviews",
  /** Public Google profile link shown under the reviews section. */
  googleProfileUrl: "https://www.google.com/search?q=Handyman+Edinburgh+Leith",
} as const;

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  cta: string;
};

export const services: ServiceItem[] = [
  {
    id: "electrical",
    title: "Electrical",
    description:
      "Light fittings, fixtures, basic electrical jobs and practical installations.",
    cta: "Ask about electrical",
  },
  {
    id: "repairs",
    title: "Repairs & Maintenance",
    description:
      "Doors, handles, fixtures, household repairs, sealing, painting and general maintenance.",
    cta: "Ask about repairs",
  },
  {
    id: "mounting",
    title: "TV & Wall Mounting",
    description:
      "TVs, mirrors, shelves, pictures and other items mounted securely and neatly.",
    cta: "Ask about mounting",
  },
  {
    id: "blinds",
    title: "Blinds & Curtains",
    description: "Blinds, curtain rails, poles and window fittings.",
    cta: "Ask about blinds",
  },
  {
    id: "garden",
    title: "Garden Jobs",
    description: "Garden maintenance, clearing and practical outdoor jobs.",
    cta: "Ask about garden jobs",
  },
  {
    id: "odd-jobs",
    title: "Odd Jobs",
    description:
      "Got a list of small things you've been putting off? Send it over. No job too small.",
    cta: "Send your list",
  },
];

export type Review = {
  name: string;
  rating: number;
  text: string;
  time?: string;
  authorPhoto?: string;
};

/**
 * Fallback reviews — used only when the live Google endpoint is unavailable.
 * These are genuine reviews supplied by the business. Never add invented reviews.
 */
export const fallbackReviews: Review[] = [
  {
    name: "Chris Giubarelli",
    rating: 5,
    text: "Brain was Great. Life saver. Helped me, on short notice, with a quick but hard job. Lifting 27 OCB boards up to a flat. I would definitely use him again.",
  },
  {
    name: "Mansoor Ahmad",
    rating: 5,
    text: "Brian was super helpful. Was available at short notice, and finished the plastering I needed done quickly.",
  },
  {
    name: "Raymond Cotter",
    rating: 5,
    text: "Brian helped install a blind for me. He was very professional and efficient.",
  },
  {
    name: "Natasha Kanzen",
    rating: 5,
    text: "I recently hired Brian to tackle a few tasks around the house. He installed a light fixture, put up a coat rack, and mounted a mirror.",
  },
  {
    name: "Iain Rawlings",
    rating: 5,
    text: "Brian has done loads of stuff for us and had been a great find as it's sometimes hard to get someone reliable and that you can trust.",
  },
  {
    name: "Sheryl L",
    rating: 5,
    text: "Definitely recommend Brian. Fast, efficient and high attention to detail. He wall mounted my big TV.",
  },
  {
    name: "Bridget Robinson-Clark",
    rating: 5,
    text: "Brian responded quickly and came when he said and completed the job with ease.",
  },
];

/** Headline figures shown alongside the reviews, supplied by the business. */
export const reviewSummary = {
  rating: 5,
  totalReviews: 31,
} as const;
