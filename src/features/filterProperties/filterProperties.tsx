"use client";
import React from "react";
import { FilterTab } from "./ui";
import {
  Checkbox,
  InputRange,
  Select,
  MoreButton,
  ContentSubstrate,
  SelectAutocomplete,
} from "@/shared/ui/index";

interface IProps {
  onCloseSidebar: () => void;
}

export const FilterProperties = ({ onCloseSidebar }: IProps) => {
  const handleSubmit = () => {
    onCloseSidebar();
  };

  const handleSearchLocations = (value: string) => {
    console.log(value);
  };

  return (
    <ContentSubstrate isBorder>
      <form
        action="#"
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <FilterTab />
        <Select
          options={[]}
          placeholder="Type keywords..."
          onChangeSelectedValue={console.log}
          selectedValue={""}
          CustomIcon={null}
        />
        <SelectAutocomplete
          options={[]}
          onChangeSelectedValue={console.log}
          selectedValue={""}
          placeholder="Location"
          onFilterOptions={handleSearchLocations}
        />
        <Select
          options={[]}
          onChangeSelectedValue={console.log}
          selectedValue={""}
          placeholder="Property type"
        />
        <Select
          options={[]}
          onChangeSelectedValue={console.log}
          selectedValue={""}
          placeholder="Rooms"
        />
        <Select
          options={[]}
          onChangeSelectedValue={console.log}
          selectedValue={""}
          placeholder="Bathrooms"
        />
        <Select
          options={[]}
          onChangeSelectedValue={console.log}
          selectedValue={""}
          placeholder="Bedrooms"
        />
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
          <Checkbox name="test_1" label="Testing one" />
          <Checkbox name="test_2" label="Testing two" />
          <Checkbox name="test_3" label="Testing tree" />
        </div>

        <MoreButton onClick={handleSubmit} className="mt-3 w-full">
          Find Properties
        </MoreButton>
      </form>
    </ContentSubstrate>
  );
};
