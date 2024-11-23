import React from "react";
import { cn } from "../helpers/cn";

type KeyItem = "primary" | "second";

interface IProps {
  items: [KeyItem, string][];
}

export const Marker = ({ items }: IProps) => {
  const generateMarker = ([key, value]: IProps["items"][number]) => (
    <span
      className={cn(
        "rounded-2xl px-3 text-xs font-light capitalize leading-6 text-white",
        { "bg-primary": key === "primary", "bg-dark/60": key === "second" },
      )}
      key={value}
    >
      {value}
    </span>
  );

  return (
    <div className="absolute left-0 right-0 top-0 flex h-8 gap-2 pl-2 pt-2">
      {items.map(generateMarker)}
    </div>
  );
};
