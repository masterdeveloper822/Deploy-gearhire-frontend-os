import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

interface AboutTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const AboutTextarea: React.FC<AboutTextareaProps> = ({
  value,
  onChange,
  maxLength = 500,
  placeholder = "Tell renters about your business, experience, and what sets you apart...",
  ...props
}) => (
  <Textarea
    value={value}
    onChange={onChange}
    maxLength={maxLength}
    placeholder={placeholder}
    className={"resize-none" + (props.className || "")}
    {...props}
  />
)

export { Textarea }
