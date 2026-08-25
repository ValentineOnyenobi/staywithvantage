import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { contact, interestOptions, whatsappHref } from "@/content/site";
import { Eyebrow, Section } from "./ui";

const field =
  "w-full rounded-none border-0 border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

export function Enquiry() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="enquiry" className="bg-secondary/60">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl">Let's make it easier.</h2>
          <p className="mt-4 max-w-sm text-muted-foreground">
            WhatsApp is the fastest route to a real answer — usually the same day.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-ink"
          >
            <MessageCircle className="size-4" /> Message us on WhatsApp
          </a>
          <p className="mt-8 text-sm text-muted-foreground">
            Or email{" "}
            <a href={`mailto:${contact.email}`} className="text-foreground underline">
              {contact.email}
            </a>
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col justify-center rounded-sm border border-border bg-card p-8">
            <h3 className="text-2xl">Thank you — enquiry received.</h3>
            <p className="mt-3 text-muted-foreground">
              We'll be in touch shortly. For anything urgent, WhatsApp is fastest.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 self-start text-sm underline"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required name="name" placeholder="Name" className={field} />
            <input required name="propertyType" placeholder="Property type" className={field} />
            <input name="size" placeholder="Property size / bedrooms" className={field} />
            <select required name="interest" defaultValue="" className={field}>
              <option value="" disabled>
                Interested in…
              </option>
              {interestOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <textarea name="message" rows={3} placeholder="Message" className={field} />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-ink sm:w-auto sm:px-10"
            >
              Send enquiry
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
