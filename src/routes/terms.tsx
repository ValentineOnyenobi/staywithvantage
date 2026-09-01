import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/site/ui";
const title = "Terms of Service - StayWithVantage";
const description =
  "Terms governing StayWithVantage, Elite Handlers and Elite Property Care services. Effective 01/09/2026.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

type TermsSection = {
  heading: string;
  notice?: { heading: string; text: string };
  paragraphs?: string[];
  bullets?: string[];
  groups?: { heading: string; subheading?: string; bullets?: string[]; paragraphs?: string[] }[];
  contactBlock?: { label: string; value: string }[];
};

const sections: TermsSection[] = [
  {
    heading: "1. About These Terms",
    paragraphs: [
      'These Terms of Service ("Terms") govern the use of StayWithVantage services and, where applicable, services provided through Elite Handlers. By requesting, purchasing or using our services, the client agrees to these Terms together with any quotation, service proposal, booking confirmation or written service agreement applicable to the engagement.',
      "Where there is a conflict, the specific written service agreement or quotation will take precedence over these general Terms.",
    ],
  },
  {
    heading: "2. Our Services",
    paragraphs: ["Our services may include:"],
    groups: [
      { heading: "StayWithVantage", bullets: ["Guest experience services", "Digital guidebooks", "QR codes", "Guest forms", "Guest-service requests", "Operational reporting", "Property-support workflows", "Service coordination", "Related technology and optimisation services"] },
      { heading: "Elite Handlers", subheading: "Specialist Cleaning Services", bullets: ["Housekeeping", "Linen and bedsheet management", "Industrial cleaning", "Related property-care services"] },
      { heading: "Elite Property Care", paragraphs: ["The Elite Property Care package combines applicable StayWithVantage and Elite Handlers services. The exact services included in a client's package will be stated in the relevant quotation or service agreement."] },
    ],
  },
  {
    heading: "3. Service Scope",
    paragraphs: ["We will perform the services reasonably described in the applicable quotation, proposal or service agreement. Services outside the agreed scope may incur additional charges. This includes additional:"],
    bullets: ["Cleaning", "Linen processing", "Deep cleaning", "Laundry", "Ironing", "Restocking", "Emergency attendance", "Additional rooms or units", "Additional service visits", "Special requests", "Guest services", "Materials or specialist equipment"],
    groups: [{ heading: "Scope clarification", paragraphs: ["No additional work is guaranteed to be included simply because it has previously been provided as a goodwill gesture."] }],
  },
  {
    heading: "4. Linen Management & Identification",
    notice: { heading: "Important - Linen Identification", text: "Where we provide linen-management services, the client authorises us to apply a small, discreet identification mark, label, tag or other identification method to a limited and appropriate area of linen where reasonably necessary for:" },
    bullets: ["Identification", "Sorting", "Grouping", "Inventory control", "Property allocation", "Preventing mix-ups", "Tracking linen through the laundering process", "Returning linen to the correct property"],
    paragraphs: ["The identification method will be designed to be as small and unobtrusive as reasonably practicable.", "Unless otherwise agreed, such identification does not affect the intended use of the linen. The client acknowledges that linen requiring professional laundering may be subject to normal washing, drying, ironing and handling processes and that ordinary wear, colour changes, fading, shrinkage, fabric weakening or deterioration may occur depending on the material, age, previous condition and manufacturer's instructions.", "We will not intentionally damage or materially alter linen."],
  },
  {
    heading: "5. Linen Condition and Pre-existing Damage",
    paragraphs: ["We are not responsible for damage that:"],
    bullets: ["Existed before we received the item", "Results from normal wear and tear", "Results from the item's age or previous use", "Results from defective or weak fabric", "Results from manufacturing defects", "Results from unsuitable materials", "Results from previous chemical treatment", "Results from colour bleeding", "Results from stains or substances already present", "Results from incorrect care instructions", "Results from the client's failure to disclose special handling requirements"],
    groups: [{ heading: "Condition checks", paragraphs: ["Where reasonably practicable, we may identify obvious concerns before processing."] }],
  },
  {
    heading: "6. Linen Loss and Misidentification",
    paragraphs: ["We will take reasonable steps to identify and return client linen correctly. However, linen may pass through multiple handling, sorting and washing stages. Clients are responsible for ensuring that linen supplied to us is appropriately identifiable or is enrolled in our identification system where required. Where linen is mixed with third-party linen or supplied without adequate identification, we cannot guarantee individual-item attribution."],
  },
  {
    heading: "7. Property Access",
    paragraphs: ["The client must provide us with reasonable access to the property at the agreed time. This may include:"],
    bullets: ["Keys", "Access codes", "Security instructions", "Parking/access information", "Relevant property instructions"],
    groups: [{ heading: "Access responsibility", paragraphs: ["The client remains responsible for ensuring that access information supplied to us is accurate and current. We are not responsible for delays caused by inability to access the property where access was the client's responsibility."] }],
  },
  {
    heading: "8. Property Condition",
    paragraphs: ["The client must provide a safe working environment. We may refuse, suspend or modify a service where conditions create a serious health, safety, security or legal risk. This may include:"],
    bullets: ["Dangerous electrical conditions", "Hazardous substances", "Structural hazards", "Aggressive or threatening behaviour", "Unsafe animals", "Severe infestation", "Biohazards", "Unreasonable working conditions", "Other circumstances presenting a serious risk"],
    groups: [{ heading: "Specialist requirements", paragraphs: ["Additional charges may apply where specialist treatment or additional attendance is required."] }],
  },
  {
    heading: "9. Valuables and Personal Property",
    paragraphs: ["Clients and guests should secure cash, jewellery, electronics, documents, medication and other valuables before service begins. We are not responsible for loss or damage to valuables left unsecured at the property except to the extent liability cannot lawfully be excluded. Our personnel are not authorised to remove, retain or use client property except where necessary to perform the agreed service."],
  },
  { heading: "10. Photographs and Service Records", paragraphs: ["Where reasonably necessary for service delivery, quality control, reporting, damage documentation, maintenance reporting or dispute resolution, we may take photographs or other records of the property or service area. Such records will be handled in accordance with our Privacy Policy and applicable data-protection law. We will avoid photographing people where this is unnecessary."] },
  { heading: "11. Service Standards", paragraphs: ["We will use reasonable care and skill in delivering the agreed services. However, cleaning and property-care outcomes may depend on:"], bullets: ["Existing property condition", "Age and condition of surfaces", "Stains", "Materials", "Previous cleaning", "Equipment", "Access", "Client instructions", "Time allocated to the service", "Environmental conditions"], groups: [{ heading: "Outcomes", paragraphs: ["We do not guarantee that every stain, odour, mark or defect can be removed."] }] },
  { heading: "12. Client Responsibilities", paragraphs: ["The client must:"], bullets: ["Provide accurate information", "Provide reasonable property access", "Disclose relevant hazards", "Identify special requirements", "Ensure utilities required for the service are available", "Ensure the property is reasonably accessible", "Pay invoices on time", "Provide accurate linen/property information", "Notify us of concerns promptly"] },
  { heading: "13. Guest Services", paragraphs: ["StayWithVantage may enable or facilitate access to third-party guest services such as:"], bullets: ["Airport transfers", "Grocery services", "Private chefs", "Personal trainers", "Laundry", "Other hospitality services"], groups: [{ heading: "Independent providers", paragraphs: ["Unless expressly stated otherwise, third-party services are supplied by independent providers. StayWithVantage may facilitate the connection, communication, request or coordination but does not automatically become the provider of every third-party service. Third-party pricing, availability, quality and performance may be outside our control."] }] },
  { heading: "14. Payments", paragraphs: ["Prices are stated in the applicable quotation, proposal, booking confirmation or service agreement. Unless otherwise agreed:"], bullets: ["Invoices are payable by the stated due date", "Additional services may be charged separately", "Materials or specialist services may be charged separately where agreed", "We may suspend services for materially overdue accounts after reasonable notice"] },
  { heading: "15. Cancellations and Changes", paragraphs: ["Cancellation and rescheduling terms may be specified in the client's service agreement or quotation. Where a cancellation occurs after staff, equipment or materials have been committed, reasonable cancellation or mobilisation charges may apply."] },
  { heading: "16. Complaints and Service Issues", paragraphs: ["Clients should notify us promptly if they believe a service has not been delivered according to the agreed scope. Where appropriate, we may inspect the relevant area and provide a reasonable opportunity to correct an identified service issue. This does not create an obligation to provide unlimited repeat services or work outside the agreed scope."] },
  { heading: "17. Our Liability", paragraphs: ["Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited.", "Subject to that, we will not be liable for indirect, consequential or special losses, loss of business, loss of anticipated revenue, loss of opportunity, loss of reputation or similar indirect losses arising from the services, except where such exclusion is prohibited by law.", "For business clients, our total liability arising from a particular service engagement should, where legally permissible, be limited to an agreed amount stated in the applicable service agreement.", "Recommended commercial position: use a specific liability cap in your B2B contracts rather than relying only on these website Terms."] },
  { heading: "18. No Guarantee of Revenue", paragraphs: ["StayWithVantage may provide systems, guest-service opportunities and tools intended to help properties improve guest experience and create additional revenue opportunities. However, we do not guarantee any particular level of revenue, bookings, occupancy, guest spending or financial performance. Actual results depend on the property, pricing, demand, guest behaviour, service availability and other factors outside our control. This clause is particularly important given StayWithVantage's revenue-optimisation proposition."] },
  { heading: "19. Force Majeure", paragraphs: ["We will not be responsible for delay or failure caused by circumstances reasonably outside our control, including:"], bullets: ["Severe weather", "Flooding", "Fire", "Power or telecommunications failure", "Government action", "Civil unrest", "Strikes", "Epidemics or pandemics", "Transport disruption", "Third-party platform failures", "Other events beyond reasonable control"] },
  { heading: "20. Intellectual Property", paragraphs: ["All StayWithVantage branding, website content, software concepts, designs, workflows, documentation, graphics, systems and other intellectual property owned or licensed by us remain our property unless expressly agreed otherwise. Clients receive only the rights necessary to use the services during the applicable engagement. Clients must not copy, reproduce, reverse engineer, resell or commercially exploit our proprietary materials without written permission."] },
  { heading: "21. Confidentiality", paragraphs: ["Each party should keep confidential information received from the other party confidential and use it only for the purposes of the relationship, subject to information that is already public, independently developed or required to be disclosed by law."] },
  { heading: "22. Staff and Personnel", paragraphs: ["Clients must not directly employ, solicit or engage our personnel outside the agreed service arrangement without our written consent. Where appropriate, a separate non-solicitation or staff-poaching provision should be included in the commercial service agreement."] },
  { heading: "23. Suspension or Termination", paragraphs: ["We may suspend or terminate services where:"], bullets: ["Payment remains materially overdue", "The client repeatedly breaches the agreement", "Staff safety is compromised", "The property presents an unacceptable risk", "The client engages in abusive or threatening behaviour", "Continuing the service would be unlawful", "The relationship has otherwise become commercially or operationally unreasonable"], groups: [{ heading: "Client termination", paragraphs: ["Clients may terminate according to the notice provisions of their service agreement."] }] },
  { heading: "24. Changes to Services", paragraphs: ["We may reasonably modify our service processes, technology or operational procedures provided that the essential contracted service is not materially reduced without appropriate notice."] },
  { heading: "25. Website and Platform Availability", paragraphs: ["We aim to keep the StayWithVantage website and platform available and functional. However, we do not guarantee uninterrupted availability. Temporary interruptions may occur because of maintenance, technical problems, hosting providers, telecommunications providers, third-party integrations or circumstances outside our control."] },
  { heading: "26. Governing Law", paragraphs: ["These Terms are governed by the laws of Nigeria, subject to any mandatory consumer-protection or other legal rights that cannot lawfully be excluded. Disputes should first be addressed through good-faith discussion before formal proceedings are commenced, where legally appropriate."] },
  { heading: "27. Contact", contactBlock: [{ label: "Company", value: "Freetown Consultancy Services Ltd" }, { label: "Registered Address", value: "Prime Mall, Oba Akinloye Dr, Lekki" }, { label: "Email", value: "bookings@staywithvantage.com" }, { label: "Telephone/WhatsApp", value: "+234 803 175 5479" }] },
];

function TermsPage() {
  return (
    <Section className="pt-32 sm:pt-40">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-5xl">Terms of Service</h1>
      <div className="mt-6 max-w-xl space-y-1 text-sm text-muted-foreground">
        <p>StayWithVantage &amp; Elite Handlers</p>
        <p>Effective Date: 01/09/2026</p>
        <p>Last Updated: 01/09/2026</p>
      </div>
      <div className="mt-14 max-w-2xl space-y-10">
        {sections.map((s) => (
          <article key={s.heading} className="border-t border-border pt-6">
            <h2 className="text-xl">{s.heading}</h2>
            <div className="mt-3 space-y-3">
              {s.notice && <div className="border-l-2 border-primary pl-4"><h3 className="text-sm font-medium uppercase text-foreground">{s.notice.heading}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{s.notice.text}</p></div>}
              {s.paragraphs?.map((paragraph) => <p key={paragraph} className="leading-relaxed text-muted-foreground">{paragraph}</p>)}
              {s.bullets && <ul className="space-y-1.5 pl-5">{s.bullets.map((bullet) => <li key={bullet} className="list-disc leading-relaxed text-muted-foreground marker:text-muted-foreground">{bullet}</li>)}</ul>}
              {s.groups?.map((group) => (
                <div key={group.heading} className="pt-2">
                  <h3 className="text-base font-medium text-foreground">{group.heading}</h3>
                  {group.subheading && <p className="mt-1 text-sm font-medium uppercase text-muted-foreground">{group.subheading}</p>}
                  {group.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-2 leading-relaxed text-muted-foreground">{paragraph}</p>)}
                  {group.bullets && <ul className="mt-2 space-y-1.5 pl-5">{group.bullets.map((bullet) => <li key={bullet} className="list-disc leading-relaxed text-muted-foreground marker:text-muted-foreground">{bullet}</li>)}</ul>}
                </div>
              ))}
              {s.contactBlock && <dl className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-[auto_1fr]">{s.contactBlock.map((item) => <div key={item.label} className="contents"><dt className="text-sm font-medium text-foreground">{item.label}</dt><dd className="text-sm text-muted-foreground">{item.value}</dd></div>)}</dl>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
