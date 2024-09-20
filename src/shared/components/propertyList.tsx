import Image from "next/image";
import React from "react";
import { mockPropertyCards } from "../constants";
import { PropertyTag } from "./propertyTag";
import { IPropertyCard } from "../types.ts/property";
import { PropertyParametr } from "./propertyParametr";
import { List } from "./list";
import { LocationIcon } from "../icons/property/location";
import { Marker } from "./marker";

const PropertyCard = ({
  img,
  params,
  price,
  name,
  property,
  location,
}: IPropertyCard) => {
  return (
    <div className="w-full">
      <div className="relative h-[210px] w-full overflow-hidden rounded-t-xl">
        <Marker
          items={[
            ["primary", "featured"],
            ["second", "for sale"],
          ]}
        />
        <Image src={img} alt={name} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 z-10 flex h-10 items-center gap-1 bg-gradient-to-t from-dark/80 to-transparent pl-3 text-xs font-light capitalize text-white">
          <LocationIcon className="h-4 w-4 fill-white" /> {location.name}
        </div>
      </div>
      <div className="rounded-b-xl border-1 border-gray p-4 dark:border-dark-second">
        <span className="mb-2 inline-block text-base font-bold capitalize text-dark dark:text-white">
          {name}
        </span>
        <div className="mb-3 flex items-center gap-3">
          {params.map((param) => (
            <PropertyParametr
              key={param.name}
              value={param.value}
              name={param.name}
              param={param.type}
            />
          ))}
        </div>
        <div className="flex items-center justify-between border-t-1 border-gray pt-3 dark:border-dark-second">
          <PropertyTag
            iconName={property.type}
            name={property.name}
            color="gray"
          />

          <span className="text-base font-bold text-dark dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

const PropertyCardRow = ({
  img,
  params,
  price,
  name,
  property,
  location,
}: IPropertyCard) => {
  return (
    <div className="flex w-full">
      <div className="relative size-[210px] min-w-[210px] overflow-hidden rounded-l-xl">
        <Marker
          items={[
            ["primary", "featured"],
            ["second", "for sale"],
          ]}
        />
        <Image src={img} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="w-full rounded-r-xl border-1 border-gray p-4 dark:border-dark-second">
        <span className="mb-2 inline-block text-base font-bold capitalize text-dark dark:text-white">
          {name}
        </span>
        <div className="mb-3 flex items-center gap-3">
          {params.map((param) => (
            <PropertyParametr
              key={param.name}
              value={param.value}
              name={param.name}
              param={param.type}
            />
          ))}
        </div>
        <div className="mb-2 flex h-10 items-center gap-1 text-sm capitalize text-dark/50 dark:text-gray-second">
          <LocationIcon className="h-5 w-5 fill-dark/50 dark:fill-gray-second" />{" "}
          {location.name}
        </div>
        <div className="flex items-center justify-between border-t-1 border-gray pt-3 dark:border-dark-second">
          <PropertyTag
            iconName={property.type}
            name={property.name}
            color="gray"
          />

          <span className="text-base font-bold text-dark dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export const PropertyList = () => {
  return (
    <List list={mockPropertyCards} ItemList={PropertyCard} keyProp="name" />
  );
};

export const PropertyListRow = () => {
  return (
    <List
      list={mockPropertyCards}
      ItemList={PropertyCardRow}
      keyProp="name"
      className="grid-cols-2"
    />
  );
};
