import { personas } from "@/lib/data";

const iconMap: Record<string, string> = {
  briefcase: "💼",
  store: "🏪",
  "shield-check": "🛡️",
  laptop: "💻",
  home: "🏠",
  "alert-circle": "⚠️",
  "more-horizontal": "📋",
};

interface PersonaCardProps {
  persona: typeof personas[0];
}

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 text-4xl">{iconMap[persona.icon] || "📋"}</div>
      <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">{persona.title}</h3>
      <p className="text-base text-[#334155] leading-relaxed">{persona.description}</p>
    </div>
  );
}
