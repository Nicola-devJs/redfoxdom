"use client";
import React, { useEffect, useState } from "react";
import { LightModeIcon } from "../../shared/icons/lightMode";
import { DarkModeIcon } from "../../shared/icons/darkMode";
import { Button } from "../../shared/UI/button";
import { setCookie } from "../../shared/utils/cookies";
import { THEME } from "../../shared/constants/property";

interface IProps {
  theme: string | undefined;
}

const dataModeHTML = {
  get: () => document.documentElement.dataset.mode,
  set: (mode: THEME) => (document.documentElement.dataset.mode = mode),
};

const writeCookie = (value: THEME) => setCookie("theme", value);

export const ThemeMode = ({ theme }: IProps) => {
  const [isLightTheme, setIsLightTheme] = useState(theme !== THEME.DARK);

  const onChangeTheme = (theme: THEME) => {
    dataModeHTML.set(theme);
    setIsLightTheme(theme === THEME.LIGHT);
    writeCookie(theme);
  };

  const handleChangeTheme = () => {
    if (dataModeHTML.get() === "dark") {
      onChangeTheme(THEME.LIGHT);
    } else {
      onChangeTheme(THEME.DARK);
    }
  };

  useEffect(() => {
    if (!theme) {
      const mediaIsDark = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = mediaIsDark.matches ? THEME.DARK : THEME.LIGHT;

      onChangeTheme(theme);
    }
  }, []);

  return (
    <Button
      variant={isLightTheme ? "primary" : "outlined"}
      onClick={handleChangeTheme}
      isCircle
      className="w-[48px]"
    >
      {isLightTheme ? (
        <DarkModeIcon className="fill-white" />
      ) : (
        <LightModeIcon className="fill-white" />
      )}
    </Button>
  );
};
