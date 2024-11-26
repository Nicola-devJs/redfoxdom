"use client";
import { useHideScrollWindow } from "@/shared/hooks/useHideScrollWindow";
import { cn } from "@/shared/helpers/cn";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen, onClose }: IProps) => {
  // useHideScrollWindow(isOpen);

  return (
    <>
      {isOpen
        ? createPortal(
            <div
              className="fixed bottom-0 left-0 right-0 top-0 z-50 grid h-full w-full place-content-center bg-dark/50 backdrop-blur-sm dark:bg-dark-second/50"
              onClick={onClose}
            >
              <div
                className={cn("h-auto min-w-[600px] max-md:min-w-full")}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};
