import React from "react";
import { Map } from "@/shared/components/map/map";
import {
  PropertyList,
  PropertyListRow,
} from "@/shared/components/propertyList";
import { mockPropertyCards } from "@/shared/constants";
import { Toolbar } from "./components/toolbar";
import { Filter } from "./components/filter/filter";
import { Pagination } from "@/shared/components/pagination";

export default function Properties() {
  return (
    <div>
      <Map
        defaultCenter={{ lat: 42.503701480508234, lng: 27.470214576721176 }}
        initialMarkerProperties={mockPropertyCards}
      />

      <Filter />
      <div className="container-block">
        <Toolbar />
        <PropertyList />
        <Pagination />
      </div>
    </div>
  );
}
