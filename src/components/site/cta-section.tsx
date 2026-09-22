import * as React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { WhatsAppCTA } from "./whatsapp-cta";
import { siteConfig } from "@/lib/site";
import { buildPhoneHref } from "@/lib/whatsapp";

/**
 * CTASection — the final conversion section before the footer. Presents
 * the three contact channels in priority order: WhatsApp, phone, contact
 * page. Dark navy background so it visually anchors the bottom of the page.
 */
export function CTASection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
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
      <Container className="relative py-14 md:py-20 flex flex-col items-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-primary-foreground/80">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Available across Pakistan
        </span>
        <h2
          id="cta-title"
          className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.15] text-balance"
        >
          Get clear, professional help with your tax matter — starting today.
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/85 leading-relaxed text-pretty">
          Send a WhatsApp message with a short description of your situation. The
          consultant will reply within business hours with the next steps and a
          clear scope before any work begins.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2 w-full sm:w-auto">
          <WhatsAppCTA size="lg" variant="whatsapp" className="w-full sm:w-auto">
            WhatsApp Consultation
          </WhatsAppCTA>
          <Button asChild size="lg" variant="outlineLight" className="w-full sm:w-auto">
            <Link href="/contact">
              Use the contact form
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto text-primary-foreground hover:bg-white/10"
          >
            <a href={buildPhoneHref()} aria-label={`Call ${siteConfig.contact.phoneDisplay}`}>
              <Phone aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </Button>
        </div>
        <p className="text-xs text-primary-foreground/60 mt-2">
          Islamabad · Peshawar · Remote across Pakistan
        </p>
      </Container>
    </section>
  );
}
