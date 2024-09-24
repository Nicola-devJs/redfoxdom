import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const BlockContent = ({ children }: IProps) => {
  return (
    <div className="h-max w-full rounded-xl border-1 border-gray p-5 shadow-lg">
      {children}
    </div>
  );
};
