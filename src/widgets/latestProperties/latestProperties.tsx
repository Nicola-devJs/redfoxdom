import React from "react";
import { NextImage } from "../../shared/ui/nextImage";
import { mockPropertyCards } from "../../shared/constants/mockData";
import { PropertyParametr } from "../../shared/ui/propertyParametr";

export const LatestProperties = () => {
  return (
    <div className="w-full">
      <h5 className="mb-4 text-xl font-semibold capitalize">
        Latest Properties
      </h5>
      {mockPropertyCards.map((prop) => (
        <div
          key={prop.name}
          className="mb-4 flex gap-2 border-b-1 border-gray pb-4 last:mb-0 last:border-b-0 last:pb-0 dark:border-dark-second"
        >
          <NextImage
            src={prop.img}
            alt="test"
            className="h-[80px] w-[100px] rounded-md"
          />
          <div className="">
            <span className="mb-1 inline-block font-semibold">{prop.name}</span>

            <div className="mb-2 flex flex-wrap items-center gap-2">
              {prop.params.map((p) => (
                <PropertyParametr
                  key={p.name}
                  name={p.name}
                  param={p.type}
                  value={p.value}
                />
              ))}
            </div>
            <span className="font-semibold">${prop.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
