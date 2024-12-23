import { Checkbox } from "@/shared/ui";
import React from "react";

interface IProps {
  amenitiesData: { name: string; items: { label: string; name: string }[] }[];
}

export const FormAmenities = ({ amenitiesData }: IProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {amenitiesData.map((data) => (
        <div key={data.name}>
          <span className="mb-3 block text-base font-semibold">
            {data.name}
          </span>
          <div className="grid grid-cols-2 gap-3">
            {data.items.map((item) => (
              <Checkbox key={item.name} label={item.label} name={item.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
