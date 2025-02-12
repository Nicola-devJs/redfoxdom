"use client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { DownIcon } from "@/shared/icons";
import { cn } from "../../../helpers/cn";
import { OptionType } from "../../../types/ui";
import { SelectProps } from "../model/types";
import { Label } from "../../label";
import { ErrorMessageField } from "../../errorMessageField";

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      placeholder,
      options,
      hideSelectOption,
      className,
      variant = "default",
      prefix,
      postfix,
      CustomIcon,
      classNameIcon,
      renderCustomInput,
      onAfterShowOptions,
      isDropMenu,
      label,
      required,
      onSearch,
      showEmpty,
      triggerShowOptions,
      errorMessage,
      selectedValue,
      onChangeSelectedValue,
      ...props
    },
    ref,
  ) => {
    const [showOptions, setShowOptions] = useState(false);
    const isSecondary = variant === "secondary";
    const isDefault = variant === "default";
    const selectRef = useRef<HTMLDivElement>(null);

    const getInputIcon = () => {
      if (CustomIcon) {
        return CustomIcon;
      }
      if (CustomIcon !== null) {
        return DownIcon;
      }
      return null;
    };

    const InputIcon = getInputIcon();

    const handleSelectOption = (option: OptionType) => {
      if (option.value !== selectedValue || isDropMenu) {
        onChangeSelectedValue(option.value);
        setShowOptions(false);
      }
    };

    const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      const { value } = event.target;
      onChangeSelectedValue(value);
      onSearch?.(value);
    };

    const handleCloseOptions = (event: MouseEvent) => {
      const res = selectRef.current?.contains(event.target as Node);
      if (!res) {
        setShowOptions(false);
      }
    };

    const generateSelectedValue = () => {
      const selectedOption = options.find((opt) => opt.value === selectedValue);

      return `${prefix || ""}${selectedOption?.label || ""}${postfix || ""}`;
    };

    const getOptions = () =>
      hideSelectOption
        ? options.filter((opt) => opt.value !== selectedValue)
        : options;

    const handleShowOptions = () => {
      if (getOptions().length > 0 || showEmpty) {
        setShowOptions(true);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleCloseOptions);
      return () => {
        document.removeEventListener("click", handleCloseOptions);
      };
    }, []);

    useEffect(() => {
      onAfterShowOptions?.(showOptions);
    }, [showOptions]);

    useEffect(() => {
      if (triggerShowOptions) {
        setShowOptions(triggerShowOptions);
      }
    }, [triggerShowOptions]);

    return (
      <div className="relative">
        {label && (
          <Label label={label} htmlFor={props.id} required={required} />
        )}
        <div
          className={cn("relative z-[1] w-full rounded-3xl", className)}
          ref={selectRef}
        >
          <div className="cursor-pointer" onClick={handleShowOptions}>
            {renderCustomInput ? (
              renderCustomInput(generateSelectedValue())
            ) : (
              <>
                <input
                  type="text"
                  readOnly={!onSearch}
                  id={props.id}
                  ref={ref}
                  className={cn("input-theme cursor-pointer pr-12", {
                    "h-9 rounded-lg": isSecondary,
                    "pr-4": !InputIcon,
                    "cursor-text": !!onSearch,
                  })}
                  placeholder={placeholder || "Выбрать пункт"}
                  value={generateSelectedValue()}
                  onChange={onSearch && handleChangeValue}
                />
                {InputIcon && (
                  <InputIcon
                    className={cn(
                      "absolute right-4 top-1/2 size-3 -translate-y-1/2 fill-dark/80 dark:fill-white",
                      {
                        "rotate-180": showOptions,
                      },
                      classNameIcon,
                    )}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </>
            )}
          </div>

          <ul
            className={cn(
              "pointer-events-none absolute left-0 right-0 top-[56px] w-full translate-y-4 overflow-hidden rounded-xl border-1 border-gray bg-white text-sm text-dark opacity-0 transition dark:border-dark-second dark:bg-dark dark:text-white",
              { "opacity-1 pointer-events-auto translate-y-0": showOptions },
              { "top-[46px] rounded-lg": isSecondary },
            )}
          >
            {getOptions().length > 0 ? (
              getOptions().map((opt) => (
                <li
                  className={cn(
                    "cursor-pointer p-3 transition hover:bg-gray dark:hover:bg-gray-second",
                    {
                      "bg-gray dark:bg-dark-second":
                        selectedValue === opt.value && !isDropMenu,
                    },
                  )}
                  key={opt.value}
                  onClick={() => handleSelectOption(opt)}
                >
                  {opt.label}
                </li>
              ))
            ) : (
              <li className={cn("bg-gray/30 p-5 text-center")}>Empty list</li>
            )}
          </ul>
        </div>
        {errorMessage && <ErrorMessageField errorMessage={errorMessage} />}
      </div>
    );
  },
);
