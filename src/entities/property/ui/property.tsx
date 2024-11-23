"use client";
import Image from "next/image";
import { IPropertyCard } from "@/shared/types/property";
import { Marker } from "@/shared/ui/marker";
import { LocationIcon } from "@/shared/icons/location";
import { PropertyParametr } from "@/shared/ui/propertyParametr";
import { PropertyTag } from "@/shared/ui/propertyTag";
import { useRouter } from "next/navigation";

export const PropertyCard = ({
  img,
  params,
  price,
  name,
  property,
  location,
}: IPropertyCard) => {
  const { push } = useRouter();

  const handleNavigateToPropertyPage = () => push("/properties/123");

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
        <span
          className="mb-2 inline-block cursor-pointer text-base font-bold capitalize text-dark hover:underline hover:underline-offset-2 dark:text-white"
          onClick={handleNavigateToPropertyPage}
        >
          {name}
        </span>
        <div className="mb-3 flex flex-wrap items-center gap-3">
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
