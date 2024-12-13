import { SidebarListProperties } from "./ui";
import { PropertyList } from "@/entities/property/propertyList";
import { ToolbarProperties } from "@/features/toolbarProperties/toolbarProperties";
import React from "react";

export default function PropertiesListPage() {
  return (
    <div className="container-block mt-[50px] max-md:mt-4">
      <ToolbarProperties />
      <div className="relative mt-10 grid grid-cols-[35%_65%] max-lg:grid-cols-1">
        <SidebarListProperties />
        <div className="ml-[50px] max-lg:ml-0">
          <PropertyList className="grid-cols-2" />
        </div>
      </div>
    </div>
  );
}
