import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  prevIcon?: ReactNode;
  postIcon?: ReactNode;
  handlerPrev?: () => void;
  handlerPost?: () => void;
  label?: string;
}

export const Input = ({
  postIcon,
  prevIcon,
  handlerPrev,
  handlerPost,
  className,
  label,
  ...props
}: IProps) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className="mb-2 inline-block text-sm font-semibold"
      >
        {label}
      </label>
      <div className="relative">
        {prevIcon && (
          <div
            className="absolute bottom-1/2 left-4 translate-y-1/2"
            onClick={handlerPrev}
          >
            {prevIcon}
          </div>
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
          <div
            className="absolute bottom-1/2 right-4 translate-y-1/2"
            onClick={handlerPost}
          >
            {postIcon}
          </div>
        )}
      </div>
    </>
  );
};
