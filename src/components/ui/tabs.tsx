"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, defaultValue, value, onValueChange, ...props }, ref) => {
    const [activeValue, setActiveValue] = React.useState(value ?? defaultValue ?? "");

    const handleChange = (newValue: string) => {
      setActiveValue(newValue);
      onValueChange?.(newValue);
    };

    const childArray = React.Children.toArray(children);

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex border-b border-[#E2E8F0]" role="tablist">
          {childArray
            .filter((child): child is React.ReactElement<{ value: string; onClick?: () => void }> =>
              React.isValidElement(child) && (child.type as string) === "button"
            )
            .map((trigger, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeValue === (trigger as any).props.value}
                onClick={() => handleChange((trigger as any).props.value)}
                className={cn(
                  "px-6 py-3 text-sm font-medium transition-colors border-b-2 -mb-px",
                  activeValue === (trigger as any).props.value
                    ? "border-[#2563EB] text-[#2563EB]"
                    : "border-transparent text-[#64748B] hover:text-[#1B2A4A] hover:border-[#CBD5E1]"
                )}
              >
                {(trigger as any).props.children}
              </button>
            ))}
        </div>
        <div className="py-6">
          {childArray
            .filter((child): child is React.ReactElement<{ children: React.ReactNode; value: string }> =>
              React.isValidElement(child) && (child.type as string) === "div"
            )
            .filter((content) => (content as any).props.value === activeValue)
            .map((content, i) => (
              <div key={i} role="tabpanel" className="">
                {(content as any).props.children}
              </div>
            ))}
        </div>
      </div>
    );
  }
);
Tabs.displayName = "Tabs";

export { Tabs };
