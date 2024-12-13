import {
  ApartmentIcon,
  HouseIcon,
  OfficeIcon,
  VillaIcon,
} from "@/shared/icons/index";
import React from "react";
import { cn } from "../helpers/cn";
import { PropertyType } from "../types/property";

const mockPropertyIcons: Record<
  PropertyType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  house: HouseIcon,
  apartment: ApartmentIcon,
  villa: VillaIcon,
  office: OfficeIcon,
};

interface IProps {
  name: string;
  iconName: PropertyType;
  variant?: "default" | "small";
  color?: "white" | "gray";
  isNotDark?: boolean;
}

export const PropertyTag = ({
  iconName,
  name,
  variant = "default",
  color = "white",
  isNotDark,
}: IProps) => {
  const PropertyIcon = mockPropertyIcons[iconName];

  return (
    <div className="flex items-center">
      <div
        className={cn(
          "mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray/60",
          { "bg-dark/80": color === "gray" },
          { "mr-1 h-6 w-6": variant === "small" },
          { "dark:bg-gray": !isNotDark && color === "gray" },
        )}
      >
        <PropertyIcon
          className={cn(
            "h-6 w-6 fill-white",
            {
              "h-[18px] w-[18px]": variant === "small",
            },
            { "dark:fill-dark": !isNotDark && color === "gray" },
          )}
        />
      </div>
      <span
        className={cn(
          "font-mediaum text-sm text-white",
          {
            "text-dark/80": color === "gray",
          },
          { "text-xs font-normal": variant === "small" },
          { "dark:text-gray": !isNotDark && color === "gray" },
        )}
      >
        {name}
      </span>
    </div>
  );
};
