import React from "react";

interface IProps {
  errorMessage: string;
}

export const ErrorMessageField = ({ errorMessage }: IProps) => {
  return (
    <span className="text-error absolute top-[calc(100%)] ml-3 text-xs font-normal">
      {errorMessage}
    </span>
  );
};
