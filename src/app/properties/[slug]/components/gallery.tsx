import { NextImage } from "@/shared/components/NextImage";
import { PictureIcon } from "@/shared/icons/picture";
import { Button } from "@/shared/UI/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  images: StaticImageData[];
}

export const PropertyGallery = ({ images }: IProps) => {
  return (
    <div className="container-block-large">
      <div className="grid h-[26.042vw] grid-cols-4 grid-rows-2 gap-4 max-2xl:h-[31.25vw] max-xl:h-[39.063vw] max-lg:h-[58.594vw] max-lg:grid-rows-3 max-md:h-[65.104vw] max-phone:h-[400px]">
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded-xl max-lg:col-span-4">
          <Image
            src={images[0]}
            alt={images[0].src}
            className="h-full w-full object-cover"
          />
          <Button className="absolute bottom-4 right-4 font-normal capitalize">
            <PictureIcon className="size-4 fill-white" />
            view all photos
          </Button>
        </div>
        {images.slice(1, 5).map((img) => (
          <NextImage
            key={img.src}
            src={img}
            className="max-lg:col-span-2 max-lg:[&:nth-child(n+4)]:hidden"
            alt={img.src}
          />
        ))}
      </div>
    </div>
  );
};
