# Property Harmony

Build a premium, mobile-first marketing website for StayWithVantage, a property-services company. Create a single scrolling homepage with smooth section navigation, structured so sections can later become standalone pages.

Brand/tone: premium, visual-first (about 80% imagery / 20% text), confident, uncluttered boutique hospitality-operations feel. Avoid generic cleaning-company styling, stock-cleaning clichés, clip-art icons, and corporate-blue checkmarks. Use warm neutral palette, generous whitespace, elegant realistic placeholder photography (interiors, linens, housekeeping team working, phone showing QR) that is easy to swap later. Clean editorial sans-serif font pairing, not default system fonts.

Core message: “Make your property easier to run.”

ONE company with TWO in-house service lines, not separate brands:
- Elite Handlers: physical service, Housekeeping, Linen & Bedsheets Management, Industrial Cleaning.
- StayWithVantage Platform: digital layer, guest experience, digital guidebooks, QR codes, guest forms, reporting, staff workflow coordination.
When shown together call it “Elite Property Care”, a combined proposition, not a third brand.

Required sections:
1. Sticky top nav: Home / Elite Handlers / Platform / Elite Property Care / About / Contact. Prominent Get Started button scrolls to enquiry. Mobile nav must work well.
2. Hero: full-bleed property image/video-style background; headline “Make your property easier to run.”; subline “Property Care · Guest Experience · Operational Systems.” Primary CTA Get Started to enquiry; secondary See how it works.
3. What we do: visual split, desktop side by side and mobile stacked. Elite Handlers tags Housekeeping · Linen · Industrial, line “People on the ground, keeping your property ready.” Platform tags Guest Experience · QR & Guidebooks · Reporting, line “The systems that keep everyone coordinated.” Each Explore link goes to detail section.
4. How it works: horizontal desktop / vertical mobile flow: Guest scans QR / submits form → StayWithVantage captures it → Routed to the right person on the client’s own team → Status tracked (Received → In Progress → Resolved) → Manager has visibility. State clearly StayWithVantage coordinates information; client team or StayWithVantage Property Care team performs work.
5. Elite Handlers detail: cards for Housekeeping (“Property care, not just cleaning — we observe and report condition, not only tidy it”), Linen (“Collect, wash, dry, iron, rotate”), Industrial (“Commercial, warehouse, factory, facility — contract-based”).
6. Platform detail: visual card grid for Guest Guidebook, QR Codes, Guest Forms, Maintenance Reports, Restocking Reports, Housekeeping Reports, Team Workflows. Include small refined icon/illustration and concise one-line description per card.
7. Elite Property Care: major, visually distinct section with heading “Elite Property Care.” and line “One property. One coordinated operation.” Five visual cards: Housekeeping, Linen, Guest Experience, Reporting, Team Coordination. CTA Get a Quote.
8. Large visual statement section: “You run the property. We make it easier.” Supporting line “Keep your people. Keep your management. Keep your business. We provide the services and systems that support your operation.” Include a concise reassurance list: does not acquire guests, set pricing, manage revenue, or replace your team.
9. Trust section: vetted & trained staff, consistent reporting, insurance/bonding placeholder, plus 2–3 testimonial cards clearly marked Sample content — replace later.
10. Who it’s for: visual tile grid for Hotels, Serviced Apartments, Short-Lets, Property Managers, Corporate Accommodation, Commercial, Industrial.
11. Final CTA: full-width property image, “Ready to make it easier?” and Get Started.
12. Enquiry: promote WhatsApp placeholder as fastest route then simple form: Name, Property type, Property size/bedrooms, Interested in dropdown (Elite Handlers / Platform / Elite Property Care), Message. Implement appropriate front-end interaction/success state without needing a backend.
13. Persistent floating WhatsApp bottom-right across all sections, placeholder WhatsApp number easy to swap.
14. Footer: nav links, single StayWithVantage Instagram/social placeholder, email/phone placeholders, copyright, Client Login placeholder link. Do not implement login.

Technical/content requirements: fully responsive, mobile-first, smooth scroll from all nav/hero CTAs, no pricing anywhere, commercial sections end with Get Started or Request a Quote rather than prices. Keep copy short and content/image/link data easy to edit, avoid overly deeply nested custom components. Explicitly out of scope: booking, payments, client login/dashboard, price calculator; include clean placeholders only where requested.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://staywithvantage.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/48eb48a9-3fe4-4c48-96d1-3e8b215abdc9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
