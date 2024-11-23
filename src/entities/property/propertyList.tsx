import React from "react";
import { mockPropertyCards } from "@/shared/constants/mockData";
import { List } from "@/shared/ui/list";
import { cn } from "@/shared/helpers/cn";
import { PropertyCard } from "./ui/property";
import { PropertyCardRow } from "./ui/propertyRow";

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
