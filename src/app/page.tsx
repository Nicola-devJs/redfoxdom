import { ArrowRightIcon } from "@/shared/icons/arrowRight";
import { Button, MoreButton } from "@/shared/UI/button";
import { FilterHome } from "./components/filter";
import { HeadingSection } from "@/shared/components/headingSection";
import { ExploreList } from "./components/exploreList";
import { RecommendedProperties } from "./components/recommended";
import { PostList } from "@/shared/components/postList";

export default function Home() {
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
          <FilterHome />
        </div>
      </div>
      <HeadingSection supTitle="Explore cities" title="Properties by cities">
        <ExploreList />
        <MoreButton className="mx-auto">View all cities</MoreButton>
      </HeadingSection>
      <HeadingSection supTitle="Fetured properties" title="Recommended for you">
        <RecommendedProperties />
        <MoreButton className="mx-auto mt-8">View all properties</MoreButton>
      </HeadingSection>
      <div className="mt-[80px] bg-light pb-[80px] pt-1 dark:bg-dark-second">
        <HeadingSection supTitle="latest new" title="from our blog">
          <PostList />
        </HeadingSection>
      </div>
    </>
  );
}
