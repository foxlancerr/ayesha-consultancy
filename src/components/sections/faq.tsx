"use client";

import { SectionHeader } from "./section-header";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="FAQ"
          description="Find answers to common questions about our tax services."
        />
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#E2E8F0]">
            <details className="group cursor-pointer">
              <summary className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-[#0F172A] transition-colors group-hover:text-[#1D4ED8]">
                {faq.question}
                <svg className="h-5 w-5 shrink-0 text-[#334155] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-base text-[#334155] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
