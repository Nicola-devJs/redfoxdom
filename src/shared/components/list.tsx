import React from "react";
import { cn } from "../utils/cn";

interface IProps<T extends Record<string, any>> {
  className?: string;
  list: T[];
  ItemList: React.ComponentType<T>;
  keyProp?: keyof T;
}

export const List = <T extends Record<string, any>>({
  className,
  ItemList,
  list,
  keyProp,
}: IProps<T>) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1",
        className,
      )}
    >
      {list.map((props, id) => (
        <ItemList key={keyProp ? `${props[keyProp]}_${id}` : id} {...props} />
      ))}
    </div>
  );
};
