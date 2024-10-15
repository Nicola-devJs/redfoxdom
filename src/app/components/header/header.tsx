import React from "react";
import { Button } from "../../../shared/UI/button";
import { PropertyIcon } from "../../../shared/icons";
import { ThemeMode } from "../themeMode";
import { HeaderMenu } from "./headerMenu";
import { Logo } from "../logo";
import { HeaderPerson } from "./headerPerson";

interface IProps {
  theme: string | undefined;
}

export const HeaderLayout = ({ theme }: IProps) => {
  return (
    <header
      id="header"
      className="bg-white py-4 shadow-lg max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-50 max-md:border-t-1 max-md:border-gray dark:bg-dark max-md:dark:border-dark-second"
    >
      <div className="container-block-large flex items-center gap-4">
        <Logo className="max-phone:hidden" />
        <HeaderMenu />
        <div className="ml-auto flex items-center gap-4 max-phone:ml-[13%] max-phone:w-full max-phone:justify-between">
          <HeaderPerson />
          <Button className="max-md:w-[48px] max-md:px-3">
            <PropertyIcon className="fill-white" />{" "}
            <span className="max-md:hidden">Submit property</span>
          </Button>
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};
