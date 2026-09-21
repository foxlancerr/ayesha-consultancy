import { Mail } from "lucide-react";

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  details: Array<{ label: string; value: string }>;
}

export function ContactCard({ title, icon, details }: ContactCardProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#1B2A4A]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#1B2A4A]">{title}</h3>
      </div>
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="text-sm text-[#64748B]">
            {detail.label}:{" "}
            <span className="font-medium text-[#1B2A4A]">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactCard;
