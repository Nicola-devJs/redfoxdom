import { getTheme } from "@/shared/helpers/theme";
import React, { ReactNode } from "react";
import { HeaderSite } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { auth } from "@/features/auth/model/config";

export default async function SiteLayout({
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
  const session = await auth();
  return (
    <>
      <HeaderSite theme={theme} session={session} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <div className="max-md:h-[81px]"></div>
      {forgotModal}
      {loginModal}
      {registerModal}
    </>
  );
}
