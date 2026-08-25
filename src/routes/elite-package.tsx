import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Eyebrow, LinkButton, Section } from "@/components/site/ui";
import { whatsappHref, audiences } from "@/content/site";
import epHero from "@/assets/ep-hero.jpg";
import epCare from "@/assets/ep-care.jpg";
import epExperience from "@/assets/ep-experience.jpg";

const title = "Elite Package — Elite Property Care by StayWithVantage";
const description =
  "Elite Property Care combines Elite Handlers monthly housekeeping and linen care with the StayWithVantage guest-experience layer — care, guest services and smarter property support in one package.";
const url = "https://staywithvantage.lovable.app/elite-package";

export const Route = createFileRoute("/elite-package")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: ElitePackagePage,
});

const included = [
  {
    kicker: "Elite Handlers",
    heading: "The property stays ready.",
    image: epCare,
    alt: "Housekeeper smoothing crisp white linen in a prepared bedroom",
    copy: "A monthly service subscription: a consistent team on a consistent schedule, so the property is kept to the same standard week after week.",
    points: [
      "Housekeeping on an agreed weekly frequency",
      "Linen and bedsheet management — collect, wash, dry, iron, rotate",
      "Condition observed and reported, not only tidied",
      "Vetted, trained and supervised staff",
    ],
  },
  {
    kicker: "StayWithVantage",
    heading: "The experience around it.",
    image: epExperience,
    alt: "Guest using their phone in a warmly lit premium apartment at dusk",
    copy: "A guest-experience layer: an infrastructure through which useful property information and relevant guest services can be presented, requested and coordinated during the stay.",
    points: [
      "Property information presented clearly to the guest",
      "Relevant guest services made visible and requestable",
      "Requests captured and coordinated in one place",
      "Visibility for your team on what has been asked for",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Talk to us",
    copy: "Tell us about the property, the number of units and how the stay currently runs.",
  },
  {
    step: "02",
    title: "Property assessment",
    copy: "A short assessment confirms scope, frequency and the right service mix.",
  },
  {
    step: "03",
    title: "Your package & quote",
    copy: "You receive a confirmed monthly subscription scope and price for housekeeping and linen, alongside the guest-experience layer.",
  },
  {
    step: "04",
    title: "Onboarding",
    copy: "Schedules are set, the team is introduced and the guest-experience layer is prepared for your property.",
  },
];

function ElitePackagePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={epHero}
          alt="Sunlit serviced apartment living space prepared for the next guest"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/55" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <p className="text-[0.68rem] tracking-[0.28em] uppercase text-white/60">
            Flagship offer · Elite Package
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Elite Property Care.
          </h1>
          <p className="mt-6 max-w-lg font-[family-name:var(--font-display)] text-2xl leading-snug text-white/90 sm:text-3xl">
            A better way to live.
            <br />
            A better way to operate.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            One integrated package. Elite Handlers keeps the property ready through monthly
            subscription care. StayWithVantage enhances the experience around the stay. Together,
            care, guest experience and smarter property support come from one point of contact.
          </p>
          <p className="mt-8 text-xs tracking-[0.16em] uppercase text-white/55">
            Housekeeping · Linen · Guest Experience · Operational Support
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton to="/contact" className="bg-white text-primary hover:bg-white/90">
              Request a Quote
            </LinkButton>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm tracking-wide text-white transition-colors hover:bg-white hover:text-primary"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <Section id="included">
        <Eyebrow>What's included</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
          Two in-house service lines, working as one.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {included.map((block) => (
            <article key={block.kicker}>
              <div className="overflow-hidden rounded-[1.25rem]">
                <img
                  src={block.image}
                  alt={block.alt}
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-96"
                />
              </div>
              <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {block.kicker}
              </p>
              <h3 className="mt-3 text-2xl">{block.heading}</h3>
              <p className="mt-4 max-w-md text-muted-foreground">{block.copy}</p>
              <ul className="mt-6 space-y-3">
                {block.points.map((p) => (
                  <li key={p} className="flex gap-3 border-b border-border pb-3 text-sm">
                    <span aria-hidden className="text-muted-foreground">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
          StayWithVantage coordinates information and presents relevant services. External guest
          services are delivered by the relevant providers, and outcomes such as guest uptake or
          revenue are not guaranteed.
        </p>
      </Section>

      {/* Together */}
      <Section className="bg-sand">
        <div className="max-w-2xl">
          <Eyebrow>Together</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Care on the ground. Experience around the stay.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Elite Property Care means one property, one coordinated operation — one point of contact
            and one standard of record across housekeeping, linen, guest experience and reporting.
            Your team, your management and your business stay yours.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <LinkButton to="/contact">Talk to us</LinkButton>
            <Link
              to="/pricing-estimates"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-primary"
            >
              <span className="border-b border-primary/30 pb-1 transition-colors group-hover:border-primary">
                Housekeeping &amp; Linen estimates
              </span>
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </Section>

      {/* Who it's designed for */}
      <Section>
        <Eyebrow>Designed for</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Properties with standards to keep.</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {audiences.slice(0, 6).map((a) => (
            <figure
              key={a.label}
              className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-lg sm:aspect-[3/4]"
            >
              <img
                src={a.image}
                alt={a.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <figcaption className="relative p-4 text-sm text-white sm:p-5">{a.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* How to get started */}
      <Section className="bg-secondary/60">
        <Eyebrow>How to get started</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Four steps to your package.</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((s) => (
            <li key={s.step} className="border-t border-primary/20 pt-5">
              <p className="text-xs tracking-[0.2em] text-muted-foreground">{s.step}</p>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-xl text-sm text-muted-foreground">
          Housekeeping and linen are provided on a monthly subscription. Final pricing is confirmed
          after a short property assessment.
        </p>
      </Section>

      {/* Final CTA */}
      <section className="bg-ink px-5 py-24 text-white sm:px-8 md:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md text-3xl leading-snug sm:text-4xl">
            Ready for a better way to operate?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs tracking-[0.16em] uppercase text-ink transition-colors hover:bg-white/85"
            >
              Request a Quote
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
            <Link
              to="/pricing-estimates"
              className="text-xs tracking-[0.16em] uppercase text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              Pricing Estimates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
