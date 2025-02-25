"use client";
import { OptionType } from "@/shared/types/ui";
import { Button } from "@/shared/ui/index";
import React, { useState } from "react";

const mockTabs: OptionType[] = [
  { value: "rent", label: "for rent" },
  { value: "sale", label: "for sale" },
];

export const FilterTab = () => {
  const [currentTab, setCurrentTab] = useState(mockTabs[0]);
  return (
    <div className="mb-4 flex w-full items-center gap-3">
      {mockTabs.map((tab) => (
        <Button
          key={tab.value}
          className="w-full font-medium uppercase tracking-wider"
          variant={tab.value === currentTab.value ? "primary" : "secondary"}
          onClick={() => setCurrentTab(tab)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};
