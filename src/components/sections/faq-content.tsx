"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-[#1B2A4A]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#475569] text-sm leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
