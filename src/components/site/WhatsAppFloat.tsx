import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with StayWithVantage on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 sm:px-5"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm tracking-wide sm:inline">WhatsApp</span>
    </a>
  );
}
