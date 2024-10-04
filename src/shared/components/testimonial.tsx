import React from "react";
import { List } from "./list";
import { QuoteIcon } from "../icons/quote";
import { mockTestImages } from "../constants/property";
import { FullStarIcon } from "../icons/stars/fullStar";
import { PartStarIcon } from "../icons/stars/partStar";
import { EmptyStarIcon } from "../icons/stars/emptyStar";
import { NextImage } from "./NextImage";

interface IProps {
  author: string;
  testimonial: string;
  rating: number;
}

const mockListTestimonials: IProps[] = [
  {
    author: "Genry Ambronson",
    rating: 3,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit enim reprehenderit consectetur praesentium. Rerum sequi consequuntur hic sit, pariatur soluta ipsa minima labore voluptates temporibus obcaecati culpa exercitationem non?",
  },
  {
    author: "Genry Ambronson",
    rating: 3,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit enim reprehenderit consectetur praesentium. Rerum sequi consequuntur hic sit, pariatur soluta ipsa minima labore voluptates temporibus obcaecati culpa exercitationem non?",
  },
  {
    author: "Genry Ambronson",
    rating: 3,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odit enim reprehenderit consectetur praesentium. Rerum sequi consequuntur hic sit, pariatur soluta ipsa minima labore voluptates temporibus obcaecati culpa exercitationem non?",
  },
];

const Testimonial = ({ author, rating, testimonial }: IProps) => {
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

export const TestimonialList = () => {
  return <List list={mockListTestimonials} ItemList={Testimonial} />;
};
