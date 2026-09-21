"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./button";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ className, open, onOpenChange, children, ...props }, ref) => {
    if (!open) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4",
          className
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget) onOpenChange(false);
        }}
        {...props}
      >
        <div className="fixed inset-0 bg-black/50" />
        <div className="relative bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          {children}
        </div>
      </div>
    );
  }
);
Dialog.displayName = "Dialog";

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("flex items-center justify-between p-6 border-b", className)} {...props} />
  )
);
DialogHeader.displayName = "DialogHeader";

interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-xl font-semibold text-[#1B2A4A]", className)} {...props} />
  )
);
DialogTitle.displayName = "DialogTitle";

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props}>
      {children}
    </div>
  )
);
DialogContent.displayName = "DialogContent";

interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ className, ...props }, ref) => (
    <Button variant="ghost" size="sm" ref={ref} className="absolute top-4 right-4" {...props}>
      <X className="h-4 w-4" />
    </Button>
  )
);
DialogClose.displayName = "DialogClose";

export { Dialog, DialogHeader, DialogTitle, DialogContent, DialogClose };
