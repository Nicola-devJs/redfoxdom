import { OptionType } from "@/shared/types/ui";
import { InputHTMLAttributes, ReactNode } from "react";

export interface SelectProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "defaultValue" | "value"
  > {
  defaultValue?: OptionType;
  placeholder?: string;
  options: OptionType[];
  onSelectOption?: (option: OptionType) => void;
  onSearch?: (value: string) => void;
  hideSelectOption?: boolean;
  className?: string;
  value?: OptionType;
  variant?: "default" | "secondary";
  prefix?: string;
  postfix?: string;
  CustomIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  classNameIcon?: string;
  renderCustomInput?: (selectedValue: string) => ReactNode;
  onAfterShowOptions?: (isShow: boolean) => void;
  triggerShowOptions?: boolean;
  isDropMenu?: boolean;
  label?: string;
  required?: boolean;
  showEmpty?: boolean;
  classNameContainer?: string;
}
