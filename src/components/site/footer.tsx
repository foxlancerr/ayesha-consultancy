import * as React from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "./container";
import { BrandMark } from "./header";
import { siteConfig } from "@/lib/site";
import { buildPhoneHref, buildMailtoHref } from "@/lib/whatsapp";

/**
 * Footer — site-wide footer with brand summary, contact channels, office
 * locations, navigation, and legal links. Sticks to the bottom of the
 * viewport on short pages.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-primary text-primary-foreground">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <BrandMark />
              <span className="text-base font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/75 max-w-md">
              {siteConfig.description}
            </p>
            <p className="text-xs text-primary-foreground/60">
              Islamabad · Peshawar · Remote across Pakistan
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-2 flex flex-col gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Pages
            </h2>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors w-fit"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Contact
            </h2>
            <a
              href={buildPhoneHref()}
              className="flex items-center gap-2 text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors"
            >
              <Phone aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={buildMailtoHref(siteConfig.contact.email)}
              className="flex items-center gap-2 text-sm text-primary-foreground/85 hover:text-primary-foreground transition-colors break-all"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">{siteConfig.contact.email}</span>
            </a>
            <p className="flex items-center gap-2 text-sm text-primary-foreground/85">
              <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">{siteConfig.contact.whatsappDisplay}</span>
            </p>
          </div>

          {/* Offices */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Offices
            </h2>
            {siteConfig.offices.map((office) => (
              <address key={office.city} className="not-italic text-sm text-primary-foreground/85 flex flex-col gap-0.5">
                <span className="font-medium text-primary-foreground">{office.city}</span>
                <span className="text-xs text-primary-foreground/70">{office.addressLine1}</span>
                <span className="text-xs text-primary-foreground/70">{office.hours}</span>
              </address>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-primary-foreground/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-primary-foreground/60">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {siteConfig.legalNav.map((item) => (
              <Link
              target={item.label == "About Developer" ? '_blank' : "_self"}
                key={item.href}
                href={item.href}
                className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}

