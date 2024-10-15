import React from "react";
import { mockPropertyCards } from "../../constants/property";
import { List } from "../list";
import { cn } from "../../utils/cn";
import { PropertyCard } from "./property";
import { PropertyCardRow } from "./propertyRow";

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
