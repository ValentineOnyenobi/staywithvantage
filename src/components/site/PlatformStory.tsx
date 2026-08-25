import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/content/site";
import { cn } from "@/lib/utils";
import heroGuest from "@/assets/gs-hero-guest.jpg";
import expImg from "@/assets/gs-experience.jpg";
import revImg from "@/assets/gs-revenue.jpg";
import opsImg from "@/assets/gs-operations.jpg";
import portfolioImg from "@/assets/gs-portfolio.jpg";
import svcTransfer from "@/assets/svc-transfer.jpg";
import svcGrocery from "@/assets/svc-grocery.jpg";
import svcTraining from "@/assets/svc-training.jpg";
import svcRoom from "@/assets/svc-room.jpg";
import svcExperiences from "@/assets/svc-experiences.jpg";
import svcOther from "@/assets/svc-other.jpg";

/* -------------------------------- reveal -------------------------------- */
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------ phone mockup ----------------------------- */
const conciergeItems = [
  "Room Service",
  "Airport Transfer",
  "Grocery",
  "Personal Trainer",
  "Experiences",
  "Other Guest Services",
];

function ConciergePhone({ className }: { className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "w-[15rem] rounded-[2rem] border border-white/25 bg-primary/90 p-2 shadow-2xl backdrop-blur-sm sm:w-[16.5rem]",
        className,
      )}
      aria-hidden
    >
      <div className="overflow-hidden rounded-[1.6rem] bg-background">
        <div className="border-b border-primary/10 px-5 pb-4 pt-5">
          <p className="text-[0.5625rem] uppercase tracking-[0.22em] text-muted-foreground">
            Your stay
          </p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-base leading-snug">
            Good afternoon.
            <br />
            How can we help?
          </p>
        </div>
        <ul className="divide-y divide-primary/10">
          {conciergeItems.map((item, i) => (
            <li
              key={item}
              style={{ transitionDelay: `${200 + i * 110}ms` }}
              className={cn(
                "flex items-center justify-between px-5 py-3 text-[0.8125rem] transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100",
                shown ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
              )}
            >
              <span>{item}</span>
              <span className="text-muted-foreground">→</span>
            </li>
          ))}
        </ul>
        <div className="bg-sand px-5 py-3">
          <p className="text-[0.5625rem] uppercase tracking-[0.22em] text-muted-foreground">
            StayWithVantage
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- 1. Hero -------------------------------- */
const journey = ["Booking", "Arrival", "Stay", "Guest Services", "More Value"];

function PlatformHero() {
  return (
    <section id="platform" className="relative scroll-mt-20 overflow-hidden bg-primary">
      <img
        src={heroGuest}
        alt="Guest relaxing with a phone in a premium serviced apartment"
        loading="lazy"
        width={1600}
        height={1200}
        className="absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/45" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_auto] lg:gap-10">
          <Reveal>
            <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/65">
              StayWithVantage · Hospitality Optimisation Layer
            </p>
            <h2 className="mt-6 max-w-2xl text-4xl leading-[1.02] text-white sm:text-6xl md:text-7xl">
              Make more from
              <br />
              every stay.
            </h2>
            <p className="mt-7 max-w-xl text-white/80">
              StayWithVantage connects your guests to the services, information and experiences they
              need — while creating new opportunities to increase revenue per stay.
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:justify-self-end">
            <ConciergePhone />
          </Reveal>
        </div>

        {/* journey */}
        <Reveal delay={250} className="mt-16 border-t border-white/15 pt-6">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.625rem] uppercase tracking-[0.2em] text-white/60">
            {journey.map((stage, i) => (
              <li key={stage} className="flex items-center gap-3">
                <span className={i === journey.length - 1 ? "text-white" : undefined}>{stage}</span>
                {i < journey.length - 1 && (
                  <span aria-hidden className="text-white/35">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- 2. Proposition ----------------------------- */
function Proposition() {
  return (
    <section className="bg-sand px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-4xl text-4xl leading-[1.03] sm:text-6xl md:text-[4.5rem]">
            Your guest is already there.
            <br />
            Now give them more to buy.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Turn the guest journey into an opportunity to deliver more value — and generate
            additional revenue.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- 3. Value areas ---------------------------- */
const valueAreas = [
  {
    num: "01",
    title: "Better guest experience",
    copy: "Give guests useful services and information exactly when they need them.",
    image: expImg,
    alt: "Welcome tray with linen, keys and a phone in a premium suite",
  },
  {
    num: "02",
    title: "More revenue per stay",
    copy: "Embed relevant guest services and create additional revenue opportunities during the stay.",
    image: revImg,
    alt: "In-room dining service being placed in a premium suite",
  },
  {
    num: "03",
    title: "Better operations",
    copy: "Connect guest requests, property information and your team so the operation stays organised.",
    image: opsImg,
    alt: "Hospitality team member reviewing requests on a tablet",
  },
];

function ValueAreas() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-20 md:space-y-28">
        {valueAreas.map((v, i) => (
          <Reveal key={v.num}>
            <article
              className={cn(
                "grid items-center gap-8 md:grid-cols-2 md:gap-14",
                i % 2 === 1 && "md:[&>figure]:order-2",
              )}
            >
              <figure className="overflow-hidden rounded-lg">
                <img
                  src={v.image}
                  alt={v.alt}
                  loading="lazy"
                  width={1408}
                  height={1056}
                  className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[26rem]"
                />
              </figure>
              <div>
                <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-accent-foreground/70">
                  {v.num}
                </span>
                <h3 className="mt-4 max-w-sm text-3xl leading-tight sm:text-4xl">{v.title}</h3>
                <p className="mt-5 max-w-md text-muted-foreground">{v.copy}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------- 4. Guest services --------------------------- */
const services = [
  { label: "Airport Transfers", image: svcTransfer, alt: "Private car at a boutique property entrance at dusk" },
  { label: "Grocery", image: svcGrocery, alt: "Fresh grocery provisions on an apartment kitchen counter" },
  { label: "Personal Training", image: svcTraining, alt: "Private fitness session in a warm-toned hotel gym" },
  { label: "Room Services", image: svcRoom, alt: "Breakfast tray on fresh bed linen in a premium suite" },
  { label: "Experiences", image: svcExperiences, alt: "Coastal experience at golden hour" },
  { label: "Other Services", image: svcOther, alt: "Concierge desk detail with a brass bell and folded linen" },
];

function GuestServices() {
  return (
    <section className="bg-secondary/60 px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow">The guest services layer</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
            Services that belong inside the stay.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((s) => (
              <figure
                key={s.label}
                className="group relative flex aspect-[3/4] items-end overflow-hidden rounded-lg"
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <figcaption className="relative p-3 text-[0.625rem] uppercase tracking-[0.16em] text-white sm:p-4">
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These are examples of services that can be embedded into the guest journey — not
            services StayWithVantage personally provides. StayWithVantage provides the
            infrastructure and guest-experience layer through which services can be presented,
            requested and coordinated.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- 5. Operator value -------------------------- */
const commercialLogic = ["Guest", "Service", "Experience", "Additional Revenue"];

function OperatorValue() {
  return (
    <section className="bg-primary px-5 py-24 text-primary-foreground sm:px-8 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-14 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-20">
        <Reveal>
          <h2 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            One stay.
            <br />
            More experience.
            <br />
            More opportunity.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ol className="space-y-0">
            {commercialLogic.map((step, i) => (
              <li key={step}>
                <div
                  className={cn(
                    "border-b border-white/15 pb-3 text-lg sm:text-xl",
                    i === commercialLogic.length - 1 && "border-b-0 text-2xl sm:text-3xl",
                  )}
                >
                  {step}
                </div>
                {i < commercialLogic.length - 1 && (
                  <div aria-hidden className="py-3 text-primary-foreground/40">
                    ↓
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- 6. Operations ----------------------------- */
const capabilities = [
  "QR",
  "Guidebooks",
  "Guest Forms",
  "Requests",
  "Reporting",
  "Team Workflows",
];

function OperationsLayer() {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="max-w-2xl text-2xl leading-snug sm:text-3xl">
            Behind the guest experience, StayWithVantage keeps the information connected.
          </p>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
            {capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- 7. Scale ------------------------------- */
function Scale() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={portfolioImg}
        alt="Premium apartment buildings and boutique property facades at golden hour"
        loading="lazy"
        width={1600}
        height={912}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
            One property.
            <br />
            Then your portfolio.
          </h2>
          <p className="mt-7 max-w-xl text-white/80">
            Build the guest experience once and create a more consistent operating layer as your
            portfolio grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- 8. CTA -------------------------------- */
function PlatformCTA() {
  return (
    <section className="bg-sand px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-3xl leading-[1.08] sm:text-5xl">
            What could your property
            <br />
            make from the guest journey?
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-[0.6875rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-300 hover:bg-ink"
            >
              Talk to us
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-[0.6875rem] uppercase tracking-[0.18em] text-primary transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle aria-hidden className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- exported ------------------------------- */
export function PlatformStory() {
  return (
    <>
      <PlatformHero />
      <Proposition />
      <ValueAreas />
      <GuestServices />
      <OperatorValue />
      <OperationsLayer />
      <Scale />
      <PlatformCTA />
    </>
  );
}
