import { SectionHeader } from "./section-header";
import { consultantProfile } from "@/lib/data";

export function ConsultantProfile() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Meet the Consultant"
          subtitle="About the Professional"
          description="Your trusted partner for tax consultancy in Islamabad and Peshawar."
        />
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-16">
            <div className="h-36 w-36 rounded-full bg-[#E2E8F0]" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 text-2xl font-bold text-[#0F172A]">
              {consultantProfile.name}
            </h3>
            <p className="mb-4 text-lg text-[#1D4ED8] font-medium">
              {consultantProfile.qualification}
            </p>
            <p className="mb-6 text-sm text-[#475569] leading-relaxed">
              {consultantProfile.professionalInformation}
            </p>
            <div className="space-y-4">
              {[
                { label: "Professional Approach", desc: "Personalized attention and thorough analysis of your tax situation.", color: "bg-[#F1F5F9] text-[#0F172A]" },
                { label: "Confidentiality", desc: "Highest standards of confidentiality and data security.", color: "bg-[#EFF6FF] text-[#1D4ED8]" },
                { label: "Transparent Communication", desc: "Clear, honest updates at every stage.", color: "bg-[#F0FDF4] text-[#15803D]" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg ${item.color} text-xs`}>✓</div>
                  <div>
                    <h4 className="font-semibold text-[#0F172A]">{item.label}</h4>
                    <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
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
