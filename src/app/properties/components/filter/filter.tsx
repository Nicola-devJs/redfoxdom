"use client";
import { DownIcon } from "@/shared/icons/down";
import { SearchIcon } from "@/shared/icons/search";
import { SettingsIcon } from "@/shared/icons/settings";
import { Button } from "@/shared/UI/button";
import React from "react";
import { SelectFilter } from "./selectFilter";
import { OptionType } from "@/shared/types.ts/ui";
import { LocationCrossIcon } from "@/shared/icons/locationCross";

const mockOptionsSort: OptionType[] = [
  { value: "default", label: "Default" },
  { value: "novelty", label: "New" },
  { value: "old", label: "Old" },
];

export const Filter = () => {
  return (
    <div className="relative z-10 -mt-[44px] mb-[88px] flex h-[88px] w-full items-center gap-4 rounded-[44px] bg-white p-5 shadow-xl dark:bg-dark-second">
      <div className="ml-4 grid w-full grid-cols-3 gap-4">
        <SelectFilter
          placeholder="All type"
          title="type"
          ComponentIcon={DownIcon}
          options={mockOptionsSort}
        />
        <SelectFilter
          placeholder="Search Location"
          title="location"
          ComponentIcon={LocationCrossIcon}
          options={mockOptionsSort}
          classNameIcon="size-5"
        />
        <SelectFilter
          placeholder="Search Keyword"
          title="keyword"
          options={mockOptionsSort}
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outlined">
          Search advanced
          <SettingsIcon className="size-4 fill-dark-second dark:fill-white" />
        </Button>
        <Button>
          Search <SearchIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};
