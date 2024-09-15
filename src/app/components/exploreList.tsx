import Image, { StaticImageData } from "next/image";
import React from "react";

import Link from "next/link";
import { ArrowRightIcon } from "@/shared/icons/arrowRight";
import { mockTestImages } from "@/shared/constants";
import { List } from "@/shared/components/list";

// TODO temp mock data

const citiesMock: IProps[] = [
  { img: mockTestImages.burgas, city: "Burgas", countProperties: 567 },
  { img: mockTestImages.meleniko, city: "Meleniko", countProperties: 234 },
  { img: mockTestImages.obzor, city: "Obzor", countProperties: 444 },
  { img: mockTestImages.nesebr, city: "Nesebr", countProperties: 345 },
  { img: mockTestImages.plovdiv, city: "Plovdiv", countProperties: 456 },
  { img: mockTestImages.sofia, city: "Sofia", countProperties: 890 },
  { img: mockTestImages.varna, city: "Varna", countProperties: 234 },
  { img: mockTestImages.nesebr, city: "Nesebr", countProperties: 345 },
  { img: mockTestImages.plovdiv, city: "Plovdiv", countProperties: 456 },
];

interface IProps {
  img: string | StaticImageData;
  city: string;
  countProperties: number;
}

const ExploreItem = ({ city, countProperties, img }: IProps) => {
  return (
    <div className="flex h-[130px]" key={city}>
      <Image
        src={img}
        alt={city}
        className="w-[45%] min-w-[45%] max-w-full rounded-s-2xl object-cover"
      />
      <div className="dark:border-dark-second w-full rounded-e-2xl border-1 border-l-0 border-gray p-3">
        <span className="mb-1 block text-lg font-semibold text-dark dark:text-white">
          {city}
        </span>
        <span className="mb-4 block text-sm text-dark/50 dark:text-white/50">
          {countProperties} properties
        </span>
        <Link
          href="#"
          className="flex items-center gap-1 text-sm font-semibold capitalize text-dark dark:text-white"
        >
          Explore now
          <ArrowRightIcon className="h-4 w-4 fill-primary" />
        </Link>
      </div>
    </div>
  );
};

// TODO удалить абстракцию ExploreList после получения реальных данных, оставить только ExploreItem

export const ExploreList = () => {
  return (
    <List
      className="mb-8"
      ItemList={ExploreItem}
      list={citiesMock}
      keyProp="city"
    />
  );
};
