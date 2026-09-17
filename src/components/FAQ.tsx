import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export const faqs = [
  {
    question: "Do you take small jobs?",
    answer:
      "Yes. Small jobs are welcome — a single shelf, a light fitting, a sticking door or a short list of odd jobs. No job too small.",
  },
  {
    question: "Can I send photos before getting a quote?",
    answer:
      "Photos are welcome. Send a few pictures and a short description on WhatsApp or by email and we'll come back to you about the job.",
  },
  {
    question: "Do you cover all of Edinburgh?",
    answer:
      "We're local to Leith and work across Edinburgh and the surrounding areas. Just mention where you're based when you get in touch.",
  },
  {
    question: "Do you offer urgent or short-notice work?",
    answer:
      "Short-notice jobs are considered, and out-of-hours emergency work can be discussed. Get in touch and we'll let you know what's possible.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <Reveal className="text-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="display-xl mt-3 text-[clamp(2rem,5vw,3.1rem)]">
          Questions, answered.
        </h2>
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="surface-card border-b px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.97rem] leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
