"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { SectionHeader } from "./section-header";

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="FAQ"
          description="Find answers to common questions about our tax services."
        />
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#0F172A]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#475569] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
