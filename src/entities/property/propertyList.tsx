import React from "react";
import { mockPropertyCards } from "@/shared/constants/mockData";
import { List } from "@/shared/ui/index";
import { cn } from "@/shared/helpers/cn";
import { PropertyCard, PropertyCardRow } from "./ui/index";

interface IProps {
  className?: string;
}

export const PropertyList = ({ className }: IProps) => {
  return (
    <List
      list={mockPropertyCards}
      ItemList={PropertyCard}
      className={cn(className)}
      keyProp="name"
    />
  );
};

export const PropertyListRow = ({ className }: IProps) => {
  return (
    <List
      list={mockPropertyCards}
      ItemList={PropertyCardRow}
      keyProp="name"
      className={cn("grid-cols-2 max-[900px]:grid-cols-1", className)}
    />
  );
};
