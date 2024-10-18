"use client";
import { PersonIcon } from "@/shared/icons";
import { Button } from "@/shared/UI/button";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/shared/constants/routes";
import type { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Select } from "@/shared/UI/select";
import { DownIcon } from "@/shared/icons/down";
import { cn } from "@/shared/utils/cn";

interface IProps {
  userSession: Session | null;
}

export const HeaderPerson = ({ userSession }: IProps) => {
  const route = useRouter();
  const [invertedArrow, setInvertedArrow] = useState(false);
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
        <div className="flex items-center gap-3">
          <div className="grid size-8 min-w-8 place-items-center rounded-full bg-gray-second">
            {userSession.user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={userSession.user?.image}
                alt={userSession.user?.name || "user"}
                className="size-8 min-w-8 rounded-full"
              />
            ) : (
              <PersonIcon className="size-4 fill-white" />
            )}
          </div>

          <Select
            options={[{ label: "Logout", value: "logout" }]}
            handleSelectOptions={(option) => {
              if (option.value === "logout") {
                handleSignOut();
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
