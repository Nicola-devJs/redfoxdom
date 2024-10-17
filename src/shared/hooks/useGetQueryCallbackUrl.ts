import { useSearchParams } from "next/navigation";
import React from "react";
import { Routes } from "../constants/routes";

export const useGetQueryCallbackUrl = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || Routes.MAIN;

  //   if (
  //     decodeURI(callbackUrl).startsWith("http://") ||
  //     decodeURI(callbackUrl).startsWith("https://")
  //   ) {
  //     const urlRes = new URL(callbackUrl);
  //     return urlRes.pathname;
  //   }

  return callbackUrl;
};
