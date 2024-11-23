import React, { TextareaHTMLAttributes } from "react";
import { cn } from "../helpers/cn";

export const Textarea = ({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={cn("input-theme h-20 resize-none rounded-xl", className)}
      placeholder="Enter text..."
      {...props}
    />
  );
};
