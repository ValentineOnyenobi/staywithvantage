import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Enquiry } from "@/components/site/EnquiryForm";
import {
  Audiences,
  FinalCTA,
  HandlersDetail,
  Hero,
  HowItWorks,
  PlatformDetail,
  PropertyCare,
  Statement,
  Trust,
  WhatWeDo,
} from "@/components/site/Sections";

const title = "StayWithVantage — Make your property easier to run";
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
    <div className="bg-background">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <HandlersDetail />
        <PlatformDetail />
        <PropertyCare />
        <Statement />
        <Trust />
        <Audiences />
        <FinalCTA />
        <Enquiry />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
