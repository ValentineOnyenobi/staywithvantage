import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, LinkButton, Section } from "@/components/site/ui";
import { HandlersDetail, PlatformDetail, PropertyCareSummary } from "@/components/site/Sections";

const title = "Services — Elite Handlers & StayWithVantage Platform";
const description =
  "One company, two in-house service lines: Elite Handlers for housekeeping, linen and industrial cleaning, and the StayWithVantage Platform for guest experience and reporting.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="pt-32 sm:pt-40">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
          One company. Two ways we help.
        </h1>
        <div className="mt-9">
          <LinkButton to="/contact">Get Started</LinkButton>
        </div>
      </Section>
      <HandlersDetail />
      <PlatformDetail />
      <PropertyCareSummary />
    </>
  );
}
