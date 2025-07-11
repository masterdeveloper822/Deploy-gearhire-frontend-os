import * as React from "react";
import { Button } from "./button";
import type { ButtonProps } from "./button";

export const SkyBorderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      asChild={props.asChild}
      variant="outline"
      className={
        "px-4 py-2 rounded-lg border border-sky-600 text-sky-600 text-base font-normal leading-5 hover:bg-sky-50 transition-colors " +
        (className || "")
      }
      {...props}
    >
      {children}
    </Button>
  )
);
SkyBorderButton.displayName = "SkyBorderButton"; 