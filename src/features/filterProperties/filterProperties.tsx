"use client";
import React from "react";
import { ContentSubstrate } from "../../shared/ui/contentSubstrate";
import { FilterTab } from "./filterTab";
import { MoreButton } from "@/shared/ui/button";
import { Select } from "@/shared/ui/select";
import { LocationCrossIcon } from "@/shared/icons/locationCross";
import { Checkbox } from "@/shared/ui/checkbox";
import { InputRange } from "@/shared/ui/range/range";

interface IProps {
  onCloseSidebar: () => void;
}

export const FilterProperties = ({ onCloseSidebar }: IProps) => {
  const handleSubmit = () => {
    onCloseSidebar();
  };

  return (
    <ContentSubstrate isBorder>
      <form
        action="#"
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <FilterTab />
        <Select options={[]} placeholder="Type keywords..." CustomIcon={null} />
        <Select
          options={[]}
          placeholder="Location"
          CustomIcon={LocationCrossIcon}
          classNameIcon="size-4"
        />
        <Select options={[]} placeholder="Property type" />
        <Select options={[]} placeholder="Rooms" />
        <Select options={[]} placeholder="Bathrooms" />
        <Select options={[]} placeholder="Bedrooms" />
        <InputRange
          max={10000}
          rangeInfo="Price"
          prefixRange="$"
          className="my-4"
        />
        <InputRange
          max={3000}
          initialRange={{ min: 1100, max: 300 }}
          rangeInfo="Size"
          postfixRange=" SqFt"
          className="mb-4 mt-2"
        />
        <div className="flex flex-col gap-3">
          <span className="mb-1 inline-block font-semibold">Amentities</span>
          <Checkbox value={{ value: "test", label: "Testing one" }} />
          <Checkbox value={{ value: "test", label: "Testing two" }} />
          <Checkbox value={{ value: "test", label: "Testing three" }} />
        </div>

        <MoreButton onClick={handleSubmit} className="mt-3 w-full">
          Find Properties
        </MoreButton>
      </form>
    </ContentSubstrate>
  );
};
