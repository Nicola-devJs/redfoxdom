import { PostList } from "@/entities/post/postList";
import { TestimonialList } from "@/entities/testimonial/testimonialList";
import { MoreButton, HeadingSection } from "@/shared/ui/index";
import React from "react";
import {
  Benifit,
  ExploreList,
  FilterMain,
  RecommendedProperties,
} from "./ui/index";

export default function MainPage() {
  return (
    <>
      <div
        className={`bg-preview relative flex h-[640px] w-full items-center bg-cover after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-dark/30 max-md:h-max max-md:pt-6 max-md:shadow-lg`}
      >
        <div className="container-block z-10 grid grid-cols-2 text-white max-lg:gap-8 max-md:grid-cols-1 max-md:gap-14 max-md:px-0">
          <div className="max-md:mx-3">
            <h1 className="mb-4 text-7xl font-bold max-md:text-5xl">
              Text start
            </h1>
            <p className="mb-12 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              facere adipisci, asperiores similique iste eos laudantium quas
              numquam. Incidunt culpa saepe sint iste beatae assumenda quibusdam
              nam nisi repellat asperiores?
            </p>
            <MoreButton>Contact us</MoreButton>
          </div>
          <FilterMain />
        </div>
      </div>
      <HeadingSection supTitle="Explore cities" title="Properties by cities">
        <ExploreList />
      </HeadingSection>
      <Benifit />
      <HeadingSection supTitle="Fetured properties" title="Recommended for you">
        <RecommendedProperties />
        <MoreButton className="mx-auto mt-8">View all properties</MoreButton>
      </HeadingSection>
      <div className="mt-[80px] bg-light pb-[80px] pt-1 dark:bg-dark-second">
        <HeadingSection supTitle="latest new" title="from our blog">
          <PostList />
        </HeadingSection>
      </div>
      <HeadingSection supTitle="Explore cities" title="Properties by cities">
        <div className="-mt-6">
          <span className="mb-10 block text-center text-dark/50 dark:text-gray-second">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rem
            tempora, aperiam soluta impedit ipsum?
          </span>
          <TestimonialList />
        </div>
      </HeadingSection>
    </>
  );
}
