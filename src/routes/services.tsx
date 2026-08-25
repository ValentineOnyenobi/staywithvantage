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
      <section className="border-b border-border bg-sand px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-4 max-w-2xl text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
              One company.
              <br />
              Two ways we help.
            </h1>
          </div>
          <p className="max-w-sm text-muted-foreground md:pb-2">
            People on the ground keeping the property ready, and a guest-experience layer around the
            stay.
          </p>
        </div>
      </section>
      <HandlersDetail />

      <PlatformTeaser />
      <ElitePackageTeaser />
    </>
  );
}
