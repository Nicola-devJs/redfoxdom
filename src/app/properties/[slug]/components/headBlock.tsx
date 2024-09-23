import { PropertyParametr } from "@/shared/components/propertyParametr";
import { WrapperBlock } from "@/shared/components/wrapperBlock";
import { HeartEmptyIcon } from "@/shared/icons/heart/heartEmpty";
import { LocationIcon } from "@/shared/icons/location";
import { ShareIcon } from "@/shared/icons/share";
import { PropertyParamsType } from "@/shared/types.ts/property";
import React from "react";

interface IProps {
  name: string;
  price: number;
  params: { type: PropertyParamsType; value: string | number; name: string }[];
  location: string;
}

export const HeadBlock = ({ location, name, params, price }: IProps) => {
  return (
    <div className="container-block">
      <div className="flex items-center justify-between border-b-1 border-gray py-6 dark:border-dark-second">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="flex items-end">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-second">/month</span>
        </div>
      </div>
      <div className="grid grid-cols-[auto_auto_1fr] items-end gap-10 py-6">
        <div className="">
          <span className="mb-2 inline-block font-medium text-dark/80 dark:text-gray">
            Features
          </span>
          <div className="flex items-center gap-3">
            {params.map((param) => (
              <PropertyParametr
                key={param.type}
                name={param.name}
                param={param.type}
                value={param.value}
              />
            ))}
          </div>
        </div>
        <div className="">
          <span className="mb-2 inline-block font-medium text-dark/80 dark:text-gray">
            Location
          </span>

          <div className="flex items-center gap-1">
            <LocationIcon className="size-4 fill-dark/50 dark:fill-gray-second" />
            <span className="whitespace-nowrap text-sm capitalize text-dark/50 dark:text-gray-second">
              {location}
            </span>
          </div>
        </div>
        <div className="flex gap-2 justify-self-end">
          <WrapperBlock className="w-9 cursor-pointer">
            <HeartEmptyIcon className="size-4 fill-gray-second" />
          </WrapperBlock>
          <WrapperBlock className="w-9 cursor-pointer">
            <ShareIcon className="size-4 fill-gray-second" />
          </WrapperBlock>
        </div>
      </div>
    </div>
  );
};
