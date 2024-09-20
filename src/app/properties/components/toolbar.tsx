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
    <div className="mb-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold">Property listing</h2>
        <span className="text-sm text-dark/50 dark:text-gray-second">
          There are currently 162,123 properties
        </span>
      </div>
      <div className="flex gap-2">
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
          className="max-w-[180px]"
        />
        <Select
          options={mockOptionsSort}
          defaultValue={mockOptionsSort[0]}
          variant="secondary"
          prefix="Sort by ("
          postfix=")"
          className="max-w-[180px]"
        />
      </div>
    </div>
  );
};
