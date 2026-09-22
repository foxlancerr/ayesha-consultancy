import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Site Button — extends shadcn/ui's Button with a WhatsApp variant and a
 * `nav` size suited to header CTAs. All variants share consistent height,
 * padding, and focus-ring behaviour so the entire site reads as one system.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",
  {
    variants: {
      variant: {
        // Deep navy — primary brand CTA
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary",
        // WhatsApp green — used for the primary contextual WhatsApp CTAs
        whatsapp:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 active:bg-accent",
        // Outline — used on light sections where the navy outline reads as secondary
        outline:
          "border border-border bg-background text-foreground shadow-sm hover:bg-muted hover:border-foreground/30",
        // Outline on dark — used inside dark sections (hero, footer) where the white outline reads as secondary
        outlineLight:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
        // Subtle — used for inline links with affordance
        subtle:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        // Ghost — for low-emphasis actions
        ghost:
          "text-foreground hover:bg-muted",
        // Link — text-only
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2 text-sm",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "size-11",
        nav: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants as siteButtonVariants };
