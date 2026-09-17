import { business, services } from "@/config/business-config";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-extrabold">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-75">
            {business.shortDescription}
          </p>
          <p className="mt-4 text-sm font-semibold text-accent">
            {business.location.utilityLine}
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-sm font-bold tracking-[0.18em] uppercase opacity-60">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.18em] uppercase opacity-60">
            Contact
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={business.phone.href} className="opacity-80 hover:opacity-100">
                {business.phone.display}
              </a>
            </li>
            <li>
              <a
                href={business.email.href}
                className="break-all opacity-80 hover:opacity-100"
              >
                {business.email.display}
              </a>
            </li>
            <li>
              <a
                href={business.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100"
              >
                WhatsApp {business.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.18em] uppercase opacity-60">
            Areas
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm opacity-80">
            {business.location.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs opacity-60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {business.name}. {business.tagline}
        </div>
      </div>
    </footer>
  );
}
