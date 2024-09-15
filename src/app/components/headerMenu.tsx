"use client";
import { MenuIcon } from "@/shared/icons/menu";
import { cn } from "@/shared/utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const HeaderMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleCloseMobileMenu = (event: MouseEvent) => {
    const res = navRef.current
      ?.closest("#header")
      ?.contains(event.target as Node);

    if (!res) {
      setShowMobileMenu(false);
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
        className="hidden h-10 w-10 fill-dark max-md:block dark:fill-white"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      <nav
        className={cn(
          "max-md:dark:border-dark-second ml-10 transition max-md:pointer-events-none max-md:absolute max-md:bottom-full max-md:left-0 max-md:ml-0 max-md:w-full max-md:translate-y-4 max-md:border-y-1 max-md:border-gray max-md:bg-white max-md:p-6 max-md:opacity-0 max-md:dark:bg-dark",
          {
            "max-md:opacity-1 max-md:pointer-events-auto max-md:translate-y-0":
              showMobileMenu,
          },
        )}
        ref={navRef}
      >
        <ul className="flex items-center gap-6 text-dark max-md:flex-col max-md:text-3xl dark:text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Propeties</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
