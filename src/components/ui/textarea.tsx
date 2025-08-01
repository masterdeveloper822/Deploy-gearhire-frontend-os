import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50",
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

export const AboutTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AboutTextareaProps
>(
  (
    {
      value,
      onChange,
      maxLength = 500,
      placeholder = "Tell renters about your business, experience, and what sets you apart...",
      ...props
    },
    ref,
  ) => (
    <Textarea
      ref={ref}
      value={value ?? ""}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
      className={"resize-none " + (props.className || "")}
      style={{ resize: "none", ...(props.style || {}) }}
      {...props}
    />
  ),
)
AboutTextarea.displayName = "AboutTextarea"

export { Textarea }
