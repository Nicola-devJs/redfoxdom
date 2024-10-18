"use client";
import { FindPanel } from "@/shared/components/findPanel/findPanel";
import { PropertyLatest } from "@/shared/components/propertyLatest";
import { MenuIcon } from "@/shared/icons/menu";
import { Button } from "@/shared/UI/button";
import { Sidebar } from "@/shared/UI/sidebar";
import React, { useState } from "react";

export const SidebarListing = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onCloseSidebar = () => setOpenSidebar(false);

  return (
    <>
      <Sidebar
        isOpen={openSidebar}
        onClose={onCloseSidebar}
        directionSide="left"
      >
        <FindPanel onCloseSidebar={onCloseSidebar} />
        <PropertyLatest />
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
