"use client";
import { LOGOUT, menuAdminNavigation } from "@/shared/constants/menu";
import { cn } from "@/shared/helpers/cn";
import { LogoutModal } from "@/widgets/index";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const AdminMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <ul>
        {menuAdminNavigation.map((menu) => {
          const MenuIcon = menu.icon;
          const isActive = pathname.includes(menu.path);

          const handleNavigate = () => {
            if (menu.path === LOGOUT) {
              setShowModal(true);
            } else {
              router.push(menu.path);
            }
          };

          return (
            <li
              className={cn(
                "flex cursor-pointer items-center gap-3 bg-transparent px-8 py-3 transition hover:bg-dark-second",
                {
                  "bg-primary hover:bg-primary/60": isActive,
                },
              )}
              key={menu.path}
              onClick={handleNavigate}
            >
              <MenuIcon
                className={cn("size-4 min-w-4 fill-gray/30", {
                  "fill-white": isActive,
                })}
              />
              <span className="text-sm text-white">{menu.label}</span>
            </li>
          );
        })}
      </ul>

      <LogoutModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        pathname={pathname}
      />
    </>
  );
};
