import React from "react";
import { Button } from "../UI/button";
import { PropertyIcon, PersonIcon } from "../icons";
import { ThemeMode } from "./themeMode";
import { getTheme } from "../utils/theme";

export const HeaderLayout = () => {
  const theme = getTheme();

  return (
    <header className="dark:bg-primary-dark bg-white py-4 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0">
      <div className="container-block-header flex items-center gap-4">
        <div className="border-dark text-dark rounded-lg border-2 px-4 py-2 dark:border-white dark:text-white">
          LOGO
        </div>
        <nav className="ml-10">
          <ul className="text-dark flex items-center gap-6 dark:text-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Propeties</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outlined" className="dark:text-white">
            <PersonIcon className="fill-dark dark:fill-white" /> Sign in
          </Button>
          <Button>
            <PropertyIcon className="fill-white" /> Submit property
          </Button>
          <ThemeMode theme={theme} />
        </div>
      </div>
    </header>
  );
};
