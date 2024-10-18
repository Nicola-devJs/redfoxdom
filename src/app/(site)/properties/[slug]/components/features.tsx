import React from "react";

interface IProps {
  featured: string;
}

export const PropertyFeatures = ({ featured }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="size-[6px] rounded-full bg-dark/60 dark:bg-gray-second"></div>
      <span className="text-sm text-dark/60 dark:text-gray-second">
        {featured}
      </span>
    </div>
  );
};
