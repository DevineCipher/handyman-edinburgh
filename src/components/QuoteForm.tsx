import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { business } from "@/config/business-config";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const details = String(data.get("details") ?? "");

    const subject = `Quote request – ${name || "Website enquiry"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Job details:",
      details,
    ].join("\n");

    window.location.href = `${business.email.href}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="quote" className="bg-ink py-20 text-ink-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="eyebrow text-accent">Free quote</p>
          <h2 className="display-xl mt-3 text-[clamp(2rem,5vw,3.25rem)]">
            Got a job in mind?
            <br />
            Let&apos;s get it sorted.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed opacity-80">
            Tell us what you need, where you&apos;re based and when you&apos;d like the
            work done. Photos are welcome.
          </p>

          <div className="mt-9 space-y-3">
            <a
              href={business.phone.href}
              className="flex items-center gap-3 rounded-2xl border border-ink-foreground/15 px-5 py-4 transition-colors hover:border-accent/60"
            >
              <Phone className="size-5 text-accent" aria-hidden="true" />
              <span className="font-display text-lg font-bold">
                {business.phone.display}
              </span>
            </a>
            <a
              href={business.email.href}
              className="flex items-center gap-3 rounded-2xl border border-ink-foreground/15 px-5 py-4 transition-colors hover:border-accent/60"
            >
              <Mail className="size-5 text-accent" aria-hidden="true" />
              <span className="text-[0.95rem] font-semibold break-all">
                {business.email.display}
              </span>
            </a>
            <a
              href={business.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-accent px-5 py-4 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Send photos on WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-card p-7 text-card-foreground shadow-lift sm:p-9">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-semibold">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="details" className="text-sm font-semibold">
                Job details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                required
                placeholder="What needs doing, where you're based and when suits you."
                className="resize-y rounded-xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Request a Free Quote
            </button>
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {sent
                ? "Your email app should now be open with the details filled in — just press send."
                : "Submitting opens your email app with the details ready to send."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
