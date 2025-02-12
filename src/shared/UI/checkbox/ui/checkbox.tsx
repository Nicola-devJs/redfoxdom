"use client";
import React, { forwardRef, useState } from "react";
import { CheckIcon } from "@/shared/icons";
import { cn } from "../../../helpers/cn";
import { CheckboxProps } from "../model/types";
import { ErrorMessageField } from "../../errorMessageField";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, label, errorMessage, ...props }, ref) => {
    return (
      <div className="relative">
        <input type="checkbox" {...props} className="hidden" ref={ref} />

        <label
          htmlFor={props.id}
          className="inline-flex w-max cursor-pointer items-center"
        >
          <span
            className={cn(
              "mr-2 inline-flex size-5 items-center justify-center rounded-md border-1 border-gray transition-colors dark:border-gray-second",
              {
                "border-primary bg-primary dark:border-primary": props.checked,
              },
            )}
          >
            <CheckIcon
              className={cn("size-3 scale-0 fill-white transition-transform", {
                "scale-100": props.checked,
              })}
            />
          </span>
          <span className="text-sm">{label}</span>
        </label>
        {errorMessage && <ErrorMessageField errorMessage={errorMessage} />}
      </div>
    );
  },
);
