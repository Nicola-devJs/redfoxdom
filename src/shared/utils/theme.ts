import { cookies } from "next/headers";
import { THEME } from "../constants";

export const getTheme = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return theme?.value;
};
