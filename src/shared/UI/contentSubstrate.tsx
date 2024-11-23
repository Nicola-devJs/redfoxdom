import React, { ReactNode } from "react";
import { cn } from "../helpers/cn";

interface IProps {
  children: ReactNode;
  className?: string;
  title?: string;
  isBorder?: boolean;
}

export const ContentSubstrate = ({
  children,
  className,
  title,
  isBorder,
}: IProps) => {
  return (
    <div
      className={cn(
        "h-max w-full rounded-xl bg-white p-5 shadow-lg dark:bg-dark",
        { "border-1 border-gray dark:border-dark-second": isBorder },
        className,
      )}
    >
      {title && <h3 className="mb-4 text-2xl font-medium">{title}</h3>}
      {children}
    </div>
  );
};
