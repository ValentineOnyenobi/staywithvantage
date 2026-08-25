// ---------------------------------------------------------------------------
// All editable site content lives here. Swap text, images and links freely.
// ---------------------------------------------------------------------------
import heroSuite from "@/assets/hero-suite.jpg";
import housekeepingTeam from "@/assets/housekeeping-team.jpg";
import platformQr from "@/assets/platform-qr.jpg";
import linen from "@/assets/linen.jpg";
import industrial from "@/assets/industrial.jpg";
import ctaProperty from "@/assets/cta-property.jpg";
import statement from "@/assets/statement.jpg";
import housekeepingDetail from "@/assets/housekeeping-detail.jpg";
import audHotels from "@/assets/aud-hotels.jpg";
import audServicedApartments from "@/assets/aud-serviced-apartments.jpg";
import audShortLets from "@/assets/aud-short-lets.jpg";
import audPropertyManagers from "@/assets/aud-property-managers.jpg";
import audCorporate from "@/assets/aud-corporate.jpg";
import audCommercial from "@/assets/aud-commercial.jpg";
import audIndustrial from "@/assets/aud-industrial.jpg";
import flowGuest from "@/assets/flow-01-guest.jpg";
import flowCapture from "@/assets/flow-02-capture.jpg";
import flowRoute from "@/assets/flow-03-route.jpg";
import flowTrack from "@/assets/flow-04-track.jpg";
import flowVisibility from "@/assets/flow-05-visibility.jpg";

export const images = {
  hero: heroSuite,
  housekeepingTeam,
  platformQr,
  linen,
  industrial,
  ctaProperty,
  statement,
  housekeepingDetail,
};

// PLACEHOLDER — replace with the real WhatsApp business number (digits only).
export const contact = {
  whatsappNumber: "10000000000",
  whatsappMessage: "Hi StayWithVantage, I'd like to know more about your services.",
  email: "hello@staywithvantage.com",
  phone: "+234 814 325 9383",
  instagram: "https://instagram.com/staywithvantage",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Elite Package", to: "/elite-package" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerSecondaryLinks = [
  { label: "Platform", to: "/platform" },
  { label: "Pricing Estimates", to: "/pricing-estimates" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];



export const serviceLines = [
  {
    id: "handlers",
    eyebrow: "Elite Handlers",
    tags: ["Housekeeping", "Linen", "Industrial"],
    line: "People on the ground, keeping your property ready.",
    image: images.housekeepingTeam,
    exploreId: "handlers",
  },
  {
    id: "platform",
    eyebrow: "StayWithVantage Platform",
    tags: ["Guest Experience", "QR & Guidebooks", "Reporting"],
    line: "The systems that keep everyone coordinated.",
    image: images.platformQr,
    exploreId: "platform",
  },
];

export const howItWorks = [
  {
    step: "01",
    stage: "Guest",
    title: "Guest scans a QR",
    titleLine2: "or submits a form",
    copy: "From the room, the lobby or a link.",
    image: flowGuest,
    alt: "Guest scanning a QR code card with a phone in a premium serviced apartment",
  },
  {
    step: "02",
    stage: "Capture",
    title: "StayWithVantage captures it",
    copy: "Every request logged in one place.",
    image: flowCapture,
    alt: "Mobile request screen showing an air conditioner fault in Room 203 tagged Maintenance",
  },
  {
    step: "03",
    stage: "Route",
    title: "Routed to the right person",
    copy: "On your own team, by request type.",
    image: flowRoute,
    alt: "Operations screen routing a request to Maintenance, Housekeeping or Management",
  },
  {
    step: "04",
    stage: "Track",
    title: "Status tracked",
    copy: "Know where every request stands.",
    image: flowTrack,
    alt: "Mobile status timeline showing Received, In Progress and Resolved",
  },
  {
    step: "05",
    stage: "Visibility",
    title: "Manager has visibility",
    copy: "Live view and reporting across the property.",
    image: flowVisibility,
    alt: "Laptop dashboard listing property requests with their current statuses",
  },
];

export const handlerServices = [
  {
    title: "Housekeeping",
    copy: "Property care, not just cleaning — we observe and report condition, not only tidy it.",
    image: images.housekeepingDetail,
  },
  {
    title: "Linen & Bedsheets Management",
    copy: "Collect, wash, dry, iron, rotate.",
    image: images.linen,
  },
  {
    title: "Industrial Cleaning",
    copy: "Commercial, warehouse, factory, facility — contract-based.",
    image: images.industrial,
  },
];

export const platformFeatures = [
  { title: "Guest Guidebook", copy: "Everything about the stay, on the guest's phone.", icon: "book" },
  { title: "QR Codes", copy: "One scan into forms, guides and requests.", icon: "qr" },
  { title: "Guest Forms", copy: "Requests and issues captured in structured detail.", icon: "form" },
  { title: "Maintenance Reports", copy: "Faults logged, routed and tracked to resolution.", icon: "wrench" },
  { title: "Restocking Reports", copy: "Know what ran out before the guest does.", icon: "box" },
  { title: "Housekeeping Reports", copy: "Room condition recorded on every service.", icon: "sparkle" },
  { title: "Team Workflows", copy: "Clear ownership and status for your own staff.", icon: "flow" },
];

export const propertyCareCards = [
  { title: "Housekeeping", image: images.housekeepingTeam },
  { title: "Linen", image: images.linen },
  { title: "Guest Experience", image: images.platformQr },
  { title: "Reporting", image: images.housekeepingDetail },
  { title: "Team Coordination", image: images.statement },
];

export const reassurances = [
  "We do not acquire guests for you.",
  "We do not set your pricing.",
  "We do not manage your revenue.",
  "We do not replace your team.",
];

export const trustPoints = [
  { title: "Vetted & trained staff", copy: "Screened, inducted and supervised." },
  { title: "Consistent reporting", copy: "The same standard of record, every visit." },
  { title: "Insurance & bonding", copy: "Placeholder — cover details to be added." },
];

export const testimonials = [
  {
    quote: "Our turnovers stopped being a daily negotiation. Everything is logged and visible.",
    name: "Operations Manager",
    org: "Serviced apartments",
  },
  {
    quote: "The reporting alone changed how we plan maintenance across the building.",
    name: "General Manager",
    org: "Boutique hotel",
  },
  {
    quote: "Our own team still runs the property — they just finally have a system.",
    name: "Portfolio Manager",
    org: "Short-let operator",
  },
];

export const audiences = [
  { label: "Hotels", image: audHotels, alt: "Boutique hotel lobby at dusk" },
  { label: "Serviced Apartments", image: audServicedApartments, alt: "Serviced apartment living space in warm daylight" },
  { label: "Short-Lets", image: audShortLets, alt: "Short-let bedroom with fresh linen and keys" },
  { label: "Property Managers", image: audPropertyManagers, alt: "Property management desk with floorplans and keys" },
  { label: "Corporate Accommodation", image: audCorporate, alt: "Corporate long-stay apartment with desk and city view" },
  { label: "Commercial", image: audCommercial, alt: "Commercial office lobby with stone and glass" },
  { label: "Industrial", image: audIndustrial, alt: "Clean industrial warehouse interior" },
];


export const interestOptions = ["Elite Handlers", "Platform", "Elite Property Care"];
