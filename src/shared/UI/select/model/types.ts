import { OptionType } from "@/shared/types/ui";
import { InputHTMLAttributes, ReactNode } from "react";

export interface SelectProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "defaultValue" | "value"
  > {
  placeholder?: string;
  options: OptionType[];
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
  errorMessage?: string;
  selectedValue: string | number;
  onChangeSelectedValue: (value: string | number) => void;
}

export interface SelectAutocompleteProps extends SelectProps {
  onFilterOptions: (value: string) => void;
}
