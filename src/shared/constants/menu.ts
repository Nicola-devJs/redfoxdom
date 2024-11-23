import { PersonIcon, LogoutIcon, EditIcon } from "../icons";
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
    label: "List properties",
    path: Routes.LIST_PROPERTIES,
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
    icon: EditIcon,
  },
  {
    label: "Logout",
    path: LOGOUT,
    icon: LogoutIcon,
  },
];
