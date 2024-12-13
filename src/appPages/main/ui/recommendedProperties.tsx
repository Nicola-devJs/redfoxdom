"use client";
import { PropertyList } from "@/entities/property/propertyList";
import { OptionType } from "@/shared/types/ui";
import { Button } from "@/shared/ui/index";
import React, { useState } from "react";

const mockTabsRecommended: OptionType[] = [
  { value: "all", label: "view all" },
  { value: "apartment", label: "apartment" },
  { value: "villa", label: "villa" },
  { value: "studio", label: "studio" },
  { value: "house", label: "house" },
  { value: "office", label: "office" },
];

// TODO Переделать реализацию в серверный компонент с редиректом на текущую страницу с query recomProp=all

export const RecommendedProperties = () => {
  const [currentTab, setCurrentTab] = useState(mockTabsRecommended[0]);
  return (
    <>
      <div className="items center mb-9 flex flex-wrap justify-center gap-3">
        {mockTabsRecommended.map((tab) => (
          <Button
            key={tab.value}
            className="max-h-9 rounded-3xl capitalize"
            variant={tab.value === currentTab.value ? "primary" : "secondary"}
            onClick={() => setCurrentTab(tab)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <PropertyList />
    </>
  );
};
