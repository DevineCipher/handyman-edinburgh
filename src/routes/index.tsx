import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { FAQ, faqs } from "@/components/FAQ";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TrustStrip } from "@/components/TrustStrip";
import { business, reviewSummary, services } from "@/config/business-config";

const title = "Handyman Edinburgh | Local Handyman in Leith & Edinburgh";
const description =
  "Handyman Edinburgh — reliable home repairs, TV mounting, electrical jobs, blinds fitting, painting and odd jobs. Local to Leith, serving all of Edinburgh. Free quotes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "handyman Edinburgh, handyman in Edinburgh, handyman Leith, Edinburgh handyman services, home repairs Edinburgh, property maintenance Edinburgh, TV mounting Edinburgh, odd jobs Edinburgh, home maintenance Edinburgh",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: business.name,
          description: business.shortDescription,
          telephone: "+447522378567",
          email: business.email.display,
          areaServed: business.location.areas.map((area) => ({
            "@type": "Place",
            name: area,
          })),
          address: {
            "@type": "PostalAddress",
            addressLocality: "Edinburgh",
            addressRegion: "Scotland",
            addressCountry: "GB",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewSummary.rating,
            reviewCount: reviewSummary.totalReviews,
          },
          makesOffer: services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: service.title },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
