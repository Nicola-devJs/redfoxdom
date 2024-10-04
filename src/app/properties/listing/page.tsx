import { FindPanel } from "@/shared/components/findPanel/findPanel";
import { PropertyLatest } from "@/shared/components/propertyLatest";
import { PropertyList } from "@/shared/components/propertyList";
import { Toolbar } from "@/shared/components/toolbar";
import React from "react";

export default function PropertyListing() {
  return (
    <div className="container-block mt-[50px]">
      <Toolbar />
      <div className="mt-10 grid grid-cols-[35%_65%] overflow-hidden">
        <div className="">
          {/* <FindPanel onCloseSidebar={() => null} /> */}
          <PropertyLatest />
        </div>
        <PropertyList />
      </div>
    </div>
  );
}
