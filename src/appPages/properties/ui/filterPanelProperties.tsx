import { FilterPanel } from "@/shared/ui";
import React from "react";

export const FilterPanelProperties = () => {
  return (
    <div className="container-block max-phone:max-w-full max-phone:px-0">
      <div className="relative z-10 mb-[88px] max-lg:mb-[112px] max-md:mb-[44px] phone:-mt-[44px]">
        <FilterPanel />
      </div>
    </div>
  );
};
