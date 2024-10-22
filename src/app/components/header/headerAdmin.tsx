import React from "react";
import { ThemeMode } from "../themeMode";
import { HeaderMenu } from "./headerMenu";
import { HeaderPerson } from "./headerPerson";
import { HeaderProperty } from "./headerProperty";
import { Session } from "next-auth";

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
          <HeaderProperty />
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};
