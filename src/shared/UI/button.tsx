import React, { ReactNode } from "react";
import { cn } from "../helpers/cn";
import { ArrowRightIcon } from "@/shared/icons";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "outlined" | "primary" | "secondary";
  isCircle?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  isCircle,
  className,
  ...props
}: IProps) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  return (
    <button
      className={cn(
        "flex h-ui items-center justify-center gap-2 whitespace-nowrap rounded-3xl border-2 border-primary bg-transparent px-6 py-2 text-sm font-semibold text-dark dark:text-white",
        { "bg-primary text-white": isPrimary },
        {
          "border-gray-second bg-gray-second text-white/80":
            isPrimary && props.disabled,
        },
        {
          "border-gray bg-gray text-dark dark:border-gray-second/0 dark:bg-gray-second/30":
            isSecondary,
        },
        { "px-3": isCircle },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const MoreButton = ({ className, children, ...props }: IProps) => {
  return (
    <Button className={cn("px-10", className)} {...props}>
      {children} <ArrowRightIcon className="h-5 w-5 fill-white" />
    </Button>
  );
};

export const SocialButton = ({ className, children, ...props }: IProps) => {
  return (
    <Button
      className={cn(
        "flex w-full items-center gap-2 border-1 border-gray bg-white text-dark dark:border-dark-second dark:bg-dark dark:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
