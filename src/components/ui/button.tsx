"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-[#0F172A] text-white hover:bg-[#1D4ED8] focus-visible:ring-[#1D4ED8] shadow-sm",
        outline:
          "border border-[#0F172A] text-[#0F172A] bg-transparent hover:bg-[#0F172A] hover:text-white focus-visible:ring-[#0F172A] shadow-sm",
        ghost:
          "text-[#0F172A] hover:bg-[#F1F5F9] focus-visible:ring-[#0F172A]",
        whatsapp:
          "bg-[#15803D] text-white hover:bg-[#166534] focus-visible:ring-[#15803D] shadow-sm",
      },
      size: {
        default: "px-6 py-3.5 text-sm",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
