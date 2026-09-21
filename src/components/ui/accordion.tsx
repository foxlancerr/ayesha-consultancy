"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionContextType {
  value: string;
  onValueChange: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
  type?: "single";
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, value, defaultValue, onValueChange, children, ...props }, ref) => {
    const [activeValue, setActiveValue] = React.useState(defaultValue ?? "");
    const currentValue = value ?? activeValue;

    const handleChange = (newValue: string) => {
      setActiveValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <AccordionContext.Provider value={{ value: currentValue, onValueChange: handleChange }}>
          {children}
        </AccordionContext.Provider>
      </div>
    );
  }
);
Accordion.displayName = "Accordion";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, ...props }, ref) => (
    <div ref={ref} className={cn("border-b border-[#E2E8F0]", className)} data-value={value} {...props} />
  )
);
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) return <button ref={ref} className={cn("", className)} {...props}>{children}</button>;
    const { value, onValueChange } = context;
    const itemValue = (props as any)["data-value"] || "";
    const isActive = value === itemValue;

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between py-5 text-left font-medium text-[#0F172A] transition-colors hover:text-[#1D4ED8]",
          className
        )}
        onClick={() => {
          onValueChange?.(isActive ? "" : itemValue);
        }}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200 flex-shrink-0",
            isActive ? "rotate-180" : ""
          )}
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    const itemValue = (props as any)["value"] || "";
    const isActive = context?.value === itemValue;
    return (
      <div
        ref={ref}
        className={cn("overflow-hidden text-sm text-[#475569] pb-5 leading-relaxed", className)}
        style={{ display: isActive ? "block" : "none" }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps };
