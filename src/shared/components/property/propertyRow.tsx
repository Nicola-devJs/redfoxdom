import Image from "next/image";
import { IPropertyCard } from "@/shared/types.ts/property";
import { Marker } from "../marker";
import { PropertyParametr } from "../propertyParametr";
import { LocationIcon } from "@/shared/icons/location";
import { PropertyTag } from "../propertyTag";

export const PropertyCardRow = ({
  img,
  params,
  price,
  name,
  property,
  location,
}: IPropertyCard) => {
  return (
    <div className="flex w-full">
      <div className="relative h-auto w-[210px] min-w-[210px] overflow-hidden rounded-l-xl">
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
        <div className="mb-3 flex flex-wrap items-center gap-2">
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
