"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
  className?: string;
}

const SelectContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function Select({ value, onValueChange, placeholder, children, className }: SelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className={cn("relative", className)}>
        <div className="flex h-11 w-full items-center justify-between rounded-xl border border-[#CBD5E1] bg-white px-4 py-2.5 text-sm text-[#0F172A] transition-all duration-200 focus-within:border-[#1D4ED8] focus-within:ring-2 focus-within:ring-[#1D4ED8] focus-within:ring-offset-1">
          <span className={value ? "text-[#0F172A]" : "text-[#94A3B8]"}>{value || placeholder}</span>
          <svg className="h-4 w-4 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {open && (
          <SelectContent>{children}</SelectContent>
        )}
      </div>
    </SelectContext.Provider>
  );
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  const { onValueChange, setOpen } = React.useContext(SelectContext) || {};
  return (
    <div className="absolute z-10 mt-1 w-full overflow-auto rounded-xl border border-[#E2E8F0] bg-white py-1 shadow-lg">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            onClick: () => {
              const val = (child as any).props.value;
              onValueChange?.(val);
              setOpen?.(false);
            },
          });
        }
        return child;
      })}
    </div>
  );
}

export function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <div className="cursor-pointer select-none rounded-lg px-4 py-2.5 text-sm text-[#0F172A] hover:bg-[#F1F5F9]">
      {children}
    </div>
  );
}

export function SelectValue({ placeholder }: { placeholder: string }) {
  return <span className="text-[#94A3B8]">{placeholder}</span>;
}

export function SelectTrigger({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>;
}
