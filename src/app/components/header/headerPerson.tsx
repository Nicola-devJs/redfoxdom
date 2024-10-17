"use client";
import { PersonIcon } from "@/shared/icons";
import { Button } from "@/shared/UI/button";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/shared/constants/routes";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface IProps {
  userSession: Session | null;
}

export const HeaderPerson = ({ userSession }: IProps) => {
  const route = useRouter();
  const pathname = usePathname();

  const handleOpenAuthModal = () => {
    switch (pathname) {
      case Routes.LOGIN:
      case Routes.REGISTER:
      case Routes.FORGOT:
      case Routes.MAIN:
        route.push(Routes.LOGIN);
        break;
      default:
        const routeLoginWithCallbackUrl = `${Routes.LOGIN}?callbackUrl=${encodeURI(pathname)}`;
        route.push(routeLoginWithCallbackUrl);
        break;
    }
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      {userSession ? (
        <Button
          variant="outlined"
          className="max-md:w-[48px] max-md:px-3"
          onClick={handleSignOut}
        >
          <PersonIcon className="size-4 fill-dark dark:fill-white" />
          <span className="max-md:hidden">Sign out</span>
        </Button>
      ) : (
        <Button
          variant="outlined"
          className="max-md:w-[48px] max-md:px-3"
          onClick={handleOpenAuthModal}
        >
          <PersonIcon className="size-4 fill-dark dark:fill-white" />{" "}
          <span className="max-md:hidden">Sign in</span>
        </Button>
      )}
    </>
  );
};
