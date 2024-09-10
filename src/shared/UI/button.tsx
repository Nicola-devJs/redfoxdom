import React, { ReactNode } from "react";
import { cn } from "../utils/cn";

interface IProps {
  children: ReactNode;
  variant?: "outlined" | "primary";
}

export const Button = ({ children, variant = "primary" }: IProps) => {
  const isPrimary = variant === "primary";

  return (
    <button
      className={cn(
        "flex items-center gap-1 rounded-3xl border-2 border-blue-500 bg-transparent px-4 py-2 text-sm font-medium",
        { "bg-blue-500 text-white": isPrimary },
      )}
    >
      {children}
    </button>
  );
};
