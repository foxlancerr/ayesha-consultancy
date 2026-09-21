import { Mail } from "lucide-react";

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  details: Array<{ label: string; value: string }>;
}

export function ContactCard({ title, icon, details }: ContactCardProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#0E2944]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#0E2944]">{title}</h3>
      </div>
      <ul className="space-y-3">
        {details.map((detail, i) => (
          <li key={i} className="text-base text-[#334155]">
            {detail.label}:{" "}
            <span className="font-semibold text-[#0E2944]">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactCard;
