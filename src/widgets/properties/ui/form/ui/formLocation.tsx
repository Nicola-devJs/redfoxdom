"use client";
import { OptionType } from "@/shared/types/ui";
import { SelectAutocomplete } from "@/shared/ui";
import { MapConfig, Map } from "@/widgets/map";
import React, { useState } from "react";

export const FormLocation = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [optionsLocation, setOptionsLocation] = useState<OptionType[]>([]);
  const [selectedLocationToMap, setSelectedLocationToMap] =
    useState<OptionType>();

  const handleChangeValueSelect = (selectedLocation: OptionType) => {
    setSelectedLocationToMap(selectedLocation);
    setOptionsLocation([selectedLocation]);
  };

  return (
    <>
      <SelectAutocomplete
        label="Location"
        required
        options={optionsLocation}
        name="location"
        id="location"
        onFilterOptions={setSearchLocation}
        onSelectOption={setSelectedLocationToMap}
        value={selectedLocationToMap}
      />
      <Map
        className="h-[450px] overflow-hidden rounded-3xl max-md:h-[450px]"
        defaultCenter={MapConfig.defaultCoords}
        onGetFindedLocation={handleChangeValueSelect}
        searchPlace={searchLocation}
        setOptionsPlace={setOptionsLocation}
        selectedPlace={selectedLocationToMap}
      />
    </>
  );
};
