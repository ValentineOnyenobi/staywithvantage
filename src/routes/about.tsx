import { createFileRoute } from "@tanstack/react-router";
import { Audiences } from "@/components/site/Sections";
import { LinkButton } from "@/components/site/ui";
import { whatsappHref } from "@/content/site";
import heroSuite from "@/assets/hero-suite.jpg";
import statement from "@/assets/statement.jpg";
import housekeepingTeam from "@/assets/housekeeping-team.jpg";
import pfTeaserGuest from "@/assets/pf-teaser-guest.jpg";
import svcChef from "@/assets/svc-chef.jpg";
import ctaProperty from "@/assets/cta-property.jpg";

const title = "About StayWithVantage — A better stay starts behind the scenes";
const description =
  "StayWithVantage helps property operators create better stays, make more from each guest and run their properties with greater ease.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    label: "Property Care",
    sub: "Elite Handlers",
    image: housekeepingTeam,
    alt: "Housekeeping team preparing a boutique suite",
  },
  {
    label: "Guest Experience",
    sub: "StayWithVantage",
    image: pfTeaserGuest,
    alt: "Guest using their phone in a warmly lit suite",
  },
  {
    label: "Guest Services",
    sub: "More opportunities around the stay",
    image: svcChef,
    alt: "Private chef plating a dish in a residence kitchen",
  },
];

const principles = [
  { title: "Care", copy: "Look after the property." },
  { title: "Connect", copy: "Bring people, information and services together." },
  { title: "Optimise", copy: "Create a better experience and more value from the stay." },
];

function AboutPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative flex min-h-[82svh] items-end overflow-hidden">
        <img
          src={heroSuite}
          alt="Sunlit boutique suite opening onto a terrace"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24">
          <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/80">
            About StayWithVantage
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.06] text-white sm:text-5xl md:text-6xl">
            We believe a better stay starts behind the scenes.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            StayWithVantage helps property operators create better stays, make more from each guest
            and run their properties with greater ease.
          </p>
        </div>
      </section>

      {/* 2. WHAT WE ARE */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="eyebrow">What we are</p>
          <h2 className="mt-4 max-w-2xl text-2xl leading-tight sm:text-4xl">
            More than property care. More than guest experience.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            We connect the people, services and systems around the stay — helping property operators
            deliver more without giving up control of their business.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-3">
            {pillars.map((p) => (
              <figure key={p.label} className="relative flex aspect-[4/5] items-end bg-card">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={900}
                  height={1125}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <figcaption className="relative p-6">
                  <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/70">
                    {p.sub}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-xl text-white">
                    {p.label}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 3 + 4. OUR BELIEF & APPROACH */}
      <section className="relative overflow-hidden">
        <img
          src={statement}
          alt="Serviced apartment living room in warm daylight"
          loading="lazy"
          width={1600}
          height={1100}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-white/70">Our belief</p>
            <h2 className="mt-4 text-2xl leading-tight text-white sm:text-4xl">
              The property owner should stay in control.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              We don&apos;t believe operators need another company to take over their business. They
              need the right support around it.
            </p>
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3 sm:gap-6">
            {principles.map((p, i) => (
              <div key={p.title}>
                <p className="text-xs tracking-[0.2em] text-white/50">0{i + 1}</p>
                <h3 className="mt-3 text-xl text-white">{p.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/80">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND ARCHITECTURE */}
      <section className="bg-secondary/60 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="eyebrow">Brand architecture</p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">
                StayWithVantage
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Hospitality Upgrade Services
              </p>
            </div>
            <span aria-hidden className="text-2xl text-clay">
              +
            </span>
            <div>
              <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl">
                Elite Handlers
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Specialist Cleaning Services
              </p>
            </div>
            <span aria-hidden className="text-2xl text-clay">
              =
            </span>
            <div className="w-full border-t border-primary/20 pt-8">
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl">
                Elite Property Care
              </p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-xl text-muted-foreground">
            Together, they give property operators access to both the physical care and the
            guest-experience layer around their property.
          </p>
        </div>
      </section>

      {/* 6. TRUST */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <p className="eyebrow">Trust</p>
          <h2 className="mt-4 max-w-xl text-2xl leading-tight sm:text-4xl">Built for operators.</h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Designed around the realities of running property: people, guests, service, information
            and the details that cannot be missed.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <Audiences />

      {/* 7. CONTROL POSITIONING */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto w-full max-w-3xl border-t border-border pt-12">
          <h2 className="text-xl sm:text-2xl">You stay in control.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Your property, your team and your business stay yours. We work around your operation and
            support the way you already run it.
          </p>
        </div>
      </section>

      {/* 8. CLOSING */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden">
        <img
          src={ctaProperty}
          alt="Apartment building facade glowing at dusk"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 text-center sm:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-white sm:text-5xl">
            Your property. Your team. A better way to operate.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LinkButton to="/contact" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </LinkButton>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
