import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("border-[#E2E8F0]", className)}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
