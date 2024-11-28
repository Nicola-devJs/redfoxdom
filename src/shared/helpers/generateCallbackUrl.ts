import { Routes } from "../constants/routes";

export const generateCallbackUrl = (
  callbackUrl: string,
  route = Routes.LOGIN,
) => `${route}?callbackUrl=${encodeURI(callbackUrl)}`;
