"use client";
import { Routes } from "@/shared/constants/routes";
import { generateCallbackUrl } from "@/shared/helpers/generateCallbackUrl";
import { PropertyIcon } from "@/shared/icons";
import { Button } from "@/shared/ui/button";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
interface IProps {
  userSession: Session | null;
}
export const HeaderProperty = ({ userSession }: IProps) => {
  const router = useRouter();

  const navigateToAdmin = () => {
    const routeLoginWithCallbackUrl = userSession
      ? Routes.ADMIN_PROPERTIES
      : generateCallbackUrl(Routes.ADMIN_PROPERTIES);

    router.push(routeLoginWithCallbackUrl);
  };

  return (
    <Button className="max-md:w-[48px] max-md:px-3" onClick={navigateToAdmin}>
      <PropertyIcon className="fill-white" />{" "}
      <span className="max-md:hidden">Submit property</span>
    </Button>
  );
};
