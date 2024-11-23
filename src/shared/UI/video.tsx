import React from "react";
import { cn } from "../helpers/cn";

interface IProps {
  className?: string;
  src: string;
}

export const Video = ({ src, className }: IProps) => {
  return (
    <div className={cn("h-full w-full overflow-hidden rounded-3xl", className)}>
      <video controls className="h-full w-full">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
