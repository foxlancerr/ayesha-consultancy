import { SectionHeader } from "./section-header";
import { consultantProfile } from "@/lib/data";
import { Check } from "lucide-react";

export function ConsultantProfile() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Meet the Consultant"
          subtitle="About the Professional"
          description="Your trusted partner for tax consultancy in Islamabad and Peshawar."
        />
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-16">
            <div className="h-44 w-44 rounded-full bg-[#E2E8F0]" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-3 text-4xl font-bold text-[#0E2944]">
              {consultantProfile.name}
            </h2>
            <p className="mb-5 text-xl text-[#334155] font-medium">
              {consultantProfile.qualification}
            </p>
            <p className="mb-8 text-base text-[#334155] leading-relaxed">
              {consultantProfile.professionalInformation}
            </p>
            <div className="space-y-5">
              {[
                { label: "Professional Approach", desc: "Personalized attention and thorough analysis of your tax situation." },
                { label: "Confidentiality", desc: "Highest standards of confidentiality and data security." },
                { label: "Transparent Communication", desc: "Clear, honest updates at every stage." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-[#15803D] text-xs text-white"><Check className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-semibold text-[#0E2944]">{item.label}</h4>
                    <p className="text-base text-[#334155] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
