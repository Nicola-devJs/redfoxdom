import { Map, MapConfig } from "@/widgets/map";
import { PropertyList } from "@/entities/property/propertyList";
import { ToolbarProperties } from "@/features/toolbarProperties/toolbarProperties";
import { mockPropertyCards } from "@/shared/constants/mockData";
import { Pagination } from "@/shared/ui";
import { FilterPanelProperties } from "./ui";

export default function PropertiesPage() {
  return (
    <div>
      <Map
        defaultCenter={MapConfig.defaultCoords}
        initialMarkerProperties={mockPropertyCards}
      />
      <FilterPanelProperties />
      <div className="container-block">
        <ToolbarProperties />
        <PropertyList />
        <Pagination />
      </div>
    </div>
  );
}
