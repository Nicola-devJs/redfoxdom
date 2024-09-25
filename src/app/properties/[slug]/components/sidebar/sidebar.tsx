"use client";
import { FindPanel } from "@/shared/components/findPanel/findPanel";
import { PropertyLatest } from "@/shared/components/propertyLatest";
import { Button } from "@/shared/UI/button";
import React, { useEffect, useRef, useState } from "react";
import { ContactSellers } from "./contact";
import { cn } from "@/shared/utils/cn";
import { CloseIcon } from "@/shared/icons/close";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const onCloseSidebar = () => setOpenSidebar(false);

  const handleCloseOptions = (event: MouseEvent) => {
    const res = sidebarRef.current?.contains(event.target as Node);
    if (!res) {
      onCloseSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseOptions);
    return () => {
      document.removeEventListener("click", handleCloseOptions);
    };
  }, []);

  return (
    <div ref={sidebarRef}>
      <div
        className={cn(
          "mt-8 flex flex-col gap-10 max-lg:absolute max-lg:right-0 max-lg:top-0 max-lg:z-10 max-lg:max-h-max max-lg:w-full max-lg:max-w-[460px] max-lg:translate-x-[500px] max-lg:rounded-l-2xl max-lg:bg-white max-lg:p-4 max-lg:opacity-0 max-lg:shadow-2xl max-lg:transition dark:max-lg:bg-dark",
          {
            "max-lg:translate-x-0 max-lg:opacity-100": openSidebar,
          },
        )}
      >
        <CloseIcon
          className="absolute right-8 top-8 h-6 w-6 fill-dark/80 lg:hidden dark:fill-gray-second"
          onClick={onCloseSidebar}
        />
        <ContactSellers onCloseSidebar={onCloseSidebar} />
        <FindPanel onCloseSidebar={onCloseSidebar} />
        <PropertyLatest />
      </div>
      <Button
        className="absolute right-4 top-4 capitalize transition-all lg:hidden"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        Open sidebar
      </Button>
    </div>
  );
};
