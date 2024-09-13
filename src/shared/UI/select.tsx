"use client";
import React, { createRef, useEffect, useRef, useState } from "react";
import { DownIcon } from "../icons/down";
import { cn } from "../utils/cn";
import { OptionType } from "../types.ts/ui";

interface IProps {
  defaultValue?: OptionType;
  placeholder?: string;
  options: OptionType[];
  handleSelectOptions?: (option: OptionType) => void;
  hideSelectOption?: boolean;
  className?: string;
}

export const Select = ({
  defaultValue,
  placeholder,
  options,
  handleSelectOptions,
  hideSelectOption,
  className,
}: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectValue, setSelectValue] = useState<OptionType>({
    label: defaultValue?.label || placeholder || "Выбрать пункт",
    value: defaultValue?.value || "",
  });
  const selectRef = useRef<HTMLDivElement>(null);

  const onSelectOption = (option: OptionType) => {
    if (option.value !== selectValue.value) {
      setSelectValue(option);
      setShowOptions(false);
      handleSelectOptions?.(option);
    }
  };

  const handleCloseOptions = (event: MouseEvent) => {
    const res = selectRef.current?.contains(event.target as Node);
    if (!res) {
      setShowOptions(false);
    }
  };

  const getOptions = () =>
    hideSelectOption
      ? options.filter((opt) => opt.value !== selectValue.value)
      : options;

  useEffect(() => {
    document.addEventListener("click", handleCloseOptions);
    return () => {
      document.removeEventListener("click", handleCloseOptions);
    };
  }, []);

  return (
    <div className={cn("h-ui relative w-full", className)} ref={selectRef}>
      <label
        className="cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <input
          type="text"
          readOnly
          className={cn("input-theme", "cursor-pointer pr-12")}
          value={selectValue.label}
        />
        <DownIcon
          className={cn("absolute right-4 top-1/2 -translate-y-1/2", {
            "rotate-180": showOptions,
          })}
        />
      </label>

      <ul
        className={cn(
          "text-dark border-gray pointer-events-none absolute left-0 right-0 top-[56px] w-full translate-y-4 overflow-hidden rounded-xl border-[1px] bg-white text-sm opacity-0 transition",
          { "opacity-1 pointer-events-auto translate-y-0": showOptions },
        )}
      >
        {getOptions().map((opt) => (
          <li
            className={cn("hover:bg-gray cursor-pointer p-3 transition", {
              "bg-gray": selectValue.value === opt.value,
            })}
            key={opt.value}
            onClick={() => onSelectOption(opt)}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
