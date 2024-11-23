"use client";
import { useRef, useEffect } from "react";

export const useHideScrollWindow = (isHide: boolean) => {
  const clientGlobalThis = window || {};
  const widthWindowWithScroll = useRef(clientGlobalThis.innerWidth);

  const widthBody = useRef(document.body.offsetWidth);

  const toggleViewMainScroll = (mode: "add" | "remove") => {
    const widthScroll = widthWindowWithScroll.current - widthBody.current;
    const isHeigthBodyMoreWindow =
      document.body.offsetHeight > clientGlobalThis.innerHeight;

    if (mode === "add" && isHeigthBodyMoreWindow) {
      document.body.style.marginRight = `${widthScroll}px`;
    } else {
      document.body.style.marginRight = "0px";
    }
  };

  useEffect(() => {
    if (isHide) {
      document.body.classList.add("fixed-window");
      toggleViewMainScroll("add");
    } else {
      document.body.classList.remove("fixed-window");
      toggleViewMainScroll("remove");
    }

    return () => {
      document.body.classList.remove("fixed-window");
      toggleViewMainScroll("remove");
    };
  }, [isHide]);
};
