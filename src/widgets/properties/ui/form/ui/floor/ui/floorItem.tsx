import { CloseIcon, PictureIcon } from "@/shared/icons";
import { Input, Select, Textarea, Upload } from "@/shared/ui";
import React from "react";

interface IProps {
  onDelete: () => void;
  order: number;
}

export const FloorItem = ({ onDelete, order }: IProps) => {
  return (
    <div>
      <div className="w-full rounded-2xl bg-gray/50 p-6 dark:bg-dark-second">
        <div className="mb-4 flex items-center justify-between border-b-2 border-solid border-gray pb-4 dark:border-dark">
          <h4 className="text-2xl font-semibold">Floor {order}</h4>
          <CloseIcon
            className="size-6 cursor-pointer fill-dark/60 dark:fill-gray-second"
            onClick={onDelete}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Select
            options={[]}
            label="Floor Name"
            name="floorName"
            id="floorName"
            className="bg-white dark:bg-dark-second"
            classNameContainer="col-span-2"
          />
          <Input
            label="Size (SqFt)"
            required
            type="number"
            id="sqft"
            name="sqft"
            className="bg-white dark:bg-dark-second"
          />
          <Input
            label="Floor size"
            required
            type="number"
            id="floor_size"
            name="floor_size"
            className="bg-white dark:bg-dark-second"
          />
          <Upload
            label="Floor image"
            buttonIcon={PictureIcon}
            className="h-[160px] bg-white p-6 dark:bg-dark-second"
          />
          <Textarea
            className="h-[160px] bg-white dark:bg-dark-second"
            label="Description"
            name="description"
            id="description"
          />
        </div>
      </div>
    </div>
  );
};
