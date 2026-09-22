import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SectionHeader — consistent eyebrow + title + description block used at
 * the top of every major section. Keeps the H1/H2 hierarchy clean.
 */
export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: TitleTag = "h2",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-2xl",
        align === "center" && "mx-auto text-center items-center",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <TitleTag
        className={cn(
          "text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.15] font-semibold text-foreground text-balance",
          titleClassName,
        )}
      >
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            "text-[0.975rem] sm:text-base text-muted-foreground leading-relaxed text-pretty",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
