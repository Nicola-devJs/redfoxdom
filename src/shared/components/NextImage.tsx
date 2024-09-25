import Image, { StaticImageData } from "next/image";
import React from "react";
import { cn } from "../utils/cn";

interface IProps {
  src: string | StaticImageData;
  className?: string;
  variant?: "cover" | "contain";
  alt?: string;
}

export const NextImage = ({ src, className, variant, alt }: IProps) => {
  const getImageAlt = (image: string | StaticImageData, alt?: string) => {
    if (alt) {
      return alt;
    }

    if (typeof image === "object" && "src" in image) {
      return image.src;
    }
    return image;
  };

  return (
    <div className={cn("h-full w-full overflow-hidden rounded-xl", className)}>
      <Image
        src={src}
        alt={getImageAlt(src, alt)}
        className={cn("h-full w-full object-cover object-center", {
          "object-contain": variant === "contain",
        })}
      />
    </div>
  );
};
