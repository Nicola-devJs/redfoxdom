import { cn } from "@/shared/utils/cn";
import React from "react";

interface IProps {
  className?: string;
}

export const Logo = ({ className }: IProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border-2 border-dark px-4 py-2 text-dark dark:border-white dark:text-white",
        className,
      )}
    >
      LOGO
    </div>
  );
};
