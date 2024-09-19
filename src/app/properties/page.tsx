import { Map } from "@/shared/components/map";
import React from "react";

export default function Properties() {
  return (
    <div>
      <Map
        defaultCenter={{
          lat: 42.4975,
          lng: 27.47,
        }}
      />
    </div>
  );
}
