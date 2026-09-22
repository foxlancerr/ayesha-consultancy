import * as React from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { siteConfig } from "@/lib/site";
import { buildPhoneHref, buildMailtoHref, buildWhatsAppUrl, buildGeneralMessage } from "@/lib/whatsapp";

/**
 * ContactCard — structured contact channels block. Shown on the /contact
 * page alongside the inquiry form, and re-usable on other pages.
 */
export function ContactCard() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.contact.whatsappDisplay,
      href: buildWhatsAppUrl(buildGeneralMessage()),
      note: "Fastest — typically replied to within business hours.",
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phoneDisplay,
      href: buildPhoneHref(),
      note: "Direct line during office hours.",
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: buildMailtoHref(siteConfig.contact.email, {
        subject: "Tax consultation inquiry",
        body: "Hello, I would like to discuss a tax matter.",
      }),
      note: "For longer messages and document attachments.",
      external: false,
    },
  ] as const;

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        eyebrow="Contact channels"
        as="h2"
        title="Reach out — the consultant replies personally."
        description="Every message is read by the consultant. For the fastest response, send a WhatsApp message with a short description of your situation."
      />

      <ul className="grid grid-cols-1 gap-3">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 md:p-5 transition-colors hover:border-foreground/25"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
                <c.icon aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                  {c.label}
                </span>
                <span className="text-base font-medium text-foreground truncate">
                  {c.value}
                </span>
                <span className="text-xs text-muted-foreground mt-1">{c.note}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 md:p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground/70">
          Office locations
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {siteConfig.offices.map((office) => (
            <li key={office.city} className="flex flex-col gap-1 pl-[1.375rem] relative">
              <span className="absolute left-0 top-0.5 flex items-center">
                <MapPin aria-hidden="true" className="size-4 text-accent" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {office.city}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">
                {office.addressLine1}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">
                {office.addressLine2}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                <Clock aria-hidden="true" className="size-3.5" />
                {office.hours}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
