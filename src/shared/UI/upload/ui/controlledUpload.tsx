import React from "react";
import { UploadProps } from "../model/types";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { Upload } from "./upload";

interface IProps<T extends FieldValues> extends UploadProps {
  control: Control<T>;
  name: Path<T>;
}

export const ControlledUpload = <T extends FieldValues>({
  control,
  name,
  ...props
}: IProps<T>) => {
  const {
    field: { value, onChange, ...otherFields },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Upload
      {...props}
      {...otherFields}
      images={value}
      onChangeImages={onChange}
      errorMessage={error?.message}
    />
  );
};
