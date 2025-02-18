import { PostList } from "@/entities/post/postList";
import { TestimonialList } from "@/entities/testimonial/testimonialList";
import { MoreButton, HeadingSection, FilterPanel } from "@/shared/ui";
import React from "react";
import { Benifit, ExploreList, RecommendedProperties } from "./ui/index";

export default function MainPage() {
  return (
    <>
      <div
        className={`bg-preview relative flex h-[640px] w-full items-center bg-cover after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-dark/30 max-md:h-max max-md:pt-6 max-md:shadow-lg`}
      >
        <div className="container-block z-10 w-full text-white max-md:px-0">
          <h1 className="mb-10 text-5xl font-bold max-md:text-4xl">
            Если недвижимость, то Redfoxdom
          </h1>
          <FilterPanel />
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
      <div className="mt-s-80 pb-s-80 bg-light pt-1 dark:bg-dark-second">
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
