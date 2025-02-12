import React from "react";
import { SelectProps } from "../model/types";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Select } from "./select";

interface IProps<T extends FieldValues> extends SelectProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  ...props
}: IProps<T>) => {
  const {
    field: { value, onChange, ...otherFields },
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Select
      {...props}
      {...otherFields}
      selectedValue={value}
      onChangeSelectedValue={onChange}
      errorMessage={error?.message}
    />
  );
};
