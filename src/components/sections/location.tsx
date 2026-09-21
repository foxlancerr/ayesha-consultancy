import { SectionHeader } from "./section-header";
import { locations } from "@/lib/data";

export function Location() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Our Locations"
          subtitle="Visit or Call Us"
          description="We're located in Islamabad and Peshawar. We also serve clients nationwide through remote consultation."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { city: "Islamabad", detail: "[ADDRESS]", phone: "923186652528" },
            { city: "Peshawar", detail: "[ADDRESS]", phone: "923186652528" },
            { city: "Nationwide Remote", detail: "Video call, phone & WhatsApp", phone: "All of Pakistan" },
          ].map((loc, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1D4ED8]">
                  📍
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">{loc.city}</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-[#334155]">{loc.detail}</li>
                <li className="text-base text-[#334155]">{loc.phone}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
