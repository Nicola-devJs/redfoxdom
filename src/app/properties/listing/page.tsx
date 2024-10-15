import { PropertyList } from "@/shared/components/property/propertyList";
import { Toolbar } from "@/shared/components/toolbar";
import React from "react";
import { SidebarListing } from "./components/sidebarListing";

export default function PropertyListing() {
  return (
    <div className="container-block mt-[50px] max-md:mt-4">
      <Toolbar />
      <div className="relative mt-10 grid grid-cols-[35%_65%] max-lg:grid-cols-1">
        <SidebarListing />
        <div className="ml-[50px] max-lg:ml-0">
          <PropertyList className="grid-cols-2" />
        </div>
      </div>
    </div>
  );
}
