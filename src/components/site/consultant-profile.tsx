import * as React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, MessageSquare } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { Button } from "./button";
import { WhatsAppCTA } from "./whatsapp-cta";
import { siteConfig } from "@/lib/site";

/**
 * ConsultantProfile — a professional, honest profile summary shown on the
 * home page. Uses placeholder fields directly from site.ts; nothing is
 * invented. Links to /about for the full profile.
 */
export function ConsultantProfile() {
  return (
    <section
      aria-labelledby="consultant-title"
      className="section-padding"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Consultant profile"
          as="h2"
          title="A consultant who treats your tax position with the same care as their own."
          description="Direct engagement with the person preparing your return — not a call centre, not an account manager. Every engagement begins with a conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Portrait placeholder — intentional monogram tile, not a broken image */}
          <aside className="lg:col-span-1">
            <div className="relative w-full max-w-xs mx-auto rounded-lg border border-border bg-card p-5 md:p-6 flex flex-col items-center gap-3 text-center">
              <div className="aspect-square w-full rounded-md bg-primary text-primary-foreground flex flex-col items-center justify-center gap-2">
                <span className="text-5xl font-semibold tracking-tight" aria-hidden="true">
                  {siteConfig.consultant.name
                    .replace(/[\[\]]/g, "")
                    .trim()
                    .charAt(0)
                    .toUpperCase() || "?"}
                </span>
                <span className="text-xs text-primary-foreground/70 px-4 leading-relaxed">
                  Professional headshot
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Portrait will appear here once confirmed by the consultant.
                Placeholder is used in line with the consultancy&apos;s policy
                of publishing only verified information.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="eyebrow">{siteConfig.consultant.qualification}</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {siteConfig.consultant.name}
              </h3>
              <p className="text-sm text-foreground/70">{siteConfig.consultant.affiliation}</p>
            </div>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {siteConfig.consultant.shortBio}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <li className="flex items-start gap-2 rounded-md border border-border bg-card p-3">
                <ShieldCheck aria-hidden="true" className="size-4 mt-0.5 text-accent shrink-0" />
                <span className="text-xs text-foreground/80 leading-snug">
                  <span className="block font-medium text-foreground">Professional approach</span>
                  Structured review, plain-language explanation.
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-md border border-border bg-card p-3">
                <Lock aria-hidden="true" className="size-4 mt-0.5 text-accent shrink-0" />
                <span className="text-xs text-foreground/80 leading-snug">
                  <span className="block font-medium text-foreground">Confidentiality</span>
                  Used only for the work you authorise.
                </span>
              </li>
              <li className="flex items-start gap-2 rounded-md border border-border bg-card p-3">
                <MessageSquare aria-hidden="true" className="size-4 mt-0.5 text-accent shrink-0" />
                <span className="text-xs text-foreground/80 leading-snug">
                  <span className="block font-medium text-foreground">Transparent communication</span>
                  Written summary of every engagement.
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button asChild variant="default" size="default">
                <Link href="/about">
                  Read the full profile
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <WhatsAppCTA variant="outline" size="default">
                Send a message
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
