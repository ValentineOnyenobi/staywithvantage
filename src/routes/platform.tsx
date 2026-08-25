import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Eyebrow, Section } from "@/components/site/ui";
import { whatsappHref } from "@/content/site";
import pageHero from "@/assets/pf-page-hero.jpg";
import svcTransfer from "@/assets/svc-transfer.jpg";
import svcGrocery from "@/assets/svc-grocery.jpg";
import svcTraining from "@/assets/svc-training.jpg";
import svcRoom from "@/assets/svc-room.jpg";
import svcLaundry from "@/assets/svc-laundry.jpg";
import svcChef from "@/assets/svc-chef.jpg";

const title = "StayWithVantage Platform — Guest Experience Layer for Properties";
const description =
  "StayWithVantage is a hospitality optimisation and guest-experience layer: properties present useful services, information and experiences through the stay.";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PlatformPage,
});

const examples = [
  { label: "Airport transfers", image: svcTransfer },
  { label: "Grocery", image: svcGrocery },
  { label: "Personal training", image: svcTraining },
  { label: "Private Chef", image: svcChef },
  { label: "Room services", image: svcRoom },
  { label: "Laundry", image: svcLaundry },

];

const logic = [
  { step: "01", label: "Guest" },
  { step: "02", label: "Relevant service" },
  { step: "03", label: "Better stay" },
  { step: "04", label: "More opportunity" },
];

function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink px-5 pt-32 pb-20 text-white sm:px-8 sm:pt-40 md:pb-28">
        <div className="mx-auto grid w-full max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="text-[0.68rem] tracking-[0.28em] uppercase text-white/50">
              StayWithVantage Platform
            </p>
            <h1 className="mt-7 text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              A guest-experience layer
              <br />
              for your property.
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/65">
              StayWithVantage is a hospitality optimisation and guest-experience layer. It helps
              properties present useful services, information and experiences through the stay — so
              guests have more useful options, and operators can create more value from each stay.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={pageHero}
              alt="Guest using their phone in a warmly lit premium apartment stay"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What it is */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>What it is</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Infrastructure, not a middleman.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              StayWithVantage is the layer through which services can be presented, requested and
              coordinated during a stay — from airport transfers to a Private Chef. Fulfilment stays with the property, its team, or the
              relevant service provider.
            </p>
            <p>
              Operationally, it keeps relevant guest requests, information and team coordination
              connected in one place — supporting the people already running the property.
            </p>
          </div>
        </div>
      </Section>

      {/* Commercial logic */}
      <Section className="bg-sand">
        <Eyebrow>The commercial logic</Eyebrow>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logic.map((item) => (
            <div key={item.step} className="border-t border-primary/15 pt-5">
              <span className="text-xs tracking-[0.2em] text-muted-foreground">{item.step}</span>
              <p className="mt-3 text-xl leading-snug sm:text-2xl">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Relevant services can create additional opportunities during a stay. Results depend on
          property, location, guest mix and the services offered.
        </p>
      </Section>

      {/* Service examples */}
      <Section>
        <Eyebrow>Examples of services</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
          Examples only — presented where they make sense for your property.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {examples.map((ex) => (
            <figure key={ex.label} className="group relative overflow-hidden rounded-xl">
              <img
                src={ex.image}
                alt={ex.label}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[0.62rem] tracking-[0.18em] uppercase text-white">
                {ex.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-ink px-5 py-24 text-white sm:px-8 md:py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-lg text-3xl leading-tight sm:text-4xl">
            See what could be possible for your property.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-xs tracking-[0.16em] uppercase text-ink transition-colors hover:bg-white/85"
            >
              Talk to us
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
      </section>
    </>
  );
}
