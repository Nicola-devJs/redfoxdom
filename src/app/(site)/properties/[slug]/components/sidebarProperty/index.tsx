"use client";
import { FindPanel } from "@/shared/components/findPanel/findPanel";
import { PropertyLatest } from "@/shared/components/propertyLatest";
import React, { useState } from "react";
import { ContactSellers } from "./contact";
import { Sidebar } from "@/shared/UI/sidebar";
import { MenuIcon } from "@/shared/icons/menu";

interface IProps {
  className?: string;
  directionSide?: "left";
}

export const SidebarProperty = ({ className, directionSide }: IProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const onCloseSidebar = () => setOpenSidebar(false);

  return (
    <>
      <Sidebar
        isOpen={openSidebar}
        onClose={onCloseSidebar}
        className={className}
      >
        <ContactSellers onCloseSidebar={onCloseSidebar} />
        <FindPanel onCloseSidebar={onCloseSidebar} />
        <PropertyLatest />
      </Sidebar>
      <MenuIcon
        className="h-10 w-10 fill-dark max-lg:absolute max-lg:right-4 max-lg:top-7 lg:hidden dark:fill-white"
        onClick={() => setOpenSidebar(true)}
      />
    </>
  );
};
