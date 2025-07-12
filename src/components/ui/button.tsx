import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        skyBorder: "bg-white h-12 px-4 py-2 rounded-lg border border-sky-600 text-sky-600 text-base font-normal leading-5 hover:bg-sky-50 hover:text-black transition-colors",
        blackBorder: "border-black border px-4 py-2 bg-gray-50 text-gray-900 rounded-[8px] text-[16px] flex-1 flex items-center hover:bg-sky-50 hover:text-sky-900 justify-center box-border",
        whiteBorder: "flex-1 md:flex-none px-8 py-4 border-2 border-white text-white font-medium text-base bg-transparent hover:bg-white/10 transition-colors",
        skyPrimary: "bg-sky-600 text-white hover:bg-sky-700 px-4 py-2 rounded-[8px] text-[16px] flex items-center justify-center box-border",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

interface UploadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  children: React.ReactNode;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ iconSrc, children, ...props }) => (
  <Button
    className="flex items-center bg-sky-100 hover:bg-sky-200 rounded-lg px-6 py-2 mb-2 text-sky-700 font-medium"
    type="button"
    {...props}
  >
    <img src={iconSrc} alt="Upload" className="w-4 h-5 mr-2" />
    {children}
  </Button>
);

interface SaveChangesButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  children: React.ReactNode;
}

export const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({ iconSrc, children, ...props }) => (
  <Button
    className="flex items-center justify-center bg-sky-600 text-white w-full md:w-1/2 h-12 text-base font-semibold hover:bg-sky-700"
    {...props}
  >
    <img src={iconSrc} alt="Save" className="w-4 h-4 mr-2" />
    {children}
  </Button>
);

interface PreviewProfileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  children: React.ReactNode;
}

export const PreviewProfileButton: React.FC<PreviewProfileButtonProps> = ({ iconSrc, children, ...props }) => (
  <Button
    className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium w-full md:w-1/2 h-12 hover:bg-gray-100"
    {...props}
  >
    <img src={iconSrc} alt="Preview" className="w-4 h-4 mr-2" />
    {children}
  </Button>
);

export { Button, buttonVariants }
