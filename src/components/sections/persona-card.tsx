import { Persona } from "@/types";
import { Briefcase, Store, ShieldCheck, Laptop, Home, AlertCircle, MoreHorizontal } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  store: Store,
  "shield-check": ShieldCheck,
  laptop: Laptop,
  home: Home,
  "alert-circle": AlertCircle,
  "more-horizontal": MoreHorizontal,
};

interface PersonaCardProps {
  persona: Persona;
}

export function PersonaCard({ persona }: PersonaCardProps) {
  const Icon = iconMap[persona.icon] || MoreHorizontal;
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#0E2944]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-[#0E2944]">{persona.title}</h3>
      <p className="text-base text-[#334155] leading-relaxed">{persona.description}</p>
    </div>
  );
}
