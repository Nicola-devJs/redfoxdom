import React from "react";
import { PropertyParamsType } from "../types.ts/property";
import { BedIcon } from "../icons/property/bed";
import { BathIcon } from "../icons/property/bath";
import { SqftIcon } from "../icons/property/sqft";
import { cn } from "../utils/cn";

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
  isNotDark?: boolean;
}

export const PropertyParametr = ({ name, param, value, isNotDark }: IProps) => {
  const PropertyParametrIcon = mockPropertyParametrIcons[param];

  return (
    <div className="flex items-center gap-1">
      <PropertyParametrIcon
        className={cn("h-5 w-5 fill-dark/50", {
          "dark:fill-gray-second": !isNotDark,
        })}
      />
      <span
        className={cn("text-sm capitalize text-dark/50", {
          "dark:text-gray-second": !isNotDark,
        })}
      >
        {name}:
      </span>
      <span
        className={cn("text-sm font-medium text-dark", {
          "dark:text-white": !isNotDark,
        })}
      >
        {value}
      </span>
    </div>
  );
};
