import { SectionHeader } from "./section-header";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="FAQ"
          description="Find answers to common questions about our tax services."
        />
        {/* FAQ items rendered as details/summary for native accordion */}
        <div className="space-y-0">
          {[
            { q: "What documents do I need to file my income tax return?", a: "You typically need your CNIC copy, salary certificates or income statements, bank statements for the tax year, proof of eligible deductions (investments, insurance, loans), and any previous year's return. For a full list specific to your situation, consult our consultant." },
            { q: "What is the deadline for filing tax returns in Pakistan?", a: "The tax return filing deadline is typically September 30th of each year for individuals, though it may be extended by FBR. Late filing results in penalties. Contact us to confirm the current deadline." },
            { q: "Can I file my tax return online?", a: "Yes, FBR provides an online filing system (IRIS). However, the process can be complex. We can assist you with online registration, return preparation, and electronic submission." },
            { q: "What deductions am I eligible for?", a: "Eligible deductions may include investments in approved schemes, life insurance premiums, charitable donations, home loan interest, and medical expenses — subject to FBR regulations." },
            { q: "What should I do if I receive an FBR notice?", a: "Do not ignore it. Contact us immediately. We will analyze the notice, prepare a proper response, and represent you before FBR to resolve the matter efficiently." },
            { q: "How much does your tax consultancy service cost?", a: "Fees vary based on the complexity of your case and the services required. Please contact us for a detailed and transparent fee quote tailored to your needs." },
          ].map((faq, index) => (
            <details key={index} className="group cursor-pointer border-b border-[#E2E8F0]">
              <summary className="flex w-full items-center justify-between py-6 text-left text-lg font-semibold text-[#0E2944] transition-colors group-hover:text-[#1D4ED8]">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-[#334155] transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-6 text-base text-[#334155] leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
