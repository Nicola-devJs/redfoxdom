import { PersonIcon } from "../icons";
import { Routes } from "./routes";

export const LOGOUT = "logout";

export const menuNavigation = [
  {
    label: "Home",
    path: Routes.MAIN,
  },
  {
    label: "Properties",
    path: Routes.PROPERTIES,
  },
  {
    label: "Properties listing",
    path: Routes.LISTING,
  },
];

export const menuAdminNavigation = [
  {
    label: "Profile",
    path: Routes.ADMIN_PROFILE,
    icon: PersonIcon,
  },
  {
    label: "My properties",
    path: Routes.ADMIN_PROPERTIES,
    icon: PersonIcon,
  },
  {
    label: "Logout",
    path: LOGOUT,
    icon: PersonIcon,
  },
];
