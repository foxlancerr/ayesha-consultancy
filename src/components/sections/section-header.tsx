import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      {subtitle && (
        <span className="mb-3 inline-block rounded-full bg-[#F0FDF4] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#15803D]">
          {subtitle}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-white leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
