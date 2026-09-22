import * as React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { WhatsAppCTA } from "./whatsapp-cta";
import { siteConfig } from "@/lib/site";
import { buildPhoneHref } from "@/lib/whatsapp";

/**
 * Hero — the opening section of the home page. Contains the H1, the
 * positioning subtitle, the three CTAs (WhatsApp primary, View Services
 * secondary, Call Now tertiary), and the location strip.
 *
 * No animations, no exaggerations. Just a clear, professional positioning.
 */
export function Hero() {
  return (
    <section className="relative border-b border-border bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle background grid — kept very faint to stay minimal */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative py-14 md:py-20 lg:py-24">
        <div className="max-w-3xl flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground/80">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Islamabad · Peshawar · Remote across Pakistan
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] font-semibold tracking-tight text-balance">
            Professional tax consultancy for individuals and businesses across Pakistan.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-primary-foreground/85 max-w-2xl text-pretty">
            Income tax returns, FBR registration, filer assistance, wealth statements, and
            FBR notices — handled by a qualified tax professional. In-person consultations
            in Islamabad and Peshawar, and remote support anywhere in Pakistan.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
            <WhatsAppCTA size="lg" variant="whatsapp">
              WhatsApp Consultation
            </WhatsAppCTA>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              <a href={buildPhoneHref()} aria-label={`Call ${siteConfig.contact.phoneDisplay}`}>
                <Phone aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/services">
                View Services
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 max-w-xl border-t border-primary-foreground/15 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                Locations
              </dt>
              <dd className="mt-1 text-sm font-medium text-primary-foreground/90">
                Islamabad &amp; Peshawar
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                Coverage
              </dt>
              <dd className="mt-1 text-sm font-medium text-primary-foreground/90">
                Pakistan nationwide (remote)
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                Response
              </dt>
              <dd className="mt-1 text-sm font-medium text-primary-foreground/90">
                Within business hours, by WhatsApp
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}

