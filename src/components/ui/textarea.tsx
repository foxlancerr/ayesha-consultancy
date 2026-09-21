import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#0F172A] transition-all duration-200",
        "placeholder:text-[#94A3B8]",
        "focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
