import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

import instagramIcon from "@/assets/images/ui/icons/social/instagram.svg";
import twitterIcon from "@/assets/images/ui/icons/social/twitter.svg";
import facebookIcon from "@/assets/images/ui/icons/social/facebook.svg";
import linkedinIcon from "@/assets/images/ui/icons/social/linkedin.svg";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary      text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary:
          "bg-tertiary text-tertiary-foreground shadow hover:bg-tertiary/90",
        white_sky:
          "border border-whity-sky text-whity-sky bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        white_lightsky:
          "border border-tertiary text-tertiary bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        white_red:
          "border border-whity-red text-whity-red bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        white_gray:
          "border border-whity-gray text-whity-grayText bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        colored_gray:
          "border border-colored-grayborder bg-colored-gray text-colored-grayforeground shadow hover:bg-colored-gray/90",
        colored_sky:
          "bg-colored-sky text-colored-skyforeground shadow hover:bg-colored-sky/90",
        colored_red:
          "bg-colored-red text-colored-redforeground shadow hover:bg-colored-red/90",
        colored_orange:
          "bg-colored-orange text-colored-orangeforeground shadow hover:bg-colored-orange/90",
        colored_blue:
          "bg-colored-blue text-background shadow hover:bg-colored-blue/90",
        colored_green:
          "bg-colored-green text-background shadow hover:bg-colored-green/90",
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
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

interface UploadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  children: React.ReactNode;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  iconSrc,
  children,
  ...props
}) => (
  <Button
    className="flex items-center bg-sky-100 hover:bg-sky-200 rounded-lg px-6 py-2 mb-2 text-sky-700 font-medium"
    type="button"
    {...props}
  >
    <img src={iconSrc} alt="Upload" className="w-4 h-5 mr-2" />
    {children}
  </Button>
);

interface SaveChangesButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  children: React.ReactNode;
}

const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({
  iconSrc,
  children,
  ...props
}) => (
  <Button
    className="flex items-center justify-center bg-sky-600 text-white w-full md:w-1/2 h-12 text-base font-semibold hover:bg-sky-700"
    {...props}
  >
    <img src={iconSrc} alt="Save" className="w-4 h-4 mr-2" />
    {children}
  </Button>
);

interface PreviewProfileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  children: React.ReactNode;
}

const PreviewProfileButton: React.FC<PreviewProfileButtonProps> = ({
  iconSrc,
  children,
  ...props
}) => (
  <Button
    className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium w-full md:w-1/2 h-12 hover:bg-gray-100"
    {...props}
  >
    <img src={iconSrc} alt="Preview" className="w-4 h-4 mr-2" />
    {children}
  </Button>
);

interface InstagramLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

const InstagramLink = ({
  to = "/instagram",
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5",
}: InstagramLinkProps) => {
  return (
    <Link to={to} className={className}>
      <img src={instagramIcon} alt="Instagram" className={iconClassName} />
    </Link>
  );
};

interface TwitterLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

const TwitterLink = ({
  to = "/twitter",
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5",
}: TwitterLinkProps) => {
  return (
    <Link to={to} className={className}>
      <img src={twitterIcon} alt="Twitter" className={iconClassName} />
    </Link>
  );
};

interface FacebookLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

const FacebookLink = ({
  to = "/facebook",
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5",
}: FacebookLinkProps) => {
  return (
    <Link to={to} className={className}>
      <img src={facebookIcon} alt="Facebook" className={iconClassName} />
    </Link>
  );
};
interface LinkedInLinkProps {
  to?: string;
  className?: string;
  iconClassName?: string;
}

const LinkedInLink = ({
  to = "/linkedin",
  className = "flex items-center p-0",
  iconClassName = "w-5 h-5",
}: LinkedInLinkProps) => {
  return (
    <Link to={to} className={className}>
      <img src={linkedinIcon} alt="LinkedIn" className={iconClassName} />
    </Link>
  );
};
export {
  Button,
  buttonVariants,
  UploadButton,
  SaveChangesButton,
  PreviewProfileButton,
  InstagramLink,
  TwitterLink,
  FacebookLink,
  LinkedInLink,
};
