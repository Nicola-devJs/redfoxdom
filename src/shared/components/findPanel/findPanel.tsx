"use client";
import React from "react";
import { BlockContent } from "../blockContent";
import { TabPanel } from "./tabPanel";
import { MoreButton } from "@/shared/UI/button";
import { Select } from "@/shared/UI/select";
import { LocationCrossIcon } from "@/shared/icons/locationCross";
import { Checkbox } from "@/shared/UI/checkbox";
import { InputRange } from "@/shared/UI/range/range";

interface IProps {
  onCloseSidebar: () => void;
}

export const FindPanel = ({ onCloseSidebar }: IProps) => {
  const handleSubmit = () => {
    onCloseSidebar();
  };

  return (
    <BlockContent>
      <form
        action="#"
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <TabPanel />
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
    </BlockContent>
  );
};
