import { InputHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: IProps) => {
  return (
    <input
      type="text"
      placeholder="Enter text..."
      {...props}
      className={cn("input-theme", props.className)}
    />
  );
};
