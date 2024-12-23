"use client";
import { PersonIcon, DownIcon } from "@/shared/icons";
import { Button, Person, Select } from "@/shared/ui/index";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/shared/constants/routes";
import type { Session } from "next-auth";
import { cn } from "@/shared/helpers/cn";
import { LOGOUT, menuAdminNavigation } from "@/shared/constants/menu";
import { LogoutModal } from "@/widgets/logoutModal";
import Link from "next/link";
import { generateCallbackUrl } from "@/shared/helpers/generateCallbackUrl";
interface IProps {
  userSession: Session | null;
}

export const HeaderPerson = ({ userSession }: IProps) => {
  const [showModal, setShowModal] = useState(false);
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
        const routeLoginWithCallbackUrl = generateCallbackUrl(pathname);
        route.push(routeLoginWithCallbackUrl);
        break;
    }
  };

  return (
    <>
      {userSession ? (
        <div className="flex items-center gap-3">
          <Link
            href={Routes.ADMIN_PROFILE}
            className="grid size-8 min-w-8 place-items-center rounded-full bg-gray-second"
          >
            <Person
              alt={userSession.user?.name}
              img={userSession.user?.image}
            />
          </Link>

          <Select
            variant="secondary"
            options={personOptions}
            isDropMenu
            onSelectOption={(option) => {
              if (option.value === LOGOUT) {
                setShowModal(true);
              } else {
                route.push(option.value as string);
              }
            }}
            onAfterShowOptions={setInvertedArrow}
            renderCustomInput={() => (
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  {userSession.user?.name}
                </span>
                <DownIcon
                  className={cn("size-3 fill-dark transition dark:fill-white", {
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

      <LogoutModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        pathname={pathname}
      />
    </>
  );
};
