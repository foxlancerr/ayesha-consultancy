import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — the single horizontal alignment primitive used across every
 * page. Pins content to a consistent max-width so the entire site shares
 * one grid system.
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({ className, as: Component = "div", ...props }: ContainerProps) {
  return <Component className={cn("site-container", className)} {...props} />;
}
