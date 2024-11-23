"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Routes } from "@/shared/constants/routes";
import { LoginModal } from "../modalAuth/login";
import { RegisterModal } from "../modalAuth/register";
import { ForgotModal } from "../modalAuth/forgot";

interface IProps {
  authPage: Routes;
}

export const AuthPageComponent = ({ authPage }: IProps) => {
  const route = useRouter();

  const handleReturnHomePage = () => {
    route.push(Routes.MAIN);
  };

  const renderAuthChildren = () => {
    switch (authPage) {
      case Routes.LOGIN:
        return <LoginModal onClose={handleReturnHomePage} />;
      case Routes.REGISTER:
        return <RegisterModal onClose={handleReturnHomePage} />;
      case Routes.FORGOT:
        return <ForgotModal onClose={handleReturnHomePage} />;
    }
  };

  return (
    <div className="mt-[80px] grid w-full place-items-center">
      {renderAuthChildren()}
    </div>
  );
};
