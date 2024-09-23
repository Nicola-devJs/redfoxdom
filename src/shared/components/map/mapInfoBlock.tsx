import React from "react";
import { IPropertyCard } from "../../types.ts/property";
import Image from "next/image";
import { LocationIcon } from "../../icons/location";
import { PropertyParametr } from "../propertyParametr";
import { PropertyTag } from "../propertyTag";
import { Inter } from "next/font/google";
import { cn } from "../../utils/cn";
import { NextImage } from "../NextImage";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  property: IPropertyCard;
}

export const MapInfoBlock = ({ property }: IProps) => {
  return (
    <div className={cn("flex items-center gap-4", inter.className)}>
      <NextImage
        src={property.img}
        alt={property.name}
        className="size-[200px] min-w-[200px]"
      />
      <div className="">
        <div className="mb-3 flex items-center gap-1 text-sm capitalize text-dark">
          <LocationIcon className="h-6 w-6 fill-dark/50" />
          <span>{property.location.name}</span>
        </div>
        <span className="mb-2 inline-block text-base font-bold capitalize text-dark">
          {property.name}
        </span>
        <div className="mb-3 flex items-center gap-3">
          {property.params.map((param) => (
            <PropertyParametr
              key={param.name}
              value={param.value}
              name={param.name}
              param={param.type}
              isNotDark={true}
            />
          ))}
        </div>
        <div className="flex items-center justify-between border-t-1 border-gray pt-3">
          <PropertyTag
            iconName={property.property.type}
            name={property.name}
            color="gray"
            isNotDark={true}
          />

          <span className="text-base font-bold text-dark">
            ${property.price}
          </span>
        </div>
      </div>
    </div>
  );
};
