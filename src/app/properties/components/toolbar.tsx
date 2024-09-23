import { WrapperBlock } from "@/shared/components/wrapperBlock";
import { GridIcon } from "@/shared/icons/property/grid";
import { ListIcon } from "@/shared/icons/property/list";
import { OptionType } from "@/shared/types.ts/ui";
import { Select } from "@/shared/UI/select";
import React from "react";

// TODO Temp mock options
const mockOptionsShow: OptionType[] = [
  { value: 9, label: "9" },
  { value: 18, label: "18" },
  { value: 36, label: "36" },
];

const mockOptionsSort: OptionType[] = [
  { value: "default", label: "Default" },
  { value: "novelty", label: "New" },
  { value: "old", label: "Old" },
];

export const Toolbar = () => {
  return (
    <div className="mb-10 flex items-center justify-between gap-3 max-lg:items-start max-md:flex-col max-md:gap-6">
      <div className="flex items-center gap-3 max-phone:w-full max-phone:flex-col max-phone:gap-1 max-lg:md:flex-col max-lg:md:items-start max-lg:md:gap-0">
        <h2 className="whitespace-nowrap text-3xl font-bold">
          Property listing
        </h2>
        <span className="break-words text-sm text-dark/50 dark:text-gray-second">
          There are currently 162,123 properties
        </span>
      </div>
      <div className="grid grid-flow-col gap-2 max-md:w-full max-phone:grid-flow-row max-phone:grid-cols-2">
        <WrapperBlock className="cursor-pointer">
          <ListIcon className="size-5 fill-dark/70 dark:fill-gray" />
        </WrapperBlock>
        <WrapperBlock className="cursor-pointer">
          <GridIcon className="h-5 w-5 fill-dark/70 dark:fill-gray" />
        </WrapperBlock>
        <Select
          options={mockOptionsShow}
          defaultValue={mockOptionsShow[0]}
          variant="secondary"
          prefix="Show: "
          className="z-[2] max-w-[180px] max-md:max-w-full"
        />
        <Select
          options={mockOptionsSort}
          defaultValue={mockOptionsSort[0]}
          variant="secondary"
          prefix="Sort by ("
          postfix=")"
          className="z-[1] max-w-[180px] max-md:max-w-full"
        />
      </div>
    </div>
  );
};
