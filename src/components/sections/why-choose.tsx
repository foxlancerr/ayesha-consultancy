import { SectionHeader } from "./section-header";
import { trustItems } from "@/lib/data";
import { Check } from "lucide-react";

export function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Our Strengths"
          description="What sets our consultancy apart — professionalism, experience, and a client-first approach."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.slice(0, 6).map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-8">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#15803D] text-xs text-white">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#0F172A]">{item.label}</h3>
                <p className="text-base text-[#334155] leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-10">
          <h3 className="mb-8 text-xl font-bold text-[#0F172A]">Our Locations</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { city: "Islamabad", detail: "[ADDRESS]", phone: "923186652528" },
              { city: "Peshawar", detail: "[ADDRESS]", phone: "923186652528" },
              { city: "Nationwide Remote", detail: "Video call, phone & WhatsApp", phone: "All of Pakistan" },
            ].map((loc, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-[#1D4ED8]" />
                <div>
                  <h4 className="font-semibold text-[#0F172A]">{loc.city}</h4>
                  <p className="text-base text-[#334155]">{loc.detail}</p>
                  <p className="text-base text-[#334155]">{loc.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
