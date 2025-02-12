import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prevIcon?: ReactNode;
  postIcon?: ReactNode;
  handlerPrev?: () => void;
  handlerPost?: () => void;
  label?: string;
  errorMessage?: string;
}
