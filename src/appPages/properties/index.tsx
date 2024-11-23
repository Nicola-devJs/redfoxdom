import { FilterPanel } from "@/appPages/properties/ui/filterPanel/filterPanel";
import { Map } from "@/widgets/map/map";
import { PropertyList } from "@/entities/property/propertyList";
import { ToolbarProperties } from "@/features/toolbarProperties/toolbarProperties";
import { mockPropertyCards } from "@/shared/constants/mockData";
import { Pagination } from "@/shared/ui/pagination";

export default function PropertiesPage() {
  return (
    <div>
      <Map
        defaultCenter={{ lat: 42.503701480508234, lng: 27.470214576721176 }}
        initialMarkerProperties={mockPropertyCards}
      />
      <FilterPanel />
      <div className="container-block">
        <ToolbarProperties />
        <PropertyList />
        <Pagination />
      </div>
    </div>
  );
}
