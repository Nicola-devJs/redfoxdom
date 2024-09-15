import { ApartmentIcon } from "@/app/icons/apartment";
import { HouseIcon } from "@/app/icons/house";
import { OfficeIcon } from "@/app/icons/office";
import { VillaIcon } from "@/app/icons/villa";
import React from "react";
import { cn } from "../utils/cn";
import { PropertyType } from "../types.ts/property";

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
}

export const PropertyTag = ({
  iconName,
  name,
  variant = "default",
  color = "white",
}: IProps) => {
  const PropertyIcon = mockPropertyIcons[iconName];

  return (
    <div className="flex items-center">
      <div
        className={cn(
          "mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray/60",
          { "bg-dark/80 dark:bg-gray": color === "gray" },
          { "mr-1 h-6 w-6": variant === "small" },
        )}
      >
        <PropertyIcon
          className={cn(
            "h-6 w-6 fill-white",
            {
              "h-[18px] w-[18px]": variant === "small",
            },
            { "dark:fill-dark": color === "gray" },
          )}
        />
      </div>
      <span
        className={cn(
          "font-mediaum text-sm text-white",
          {
            "text-dark/80 dark:text-gray": color === "gray",
          },
          { "text-xs font-normal": variant === "small" },
        )}
      >
        {name}
      </span>
    </div>
  );
};
