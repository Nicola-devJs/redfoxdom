import { auth } from "@/features/auth/model/config";
import { NextResponse } from "next/server";
import { Routes } from "./shared/constants/routes";

export default auth((req) => {
  const url = req.nextUrl.clone();
  const currentPagePathname = req.nextUrl.pathname;

  if (!req.auth && currentPagePathname.includes(Routes.ADMIN)) {
    url.pathname = Routes.LOGIN;

    return NextResponse.redirect(url);
  }

  if (url.pathname === Routes.ADMIN) {
    url.pathname = Routes.ADMIN_PROFILE;

    return NextResponse.redirect(url);
  }
  // TODO Не закрывает модалку после входа в учетную запись
  // switch (currentPagePathname) {
  //   case Routes.LOGIN:
  //   case Routes.REGISTER:
  //   case Routes.FORGOT:
  //     if (req.auth) {
  //       url.pathname = Routes.MAIN;
  //       console.log(url);
  //       return NextResponse.redirect(url);
  //     }

  //   default:
  //     return;
  // }
});

export const config = {
  matcher: ["/admin/:path*", Routes.LOGIN, Routes.REGISTER, Routes.FORGOT],
};
