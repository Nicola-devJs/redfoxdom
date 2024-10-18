"use client";
import { PersonIcon } from "@/shared/icons";
import { Button } from "@/shared/UI/button";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/shared/constants/routes";
import type { Session } from "next-auth";
import { signOut, SignOutParams } from "next-auth/react";
import { Select } from "@/shared/UI/select";
import { DownIcon } from "@/shared/icons/down";
import { cn } from "@/shared/utils/cn";
import { Person } from "../person";
import { LOGOUT, menuAdminNavigation } from "@/shared/constants/menu";

interface IProps {
  userSession: Session | null;
}

export const HeaderPerson = ({ userSession }: IProps) => {
  const route = useRouter();
  const [invertedArrow, setInvertedArrow] = useState(false);
  const pathname = usePathname();

  const personOptions = menuAdminNavigation.map((menu) => ({
    label: menu.label,
    value: menu.path,
  }));

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
    const options: SignOutParams | undefined = pathname.includes(Routes.ADMIN)
      ? { redirectTo: Routes.MAIN }
      : undefined;

    signOut(options);
  };

  return (
    <>
      {userSession ? (
        <div className="flex items-center gap-3">
          <div className="grid size-8 min-w-8 place-items-center rounded-full bg-gray-second">
            <Person
              alt={userSession.user?.name}
              img={userSession.user?.image}
            />
          </div>

          <Select
            variant="secondary"
            options={personOptions}
            handleSelectOptions={(option) => {
              if (option.value === LOGOUT) {
                handleSignOut();
              } else {
                route.push(option.value as string);
              }
            }}
            onShowOptions={setInvertedArrow}
            renderCustomInput={() => (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  {userSession.user?.name}
                </span>
                <DownIcon
                  className={cn("size-3 fill-dark transition", {
                    "rotate-180": invertedArrow,
                  })}
                />
              </div>
            )}
            className="z-10 min-w-[140px]"
          />
        </div>
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
