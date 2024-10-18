import { PersonIcon } from "@/shared/icons";
import { cn } from "@/shared/utils/cn";
import React from "react";

interface IProps {
  img: string | null | undefined;
  alt: string | null | undefined;
  size?: "default" | "large";
}

export const Person = ({ alt, img, size }: IProps) => {
  const isLargeSize = size === "large";
  return (
    <div
      className={cn(
        "grid size-8 min-w-8 place-items-center rounded-full bg-gray-second",
        { "size-12 min-w-12": isLargeSize },
      )}
    >
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img}
          alt={alt || "user"}
          className={cn("size-8 min-w-8 rounded-full", {
            "size-12 min-w-12": isLargeSize,
          })}
        />
      ) : (
        <PersonIcon
          className={cn("size-4 fill-white", { "size-5": isLargeSize })}
        />
      )}
    </div>
  );
};
