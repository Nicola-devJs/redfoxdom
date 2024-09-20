"use client";
import { DownIcon } from "@/shared/icons/down";
import { OptionType } from "@/shared/types.ts/ui";
import { cn } from "@/shared/utils/cn";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  ComponentIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  placeholder: string;
  options: OptionType[];
  defaultValue?: OptionType;
  classNameIcon?: string;
}

export const SelectFilter = ({
  placeholder,
  title,
  ComponentIcon,
  defaultValue,
  options,
  classNameIcon,
}: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<OptionType>({
    label: defaultValue?.label || placeholder || "Выбрать пункт",
    value: defaultValue?.value || "",
  });
  const selectRef = useRef<HTMLDivElement>(null);

  const onSelectOption = (option: OptionType) => {
    if (option.value !== selectedFilter.value) {
      setSelectedFilter(option);
      setShowOptions(false);
    }
  };

  const handleChangeSelected: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setSelectedFilter({ value: event.target.value, label: event.target.value });
  };

  const handleCloseOptions = (event: MouseEvent) => {
    const res = selectRef.current?.contains(event.target as Node);
    if (!res) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseOptions);
    return () => {
      document.removeEventListener("click", handleCloseOptions);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className="relative z-[1] h-full w-full border-r-1 border-gray pr-4 last:border-none last:pr-0 dark:border-dark"
    >
      <span className="text-sm capitalize text-dark/50 dark:text-gray-second">
        {title}
      </span>
      <div
        className="mt-1 flex w-full items-center justify-between gap-2"
        onClick={() => setShowOptions(!showOptions)}
      >
        <input
          type="text"
          className="w-full bg-transparent font-semibold focus:outline-none"
          value={selectedFilter.label}
          onChange={handleChangeSelected}
        />
        {ComponentIcon && (
          <ComponentIcon
            className={cn(
              "size-3 fill-dark/80 dark:fill-gray-second",
              {
                "rotate-180": showOptions,
              },
              classNameIcon,
            )}
          />
        )}
      </div>
      <ul
        className={cn(
          "pointer-events-none absolute -left-2 right-0 top-[80px] min-w-full translate-y-4 overflow-hidden rounded-lg bg-white text-sm text-dark opacity-0 shadow-lg transition dark:bg-dark-second dark:text-white",
          { "opacity-1 pointer-events-auto translate-y-0": showOptions },
        )}
      >
        {options.map((opt) => (
          <li
            className={cn(
              "cursor-pointer p-3 transition hover:bg-gray dark:hover:bg-gray-second",
              {
                "bg-gray dark:bg-gray-second":
                  selectedFilter.value === opt.value,
              },
            )}
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
