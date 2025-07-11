import * as React from "react";
import { Button } from "./button";
import type { ButtonProps } from "./button";

export const BlackBorderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      asChild={props.asChild}
      variant="outline"
      className={
        "border-black border bg-gray-50 text-gray-900 rounded-[8px] text-[16px] flex-1 flex items-center justify-center box-border " +
        (className || "")
      }
      {...props}
    >
      {children}
    </Button>
  )
);
BlackBorderButton.displayName = "BlackBorderButton"; 