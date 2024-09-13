import React, { ReactNode } from "react";
import { cn } from "../utils/cn";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "outlined" | "primary";
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

  return (
    <button
      className={cn(
        "border-primary h-ui text-dark flex items-center justify-center gap-2 whitespace-nowrap rounded-3xl border-2 bg-transparent px-6 py-2 text-sm font-medium",
        className,
        { "bg-primary text-white": isPrimary },
        { "px-3": isCircle },
      )}
      {...props}
    >
      {children}
    </button>
  );
};
