import { Persona } from "@/types";

const iconMap: Record<string, string> = {
  briefcase: "💼",
  store: "🏪",
  shieldCheck: "🛡️",
  laptop: "💻",
  home: "🏠",
  alertCircle: "⚠️",
  moreHorizontal: "📋",
};

interface PersonaCardProps {
  persona: Persona;
}

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 transition-shadow hover:shadow-md">
      <div className="mb-4 text-4xl">{iconMap[persona.icon] || "📋"}</div>
      <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">{persona.title}</h3>
      <p className="text-sm text-[#475569] leading-relaxed">{persona.description}</p>
    </div>
  );
}
