import { ArrowRightIcon } from "@/shared/icons/arrowRight";
import { Button } from "@/shared/UI/button";
import { FilterHome } from "./components/filter";
import { HeadingSection } from "@/shared/components/headingSection";
import { ExploreList } from "./components/exploreList";

export default function Home() {
  return (
    <main>
      <div
        className={`bg-preview after:bg-dark/30 relative flex h-[640px] w-full items-center bg-cover after:absolute after:h-full after:w-full`}
      >
        <div className="container-block z-10 grid grid-cols-2 text-white">
          <div>
            <h1 className="mb-4 text-7xl font-bold">Text start</h1>
            <p className="mb-12 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              facere adipisci, asperiores similique iste eos laudantium quas
              numquam. Incidunt culpa saepe sint iste beatae assumenda quibusdam
              nam nisi repellat asperiores?
            </p>
            <Button className="px-10">
              Contact us <ArrowRightIcon />
            </Button>
          </div>
          <FilterHome />
        </div>
      </div>
      <HeadingSection supTitle="Explore cities" title="Properties by cities">
        <ExploreList />
      </HeadingSection>
    </main>
  );
}
