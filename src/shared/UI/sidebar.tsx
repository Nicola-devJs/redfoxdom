"use client";
import React, { ReactNode } from "react";
import { cn } from "@/shared/helpers/cn";
import { CloseIcon } from "@/shared/icons";
import { useHideScrollWindow } from "@/shared/hooks/useHideScrollWindow";

interface IProps {
  className?: string;
  directionSide?: "left" | "right";
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isHideClose?: boolean;
}

export const Sidebar = ({
  className,
  directionSide,
  children,
  isOpen,
  onClose,
  isHideClose,
}: IProps) => {
  // useHideScrollWindow(isOpen);

  return (
    <div
      className={cn(
        "max-lg:invisible max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:z-20",
        { "max-lg:visible": isOpen },
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-10 overflow-y-auto max-lg:absolute max-lg:right-0 max-lg:top-0 max-lg:z-20 max-lg:h-full max-lg:max-h-max max-lg:w-full max-lg:max-w-[460px] max-lg:translate-x-[500px] max-lg:overflow-y-auto max-lg:bg-white max-lg:p-4 max-lg:opacity-0 max-lg:shadow-2xl max-lg:transition max-md:pb-[97px] dark:max-lg:bg-dark",
          {
            "max-lg:left-0 max-lg:right-auto max-lg:-translate-x-[500px]":
              directionSide === "left",
            "max-lg:translate-x-0 max-lg:opacity-100": isOpen,
          },
          className,
        )}
      >
        {!isHideClose && (
          <CloseIcon
            className="max-lg:absolute max-lg:right-8 max-lg:top-8 max-lg:h-8 max-lg:w-8 max-lg:rounded-full max-lg:bg-white max-lg:fill-dark/80 max-lg:p-1 lg:hidden dark:fill-gray-second max-lg:dark:bg-dark"
            onClick={onClose}
          />
        )}

        {children}
      </div>
      <div
        className={cn(
          "max-lg:absolute max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:top-0 max-lg:bg-dark/50 max-lg:opacity-0 max-lg:backdrop-blur-sm max-lg:transition",
          { "max-lg:opacity-100": isOpen },
        )}
        onClick={onClose}
      ></div>
    </div>
  );
};
