import { MessageCircle } from "lucide-react";

import { business } from "@/config/business-config";

export function FloatingWhatsApp() {
  return (
    <a
      href={business.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Handyman Edinburgh on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 font-semibold text-ink shadow-lift transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="text-sm">WhatsApp</span>
    </a>
  );
}
