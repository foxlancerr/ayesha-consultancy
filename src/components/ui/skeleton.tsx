import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-pulse rounded bg-[#E2E8F0]", className)}
      {...props}
    />
  )
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
