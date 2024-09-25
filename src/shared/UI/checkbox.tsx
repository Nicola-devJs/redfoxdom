import React, { useState } from "react";
import { CheckIcon } from "../icons/check";
import { cn } from "../utils/cn";

interface IProps {
  value: { value: string; label: string };
}

export const Checkbox = ({ value }: IProps) => {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <input type="checkbox" className="hidden" id={value.value} />
      <label
        htmlFor={value.value}
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
        <span>{value.label}</span>
      </label>
    </div>
  );
};
