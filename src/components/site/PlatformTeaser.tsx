import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappHref } from "@/content/site";
import { cn } from "@/lib/utils";
import teaserGuest from "@/assets/pf-teaser-guest.jpg";

const opportunities = [
  "Airport Transfer",
  "Grocery",
  "Personal Trainer",
  "Private Chef",
  "Experiences",
  "Guest Services",
];

const statements = ["Better experience.", "More opportunity.", "Smarter operation."];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

export function PlatformTeaser() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="platform" className="bg-ink px-5 py-24 text-white sm:px-8 md:py-32">
      <div ref={ref} className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-white/50">
              StayWithVantage Platform
            </p>
            <h2 className="mt-7 text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              The stay doesn't
              <br />
              have to end there.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/65">
              StayWithVantage helps properties create more value from the guest experience.
            </p>
          </div>

          <div
            className={cn(
              "relative transition-all duration-1000 ease-out",
              shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={teaserGuest}
                alt="Guest relaxing in a warmly lit premium suite, using their phone during the stay"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Subtle concierge opportunities floating around the phone */}
            <ul className="pointer-events-none absolute inset-0 hidden lg:block">
              {opportunities.map((label, i) => {
                const pos = [
                  "left-[6%] top-[14%]",
                  "left-[2%] top-[42%]",
                  "left-[10%] bottom-[12%]",
                  "right-[8%] bottom-[42%]",
                  "right-[6%] top-[20%]",
                  "right-[3%] bottom-[14%]",
                ][i];
                return (
                  <li
                    key={label}
                    className={cn(
                      "absolute rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase text-white/85 backdrop-blur-md transition-all duration-700 ease-out",
                      pos,
                      shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    )}
                    style={{ transitionDelay: `${420 + i * 130}ms` }}
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile / tablet opportunity row */}
        <ul className="mt-10 flex flex-wrap gap-2.5 lg:hidden">
          {opportunities.map((label) => (
            <li
              key={label}
              className="rounded-full border border-white/15 px-3.5 py-1.5 text-[0.6rem] tracking-[0.18em] uppercase text-white/70"
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-8 border-y border-white/10 py-10 sm:grid-cols-3">
          {statements.map((s, i) => (
            <p
              key={s}
              className={cn(
                "font-[family-name:var(--font-display)] text-2xl transition-all duration-700 ease-out sm:text-[1.75rem]",
                shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              {s}
            </p>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-2xl leading-snug text-white/90 sm:text-3xl">
            See what could be possible for your property.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs tracking-[0.16em] uppercase text-ink transition-colors hover:bg-white/85"
            >
              Explore StayWithVantage
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-xs tracking-[0.16em] uppercase text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
