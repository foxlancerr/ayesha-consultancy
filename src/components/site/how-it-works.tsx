import * as React from "react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

/**
 * HowItWorks — four numbered steps describing the engagement process
 * from first message to written summary.
 */
export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-title"
      className="section-padding surface-muted border-y border-border"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="How it works"
          as="h2"
          title="A simple, four-step engagement — no surprises."
          description="From the first WhatsApp message to the written summary of what was filed, every step is structured and clearly communicated."
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8">
          {processSteps.map((step, idx) => (
            <li key={step.number} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full",
                    "bg-primary text-primary-foreground text-sm font-semibold",
                  )}
                >
                  {step.number}
                </span>
                {idx < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block h-px flex-1 bg-border"
                  />
                )}
              </div>
              <h3 className="text-base font-semibold text-foreground leading-tight">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
