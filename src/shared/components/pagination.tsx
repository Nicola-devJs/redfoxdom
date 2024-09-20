import React, { ReactNode } from "react";
import { WrapperBlock } from "./wrapperBlock";
import { cn } from "../utils/cn";
import { DownIcon } from "../icons/down";

interface IPropsItem {
  children: ReactNode;
  isActive?: boolean;
  isBlocked?: boolean;
}

const PaginationItem = ({ children, isActive, isBlocked }: IPropsItem) => {
  return (
    <WrapperBlock
      className={cn(
        "size-10 min-w-10 cursor-pointer",
        {
          "border-primary bg-primary text-white": isActive,
        },
        { "cursor-default bg-gray dark:bg-dark-second": isBlocked },
      )}
    >
      {children}
    </WrapperBlock>
  );
};

export const Pagination = () => {
  const isBlocked = true;

  return (
    <div className="mt-[60px] flex items-center justify-center gap-2">
      <PaginationItem isBlocked={isBlocked}>
        <DownIcon
          className={cn("size-3 rotate-[90deg] fill-dark dark:fill-gray", {
            "fill-gray-second dark:fill-dark": isBlocked,
          })}
        />
      </PaginationItem>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem isBlocked={false}>
        <DownIcon
          className={cn("size-3 -rotate-[90deg] fill-dark dark:fill-gray", {
            "fill-gray-second dark:fill-dark": false,
          })}
        />
      </PaginationItem>
    </div>
  );
};
