"use client";
import React, { forwardRef } from "react";
import { cn } from "../../../helpers/cn";
import { CheckIcon } from "../../../icons";
import { RadioProps } from "../model/types";
import { ErrorMessageField } from "../../errorMessageField";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ radios, variant, className, errorMessage, ...props }, ref) => {
    return (
      <div
        className={cn("relative flex gap-2", className, {
          "flex-col": variant === "vertical",
        })}
      >
        {radios.map((radio) => (
          <div key={radio.value}>
            <input
              type="radio"
              {...props}
              id={radio.value.toString()}
              className="hidden"
              ref={ref}
            />
            <label
              htmlFor={radio.value.toString()}
              className="inline-flex w-max cursor-pointer items-center"
            >
              <span
                className={cn(
                  "mr-2 inline-flex size-5 items-center justify-center rounded-full border-1 border-gray transition-colors dark:border-gray-second",
                  {
                    "border-primary bg-primary dark:border-primary":
                      props.value === radio.value,
                  },
                )}
              >
                <CheckIcon
                  className={cn(
                    "size-3 scale-0 fill-white transition-transform",
                    {
                      "scale-100": props.value === radio.value,
                    },
                  )}
                />
              </span>
              <span className="text-sm">{radio.label}</span>
            </label>
          </div>
        ))}
        {errorMessage && <ErrorMessageField errorMessage={errorMessage} />}
      </div>
    );
  },
);
