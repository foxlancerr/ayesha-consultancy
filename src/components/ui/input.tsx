import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-base text-[#0E2944] transition-all duration-200",
        "placeholder:text-[#94A3B8]",
        "focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
