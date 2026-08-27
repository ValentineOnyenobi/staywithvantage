import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/site/ui";
import { contact } from "@/content/site";

const title = "Privacy Policy - StayWithVantage";
const description =
  "How StayWithVantage collects, uses and protects information from property operators, their teams and their guests.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "1. Scope",
    body: "This policy explains how StayWithVantage handles information collected through this website, through enquiries, and through the StayWithVantage Platform when deployed at a property.",
  },
  {
    heading: "2. Information we collect",
    body: "Enquiry details you submit (name, property, email, phone and message); operational records created during service delivery (visit reports, maintenance and restocking logs); and guest request details submitted through QR codes or forms, limited to what is needed to fulfil the request.",
  },
  {
    heading: "3. How we use information",
    body: "To respond to enquiries and prepare quotes, to schedule and deliver property services, to route and track requests to the correct team, and to produce reporting for the property operator. We do not sell personal information.",
  },
  {
    heading: "4. Guest information",
    body: "Guest data captured through the Platform belongs to the property operator. StayWithVantage processes it on the operator's behalf, only for the purposes of coordinating and reporting on requests.",
  },
  {
    heading: "5. Sharing",
    body: "Information may be shared with our vetted service personnel, with the property operator's nominated team members, and with infrastructure providers who host the Platform under confidentiality obligations. We may disclose information where legally required.",
  },
  {
    heading: "6. Retention",
    body: "Enquiry records are retained while a commercial relationship is reasonably possible. Operational and guest request records are retained for the period agreed with the property operator, then deleted or anonymised.",
  },
  {
    heading: "7. Security",
    body: "We use access controls, encryption in transit and staff confidentiality obligations to protect information. No system is entirely without risk, so we also limit what we collect.",
  },
  {
    heading: "8. Your rights",
    body: "You may request access to, correction of, or deletion of personal information we hold about you, and you may withdraw consent to marketing communication at any time.",
  },
  {
    heading: "9. Contact",
    body: `Privacy requests can be sent to ${contact.email}.`,
  },
];

function PrivacyPage() {
  return (
    <Section className="pt-32 sm:pt-40">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-5xl">Privacy Policy</h1>
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
