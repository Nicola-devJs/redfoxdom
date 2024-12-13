import React from "react";
import {
  QuoteIcon,
  FullStarIcon,
  PartStarIcon,
  EmptyStarIcon,
} from "@/shared/icons/index";
import { mockTestImages } from "@/shared/constants/mockData";
import { NextImage } from "@/shared/ui/index";

interface IProps {
  author: string;
  testimonial: string;
  rating: number;
}

export const Testimonial = ({ author, rating, testimonial }: IProps) => {
  return (
    <div className="w-full rounded-xl border-1 border-gray p-6 dark:border-dark-second">
      <QuoteIcon className="mb-3 size-12 fill-primary" />
      <span className="mb-4 block text-sm before:content-['“'] after:content-['”']">
        {testimonial}
      </span>
      <div className="flex items-start gap-3">
        <NextImage
          src={mockTestImages.sofia}
          alt="test"
          className="size-12 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold capitalize">{author}</span>
          <span className="text-xs capitalize text-dark/50">
            sub title test
          </span>
          <div className="mt-2 flex gap-1">
            {Array(rating)
              .fill(" ")
              .map((_, id) => (
                <FullStarIcon key={id} className="size-4 fill-yellow" />
              ))}
            <PartStarIcon className="size-4 fill-yellow" />
            <EmptyStarIcon className="size-4 fill-yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};
