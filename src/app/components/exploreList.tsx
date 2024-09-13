import Image, { StaticImageData } from "next/image";
import React from "react";
import burgasImage from "@/shared/assets/burgas.jpg";
import melenikoImage from "@/shared/assets/Meleniko.jpg";
import obzorImage from "@/shared/assets/Obzor.jpg";
import nesebrImage from "@/shared/assets/nesebr.jpg";
import plovdivImage from "@/shared/assets/plovdiv.webp";
import sofiaImage from "@/shared/assets/sofia.jpg";
import varnaImage from "@/shared/assets/varna.jpg";

import Link from "next/link";
import { ArrowRightIcon } from "@/shared/icons/arrowRight";

type CityPropertiesType = {
  img: string | StaticImageData;
  city: string;
  countProperties: number;
};

// TODO temp mock data

const citiesMock: CityPropertiesType[] = [
  { img: burgasImage, city: "Burgas", countProperties: 567 },
  { img: melenikoImage, city: "Meleniko", countProperties: 234 },
  { img: obzorImage, city: "Obzor", countProperties: 444 },
  { img: nesebrImage, city: "Nesebr", countProperties: 345 },
  { img: plovdivImage, city: "Plovdiv", countProperties: 456 },
  { img: sofiaImage, city: "Sofia", countProperties: 890 },
  { img: varnaImage, city: "Varna", countProperties: 234 },
  { img: nesebrImage, city: "Nesebr", countProperties: 345 },
  { img: plovdivImage, city: "Plovdiv", countProperties: 456 },
];

export const ExploreList = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-6">
      {citiesMock.map((city) => (
        <div className="flex h-[130px]" key={city.city}>
          <Image
            src={city.img}
            alt={city.city}
            className="w-[45%] rounded-s-2xl object-cover"
          />
          <div className="border-gray w-full rounded-e-2xl border-[1px] p-3">
            <span className="text-dark mb-1 block text-lg font-semibold">
              {city.city}
            </span>
            <span className="text-dark/50 mb-4 block text-sm">
              {city.countProperties} properties
            </span>
            <Link
              href="#"
              className="text-dark flex items-center gap-1 text-sm font-semibold capitalize"
            >
              Explore now
              <ArrowRightIcon className="fill-primary h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
