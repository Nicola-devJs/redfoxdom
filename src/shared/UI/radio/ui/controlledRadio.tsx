import React from "react";
import { FieldValues, Control, Path, useController } from "react-hook-form";
import { RadioProps } from "../model/types";
import { Radio } from "./radio";

interface IProps<T extends FieldValues> extends RadioProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledRadio = <T extends FieldValues>({
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

  return <Radio {...props} {...field} errorMessage={error?.message} />;
};
