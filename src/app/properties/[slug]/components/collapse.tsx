"use client";
import React, { ReactNode, useState } from "react";
import { DownIcon } from "../../../../shared/icons/down";
import { cn } from "@/shared/utils/cn";

interface IProps {
  name: string;
  children: ReactNode;
  optional?: ReactNode;
}

export const PropertyCollapse = ({ children, name, optional }: IProps) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className="bg-light-second w-full rounded-xl px-5 py-4">
      <div className="flex items-center" onClick={() => setShowData(!showData)}>
        <div className="flex items-center gap-2">
          <DownIcon
            className={cn("size-3 fill-dark/80", { "rotate-180": showData })}
          />{" "}
          <span>{name}</span>
        </div>
        {optional && (
          <div className="ml-auto flex items-center gap-4">{optional}</div>
        )}
      </div>

      {showData && (
        <div>
          <div className="my-4 h-[1px] w-full bg-gray"></div>
          {children}
        </div>
      )}
    </div>
  );
};
