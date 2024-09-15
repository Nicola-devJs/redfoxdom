import React from "react";
import { Button } from "../../shared/UI/button";
import { PropertyIcon, PersonIcon } from "../../shared/icons";
import { ThemeMode } from "./themeMode";
import { HeaderMenu } from "./headerMenu";

interface IProps {
  theme: string | undefined;
}

export const HeaderLayout = ({ theme }: IProps) => {
  return (
    <header
      id="header"
      className="max-md:dark:border-dark-second bg-white py-4 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-50 max-md:border-t-1 max-md:border-gray dark:bg-dark"
    >
      <div className="container-block-header flex items-center gap-4">
        <div className="rounded-lg border-2 border-dark px-4 py-2 text-dark dark:border-white dark:text-white">
          LOGO
        </div>
        <HeaderMenu />
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outlined" className="max-md:px-3 dark:text-white">
            <PersonIcon className="fill-dark dark:fill-white" />{" "}
            <span className="max-md:hidden">Sign in</span>
          </Button>
          <Button className="max-md:px-3">
            <PropertyIcon className="fill-white" />{" "}
            <span className="max-md:hidden">Submit property</span>
          </Button>
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};
