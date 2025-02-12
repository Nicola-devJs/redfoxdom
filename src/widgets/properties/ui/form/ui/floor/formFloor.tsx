"use client";
import { CloseIcon } from "@/shared/icons";
import { Radio } from "@/shared/ui";
import React, { useState } from "react";
import { FloorItem } from "./ui/floorItem";
import { generateUUID } from "@/shared/helpers/generateIDs";
import { floorOptions, FloorState } from "@/widgets/properties/model/consts";

const initialFloorState = { id: generateUUID() };

export const FormFloor = () => {
  const [floorState, setFloorState] = useState(FloorState.ENABLE);
  const [floors, setFloors] = useState<{ id: string }[]>([initialFloorState]);

  const handleAddFloor = () => {
    setFloors([...floors, { id: generateUUID() }]);
  };

  const handleChangeEnableFloor = (value: FloorState) => {
    if (value === FloorState.DISABLE) {
      setFloors([]);
    } else {
      setFloors([initialFloorState]);
    }

    setFloorState(value);
  };

  const handleDeleteFloor = (floorId: string) => {
    const filteredFloors = floors.filter((f) => f.id !== floorId);
    if (filteredFloors.length === 0) {
      setFloorState(FloorState.DISABLE);
    }
    setFloors(filteredFloors);
  };

  return (
    <>
      <div>
        <span className="mb-3 block text-base font-semibold">
          Enable Floor Plan:
        </span>
        <Radio
          name="floor"
          radios={floorOptions}
          variant="vertical"
          value={floorState}
          onChange={(event) =>
            handleChangeEnableFloor(event.target.value as FloorState)
          }
        />
      </div>
      {floors.map((floor, index) => (
        <FloorItem
          key={floor.id}
          onDelete={() => handleDeleteFloor(floor.id)}
          order={index + 1}
        />
      ))}
      {floorState === FloorState.ENABLE && floors.length < 5 && (
        <div
          className="mx-auto flex size-[60px] cursor-pointer items-center justify-center rounded-full border-2 border-primary"
          onClick={handleAddFloor}
        >
          <CloseIcon className="size-6 rotate-45 fill-primary" />
        </div>
      )}
    </>
  );
};
