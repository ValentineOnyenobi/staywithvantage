import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/site/ui";
import { contact } from "@/content/site";

const title = "Terms of Service — StayWithVantage";
const description =
  "The terms that govern use of the StayWithVantage website, Elite Handlers property services and the StayWithVantage Platform.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "1. About these terms",
    body: "These Terms of Service govern your use of the StayWithVantage website and any enquiry you submit through it. Service delivery — including Elite Handlers property care and access to the StayWithVantage Platform — is governed by the individual service agreement signed with your property.",
  },
  {
    heading: "2. Our services",
    body: "StayWithVantage provides in-house property care (housekeeping, linen management and industrial cleaning) and an operational platform for guest experience, request capture and reporting. We do not acquire guests, set pricing, manage revenue or replace your team.",
  },
  {
    heading: "3. Quotes and estimates",
    body: "Any figure produced by the pricing estimator on this website is indicative only and is not an offer or a binding quote. Final pricing is confirmed in writing after a property assessment. Larger properties, industrial cleaning contracts and Platform deployment are quoted separately.",
  },
  {
    heading: "4. Subscriptions and cancellation",
    body: "Elite Handlers is delivered as a monthly subscription. Billing frequency, service schedule, pause and cancellation notice periods are set out in your service agreement. Where no agreement is in place, no service commitment exists.",
  },
  {
    heading: "5. Client responsibilities",
    body: "You agree to provide safe and lawful access to the property, accurate information about its condition, and a named point of contact for scheduling. Access that cannot be provided as scheduled may result in a missed visit.",
  },
  {
    heading: "6. Platform use",
    body: "Where the StayWithVantage Platform is provided, you agree to use it only for legitimate property operations, to keep account credentials secure, and not to attempt to access data belonging to other properties.",
  },
  {
    heading: "7. Liability",
    body: "We take reasonable care in delivering our services. To the extent permitted by law, our liability in relation to any service is limited to the fees paid for the affected service period. Nothing here limits liability that cannot lawfully be limited.",
  },
  {
    heading: "8. Changes",
    body: "We may update these terms from time to time. Material changes affecting an active service agreement will be communicated to your named contact before they take effect.",
  },
  {
    heading: "9. Contact",
    body: `Questions about these terms can be sent to ${contact.email}.`,
  },
];

function TermsPage() {
  return (
    <Section className="pt-32 sm:pt-40">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-5xl">Terms of Service</h1>
      <p className="mt-6 max-w-xl text-sm text-muted-foreground">
        Placeholder legal copy — to be reviewed by counsel before publication.
      </p>
      <div className="mt-14 max-w-2xl space-y-10">
        {sections.map((s) => (
          <article key={s.heading} className="border-t border-border pt-6">
            <h2 className="text-xl">{s.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
