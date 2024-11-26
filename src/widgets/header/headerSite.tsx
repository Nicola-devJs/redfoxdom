import React from "react";
import { ThemeMode } from "@/features/themeMode/themeMode";
import { HeaderMenu } from "./ui/headerMenu";
import { Logo } from "@/shared/ui/logo";
import { HeaderPerson } from "./ui/headerPerson";
import { auth } from "@/features/auth/model/config";
import { HeaderProperty } from "./ui/headerProperty";

interface IProps {
  theme: string | undefined;
}

export const HeaderSite = async ({ theme }: IProps) => {
  const session = await auth();

  return (
    <header
      id="header"
      className="bg-white py-4 shadow-lg max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-50 max-md:border-t-1 max-md:border-gray dark:bg-dark max-md:dark:border-dark-second"
    >
      <div className="container-block-large flex items-center gap-4">
        <Logo className="max-phone:hidden" />
        <HeaderMenu />
        <div className="ml-auto flex items-center gap-4 max-phone:ml-[13%] max-phone:w-full max-phone:justify-between">
          <HeaderPerson userSession={session} />
          <HeaderProperty />
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};
