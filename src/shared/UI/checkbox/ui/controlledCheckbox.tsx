import React from "react";
import { Checkbox } from "./checkbox";
import { CheckboxProps } from "../model/types";
import { FieldValues, Control, Path, useController } from "react-hook-form";

interface IProps<T extends FieldValues> extends CheckboxProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  ...props
}: IProps<T>) => {
  const {
    field: { value, ...otherFields },
    fieldState: { error },
  } = useController({ control, name });
  return (
    <Checkbox
      {...props}
      checked={value}
      {...otherFields}
      errorMessage={error?.message}
    />
  );
};
