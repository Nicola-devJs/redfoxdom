import Image, { StaticImageData } from "next/image";
import React from "react";
import { mockTestImages } from "../constants";
import { PropertyTag } from "./propertyTag";
import { PropertyParamsType, PropertyType } from "../types.ts/property";
import { PropertyParametr } from "./propertyParametr";
import { List } from "./list";
import { LocationIcon } from "../icons/property/location";
import { Marker } from "./marker";

const mockPropertyCards: IProps[] = [
  {
    img: mockTestImages.burgas,
    name: "Costa rika",
    params: [
      { name: "Beds", type: "bed", value: 2 },
      { name: "Baths", type: "bath", value: 3 },
      { name: "Square", type: "sqft", value: 1150 },
    ],
    price: 1100,
    property: { name: "Apartment", type: "apartment" },
  },
  {
    img: mockTestImages.meleniko,
    name: "Costa rika",
    params: [
      { name: "Beds", type: "bed", value: 2 },
      { name: "Baths", type: "bath", value: 3 },
      { name: "Square", type: "sqft", value: 1150 },
    ],
    price: 1100,
    property: { name: "Villa", type: "villa" },
  },
  {
    img: mockTestImages.nesebr,
    name: "Costa rika",
    params: [
      { name: "Beds", type: "bed", value: 2 },
      { name: "Baths", type: "bath", value: 3 },
      { name: "Square", type: "sqft", value: 1150 },
    ],
    price: 1100,
    property: { name: "House", type: "house" },
  },
];

interface IProps {
  img: string | StaticImageData;
  name: string;
  price: number;
  property: { type: PropertyType; name: string };
  params: { type: PropertyParamsType; value: number; name: string }[];
}

const PropertyCard = ({ img, params, price, name, property }: IProps) => {
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
          <LocationIcon className="h-4 w-4 fill-white" /> 123 Chekalova, Burgase
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

export const PropertyList = () => {
  return (
    <List list={mockPropertyCards} ItemList={PropertyCard} keyProp="name" />
  );
};
