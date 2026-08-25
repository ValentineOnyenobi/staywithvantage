import { Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { contact, navLinks } from "@/content/site";
import logoAsset from "@/assets/sv-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-white/70 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="inline-flex items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-white/20">
            <img
              src={logoAsset.url}
              alt="StayWithVantage"
              width={96}
              height={96}
              className="size-16 object-contain"
            />
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Property Care · Guest Experience · Operational Systems.
          </p>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Instagram className="size-4" /> Instagram
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-start gap-3">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 text-sm">
          <a href={`mailto:${contact.email}`} className="block transition-colors hover:text-white">
            {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="block transition-colors hover:text-white">
            {contact.phone}
          </a>
          <span className="block cursor-not-allowed text-white/40">Client Login — coming soon</span>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} StayWithVantage. All rights reserved.
      </div>
    </footer>
  );
}
