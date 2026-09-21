import { trustItems } from "@/lib/data";

const iconMap: Record<string, string> = {
  "Licensed & Certified": "●",
  "Confidential & Secure": "●",
  "Dedicated Support": "●",
  "Nationwide Coverage": "●",
};

export function TrustStrip() {
  const items = [
    { label: "Professional Approach", desc: "Deep expertise in Pakistani tax law" },
    { label: "Confidentiality", desc: "Strict data security protocols" },
    { label: "Nationwide Coverage", desc: "Islamabad, Peshawar & all of Pakistan" },
    { label: "Transparent Communication", desc: "Clear updates at every step" },
  ];

  return (
    <section className="border-y border-[#E2E8F0] bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              <div className="mb-2 text-[#1D4ED8] text-xl">{iconMap[item.label] || "●"}</div>
              <h3 className="text-sm font-semibold text-[#0F172A]">{item.label}</h3>
              <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
