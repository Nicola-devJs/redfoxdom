"use client";
import { PersonIcon } from "@/shared/icons";
import { Button } from "@/shared/UI/button";
import React from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/shared/constants/routes";

export const HeaderPerson = () => {
  const route = useRouter();

  const handleOpenAuthModal = () => {
    route.push(Routes.LOGIN);
  };

  return (
    <Button
      variant="outlined"
      className="max-md:w-[48px] max-md:px-3"
      onClick={handleOpenAuthModal}
    >
      <PersonIcon className="size-4 fill-dark dark:fill-white" />{" "}
      <span className="max-md:hidden">Sign in</span>
    </Button>
  );
};
