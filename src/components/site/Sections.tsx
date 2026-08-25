import {
  BookOpen,
  Boxes,
  ClipboardList,
  QrCode,
  ScanLine,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";
import {
  audiences,
  handlerServices,
  howItWorks,
  images,
  platformFeatures,
  reassurances,
  serviceLines,
  testimonials,
  trustPoints,
} from "@/content/site";
import { Eyebrow, ExploreLink, LinkButton, ScrollButton, Section, TagRow } from "./ui";


/* ------------------------------- 2. Hero ------------------------------- */
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={images.hero}
        alt="Sunlit boutique suite with linen bedding overlooking a terrace"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24">
        <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/70">
          Property Care · Guest Experience · Operational Systems
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Make your property easier to run.
        </h1>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton to="/contact" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </LinkButton>
          <ScrollButton to="how-it-works" variant="light">
            See how it works
          </ScrollButton>
        </div>

      </div>
    </section>
  );
}

/* ----------------------------- 3. What we do ---------------------------- */
export function WhatWeDo() {
  return (
    <Section id="what-we-do">
      <Eyebrow>What we do</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">
        One company. Two in-house service lines.
      </h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
        {serviceLines.map((line) => (
          <article key={line.id}>
            <div className="overflow-hidden">
              <img
                src={line.image}
                alt={line.eyebrow}
                loading="lazy"
                width={1280}
                height={1600}
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-96"
              />
            </div>
            <h3 className="mt-6 text-2xl">{line.eyebrow}</h3>
            <div className="mt-3">
              <TagRow tags={line.tags} />
            </div>
            <p className="mt-4 max-w-sm text-muted-foreground">{line.line}</p>
            <div className="mt-6">
              <ExploreLink to="/services" hash={line.exploreId}>
                Explore
              </ExploreLink>

            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- 4. How it works --------------------------- */
export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-secondary/60">
      <Eyebrow>How it works</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
        Information moves. Your team stays in control.
      </h2>
      <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-5">
        {howItWorks.map((s) => (
          <li key={s.step} className="border-t border-primary/20 pt-5">
            <span className="font-[family-name:var(--font-display)] text-sm text-accent-foreground/70">
              {s.step}
            </span>
            <h3 className="mt-3 text-lg leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
          </li>
        ))}
      </ol>
      <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        StayWithVantage coordinates information. The work itself is performed either by your own
        team or by the StayWithVantage Property Care team.
      </p>
    </Section>
  );
}

/* ------------------------ 5. Elite Handlers detail ---------------------- */
export function HandlersDetail() {
  return (
    <Section id="handlers">
      <Eyebrow>Elite Handlers</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">People on the ground.</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
        {handlerServices.map((s) => (
          <article key={s.title}>
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              width={1200}
              height={900}
              className="h-60 w-full object-cover"
            />
            <h3 className="mt-5 text-xl">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.copy}</p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <LinkButton to="/contact" variant="outline">
          Request a Quote
        </LinkButton>

      </div>
    </Section>
  );
}

/* --------------------------- 6. Platform detail ------------------------- */
const icons = {
  book: BookOpen,
  qr: QrCode,
  form: ClipboardList,
  wrench: Wrench,
  box: Boxes,
  sparkle: Sparkles,
  flow: Workflow,
  scan: ScanLine,
} as const;

export function PlatformDetail() {
  return (
    <Section id="platform" className="bg-ink text-white">
      <p className="eyebrow text-white/50">StayWithVantage Platform</p>
      <h2 className="mt-4 max-w-xl text-3xl text-white sm:text-4xl">
        The systems behind a calm operation.
      </h2>
      <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {platformFeatures.map((f, i) => {
          const Icon = icons[f.icon as keyof typeof icons] ?? BookOpen;
          return (
            <article
              key={f.title}
              className={`bg-ink p-8 transition-colors hover:bg-white/5 ${
                i === platformFeatures.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <Icon className="size-6 text-accent" strokeWidth={1.25} />
              <h3 className="mt-6 text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.copy}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-12">
        <LinkButton to="/contact" variant="light">
          Get Started
        </LinkButton>
      </div>
    </Section>
  );
}

/* ------------------------- 7. Elite Property Care ----------------------- */
export function PropertyCareSummary() {
  return (
    <Section id="property-care" className="bg-sand">
      <div className="max-w-2xl">
        <Eyebrow>Combined proposition</Eyebrow>
        <h2 className="mt-4 text-4xl sm:text-5xl">Elite Property Care.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          One property. One coordinated operation.
        </p>
        <p className="mt-4 text-muted-foreground">
          Elite Handlers on the ground and the StayWithVantage Platform behind them — one point of
          contact, one standard of record, across housekeeping, linen, guest experience and
          reporting.
        </p>
        <div className="mt-10">
          <LinkButton to="/contact">Get a Quote</LinkButton>
        </div>
      </div>
    </Section>
  );
}


/* ------------------------ 8. Statement / About ------------------------- */
export function Statement() {
  return (
    <Section id="about" className="pt-32 sm:pt-40">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h1 className="text-3xl leading-tight sm:text-5xl">
            You run the property.

            <br />
            We make it easier.
          </h1>

          <p className="mt-6 max-w-md text-muted-foreground">
            Keep your people. Keep your management. Keep your business. We provide the services and
            systems that support your operation.
          </p>
          <ul className="mt-8 space-y-3">
            {reassurances.map((r) => (
              <li key={r} className="flex gap-3 border-b border-border pb-3 text-sm">
                <span aria-hidden className="text-muted-foreground">
                  —
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={images.statement}
          alt="Sunlit serviced apartment living room"
          loading="lazy"
          width={1600}
          height={1100}
          className="h-72 w-full object-cover sm:h-[30rem]"
        />
      </div>
    </Section>
  );
}

/* ------------------------------ 9. Trust ------------------------------- */
export function Trust() {
  return (
    <Section className="bg-secondary/60">
      <Eyebrow>Trust</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Standards you can hand over.</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
        {trustPoints.map((t) => (
          <div key={t.title} className="border-t border-primary/20 pt-5">
            <h3 className="text-lg">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.copy}</p>
          </div>
        ))}
      </div>
      <p className="mt-16 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Sample content — replace later
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name + t.org} className="bg-card p-7">
            <blockquote className="font-[family-name:var(--font-display)] text-lg leading-snug">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              {t.name} · {t.org}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------- 10. Who it's for -------------------------- */
export function Audiences() {
  return (
    <Section>
      <Eyebrow>Who it's for</Eyebrow>
      <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Built for properties with standards.</h2>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {audiences.map((a) => (
          <div
            key={a}
            className="flex min-h-28 items-end bg-secondary p-5 text-sm transition-colors hover:bg-sand"
          >
            {a}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- 11. Final CTA ---------------------------- */
export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden">
      <img
        src={images.ctaProperty}
        alt="Apartment building facade glowing at dusk"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8">
        <h2 className="mx-auto max-w-2xl text-4xl text-white sm:text-6xl">
          Ready to make it easier?
        </h2>
        <div className="mt-9 flex justify-center">
          <LinkButton to="/contact" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </LinkButton>

        </div>
      </div>
    </section>
  );
}
