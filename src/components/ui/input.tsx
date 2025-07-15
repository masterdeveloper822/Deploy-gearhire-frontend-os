import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

interface EmailInputProps extends React.ComponentProps<typeof Input> {}

export const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className, ...props }, ref) => (
    <Input
      ref={ref}
      type="email"
      placeholder="Enter your email address"
      className={cn(
        "h-12 bg-white placeholder:text-base text-gray-900 pl-4 py-3",
        className,
      )}
      {...props}
    />
  ),
);
EmailInput.displayName = "EmailInput";

interface BusinessNameInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BusinessNameInput: React.FC<BusinessNameInputProps> = ({
  value,
  onChange,
  ...props
}) => (
  <Input
    value={value}
    onChange={onChange}
    className={"h-[50px] md:text-base " + (props.className || "")}
    {...props}
  />
);

export { Input };
