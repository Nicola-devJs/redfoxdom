import { cn } from "@/shared/utils/cn";
import React, { ReactNode } from "react";

interface IProps {
  heading: string;
  children: ReactNode;
  className?: string;
  secondBlock?: {
    heading: string;
    body: ReactNode;
  };
}

export const PropertySection = ({
  children,
  heading,
  className,
  secondBlock,
}: IProps) => {
  return (
    <section
      className={cn("border-b-1 border-gray py-8 last:border-b-0", className)}
    >
      <h3 className="mb-3 text-2xl font-semibold capitalize">{heading}</h3>
      {children}
      {secondBlock && (
        <div className="mt-6 border-t-1 border-gray pt-8">
          <h4 className="mb-3 text-lg font-semibold capitalize">
            {secondBlock.heading}
          </h4>
          {secondBlock.body}
        </div>
      )}
    </section>
  );
};
