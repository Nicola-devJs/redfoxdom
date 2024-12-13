import React from "react";
import { ThemeMode } from "@/features/themeMode/themeMode";
import { Session } from "next-auth";
import { HeaderMenu, HeaderPerson, HeaderProperty } from "./ui/index";
import { Logo } from "@/shared/ui";

interface IProps {
  theme: string | undefined;
  session: Session | null;
}

export const HeaderAdmin = async ({ theme, session }: IProps) => {
  return (
    <header
      id="header"
      className="bg-white py-4 shadow-lg max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-50 max-md:border-t-1 max-md:border-gray dark:bg-dark max-md:dark:border-dark-second"
    >
      <div className="mx-12 flex items-center gap-4">
        <HeaderMenu />
        <div className="ml-auto flex items-center gap-4 max-phone:ml-[13%] max-phone:w-full max-phone:justify-between">
          <HeaderPerson userSession={session} />
          <HeaderProperty userSession={session} />
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};

export const HeaderSite = async ({ theme, session }: IProps) => {
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
          <HeaderProperty userSession={session} />
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};
