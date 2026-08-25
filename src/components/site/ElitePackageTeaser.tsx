import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import epTeaser from "@/assets/ep-teaser.jpg";
import epCare from "@/assets/ep-care.jpg";
import epExperience from "@/assets/ep-experience.jpg";

const tags = ["Housekeeping", "Linen", "Guest Experience", "Operational Support"];

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

export function ElitePackageTeaser() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="elite-property-care" className="relative overflow-hidden bg-ink text-white">
      <img
        src={epTeaser}
        alt=""
        aria-hidden
        loading="lazy"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />

      <div
        ref={ref}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-16"
      >
        <div
          className={cn(
            "transition-all duration-1000 ease-out",
            shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <p className="text-[0.68rem] tracking-[0.28em] uppercase text-white/55">
            Bestselling offer
          </p>
          <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Elite Property Care.
          </h2>
          <p className="mt-6 font-[family-name:var(--font-display)] text-2xl leading-snug text-white/85 sm:text-3xl">
            A better way to live.
            <br />
            A better way to operate.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
            Elite Handlers keeps the property ready. StayWithVantage enhances the experience around
            it — bringing care, guest services and smarter property support together.
          </p>
          <p className="mt-7 text-xs tracking-[0.16em] uppercase text-white/50">
            {tags.join(" · ")}
          </p>
          <div className="mt-9">
            <Link
              to="/elite-package"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs tracking-[0.16em] uppercase text-ink transition-colors hover:bg-white/85"
            >
              See more
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Two service lines in harmony */}
        <div
          className={cn(
            "relative grid grid-cols-2 gap-4 transition-all duration-1000 ease-out sm:gap-5",
            shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
          style={{ transitionDelay: "160ms" }}
        >
          <figure className="overflow-hidden rounded-[1.5rem] sm:mt-10">
            <img
              src={epCare}
              alt="Housekeeper smoothing crisp linen in a prepared bedroom"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-64 w-full object-cover sm:h-80 lg:h-[22rem]"
            />
            <figcaption className="bg-white/5 px-4 py-3 text-[0.6rem] tracking-[0.2em] uppercase text-white/70">
              Elite Handlers
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[1.5rem]">
            <img
              src={epExperience}
              alt="Guest using their phone in a warmly lit premium apartment at dusk"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-64 w-full object-cover sm:h-80 lg:h-[22rem]"
            />
            <figcaption className="bg-white/5 px-4 py-3 text-[0.6rem] tracking-[0.2em] uppercase text-white/70">
              StayWithVantage
            </figcaption>
          </figure>
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-16 -translate-x-1/2 -translate-y-1/2 bg-white/40 sm:block"
          />
        </div>
      </div>
    </section>
  );
}
