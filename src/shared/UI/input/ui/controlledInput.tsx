import React from "react";
import { InputProps } from "../model/types";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Input } from "./input";

interface IProps<T extends FieldValues> extends InputProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...props
}: IProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });
  return <Input {...props} {...field} errorMessage={error?.message} />;
};
