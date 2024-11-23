import { CheckFullIcon } from "@/shared/icons/checkFull";
import { cn } from "@/shared/helpers/cn";
import React from "react";

interface IProps {
  className?: string;
  text: string;
}

export const BenifitTag = ({ text, className }: IProps) => {
  return (
    <div
      className={cn(
        "absolute z-10 flex h-12 items-center gap-2 rounded-3xl bg-white px-5 py-3 dark:bg-dark",
        className,
      )}
    >
      <CheckFullIcon className="size-5 fill-primary" />
      <span className="font-medium capitalize">{text}</span>
    </div>
  );
};
