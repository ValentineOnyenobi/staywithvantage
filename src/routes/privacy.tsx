import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/site/ui";

const title = "Privacy Policy - StayWithVantage";
const description =
  "How StayWithVantage collects, uses and protects information from property operators, their teams and their guests. Effective 01/09/2026.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  contactBlock?: { label: string; value: string }[];
};

const sections: Section[] = [
  {
    heading: "1. Who We Are",
    paragraphs: [
      'StayWithVantage ("StayWithVantage", "we", "us" or "our") provides hospitality upgrade, guest-experience and property-support services.',
      "Our services may include digital guest guides, QR codes, guest forms, guest-service requests, reporting, operational coordination and related services.",
      "Where physical property services are provided, these may be delivered through Elite Handlers, our specialist cleaning-services operation.",
    ],
    contactBlock: [
      { label: "Company", value: "Freetown Consultancy Services Ltd" },
      { label: "Registered Address", value: "Prime Mall, Oba Akinloye Dr, Lekki" },
      { label: "Email", value: "Privacy@staywithvantage.com" },
      { label: "Telephone/WhatsApp", value: "+234 803 175 5479" },
    ],
  },
  {
    heading: "2. Information We Collect",
    paragraphs: ["Depending on how you interact with us, we may collect:"],
    bullets: [
      "Name and contact details",
      "Email address",
      "Telephone/WhatsApp number",
      "Property information",
      "Booking or reservation information",
      "Check-in/check-out information",
      "Guest requests and preferences",
      "Service requests",
      "Maintenance or property reports",
      "Housekeeping and linen information",
      "Information submitted through forms or QR codes",
      "Communications with our team",
      "Photographs or records relating to property condition where necessary for service delivery",
      "Website usage information, including technical information and cookies",
    ],
  },
  {
    heading: "3. How We Use Information",
    paragraphs: ["We may use information to:"],
    bullets: [
      "Provide requested services",
      "Coordinate guest requests",
      "Provide guest-experience services",
      "Communicate with guests, clients and property teams",
      "Arrange housekeeping, linen or other property services",
      "Record service completion",
      "Identify and report property issues",
      "Coordinate maintenance or restocking requests",
      "Improve our services",
      "Administer client relationships",
      "Process payments and invoices",
      "Respond to enquiries",
      "Maintain security and prevent misuse",
      "Comply with legal and regulatory obligations",
    ],
  },
  {
    heading: "4. Guest-Service Information",
    paragraphs: [
      "Where a guest submits a request through a StayWithVantage QR code, form, guidebook or other interface, the information may be shared with the appropriate property representative, service provider or member of the operational team required to respond to the request.",
      "For example, a maintenance request may be shared with the property's maintenance team.",
      "We do not guarantee that every service requested through the platform will be available or fulfilled by StayWithVantage itself.",
    ],
  },
  {
    heading: "5. Service Providers and Third Parties",
    paragraphs: ["We may use trusted third-party providers to support our operations, including:"],
    bullets: [
      "Hosting and technology providers",
      "Communication providers",
      "Form and workflow providers",
      "Payment providers",
      "Cloud storage providers",
      "Analytics providers",
      "Operational partners",
      "Cleaning, laundry or specialist service providers",
    ],
  },
  {
    heading: "6. Client and Property Data",
    paragraphs: [
      "Where StayWithVantage provides services to a property owner, operator or property manager, the client may determine how certain guest information is collected and used.",
      "Depending on the service and circumstances, StayWithVantage may act as a data controller, joint controller or processor.",
      "Where we process personal data on behalf of a client, our processing will be governed by the applicable client agreement and, where appropriate, a separate data-processing agreement.",
    ],
  },
  {
    heading: "7. Data Security",
    paragraphs: [
      "We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
      "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    heading: "8. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including contractual, operational, accounting, legal and dispute-resolution requirements.",
      "Different categories of information may therefore be retained for different periods.",
    ],
  },
  {
    heading: "9. Your Rights",
    paragraphs: ["Depending on applicable law, you may have rights including:"],
    bullets: [
      "Access to your personal information",
      "Correction of inaccurate information",
      "Deletion of information in certain circumstances",
      "Restriction of processing",
      "Objection to certain processing",
      "Withdrawal of consent where consent is the lawful basis",
      "Other applicable data-protection rights",
    ],
  },
  {
    heading: "10. Marketing",
    paragraphs: [
      "Where required, we will obtain appropriate consent before sending direct marketing communications.",
      "You may unsubscribe from marketing communications at any time.",
    ],
  },
  {
    heading: "11. Cookies",
    paragraphs: [
      "Our website may use cookies and similar technologies for necessary website functionality, security, analytics and, where applicable, other purposes.",
      "Where consent is required for non-essential cookies, we will provide an appropriate mechanism to manage your preferences.",
    ],
  },
  {
    heading: "12. International Transfers",
    paragraphs: [
      "Some technology and service providers may process information outside Nigeria or the country in which you are located.",
      "Where applicable, we will use appropriate safeguards required by applicable data-protection law.",
    ],
  },
  {
    heading: "13. Children's Information",
    paragraphs: [
      "Our services are primarily intended for adults and property operators.",
      "We do not knowingly seek to collect children's personal information except where it is necessary in connection with a legitimate hospitality service and handled in accordance with applicable law.",
    ],
  },
  {
    heading: "14. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time.",
      "The updated version will be published on our website with a revised effective or update date.",
    ],
  },
  {
    heading: "15. Complaints and Contact",
    paragraphs: [
      "If you have concerns about how we handle your personal information, please contact us first at:",
    ],
    contactBlock: [{ label: "Email", value: "Privacy@staywithvantage.com" }],
  },
];

function PrivacyPage() {
  return (
    <Section className="pt-32 sm:pt-40">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-5xl">Privacy Policy</h1>
      <div className="mt-6 max-w-xl space-y-1 text-sm text-muted-foreground">
        <p>StayWithVantage</p>
        <p>Effective Date: 01/09/2026</p>
        <p>Last Updated: 01/09/2026</p>
      </div>
      <div className="mt-14 max-w-2xl space-y-10">
        {sections.map((s) => (
          <article key={s.heading} className="border-t border-border pt-6">
            <h2 className="text-xl">{s.heading}</h2>
            <div className="mt-3 space-y-3">
              {s.paragraphs?.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-2 space-y-1.5 pl-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative leading-relaxed text-muted-foreground marker:text-muted-foreground list-disc"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.contactBlock && (
                <dl className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-[auto_1fr]">
                  {s.contactBlock.map((c) => (
                    <div key={c.label} className="contents">
                      <dt className="text-sm font-medium text-foreground">{c.label}</dt>
                      <dd className="text-sm text-muted-foreground">{c.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
