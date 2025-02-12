import { forwardRef } from "react";
import { cn } from "../../../helpers/cn";
import { Label } from "../../label";
import { InputProps } from "../model/types";
import { ErrorMessageField } from "../../errorMessageField";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      postIcon,
      prevIcon,
      handlerPrev,
      handlerPost,
      className,
      label,
      required,
      errorMessage,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <div className="relative">
        {label && (
          <Label label={label} htmlFor={props.id} required={required} />
        )}

        <div className="relative">
          {prevIcon && (
            <div
              className="absolute bottom-1/2 left-4 translate-y-1/2"
              onClick={handlerPrev}
            >
              {prevIcon}
            </div>
          )}

          <input
            type="text"
            placeholder="Enter text..."
            ref={ref}
            {...props}
            className={cn(
              "input-theme",
              {
                "pl-12": !!prevIcon,
                "pr-12": !!postIcon,
                "border-error": !!errorMessage,
              },
              className,
            )}
          />
          {postIcon && (
            <div
              className="absolute bottom-1/2 right-4 translate-y-1/2"
              onClick={handlerPost}
            >
              {postIcon}
            </div>
          )}
        </div>
        {errorMessage && <ErrorMessageField errorMessage={errorMessage} />}
      </div>
    );
  },
);
