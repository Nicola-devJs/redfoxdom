"use client";
import { menuNavigation } from "@/shared/constants/menu";
import { MenuIcon } from "@/shared/icons/menu";
import { cn } from "@/shared/utils/cn";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const HeaderMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleChangeShowMobileMenu = () => setShowMobileMenu(false);

  const handleCloseMobileMenu = (event: MouseEvent) => {
    const res = navRef.current
      ?.closest("#header")
      ?.contains(event.target as Node);

    if (!res) {
      handleChangeShowMobileMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseMobileMenu);
    return () => {
      document.removeEventListener("click", handleCloseMobileMenu);
    };
  }, []);

  return (
    <>
      <MenuIcon
        className="h-10 w-10 fill-dark md:hidden dark:fill-white"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      <nav
        className={cn(
          "ml-10 transition max-md:pointer-events-none max-md:absolute max-md:bottom-full max-md:left-0 max-md:ml-0 max-md:w-full max-md:translate-y-4 max-md:rounded-t-2xl max-md:border-y-1 max-md:border-gray max-md:bg-white max-md:p-6 max-md:opacity-0 max-md:dark:border-dark-second max-md:dark:bg-dark",
          {
            "max-md:opacity-1 max-md:pointer-events-auto max-md:translate-y-0":
              showMobileMenu,
          },
        )}
        ref={navRef}
      >
        <ul className="flex items-center gap-6 text-dark max-md:flex-col max-md:text-3xl dark:text-white">
          {menuNavigation.map(({ label, path }) => (
            <li key={path}>
              <Link href={path} onClick={handleChangeShowMobileMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
