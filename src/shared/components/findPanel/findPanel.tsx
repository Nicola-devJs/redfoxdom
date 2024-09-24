"use client";
import React from "react";
import { BlockContent } from "../blockContent";
import { TabPanel } from "./tabPanel";
import { Input } from "@/shared/UI/input";
import { MoreButton } from "@/shared/UI/button";
import { Select } from "@/shared/UI/select";
import { LocationCrossIcon } from "@/shared/icons/locationCross";
import { Checkbox } from "@/shared/UI/checkbox";
import { RangeApp } from "@/shared/UI/range/range";

export const FindPanel = () => {
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
        <RangeApp />
        <div className="flex flex-col gap-2">
          <span className="mb-1 inline-block font-semibold">Amentities</span>
          <Checkbox value={{ value: "test", label: "Testing one" }} />
          <Checkbox value={{ value: "test", label: "Testing two" }} />
          <Checkbox value={{ value: "test", label: "Testing three" }} />
        </div>

        <MoreButton className="mt-3 w-full">Find Properties</MoreButton>
      </form>
    </BlockContent>
  );
};
