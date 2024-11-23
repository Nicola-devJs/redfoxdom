"use client";
import { DownIcon } from "@/shared/icons/down";
import { SearchIcon } from "@/shared/icons/search";
import { SettingsIcon } from "@/shared/icons/settings";
import { Button } from "@/shared/ui/button";
import React from "react";
import { FilterSelect } from "./filterSelect";
import { OptionType } from "@/shared/types/ui";
import { LocationCrossIcon } from "@/shared/icons/locationCross";

const mockOptionsSort: OptionType[] = [
  { value: "default", label: "Default" },
  { value: "novelty", label: "New" },
  { value: "old", label: "Old" },
];

export const FilterPanel = () => {
  return (
    <div className="container-block max-phone:max-w-full max-phone:px-0">
      <div className="relative z-10 mb-[88px] flex h-[88px] w-full items-center gap-4 bg-white p-5 shadow-xl max-lg:mb-[112px] max-lg:flex-col max-md:mb-[44px] max-md:h-auto phone:-mt-[44px] phone:rounded-[44px] max-md:phone:px-8 dark:bg-dark-second">
        <div className="grid w-full grid-cols-3 gap-4 max-md:grid-cols-1 md:ml-4">
          <FilterSelect
            placeholder="All type"
            title="type"
            ComponentIcon={DownIcon}
            options={mockOptionsSort}
            className="z-[3]"
          />
          <FilterSelect
            placeholder="Search Location"
            title="location"
            ComponentIcon={LocationCrossIcon}
            options={mockOptionsSort}
            classNameIcon="size-5"
            className="z-[2]"
          />
          <FilterSelect
            placeholder="Search Keyword"
            title="keyword"
            options={mockOptionsSort}
          />
        </div>
        <div className="flex gap-2 max-md:w-full max-phone:flex-col md:max-lg:mt-7">
          <Button variant="outlined" className="max-md:w-full">
            Search advanced
            <SettingsIcon className="size-4 fill-dark-second dark:fill-white" />
          </Button>
          <Button className="max-md:w-full">
            Search <SearchIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
