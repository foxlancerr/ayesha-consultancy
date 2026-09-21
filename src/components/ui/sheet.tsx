"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./button";

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ className, open, onOpenChange, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50" ref={ref} {...props}>
        <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 ease-in-out">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-[#1B2A4A] text-lg">Menu</span>
              <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </div>
        </div>
      </div>
    );
  }
);
Sheet.displayName = "Sheet";

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />
);
SheetContent.displayName = "SheetContent";

interface SheetHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, ref) => <div className={cn("", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => <div className={cn("", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

export { Sheet, SheetContent, SheetHeader, SheetFooter };
