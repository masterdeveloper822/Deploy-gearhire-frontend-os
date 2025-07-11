import * as React from "react"
import { Button } from "./button"
import type { ButtonProps } from "./button"

export const SkyPrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      ref={ref}
      asChild={props.asChild}
      className={
        "bg-sky-600 text-white hover:bg-sky-700 rounded-[8px] text-[16px] flex items-center justify-center box-border " +
        (className || "")
      }
      {...props}
    >
      {children}
    </Button>
  )
)
SkyPrimaryButton.displayName = "SkyPrimaryButton" 