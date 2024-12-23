"use client";
import React, { useState } from "react";
import { cn } from "../helpers/cn";
import { CheckIcon } from "../icons";

interface IProps<T> {
  variant?: "horizontal" | "vertical";
  radios: { label: string; value: T }[];
  name: string;
  className?: string;
  value: T;
  onChange: (value: T) => void;
}

export const Radio = <T extends string>({
  radios,
  variant,
  name,
  className,
  value,
  onChange,
}: IProps<T>) => {
  return (
    <div
      className={cn("flex gap-2", className, {
        "flex-col": variant === "vertical",
      })}
    >
      {radios.map((radio) => (
        <div key={radio.value}>
          <input type="radio" name={name} id={radio.value} className="hidden" />
          <label
            htmlFor={radio.value}
            className="inline-flex w-max cursor-pointer items-center"
            onClick={() => onChange(radio.value)}
          >
            <span
              className={cn(
                "mr-2 inline-flex size-5 items-center justify-center rounded-full border-1 border-gray transition-colors dark:border-gray-second",
                {
                  "border-primary bg-primary dark:border-primary":
                    value === radio.value,
                },
              )}
            >
              <CheckIcon
                className={cn(
                  "size-3 scale-0 fill-white transition-transform",
                  {
                    "scale-100": value === radio.value,
                  },
                )}
              />
            </span>
            <span className="text-sm">{radio.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
