"use client";
import { FilterProperties } from "@/features/filterProperties/filterProperties";
import { LatestProperties } from "@/widgets/index";
import { Button, Sidebar } from "@/shared/ui/index";
import React, { useState } from "react";

export const SidebarListProperties = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onCloseSidebar = () => setOpenSidebar(false);

  return (
    <>
      <Sidebar
        isOpen={openSidebar}
        onClose={onCloseSidebar}
        directionSide="left"
      >
        <FilterProperties onCloseSidebar={onCloseSidebar} />
        <LatestProperties />
      </Sidebar>
      <Button
        onClick={() => setOpenSidebar(true)}
        className="mb-6 capitalize lg:hidden"
        variant="secondary"
      >
        filters and latest properties
      </Button>
    </>
  );
};
