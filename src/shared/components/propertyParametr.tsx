import React from "react";
import { PropertyParamsType } from "../types.ts/property";
import { BedIcon } from "../icons/property/bed";
import { BathIcon } from "../icons/property/bath";
import { SqftIcon } from "../icons/property/sqft";

const mockPropertyParametrIcons: Record<
  PropertyParamsType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  bed: BedIcon,
  bath: BathIcon,
  sqft: SqftIcon,
};

interface IProps {
  param: PropertyParamsType;
  value: number;
  name: string;
}

export const PropertyParametr = ({ name, param, value }: IProps) => {
  const PropertyParametrIcon = mockPropertyParametrIcons[param];

  return (
    <div className="flex items-center gap-1">
      <PropertyParametrIcon className="h-5 w-5 fill-dark/50 dark:fill-gray-second" />
      <span className="text-sm capitalize text-dark/50 dark:text-gray-second">
        {name}:
      </span>
      <span className="text-sm font-medium dark:text-white">{value}</span>
    </div>
  );
};
