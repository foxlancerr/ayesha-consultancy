import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { whyChooseItems } from "@/data/why-choose";

/**
 * WhyChoose — six concise reasons to engage this consultancy. Avoids
 * invented numbers; focuses on professional approach.
 */
export function WhyChoose() {
  return (
    <section aria-labelledby="why-choose-title" className="section-padding">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Why this consultancy"
          as="h2"
          title="Direct, professional, and transparent — from the first message to the final filing."
          description="The way a tax engagement should feel: clear communication, plain-language explanations, and a written record of what was done."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {whyChooseItems.map((item, idx) => (
            <li key={item.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <CheckCircle2 aria-hidden="true" className="size-5" />
                </span>
                <span className="text-xs font-mono text-foreground/40" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
