import React from "react";
import { Textarea } from "./textarea";
import { TextareaProps } from "../model/types";
import { Control, FieldValues, Path, useController } from "react-hook-form";

interface IProps<T extends FieldValues> extends TextareaProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledTextarea = <T extends FieldValues>({
  control,
  name,
  ...props
}: IProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return <Textarea {...props} {...field} errorMessage={error?.message} />;
};
