import { SectionHeader } from "./section-header";
import { MapPin, Circle } from "lucide-react";

export function Location() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="Our Locations"
          subtitle="Visit or Call Us"
          description="We're located in Islamabad and Peshawar. We also serve clients nationwide through remote consultation."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { city: "Islamabad", detail: "[ADDRESS]", phone: "+92 318 665 2528" },
            { city: "Peshawar", detail: "[ADDRESS]", phone: "+92 318 665 2528" },
            { city: "Nationwide Remote", detail: "Video call, phone & WhatsApp", phone: "All of Pakistan" },
          ].map((loc, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1D4ED8]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0E2944]">{loc.city}</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-base text-[#334155] flex items-center gap-2">
                  <Circle className="h-3 w-3 shrink-0 text-[#CBD5E1]" />
                  {loc.detail}
                </li>
                <li className="text-base text-[#334155] flex items-center gap-2">
                  <Circle className="h-3 w-3 shrink-0 text-[#CBD5E1]" />
                  {loc.phone}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
