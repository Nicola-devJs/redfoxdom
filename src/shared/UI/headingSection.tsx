import React, { ReactNode } from "react";
import { cn } from "../helpers/cn";

interface IProps {
  children: ReactNode;
  supTitle: string;
  title: string;
  align?: "right" | "left";
  className?: string;
}

export const HeadingSection = ({
  children,
  title,
  supTitle,
  align,
  className,
}: IProps) => {
  return (
    <section className={cn("container-block mt-s-80", className)}>
      <h3
        className={cn(
          "mb-2 text-center text-sm font-medium uppercase text-primary",
          { "text-left": align === "left", "text-right": align === "right" },
        )}
      >
        {supTitle}
      </h3>
      <h2
        className={cn(
          "mb-8 text-center text-4xl font-bold capitalize max-md:text-3xl",
          { "text-left": align === "left", "text-right": align === "right" },
        )}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
