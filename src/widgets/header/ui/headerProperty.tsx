"use client";
import { Routes } from "@/shared/constants/routes";
import { PropertyIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export const HeaderProperty = () => {
  const router = useRouter();

  const navigateToAdmin = () => router.push(Routes.ADMIN_PROPERTIES);

  return (
    <Button className="max-md:w-[48px] max-md:px-3" onClick={navigateToAdmin}>
      <PropertyIcon className="fill-white" />{" "}
      <span className="max-md:hidden">Submit property</span>
    </Button>
  );
};
