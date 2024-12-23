import React, { TextareaHTMLAttributes } from "react";
import { cn } from "../helpers/cn";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ className, label, required, ...props }: IProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={props.id}
          className="mb-2 inline-block text-sm font-semibold capitalize"
        >
          {label + (required ? "*" : "")}
        </label>
      )}
      <textarea
        className={cn("input-theme h-20 resize-none rounded-xl", className)}
        placeholder="Enter text..."
        {...props}
      />
    </div>
  );
};
