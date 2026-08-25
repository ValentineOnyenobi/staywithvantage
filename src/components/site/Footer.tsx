import { Instagram } from "lucide-react";
import type { SVGProps } from "react";
import { Link } from "@tanstack/react-router";
import { contact, footerSecondaryLinks, navLinks, whatsappHref } from "@/content/site";
import logoAsset from "@/assets/sv-logo.png.asset.json";

/** Recognizable WhatsApp brand glyph: speech bubble with phone handset. */
function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.477-.911zm5.602-7.426a60.7 60.7 0 0 0-.21-.372c-.286-.465-.582-.939-.718-1.12-.135-.18-.24-.272-.36-.272-.053 0-.108.016-.16.032-.135.053-.523.27-.719.435a1.3 1.3 0 0 0-.337.42 1.6 1.6 0 0 0-.15.72c0 .42.15.87.36 1.275.21.405.466.766.72 1.08.255.314.51.586.72.766.21.18.42.292.63.292.21 0 .51-.135.705-.27.195-.135.405-.36.51-.585.105-.225.105-.45.105-.675 0-.225-.105-.42-.21-.6z" />
      <path d="M17.472 14.382c-.279 0-.55-.058-.81-.173a4.3 4.3 0 0 1-.698-.372c-.287-.195-.57-.405-.84-.63-.27-.225-.525-.466-.766-.72-.27-.27-.51-.57-.735-.885a8.4 8.4 0 0 1-.63-.945 5.4 5.4 0 0 1-.345-.81c-.075-.255-.105-.51-.105-.765 0-.255.045-.495.135-.705.09-.21.24-.39.42-.525.18-.135.39-.21.6-.21.21 0 .39.075.555.21.165.135.285.3.345.495.06.195.075.405.045.615-.03.21-.09.42-.18.63-.09.21-.21.405-.36.585-.15.18-.33.345-.54.465z" />
    </svg>
  );
}

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
          <div className="mt-1.5 flex items-center gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StayWithVantage on Instagram"
              title="Instagram"
              className="inline-flex size-8 items-center justify-center rounded-full text-white/60 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Instagram className="size-4" />
            </a>
            <span aria-hidden className="h-4 w-px bg-white/15" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with StayWithVantage on WhatsApp"
              title="WhatsApp"
              className="inline-flex size-8 items-center justify-center rounded-full text-white/60 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:mt-12">
        <span>© {new Date().getFullYear()} StayWithVantage. All rights reserved.</span>
        <span>Property services · Guest experience</span>
      </div>
    </footer>
  );
}
