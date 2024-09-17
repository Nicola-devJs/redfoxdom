import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  prevIcon?: ReactNode;
  postIcon?: ReactNode;
  handlerPrev?: () => void;
  handlerPost?: () => void;
}

export const Input = ({
  postIcon,
  prevIcon,
  handlerPrev,
  handlerPost,
  className,
  ...props
}: IProps) => {
  return (
    <div className="relative">
      {prevIcon && (
        <div className="absolute left-4 top-2 h-6 w-6">{prevIcon}</div>
      )}

      <input
        type="text"
        placeholder="Enter text..."
        {...props}
        className={cn(
          "input-theme",
          { "pl-12": !!prevIcon },
          { "pr-12": !!postIcon },
          className,
        )}
      />
      {postIcon && (
        <div className="absolute right-4 top-2 h-6 w-6" onClick={handlerPost}>
          {postIcon}
        </div>
      )}
    </div>
  );
};
