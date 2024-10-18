import { getTheme } from "@/shared/utils/theme";
import React, { ReactNode } from "react";
import { HeaderSite } from "../components/header/headerSite";
import { Footer } from "../components/footer/footer";

export default function SiteLayout({
  children,
  forgotModal,
  loginModal,
  registerModal,
}: Readonly<{
  children: ReactNode;
  loginModal: React.ReactNode;
  registerModal: React.ReactNode;
  forgotModal: React.ReactNode;
}>) {
  const theme = getTheme();
  return (
    <>
      <HeaderSite theme={theme} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <div className="max-md:h-[81px]"></div>
      {forgotModal}
      {loginModal}
      {registerModal}
    </>
  );
}
