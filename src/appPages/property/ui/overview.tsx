import { EntityWrapper } from "@/shared/ui/index";
import { BathIcon, BedIcon, SqftIcon } from "@/shared/icons/index";
import { PropertyParamsType } from "@/shared/types/property";
import React from "react";

const mockPropertyParametrIcons: Record<
  PropertyParamsType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  bed: BedIcon,
  bath: BathIcon,
  sqft: SqftIcon,
};

interface IProps {
  type: PropertyParamsType;
  value: string | number;
  name: string;
}

export const PropertyOverview = ({ name, type, value }: IProps) => {
  const PropertyParametrIcon = mockPropertyParametrIcons[type];

  return (
    <div className="flex items-start gap-2">
      <EntityWrapper className="size-12">
        <PropertyParametrIcon className="size-5 fill-dark dark:fill-white" />
      </EntityWrapper>
      <div className="flex flex-col">
        <span className="text-sm capitalize text-dark/50 after:content-[':'] dark:text-gray-second">
          {name}
        </span>
        <span className="text-sm font-semibold capitalize">{value}</span>
      </div>
    </div>
  );
};
