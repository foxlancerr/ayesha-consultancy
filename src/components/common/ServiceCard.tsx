import { cn } from "@/lib/utils";
import { Check, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    audience: string;
    whatWeHelp: string;
    category: string;
    slug: string;
    whatsappMessage: string;
    documents: Array<{ id: string; label: string }>;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5">
        <span className="mb-2 inline-block rounded-full bg-[#F1F5F9] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#1D4ED8]">
          {service.category}
        </span>
        <h3 className="text-lg font-semibold text-[#0F172A]">{service.title}</h3>
      </div>
      <p className="mb-3 text-sm text-[#475569] leading-relaxed">{service.description}</p>
      <p className="mb-4 text-xs font-medium text-[#1D4ED8]">{service.audience}</p>
      <p className="mb-5 flex-1 text-sm text-[#475569] leading-relaxed">{service.whatWeHelp}</p>
      <div className="mt-auto flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0F172A]">Typical documents:</p>
        <ul className="mb-6 space-y-2">
          {service.documents.slice(0, 3).map((doc) => (
            <li key={doc.id} className="text-xs text-[#475569] flex items-center gap-2">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#15803D]" />
              {doc.label}
            </li>
          ))}
        </ul>
        <a
          href={buildWhatsAppUrl(service.whatsappMessage)}
          className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1D4ED8]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
