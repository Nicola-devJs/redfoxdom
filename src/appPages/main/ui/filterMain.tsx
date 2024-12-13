"use client";
import { SearchIcon, SettingsIcon } from "@/shared/icons";
import { OptionType } from "@/shared/types/ui";
import { Button, Input, Select, PropertyTag } from "@/shared/ui/index";
import { cn } from "@/shared/helpers/cn";
import React, { useState } from "react";

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

export const FilterMain = () => {
  const [currentTab, setCurrentTab] = useState<OptionType>(mockTabs[0]);

  return (
    <div className="w-full max-w-[70%] justify-self-end max-lg:max-w-full">
      <div className="inline-flex h-10 overflow-hidden rounded-t-lg max-md:rounded-none max-md:rounded-tr-lg">
        {mockTabs.map((tab) => (
          <div
            className={cn(
              "flex h-full cursor-pointer items-center justify-center bg-gray px-8 text-base font-semibold uppercase text-dark dark:bg-dark dark:text-white",
              {
                "bg-primary text-white dark:bg-primary":
                  currentTab.value === tab.value,
              },
            )}
            key={tab.value}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-3 rounded-lg rounded-tl-none bg-white p-4 max-md:rounded-none dark:bg-dark-second">
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
          <Button variant="outlined" className="dark:text-white">
            Filters{" "}
            <SettingsIcon className="size-4 fill-dark dark:fill-white" />
          </Button>
          <Button>
            Search <SearchIcon className="size-4 fill-white" />
          </Button>
        </div>
      </div>
      <div className="mt-5 flex justify-between px-2 max-md:hidden">
        <PropertyTag iconName="house" name="Houses" variant="small" />
        <PropertyTag iconName="villa" name="Vills" variant="small" />
        <PropertyTag iconName="office" name="Office" variant="small" />
        <PropertyTag iconName="apartment" name="Apartments" variant="small" />
      </div>
    </div>
  );
};
