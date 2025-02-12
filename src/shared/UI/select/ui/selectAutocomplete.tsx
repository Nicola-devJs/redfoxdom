"use client";
import React, { useState } from "react";
import { Select } from "./select";
import { LocationCrossIcon } from "@/shared/icons";
import { SelectAutocompleteProps, SelectProps } from "../model/types";
import { useDebounce } from "@/shared/hooks/useDebounce";

export const SelectAutocomplete = ({
  onFilterOptions,
  ...props
}: SelectAutocompleteProps) => {
  const debauncedFilterOptions = useDebounce(onFilterOptions);

  return (
    <Select
      CustomIcon={LocationCrossIcon}
      onSearch={debauncedFilterOptions}
      classNameIcon="size-4"
      triggerShowOptions={Boolean(props.options.length)}
      {...props}
    />
  );
};
