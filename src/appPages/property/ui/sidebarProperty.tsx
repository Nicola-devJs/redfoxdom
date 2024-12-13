"use client";
import { FilterProperties } from "@/features/filterProperties/filterProperties";
import { LatestProperties } from "@/widgets/index";
import React, { useState } from "react";
import { ContactSellers } from "../../../features/contactSellers/contactSellers";
import { Sidebar } from "@/shared/ui/index";
import { MenuIcon } from "@/shared/icons";

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
        <FilterProperties onCloseSidebar={onCloseSidebar} />
        <LatestProperties />
      </Sidebar>
      <MenuIcon
        className="h-10 w-10 fill-dark max-lg:absolute max-lg:right-4 max-lg:top-7 lg:hidden dark:fill-white"
        onClick={() => setOpenSidebar(true)}
      />
    </>
  );
};
