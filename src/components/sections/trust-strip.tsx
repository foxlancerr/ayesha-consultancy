import { SectionHeader } from "./section-header";
import { Check } from "lucide-react";

const trustItems = [
  { label: "Professional Approach", desc: "Deep expertise in Pakistani tax law", icon: <Check className="h-5 w-5" /> },
  { label: "Confidentiality", desc: "Strict data security protocols", icon: <Check className="h-5 w-5" /> },
  { label: "Nationwide Coverage", desc: "Islamabad, Peshawar & all of Pakistan", icon: <Check className="h-5 w-5" /> },
  { label: "Transparent Communication", desc: "Clear updates at every step", icon: <Check className="h-5 w-5" /> },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[#E2E8F0] bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 text-center">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#F0FDF4] text-[#15803D]">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-[#0E2944]">{item.label}</h3>
              <p className="text-base text-[#334155] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
