import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { business } from "@/config/business-config";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-[0.78rem] sm:px-6 lg:px-8">
          <p className="font-medium tracking-wide opacity-90">
            {business.location.utilityLine}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={business.phone.href}
              className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              <Phone className="size-3.5 text-accent" aria-hidden="true" />
              {business.phone.display}
            </a>
            <a
              href={business.email.href}
              className="hidden items-center gap-1.5 transition-opacity hover:opacity-70 sm:inline-flex"
            >
              <Mail className="size-3.5 text-accent" aria-hidden="true" />
              {business.email.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-border/70 bg-background/85 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-soft",
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-xl bg-primary font-display text-sm font-extrabold text-primary-foreground"
            >
              HE
            </span>
            <span className="font-display text-[1.05rem] leading-none font-extrabold tracking-tight">
              Handyman
              <span className="block text-[0.7rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                Edinburgh
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={business.phone.href}
              className="hidden rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary sm:inline-flex"
            >
              {business.phone.display}
            </a>
            <a
              href="#quote"
              className="hidden rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink sm:inline-flex"
            >
              Get a Free Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-xl border border-border transition-colors hover:bg-secondary lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-background lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-9 place-items-center rounded-lg border border-border"
                >
                  <X className="size-4" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-base font-semibold transition-colors hover:bg-secondary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-2">
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-primary px-4 py-3.5 text-center text-base font-semibold text-primary-foreground"
                >
                  Get a Free Quote
                </a>
                <a
                  href={business.phone.href}
                  className="rounded-xl border border-border px-4 py-3.5 text-center text-base font-semibold"
                >
                  Call {business.phone.display}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
