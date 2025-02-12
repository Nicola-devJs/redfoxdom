import React from "react";

interface IProps {
  label: string;
  required?: boolean;
  htmlFor?: string;
}

export const Label = ({ label, required, htmlFor }: IProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 inline-block text-sm font-semibold capitalize"
    >
      {label + (required ? "*" : "")}
    </label>
  );
};
