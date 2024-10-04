import Image, { StaticImageData } from "next/image";
import React from "react";

import Link from "next/link";
import { ArrowRightIcon } from "@/shared/icons/arrowRight";
import { mockTestImages } from "@/shared/constants/property";
import { List } from "@/shared/components/list";
import { NextImage } from "@/shared/components/NextImage";

// TODO temp mock data

const citiesMock: IProps[] = [
  { img: mockTestImages.burgas, city: "Burgas", countProperties: 567 },
  { img: mockTestImages.meleniko, city: "Meleniko", countProperties: 234 },
  { img: mockTestImages.obzor, city: "Obzor", countProperties: 444 },
  { img: mockTestImages.nesebr, city: "Nesebr", countProperties: 345 },
  { img: mockTestImages.plovdiv, city: "Plovdiv", countProperties: 456 },
  { img: mockTestImages.sofia, city: "Sofia", countProperties: 890 },
];

interface IProps {
  img: string | StaticImageData;
  city: string;
  countProperties: number;
}

// Второй вариант отображение городов с ссылкой

const ExploreItem = ({ city, countProperties, img }: IProps) => {
  return (
    <div className="flex h-[130px]" key={city}>
      <NextImage
        src={img}
        alt={city}
        className="w-[45%] min-w-[45%] max-w-full rounded-s-2xl"
      />
      <div className="w-full rounded-e-2xl border-1 border-l-0 border-gray p-3 dark:border-dark-second">
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

const ExploreItemWithoutLink = ({ img, city, countProperties }: IProps) => {
  return (
    <div className="w-full">
      <NextImage src={img} alt={city} className="mb-4 h-[240px]" />
      <div className="">
        <span className="mb-1 block text-lg font-semibold text-dark dark:text-white">
          {city}
        </span>
        <span className="block text-sm font-light text-dark/50 dark:text-white/50">
          {countProperties} properties
        </span>
      </div>
    </div>
  );
};

// TODO удалить абстракцию ExploreList после получения реальных данных, оставить только ExploreItem

export const ExploreList = () => {
  return (
    <List
      className="mb-8 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-phone:grid-cols-1"
      ItemList={ExploreItemWithoutLink}
      list={citiesMock}
      keyProp="city"
      colSpanItems={{ startId: 4, span: 2 }}
    />
  );
};
