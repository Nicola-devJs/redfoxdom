import React, { ReactNode } from "react";
import { cn } from "../helpers/cn";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const EntityWrapper = ({ children, onClick, className }: IProps) => {
  return (
    <div
      className={cn(
        "flex h-9 items-center justify-center rounded-lg border-1 border-gray p-2 dark:border-dark-second",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
