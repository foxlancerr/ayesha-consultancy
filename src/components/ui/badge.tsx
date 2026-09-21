"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "green";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-[#0F172A] text-white",
      secondary: "bg-[#F1F5F9] text-[#0F172A]",
      outline: "border border-[#0F172A] text-[#0F172A] bg-transparent",
      green: "bg-[#15803D] text-white",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
export { Badge as default };
export type { BadgeProps };
