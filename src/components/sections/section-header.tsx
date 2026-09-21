import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {subtitle && (
        <span className="mb-3 inline-block rounded-full bg-[#F1F5F9] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1D4ED8]">
          {subtitle}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-[#475569] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
