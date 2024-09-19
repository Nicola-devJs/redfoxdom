import React from "react";
import { cn } from "../utils/cn";

interface IProps<T extends Record<string, any>> {
  className?: string;
  list: T[];
  ItemList: React.ComponentType<T>;
  keyProp?: keyof T;
  colSpanItems?: {
    startId: number;
    span: number;
    endId?: number;
  };
}

export const List = <T extends Record<string, any>>({
  className,
  ItemList,
  list,
  keyProp,
  colSpanItems,
}: IProps<T>) => {
  const getConditionColSpan = (id: number) => {
    if (!colSpanItems) {
      return false;
    }
    if (!colSpanItems.endId) {
      return id >= colSpanItems.startId;
    }
    return id >= colSpanItems.startId && id < colSpanItems.endId;
  };

  return (
    <div
      className={cn(
        "grid w-full grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1",
        className,
      )}
    >
      {list.map((props, id) => (
        <div
          key={keyProp ? `${props[keyProp]}_${id}` : id}
          className={cn(
            "col-auto",
            colSpanItems && {
              "col-span-2 max-lg:col-auto":
                getConditionColSpan(id) && colSpanItems.span === 2,
              "col-span-3 max-lg:col-auto":
                getConditionColSpan(id) && colSpanItems.span === 3,
              "col-span-4 max-lg:col-auto":
                getConditionColSpan(id) && colSpanItems.span === 4,
            },
          )}
        >
          <ItemList {...props} />
        </div>
      ))}
    </div>
  );
};
