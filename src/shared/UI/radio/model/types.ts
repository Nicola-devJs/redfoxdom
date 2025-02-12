import { OptionType } from "@/shared/types/ui";
import { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "horizontal" | "vertical";
  radios: OptionType[];
  errorMessage?: string;
}
