import React, { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "../../../helpers/cn";
import { Label } from "../../label";
import { TextareaProps } from "../model/types";
import { ErrorMessageField } from "../../errorMessageField";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, required, errorMessage, ...props }, ref) => {
    return (
      <div className="relative">
        {label && (
          <Label label={label} htmlFor={props.id} required={required} />
        )}
        <textarea
          className={cn(
            "input-theme h-20 resize-none rounded-xl",
            { "border-error": !!errorMessage },
            className,
          )}
          placeholder="Enter text..."
          {...props}
          ref={ref}
        />
        {errorMessage && <ErrorMessageField errorMessage={errorMessage} />}
      </div>
    );
  },
);
