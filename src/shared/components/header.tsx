import React from "react";
import { Button } from "../UI/button";
import { PropertyIcon, PersonIcon } from "../icons";

export const HeaderLayout = () => {
  return (
    <header className="container-block flex items-center gap-4 py-4 shadow-md max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:shadow-inner">
      <div className="rounded-lg border-2 border-black px-4 py-2">LOGO</div>
      <nav className="ml-10">
        <ul className="flex items-center gap-6">
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
      <div className="ml-auto flex items-center gap-2">
        <Button variant="outlined">
          <PersonIcon /> Sign in
        </Button>
        <Button>
          <PropertyIcon /> Submit property
        </Button>
      </div>
    </header>
  );
};
