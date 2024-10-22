import React, { ReactNode } from "react";
import { HeaderAdmin } from "../components/header/headerAdmin";
import { getTheme } from "@/shared/utils/theme";
import { AdminNavigatePanel } from "../components/admin/adminNavigatePanel";
import { auth } from "@/configs/auth";

export default async function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const theme = getTheme();
  const session = await auth();

  return (
    <div className="flex min-h-full flex-grow">
      <AdminNavigatePanel session={session} />
      <div className="flex min-h-full w-full flex-col">
        <HeaderAdmin theme={theme} session={session} />

        <main className="h-full flex-grow bg-[#F7F7F7] p-12 dark:bg-dark-second/50">
          {children}
        </main>
      </div>
    </div>
  );
}
