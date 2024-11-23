import Image, { ImageProps } from "next/image";
import React from "react";
import { cn } from "../helpers/cn";

interface IProps extends ImageProps {
  variant?: "cover" | "contain";
}

export const NextImage = ({ className, variant, ...props }: IProps) => {
  return (
    <div className={cn("h-full w-full overflow-hidden rounded-xl", className)}>
      <Image
        className={cn("h-full w-full object-cover object-center", {
          "object-contain": variant === "contain",
        })}
        {...props}
      />
    </div>
  );
};
