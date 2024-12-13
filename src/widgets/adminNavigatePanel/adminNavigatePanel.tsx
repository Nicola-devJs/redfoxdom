import React from "react";
import { Person } from "@/shared/ui/index";
import { Session } from "next-auth";
import { AdminMenu } from "./ui/index";

interface IProps {
  session: Session | null;
}

export const AdminNavigatePanel = ({ session }: IProps) => {
  return (
    <aside className="min-h-full w-full max-w-[300px] flex-grow bg-dark text-white dark:bg-dark-second">
      <div className="border-b-1 border-dark-second p-8 dark:border-dark">
        Logo
      </div>
      <div className="border-b-1 border-dark-second p-8">
        <span className="mb-2 inline-block text-sm text-gray-second">
          Profile
        </span>
        <div className="flex items-center gap-3">
          <Person
            alt={session?.user?.name}
            img={session?.user?.image}
            size="large"
          />
          <div className="flex w-full flex-col overflow-hidden">
            <span className="text-xs font-light text-gray-second">Account</span>
            <span className="text overflow-hidden text-ellipsis whitespace-nowrap text-sm text-white">
              {session?.user?.email || session?.user?.name}
            </span>
          </div>
        </div>
      </div>
      <div className="py-8">
        <span className="mb-2 ml-8 inline-block text-sm text-gray-second">
          Menu
        </span>
        <AdminMenu />
      </div>
    </aside>
  );
};
