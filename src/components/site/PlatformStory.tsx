import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/content/site";
import { cn } from "@/lib/utils";
import propertyImg from "@/assets/pf-01-property.jpg";
import guestImg from "@/assets/pf-02-guest.jpg";
import careImg from "@/assets/pf-03-care.jpg";
import teamImg from "@/assets/pf-04-team.jpg";

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
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

const kicker = "text-[0.625rem] uppercase tracking-[0.2em]";

/* ------------------------------ 1. Opening ------------------------------ */
const fragments = [
  { who: "Guest", text: "Where is the Wi-Fi?" },
  { who: "Guest", text: "AC not working." },
  { who: "Housekeeping", text: "Room needs extra supplies." },
  { who: "Housekeeping", text: "Something is damaged." },
  { who: "Maintenance", text: "Repair requested." },
  { who: "Manager", text: "Has this been resolved?" },
];

const scatter = [
  "sm:translate-x-2 sm:-rotate-[1.2deg]",
  "sm:translate-x-10 sm:rotate-[1.4deg]",
  "sm:-translate-x-1 sm:rotate-[0.8deg]",
  "sm:translate-x-12 sm:-rotate-[1deg]",
  "sm:translate-x-4 sm:rotate-[1.1deg]",
  "sm:translate-x-8 sm:-rotate-[0.7deg]",
];

function Opening() {
  return (
    <section id="platform" className="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="eyebrow">StayWithVantage Platform</p>
          <h2 className="mt-5 max-w-3xl text-3xl uppercase leading-[1.1] tracking-[-0.01em] sm:text-5xl">
            Your property is running. But who is connecting everything?
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Guests, housekeeping, maintenance and management generate information every day.
            StayWithVantage gives that information somewhere to go — and gives your team a clearer
            way to act on it.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          {/* scattered fragments */}
          <div className="relative">
            <div className="grid gap-3 sm:gap-4">
              {fragments.map((f, i) => (
                <Reveal key={f.text} delay={i * 110}>
                  <div
                    className={cn(
                      "rounded-lg border border-border bg-card/90 px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur transition-transform duration-500 sm:px-5 sm:py-4",
                      "max-w-[22rem] sm:max-w-[24rem]",
                      scatter[i],
                    )}
                  >
                    <span className={cn(kicker, "text-accent-foreground/70")}>{f.who}</span>
                    <p className="mt-1.5 text-sm sm:text-base">“{f.text}”</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {/* converging paths */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 top-8 hidden h-[calc(100%-4rem)] w-24 lg:block"
            >
              <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
              <span className="absolute left-1/2 top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-primary/30 to-primary/50" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-primary/60 motion-safe:animate-pulse">
                →
              </span>
            </span>
          </div>

          {/* converged layer */}
          <Reveal delay={220}>
            <div className="relative overflow-hidden rounded-lg border border-primary/15">
              <img
                src={propertyImg}
                alt="Warm boutique hotel reception at golden hour"
                loading="lazy"
                width={1600}
                height={1008}
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="bg-ink px-6 py-8 sm:px-8 sm:py-10">
                <p className={cn(kicker, "text-white/45")}>The StayWithVantage layer</p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-xl leading-snug text-white sm:text-2xl">
                  The property was already generating the information.
                  <br />
                  <span className="text-accent">StayWithVantage makes it useful.</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- 2. All the little things --------------------- */
type Story = {
  id: string;
  index: string;
  area: string;
  headline: string;
  copy: string;
  outcome: string;
  image?: string;
  alt?: string;
  visual?: ReactNode;
};

function CoordinationVisual() {
  const chain = ["Guest request", "Housekeeping", "Maintenance", "Manager"];
  return (
    <div className="flex h-full flex-col justify-center gap-4 bg-secondary/60 p-8 sm:p-10">
      {chain.map((c, i) => (
        <div key={c} className="flex items-center gap-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-primary/25 bg-background text-[0.625rem] text-muted-foreground">
            {i + 1}
          </span>
          <span className="flex-1 rounded-full border border-primary/15 bg-card px-4 py-2.5 text-sm">
            {c}
          </span>
          {i < chain.length - 1 && (
            <span aria-hidden className="text-xs text-primary/40 motion-safe:animate-pulse">
              ↓
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

const dashboardStats = [
  { label: "Open", value: 8 },
  { label: "In progress", value: 5 },
  { label: "Resolved", value: 12 },
  { label: "Restocking", value: 3 },
  { label: "Maintenance", value: 2 },
  { label: "Housekeeping", value: 4 },
];

function DashboardVisual() {
  return (
    <div className="flex h-full flex-col justify-center bg-ink p-7 sm:p-9">
      <div className="flex items-baseline justify-between">
        <p className={cn(kicker, "text-white/45")}>StayWithVantage · Property overview</p>
        <span className={cn(kicker, "text-white/30")}>Illustrative</span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
        {dashboardStats.map((s) => (
          <div key={s.label} className="bg-ink px-3 py-5 sm:px-4 sm:py-6">
            <p className="font-[family-name:var(--font-display)] text-2xl text-white sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-1.5 text-[0.5625rem] uppercase tracking-[0.16em] text-white/45">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[0.6875rem] text-white/35">
        Sample data shown for illustration only.
      </p>
    </div>
  );
}

const stories: Story[] = [
  {
    id: "guest-experience",
    index: "A",
    area: "Guest experience",
    headline: "Let guests help themselves.",
    copy: "Give guests instant access to the information they need and a simple way to ask for help when they need it.",
    outcome: "Fewer questions. Better experience.",
    image: guestImg,
    alt: "Guest holding a phone showing a digital guidebook beside a QR card",
  },
  {
    id: "property-care",
    index: "B",
    area: "Property care",
    headline: "Know what's happening inside the property.",
    copy: "Turn what your team sees during a service into useful property information.",
    outcome: "Not just clean. Observed.",
    image: careImg,
    alt: "Housekeeper folding fresh linen with a checklist tablet on the bed",
  },
  {
    id: "team-coordination",
    index: "C",
    area: "Team coordination",
    headline: "Stop chasing people for updates.",
    copy: "Give every request, issue and task a clear place to go — without replacing the people already doing the work.",
    outcome: "Less chasing. More clarity.",
    visual: <CoordinationVisual />,
  },
  {
    id: "management-visibility",
    index: "D",
    area: "Management visibility",
    headline: "Know what needs your attention.",
    copy: "See what is happening across the operation without having to be everywhere yourself.",
    outcome: "Visibility without micromanagement.",
    visual: <DashboardVisual />,
  },
];

function LittleThings() {
  return (
    <section className="bg-sand px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-3xl uppercase leading-[1.12] sm:text-4xl">
            All the little things that keep a property moving.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 sm:space-y-24">
          {stories.map((s, i) => (
            <Reveal key={s.id}>
              <article
                className={cn(
                  "grid gap-8 md:grid-cols-2 md:items-center md:gap-12",
                  i % 2 === 1 && "md:[&>*:first-child]:order-2",
                )}
              >
                <div className="overflow-hidden rounded-lg border border-primary/10">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.alt ?? s.area}
                      loading="lazy"
                      width={1408}
                      height={1056}
                      className="h-64 w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[22rem]"
                    />
                  ) : (
                    <div className="h-64 sm:h-[22rem]">{s.visual}</div>
                  )}
                </div>

                <div className={cn(i % 2 === 1 && "md:pr-4")}>
                  <p className={cn(kicker, "text-accent-foreground/70")}>
                    {s.index} · {s.area}
                  </p>
                  <h3 className="mt-4 max-w-sm text-2xl uppercase leading-tight sm:text-[1.75rem]">
                    {s.headline}
                  </h3>
                  <p className="mt-4 max-w-md text-muted-foreground">{s.copy}</p>
                  <p className="mt-7 inline-block border-t border-primary/25 pt-3 text-sm uppercase tracking-[0.14em]">
                    {s.outcome}
                  </p>
                  {s.id === "guest-experience" && (
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      QR code → digital guide → guest request
                    </p>
                  )}
                  {s.id === "property-care" && (
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Housekeeping · Restocking · Condition · Maintenance
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- 3. Operating layer -------------------------- */
function OperatingLayer() {
  const inputs = ["Guests", "Property", "Team", "Management"];
  return (
    <section className="bg-ink px-5 py-24 text-white sm:px-8 md:py-36">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className={cn(kicker, "text-white/45")}>The operating layer</p>
          <h2 className="mt-5 max-w-3xl text-3xl uppercase leading-[1.1] text-white sm:text-5xl">
            Not another tool. Your property's operating layer.
          </h2>
          <p className="mt-6 max-w-2xl text-white/60">
            StayWithVantage connects the small pieces of property operations that are easy to
            overlook — guest requests, property information, housekeeping, maintenance, restocking
            and team activity.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
            <div className="grid grid-cols-2 gap-3">
              {inputs.map((n) => (
                <div
                  key={n}
                  className="rounded-lg border border-white/15 px-4 py-6 text-center text-sm uppercase tracking-[0.14em] text-white/80"
                >
                  {n}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 lg:flex-col">
              <span aria-hidden className="text-white/35 motion-safe:animate-pulse">
                <span className="hidden lg:inline">↓</span>
                <span className="lg:hidden">↓</span>
              </span>
              <div className="rounded-full border border-accent/50 bg-accent/10 px-6 py-4 text-center">
                <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.18em] text-accent">
                  StayWithVantage
                </p>
              </div>
              <span aria-hidden className="text-white/35 motion-safe:animate-pulse">
                ↓
              </span>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/5 px-8 py-10 text-center lg:py-16">
              <p className="font-[family-name:var(--font-display)] text-2xl uppercase leading-tight text-white sm:text-3xl">
                One clearer
                <br />
                operation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- 4. Why it matters -------------------------- */
const comparison = [
  { without: "Guest questions live in messages", with: "Guests have a direct information layer" },
  { without: "Maintenance requests get lost", with: "Requests have somewhere to go" },
  { without: "Restocking is discovered late", with: "Property conditions are reported" },
  { without: "Managers chase updates", with: "Managers have visibility" },
];

function WhyItMatters() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-3xl uppercase leading-[1.12] sm:text-4xl">
            Why property operators need it
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          <div className="bg-muted/60 px-6 py-7 sm:px-9">
            <p className={cn(kicker, "text-muted-foreground")}>Without StayWithVantage</p>
          </div>
          <div className="bg-secondary px-6 py-7 sm:px-9">
            <p className={cn(kicker, "text-accent-foreground/80")}>With StayWithVantage</p>
          </div>
          {comparison.map((c, i) => (
            <div key={c.with} className="contents">
              <Reveal delay={i * 90} className="bg-muted/30">
                <p className="px-6 py-7 text-muted-foreground line-through decoration-muted-foreground/30 sm:px-9 sm:py-8">
                  {c.without}
                </p>
              </Reveal>
              <Reveal delay={i * 90 + 60} className="bg-card">
                <p className="px-6 py-7 sm:px-9 sm:py-8">{c.with}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ 5. Scale -------------------------------- */
function Scale() {
  const steps = ["One property", "Multiple properties", "Portfolio"];
  return (
    <section className="bg-secondary/60 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-3xl uppercase leading-[1.12] sm:text-4xl">
            Start with one property. Build a better operation.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            What works for one property can become the operating layer across your portfolio.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14">
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={s}
                  className="relative rounded-lg border border-primary/15 bg-card px-6 py-8"
                >
                  <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.18em] text-accent-foreground/70">
                    0{i + 1}
                  </p>
                  <p className="mt-4 text-lg uppercase leading-tight">{s}</p>
                  <div
                    aria-hidden
                    className="mt-5 flex gap-1.5"
                    style={{ opacity: 0.35 + i * 0.3 }}
                  >
                    {Array.from({ length: i === 0 ? 1 : i === 1 ? 3 : 6 }).map((_, k) => (
                      <span key={k} className="h-8 w-2.5 rounded-sm bg-primary/40" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-accent-foreground">
              One StayWithVantage layer underneath
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- 6. Powered by ------------------------------ */
const capabilities = [
  "QR codes",
  "Digital guidebooks",
  "Guest forms",
  "Housekeeping reports",
  "Maintenance reports",
  "Restocking reports",
  "Team workflows",
];

function PoweredBy() {
  return (
    <section className="border-y border-border px-5 py-14 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <p className={cn(kicker, "shrink-0 text-muted-foreground")}>Powered by</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {capabilities.map((c) => (
            <li
              key={c}
              className="text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------- 7. Elite Handlers --------------------------- */
function LayerRelationship() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-8">
            <div className="rounded-lg border border-primary/15 p-8 sm:p-10">
              <p className={cn(kicker, "text-accent-foreground/70")}>Digital layer</p>
              <h3 className="mt-4 text-xl uppercase">StayWithVantage</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The guest-experience and operational layer — it coordinates information and
                workflows.
              </p>
            </div>
            <div className="rounded-lg border border-primary/15 p-8 sm:p-10">
              <p className={cn(kicker, "text-accent-foreground/70")}>Physical layer</p>
              <h3 className="mt-4 text-xl uppercase">Elite Handlers</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The specialist services layer — it can provide applicable physical property care
                services.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-4 rounded-lg bg-sand px-8 py-10 sm:px-10">
            <p className={cn(kicker, "text-accent-foreground/80")}>Elite Property Care package</p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
              StayWithVantage <span className="text-accent-foreground/70">×</span> Elite Handlers
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              StayWithVantage coordinates information and workflows. Elite Handlers can provide
              applicable physical property care services. Your own team can also remain responsible
              for their own work — nothing about your staffing has to change.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- 8. CTA --------------------------------- */
function PlatformCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 md:py-32">
      <img
        src={teamImg}
        alt="Property manager reviewing operations at a quiet desk"
        loading="lazy"
        width={1408}
        height={1056}
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-3xl uppercase leading-[1.1] text-white sm:text-5xl">
            Imagine running your property like this every day.
          </h2>
          <p className="mt-6 max-w-xl text-white/70">
            Tell us about your property. We'll show you where StayWithVantage can make the operation
            easier.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-primary transition-colors duration-300 hover:bg-white/90"
            >
              Let's talk about your property
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-xs uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PlatformStory() {
  return (
    <>
      <Opening />
      <LittleThings />
      <OperatingLayer />
      <WhyItMatters />
      <Scale />
      <PoweredBy />
      <LayerRelationship />
      <PlatformCTA />
    </>
  );
}
