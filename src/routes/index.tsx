import { createFileRoute } from "@tanstack/react-router";
import { FinalCTA, Hero, WhatWeDo } from "@/components/site/Sections";
import { HowItWorks } from "@/components/site/HowItWorksFlow";

const title = "StayWithVantage - Make your property easier to run";
const description =
  "In-house housekeeping, linen and industrial cleaning by Elite Handlers, plus guest experience, QR guidebooks and reporting from the StayWithVantage Platform.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
