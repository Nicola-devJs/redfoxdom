"use client";
import React, { useState } from "react";
import { CheckIcon } from "@/shared/icons";
import { cn } from "../helpers/cn";

interface IProps {
  label?: string;
  name: string;
}

export const Checkbox = ({ name, label }: IProps) => {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <input type="checkbox" name={name} id={name} className="hidden" />
      <label
        htmlFor={name}
        className="inline-flex w-max cursor-pointer items-center"
        onClick={() => setCheck(!check)}
      >
        <span
          className={cn(
            "mr-2 inline-flex size-5 items-center justify-center rounded-md border-1 border-gray transition-colors dark:border-gray-second",
            { "border-primary bg-primary dark:border-primary": check },
          )}
        >
          <CheckIcon
            className={cn("size-3 scale-0 fill-white transition-transform", {
              "scale-100": check,
            })}
          />
        </span>
        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
};
