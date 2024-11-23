"use client";
import React, {
  createRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { DownIcon } from "../icons/down";
import { cn } from "../helpers/cn";
import { OptionType } from "../types/ui";

interface IProps {
  defaultValue?: OptionType;
  placeholder?: string;
  options: OptionType[];
  handleSelectOptions?: (option: OptionType) => void;
  hideSelectOption?: boolean;
  className?: string;
  variant?: "default" | "secondary";
  prefix?: string;
  postfix?: string;
  CustomIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  classNameIcon?: string;
  renderCustomInput?: (selectedValue: string) => ReactNode;
  onShowOptions?: (isShow: boolean) => void;
  isDropMenu?: boolean;
}

export const Select = ({
  defaultValue,
  placeholder,
  options,
  handleSelectOptions,
  hideSelectOption,
  className,
  variant = "default",
  prefix,
  postfix,
  CustomIcon,
  classNameIcon,
  renderCustomInput,
  onShowOptions,
  isDropMenu,
}: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectValue, setSelectValue] = useState<OptionType>({
    label: defaultValue?.label || placeholder || "Выбрать пункт",
    value: defaultValue?.value || "",
  });
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

  const onSelectOption = (option: OptionType) => {
    if (option.value !== selectValue.value || isDropMenu) {
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

  const handleShowOptions = () => {
    if (options.length > 0) {
      setShowOptions(!showOptions);
    }
  };
  const generateSelectedValue = () =>
    `${prefix || ""}${selectValue.label}${postfix || ""}`;

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

  useEffect(() => {
    onShowOptions?.(showOptions);
  }, [showOptions]);

  return (
    <div className={cn("relative z-[1] w-full", className)} ref={selectRef}>
      <label className="cursor-pointer" onClick={handleShowOptions}>
        {renderCustomInput ? (
          renderCustomInput(generateSelectedValue())
        ) : (
          <>
            <input
              type="text"
              readOnly
              className={cn("input-theme cursor-pointer pr-12", {
                "h-9 rounded-lg": isSecondary,
                "pr-4": !InputIcon,
              })}
              value={generateSelectedValue()}
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
      </label>

      <ul
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-[56px] w-full translate-y-4 overflow-hidden rounded-xl border-1 border-gray bg-white text-sm text-dark opacity-0 transition dark:border-dark-second dark:bg-dark dark:text-white",
          { "opacity-1 pointer-events-auto translate-y-0": showOptions },
          { "top-[46px] rounded-lg": isSecondary },
        )}
      >
        {getOptions().map((opt) => (
          <li
            className={cn(
              "cursor-pointer p-3 transition hover:bg-gray dark:hover:bg-gray-second",
              {
                "bg-gray dark:bg-dark-second":
                  selectValue.value === opt.value && !isDropMenu,
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
