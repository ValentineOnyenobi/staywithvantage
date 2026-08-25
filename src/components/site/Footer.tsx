import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact, footerSecondaryLinks, navLinks, whatsappHref } from "@/content/site";
import logoAsset from "@/assets/sv-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-white/70 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.1fr] md:gap-12">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center justify-center rounded-xl bg-white p-2.5 ring-1 ring-white/15">
            <img
              src={logoAsset.url}
              alt="StayWithVantage"
              width={96}
              height={96}
              className="size-12 object-contain"
            />
          </span>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Property Care · Guest Experience
            <br />
            Systems · Operations
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StayWithVantage on Instagram"
              title="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-full text-white/60 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Instagram className="size-4" />
            </a>
            <span aria-hidden className="h-5 w-px bg-white/15" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with StayWithVantage on WhatsApp"
              title="WhatsApp"
              className="inline-flex size-9 items-center justify-center rounded-full text-white/60 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-start gap-2.5">
          <p className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40">Explore</p>
          {navLinks
            .filter((link) => link.to !== "/elite-package")
            .map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <nav aria-label="More" className="flex flex-col items-start gap-2.5">
          <p className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40">More</p>
          {footerSecondaryLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-2.5 text-sm">
          <p className="text-[0.625rem] uppercase tracking-[0.2em] text-white/40">Contact</p>
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
            {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="transition-colors hover:text-white">
            {contact.phone}
          </a>
          <span className="cursor-not-allowed text-white/40">Client Login — coming soon</span>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:mt-12">
        <span>© {new Date().getFullYear()} StayWithVantage. All rights reserved.</span>
        <span>Property services · Guest experience</span>
      </div>
    </footer>
  );
}
