import { DeleteIcon, PictureIcon } from "@/shared/icons";
import React from "react";
import { NextImage } from "../../nextImage";
import { cn } from "@/shared/helpers/cn";

interface IProps {
  onDragStart?: React.DragEventHandler<HTMLDivElement>;
  onDragLeave?: React.DragEventHandler<HTMLDivElement>;
  onDragOver?: React.DragEventHandler<HTMLDivElement>;
  onDrop?: React.DragEventHandler<HTMLDivElement>;
  index?: number;
  onDelete: VoidFunction;
  imgUrl: string;
  name: string;
  className?: string;
  variant?: "cover" | "contain";
}

export const UploadImageItem = ({
  imgUrl,
  index,
  name,
  onDelete,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  className,
  variant,
}: IProps) => {
  return (
    <div
      draggable={Boolean(onDragStart)}
      onDragStart={onDragStart}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      className={cn("relative h-[120px] w-full rounded-xl bg-gray", className)}
    >
      {index === 0 && (
        <span className="absolute left-1 top-1 flex size-6 items-center justify-center rounded-full bg-dark/70">
          <PictureIcon className="size-3" />
        </span>
      )}

      <span
        className="absolute right-1 top-1 flex size-6 cursor-pointer items-center justify-center rounded-full bg-dark/70 transition-colors hover:bg-dark/90"
        onClick={onDelete}
      >
        <DeleteIcon className="size-3" />
      </span>
      <NextImage
        src={imgUrl}
        alt={name}
        width={200}
        height={120}
        variant={variant}
      />
    </div>
  );
};
