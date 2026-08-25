import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/ui";
import { HandlersDetail } from "@/components/site/Sections";
import { PlatformTeaser } from "@/components/site/PlatformTeaser";
import { ElitePackageTeaser } from "@/components/site/ElitePackageTeaser";

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
      <section className="border-b border-border bg-sand px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="mx-auto w-full max-w-6xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            One company.
            <br />
            Two ways we help.
          </h1>
          <div className="mt-8 h-px w-24 bg-primary/25 sm:mt-10 sm:w-32" />
        </div>
      </section>

      <HandlersDetail />

      <PlatformTeaser />
      <ElitePackageTeaser />
    </>
  );
}
