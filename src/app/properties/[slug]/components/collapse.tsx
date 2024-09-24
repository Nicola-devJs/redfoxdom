"use client";
import React, { ReactNode, useState } from "react";
import { DownIcon } from "../../../../shared/icons/down";
import { cn } from "@/shared/utils/cn";

interface IProps {
  collapses: {
    name: string;
    id: string;
    body: ReactNode;
    optional?: ReactNode;
  }[];
}

export const PropertyCollapse = ({ collapses }: IProps) => {
  const [currentCollapse, setCurrentCollapse] = useState("");

  const checkIdentity = (collId: string) => currentCollapse === collId;

  const handleClickCollapse = (collId: string) => () => {
    if (checkIdentity(collId)) {
      setCurrentCollapse("");
    } else {
      setCurrentCollapse(collId);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {collapses.map((coll) => (
        <div key={coll.id} className="w-full rounded-xl bg-light-second">
          <div
            className="flex items-center px-5 py-4"
            onClick={handleClickCollapse(coll.id)}
          >
            <div className="flex items-center gap-2">
              <DownIcon
                className={cn("size-3 fill-dark/80 transition", {
                  "rotate-180": checkIdentity(coll.id),
                })}
              />
              <span>{coll.name}</span>
            </div>
            {coll.optional && (
              <div className="ml-auto flex items-center gap-4">
                {coll.optional}
              </div>
            )}
          </div>

          <div
            className={cn(
              "max-h-0 overflow-hidden p-0 transition-all duration-300 ease-out",
              {
                "max-h-[500px] px-5 pb-4": checkIdentity(coll.id),
              },
            )}
          >
            <div className="mb-4 h-[1px] w-full bg-gray"></div>
            {coll.body}
          </div>
        </div>
      ))}
    </div>
  );
};
