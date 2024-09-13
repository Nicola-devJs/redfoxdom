"use client";
import { SearchIcon } from "@/shared/icons/search";
import { SettingsIcon } from "@/shared/icons/settings";
import { OptionType } from "@/shared/types.ts/ui";
import { Button } from "@/shared/UI/button";
import { Input } from "@/shared/UI/input";
import { Select } from "@/shared/UI/select";
import { cn } from "@/shared/utils/cn";
import React, { useState } from "react";
import { HouseIcon } from "../icons/house";
import { VillaIcon } from "../icons/villa";
import { OfficeIcon } from "../icons/office";
import { ApartmentIcon } from "../icons/apartment";

// TODO Temp mock options
const mockOptions: OptionType[] = [
  { value: "test1", label: "Тестовый пункт 1" },
  { value: "test2", label: "Тестовый пункт 2" },
  { value: "test3", label: "Тестовый пункт 3" },
];

const mockTabs: OptionType[] = [
  { value: "rent", label: "rent" },
  { value: "sale", label: "sale" },
];

export const FilterHome = () => {
  const [currentTab, setCurrentTab] = useState<OptionType>(mockTabs[0]);

  return (
    <div className="w-full max-w-[70%] justify-self-end">
      <div className="inline-flex h-10 overflow-hidden rounded-t-lg">
        {mockTabs.map((tab) => (
          <div
            className={cn(
              "text-dark bg-gray flex h-full cursor-pointer items-center justify-center px-8 text-base font-semibold uppercase",
              {
                "bg-primary text-white": currentTab.value === tab.value,
              },
            )}
            key={tab.value}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-3 rounded-lg rounded-tl-none bg-white p-4">
        <Input placeholder="Type keyword..." />
        <Select
          options={mockOptions}
          placeholder="Property type"
          className="z-[2]"
        />
        <Select
          options={mockOptions}
          placeholder="Location"
          className="z-[1]"
        />

        <div className="flex-container">
          <Button variant="outlined">
            Filters <SettingsIcon className="fill-dark" />
          </Button>
          <Button>
            Search <SearchIcon className="fill-white" />
          </Button>
        </div>
      </div>
      <div className="mt-5 flex justify-between px-2">
        <div className="flex items-center gap-1">
          <div className="bg-gray/60 flex h-6 w-6 items-center justify-center rounded-full">
            <HouseIcon className="h-[18px] w-[18px] fill-white" />
          </div>
          <span className="text-xs font-normal text-white">Houses</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-gray/60 flex h-6 w-6 items-center justify-center rounded-full">
            <VillaIcon className="h-[18px] w-[18px] fill-white" />
          </div>
          <span className="text-xs font-normal text-white">Vills</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-gray/60 flex h-6 w-6 items-center justify-center rounded-full">
            <OfficeIcon className="h-[18px] w-[18px] fill-white" />
          </div>
          <span className="text-xs font-normal text-white">Office</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-gray/60 flex h-6 w-6 items-center justify-center rounded-full">
            <ApartmentIcon className="h-[18px] w-[18px] fill-white" />
          </div>
          <span className="text-xs font-normal text-white">Apartments</span>
        </div>
      </div>
    </div>
  );
};
