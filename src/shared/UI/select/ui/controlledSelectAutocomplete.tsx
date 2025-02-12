import React from "react";
import { SelectAutocomplete } from "./selectAutocomplete";
import { FieldValues, Control, Path, useController } from "react-hook-form";
import { SelectAutocompleteProps, SelectProps } from "../model/types";

interface IProps<T extends FieldValues> extends SelectAutocompleteProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledSelectAutocomplete = <T extends FieldValues>({
  control,
  name,
  ...props
}: IProps<T>) => {
  const {
    field: { value, onChange, ...otherFields },
    fieldState: { error },
  } = useController({ control, name });
  return (
    <SelectAutocomplete
      {...props}
      {...otherFields}
      selectValue={value}
      setSelectValue={onChange}
      errorMessage={error?.message}
    />
  );
};
