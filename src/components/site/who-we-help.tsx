import * as React from "react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { PersonaIcon } from "./icons";
import { personas } from "@/data/personas";

/**
 * WhoWeHelp — grid of persona cards describing who the consultancy serves.
 * Each card maps to a `clientTypeLabel` used in the inquiry form so the
 * visitor's WhatsApp message stays consistent.
 */
export function WhoWeHelp() {
  return (
    <section aria-labelledby="who-we-help-title" className="section-padding">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Who we help"
          as="h2"
          title="Tax help for individuals, businesses, and pensioners across Pakistan."
          description="Whether you are filing for the first time, trying to get onto the Active Taxpayer List, or responding to an FBR notice — there is a structured way to help with your situation."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {personas.map((persona) => (
            <li
              key={persona.slug}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 md:p-6 transition-colors hover:border-foreground/25"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-foreground">
                  <PersonaIcon name={persona.icon} aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-base font-semibold text-foreground leading-tight">
                  {persona.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {persona.summary}
              </p>
              <ul className="mt-auto flex flex-col gap-1 pt-2">
                {persona.commonServices.map((service) => (
                  <li
                    key={service}
                    className="text-xs text-muted-foreground/90 leading-snug"
                  >
                    <span className="text-foreground/70 mr-1" aria-hidden="true">·</span>
                    {service}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
