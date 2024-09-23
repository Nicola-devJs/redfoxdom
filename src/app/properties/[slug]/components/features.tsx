import React from "react";

interface IProps {
  featured: string;
}

export const PropertyFeatures = ({ featured }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="size-[6px] rounded-full bg-dark/60"></div>
      <span className="text-sm text-dark/60">{featured}</span>
    </div>
  );
};
