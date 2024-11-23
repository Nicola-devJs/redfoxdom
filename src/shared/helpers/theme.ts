import { cookies } from "next/headers";

export const getTheme = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return theme?.value;
};
