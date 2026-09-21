import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaMessage: string;
}

export function CTASection({ title, subtitle, ctaLabel, ctaMessage }: CTASectionProps) {
  return (
    <section className="bg-[#0F172A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 leading-relaxed">{subtitle}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`https://wa.me/92XXXXXXXXXX?text=${encodeURIComponent(ctaMessage)}`}
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#128C7E] shadow-sm"
          >
            {ctaLabel}
          </a>
          <a
            href="tel:+92XXXXXXXXXX"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  details: Array<{ label: string; value: string }>;
}

export function ContactCard({ title, icon, details }: ContactCardProps) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#0F172A]">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A]">{title}</h3>
      </div>
      <ul className="space-y-2">
        {details.map((detail, i) => (
          <li key={i} className="text-sm text-[#475569]">
            {detail.label}:{" "}
            <span className="font-medium text-[#0F172A]">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DocumentChecklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="mt-1 h-5 w-5 shrink-0 text-[#15803D]" />
          <span className="text-sm text-[#475569]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
