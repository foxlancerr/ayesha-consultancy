import { locations } from "@/lib/data";
import { SectionHeader } from "./section-header";
import { Phone, Mail, MapPin } from "lucide-react";

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
            { city: "Islamabad", detail: "[ADDRESS]", phone: "[PHONE NUMBER]", icon: "📍", color: "bg-[#F1F5F9] text-[#0F172A]" },
            { city: "Peshawar", detail: "[ADDRESS]", phone: "[PHONE NUMBER]", icon: "📍", color: "bg-[#EFF6FF] text-[#1D4ED8]" },
            { city: "Nationwide Remote", detail: "Video call, phone & WhatsApp", phone: "All of Pakistan", icon: "🌐", color: "bg-[#F0FDF4] text-[#15803D]" },
          ].map((loc, i) => (
            <div key={i} className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${loc.color}`}>
                  {loc.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">{loc.city}</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-sm text-[#475569]">{loc.detail}</li>
                <li className="text-sm text-[#475569]">{loc.phone}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
