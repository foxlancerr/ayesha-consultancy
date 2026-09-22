"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { WhatsAppCTA } from "./whatsapp-cta";
import { faqItems } from "@/data/faq";

/**
 * FAQ — accessible accordion of common questions. Kept to 8 questions
 * covering locations, process, FBR notices, filer status, fees,
 * confidentiality, revisions, and on-behalf filing.
 */
export function FAQ() {
  return (
    <section
      aria-labelledby="faq-title"
      className="section-padding surface-muted border-y border-border"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="FAQ"
          as="h2"
          title="Common questions before reaching out."
          description="If your question is not answered below, message the consultant on WhatsApp — every engagement starts with a short conversation."
        />

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="rounded-lg border border-border bg-card px-5 md:px-6 data-[state=open]:border-foreground/25 transition-colors"
            >
              <AccordionTrigger className="text-left text-[0.975rem] sm:text-base font-medium text-foreground hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-[0.95rem] text-muted-foreground leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-lg border border-border bg-card p-5 md:p-6">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">
              Still have a question?
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Send a WhatsApp message — the consultant typically replies within business hours.
            </p>
          </div>
          <WhatsAppCTA size="default" className="self-start sm:self-center">
            Ask on WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </section>
  );
}
