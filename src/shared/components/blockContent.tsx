import React, { ReactNode } from "react";
import { cn } from "../utils/cn";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const BlockContent = ({ children, className }: IProps) => {
  return (
    <div
      className={cn(
        "h-max w-full rounded-xl border-1 border-gray p-5 shadow-lg dark:border-dark-second",
        className,
      )}
    >
      {children}
    </div>
  );
};
