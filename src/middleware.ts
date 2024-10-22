import { auth } from "@/configs/auth";
import NextAuth from "next-auth";
import { NextResponse, type NextRequest } from "next/server";
import { Routes } from "./shared/constants/routes";

export default auth(async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname === Routes.ADMIN) {
    url.pathname = Routes.ADMIN_PROFILE;

    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: "/admin/:path*",
};
