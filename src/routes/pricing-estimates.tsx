import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, LinkButton, Section } from "@/components/site/ui";
import { Estimator } from "@/components/site/Estimator";

const title = "Pricing Estimates — Elite Handlers Monthly Subscription";
const description =
  "Estimate your Elite Handlers monthly subscription: housekeeping frequency, optional linen management and combined property care — indicative pricing before a property assessment.";

export const Route = createFileRoute("/pricing-estimates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PricingEstimatesPage,
});

function PricingEstimatesPage() {
  return (
    <>
      <Section className="pt-32 sm:pt-40">
        <Eyebrow>Pricing Estimates</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
          Elite Handlers, on a monthly subscription.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Elite Handlers is a monthly service subscription — a consistent team, a consistent
          standard. Use the estimator below to see an indicative monthly figure for your property.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton to="/contact">Request a Quote</LinkButton>
          <LinkButton to="/services" variant="outline">
            Back to Services
          </LinkButton>
        </div>
      </Section>
      <Estimator />
    </>
  );
}
