import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Eyebrow, LinkButton, Section } from "@/components/site/ui";
import { whatsappHref, audiences, images } from "@/content/site";
import epHero from "@/assets/ep-hero.jpg";
import epCare from "@/assets/ep-care.jpg";
import epExperience from "@/assets/ep-experience.jpg";
import epTeaser from "@/assets/ep-teaser.jpg";
import svcTransfer from "@/assets/svc-transfer.jpg";
import svcGrocery from "@/assets/svc-grocery.jpg";
import svcTraining from "@/assets/svc-training.jpg";
import svcRoom from "@/assets/svc-room.jpg";
import svcExperiences from "@/assets/svc-experiences.jpg";
import svcOther from "@/assets/svc-other.jpg";
import flowCapture from "@/assets/flow-02-capture.jpg";
import flowVisibility from "@/assets/flow-05-visibility.jpg";

const title = "Elite Package — Elite Property Care by StayWithVantage";
const description =
  "Elite Property Care brings property care, guest experience, connected systems and day-to-day operational support together — Elite Handlers on the ground, StayWithVantage around the stay.";
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

const pillars = [
  { key: "A", label: "Property Care", to: "care" },
  { key: "B", label: "Guest Experience", to: "experience" },
  { key: "C", label: "Systems", to: "systems" },
  { key: "D", label: "Operations", to: "operations" },
];

const guestServiceExamples = [
  { label: "Airport transfers", image: svcTransfer },
  { label: "Grocery", image: svcGrocery },
  { label: "Personal training", image: svcTraining },
  { label: "Room services", image: svcRoom },
  { label: "Experiences", image: svcExperiences },
  { label: "Other guest services", image: svcOther },
];

function ElitePackagePage() {
  return (
    <>
      {/* Hero / proposition */}
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
            One integrated package, built around four connected areas — so care, guest experience
            and smarter property support come from one point of contact.
          </p>
          <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] tracking-[0.18em] uppercase text-white/80">
            {pillars.map((p, i) => (
              <li key={p.key} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-white/30">·</span>}
                <span className="flex items-baseline gap-2">
                  <span className="text-white/40">{p.key}</span>
                  {p.label}
                </span>
              </li>
            ))}
          </ul>
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

      {/* At a glance — four pillars */}
      <Section className="bg-sand">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <Eyebrow>The full proposition</Eyebrow>
            <h2 className="mt-4 max-w-md text-3xl sm:text-4xl">Four parts. One package.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Elite Property Care brings the physical care of the property together with the
              experience around the stay, a consistent place for information, and day-to-day support
              for the people who run it.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p.key} className="border-t border-primary/20 pt-4">
                <p className="text-xs tracking-[0.2em] text-muted-foreground">{p.key}</p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-xl">{p.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* A. Property Care */}
      <Section id="care">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <Eyebrow>A · Property Care</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">The property stays guest-ready.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Elite Handlers is the physical readiness layer. It runs as a monthly service
              subscription — a consistent team on an agreed schedule — so the property is kept to the
              same standard week after week rather than fixed in bursts.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="border-t border-border pt-4">
                <dt className="text-lg">Housekeeping</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Service visits at an agreed weekly frequency. Property care rather than cleaning
                  alone: condition is observed and reported, not only tidied.
                </dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="text-lg">Linen &amp; bedsheet management</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Collected, washed, dried, ironed and rotated on schedule, so fresh linen is always
                  part of the readiness cycle.
                </dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="text-lg">Consistent standards</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  Vetted, trained and supervised staff working to the same standard of record on
                  every visit.
                </dd>
              </div>
            </dl>
          </div>
          <div className="order-1 grid gap-4 md:order-2">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={epCare}
                alt="Housekeeper smoothing crisp white linen in a prepared bedroom"
                loading="lazy"
                width={1200}
                height={1504}
                className="h-80 w-full object-cover sm:h-[26rem]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={images.housekeepingDetail}
                alt="Folded towels and amenities set out in a prepared bathroom"
                loading="lazy"
                width={1200}
                height={900}
                className="h-32 w-full rounded-[1rem] object-cover sm:h-40"
              />
              <img
                src={images.linen}
                alt="Neatly stacked pressed white linen"
                loading="lazy"
                width={1200}
                height={900}
                className="h-32 w-full rounded-[1rem] object-cover sm:h-40"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* B. Guest Experience */}
      <section id="experience" className="scroll-mt-20 bg-ink px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-end gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
            <div>
              <p className="text-[0.68rem] tracking-[0.28em] uppercase text-white/50">
                B · Guest Experience
              </p>
              <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
                The stay has more to offer.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                StayWithVantage is the hospitality optimisation and guest-experience layer. It helps
                a property present useful information, services and experiences across the guest
                stay — so guests have clearer, more useful options while they are there.
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
                StayWithVantage is the infrastructure and guest-experience layer through which
                relevant services can be presented, requested and coordinated. Services themselves
                are delivered by the property, its team or the relevant providers.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={epExperience}
                alt="Guest using their phone in a warmly lit premium apartment at dusk"
                loading="lazy"
                width={1200}
                height={1504}
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
          </div>

          <p className="mt-16 text-xs tracking-[0.2em] uppercase text-white/45">
            Examples only — presented where relevant to the property
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {guestServiceExamples.map((s) => (
              <li key={s.label} className="group">
                <div className="overflow-hidden rounded-[1rem]">
                  <img
                    src={s.image}
                    alt={s.label}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-[0.7rem] tracking-[0.14em] uppercase text-white/70">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* C. Systems */}
      <Section id="systems">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>C · Systems</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">Everything has a clear place.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              The connected information layer is about clarity and consistency, not complexity.
              Property information, guest requests and the coordination of relevant services each
              have one consistent place — so nothing depends on memory, scattered messages or
              whoever happens to be on shift.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Property information kept in one place and presented clearly to guests",
                "Guest requests captured in a consistent format",
                "Relevant service coordination recorded rather than passed around informally",
                "The same standard of record across every stay",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border pb-3 text-sm">
                  <span aria-hidden className="text-muted-foreground">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={flowCapture}
              alt="A guest request captured in a clear, consistent format on a phone"
              loading="lazy"
              width={1200}
              height={900}
              className="h-56 w-full rounded-[1.25rem] object-cover sm:h-72"
            />
            <img
              src={flowVisibility}
              alt="Property requests listed with their current status for the operator's team"
              loading="lazy"
              width={1200}
              height={900}
              className="h-56 w-full rounded-[1.25rem] object-cover sm:mt-8 sm:h-72"
            />
          </div>
        </div>
      </Section>

      {/* D. Operations */}
      <Section id="operations" className="bg-secondary/60">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
          <div className="overflow-hidden rounded-[1.25rem]">
            <img
              src={images.statement}
              alt="Serviced apartment living room in warm daylight, ready for the next stay"
              loading="lazy"
              width={1600}
              height={1100}
              className="h-72 w-full object-cover sm:h-[26rem]"
            />
          </div>
          <div>
            <Eyebrow>D · Operations</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">An organised day-to-day.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Care routines are set rather than improvised. Guest needs surface at the moment they
              matter. Your team can coordinate around a consistent guest experience instead of
              rebuilding the plan each week.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Clear, scheduled care routines for the property",
                "Guest needs visible at the right moment",
                "Your team coordinating around one consistent experience",
                "One point of contact across care and guest experience",
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border pb-3 text-sm">
                  <span aria-hidden className="text-muted-foreground">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-md text-sm text-muted-foreground">
              The work itself is performed by your own team or by Elite Handlers. StayWithVantage
              connects the guest-experience and information layers around it. We do not replace your
              team, set your pricing or manage your revenue.
            </p>
          </div>
        </div>
      </Section>

      {/* Designed for */}
      <Section>
        <Eyebrow>Designed for</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Properties with standards to keep.</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {audiences.slice(0, 6).map((a) => (
            <figure
              key={a.label}
              className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-lg"
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
              <figcaption className="relative p-4 text-sm text-white">{a.label}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* How to get started */}
      <Section className="bg-sand">
        <Eyebrow>How to get started</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl">Four steps to your package.</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {[
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
              title: "Your package",
              copy: "You receive a confirmed monthly subscription scope for care, alongside the guest-experience layer.",
            },
            {
              step: "04",
              title: "Onboarding",
              copy: "Schedules are set, the team is introduced and your property information is prepared.",
            },
          ].map((s) => (
            <li key={s.step} className="border-t border-primary/20 pt-5">
              <p className="text-xs tracking-[0.2em] text-muted-foreground">{s.step}</p>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img
          src={epTeaser}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-24 sm:px-8 md:flex-row md:items-center md:justify-between md:py-28">
          <div>
            <h2 className="max-w-md text-3xl leading-snug text-white sm:text-4xl">
              A better way to live. A better way to operate.
            </h2>
            <p className="mt-4 max-w-sm text-white/70">
              Tell us about your property and we'll shape Elite Property Care around it.
            </p>
          </div>
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
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-xs tracking-[0.16em] uppercase text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
