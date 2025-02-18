"use client";
import React from "react";
import { Routes } from "@/shared/constants/routes";
import { LoginModal } from "../modal/login";
import { RegisterModal } from "../modal/register";
import { ForgotModal } from "../modal/forgot";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";

interface IProps {
  authPage: Routes;
}

export const AuthPageComponent = ({ authPage }: IProps) => {
  const redirect = useGetQueryCallbackUrl();

  const renderAuthChildren = () => {
    switch (authPage) {
      case Routes.LOGIN:
        return <LoginModal onClose={redirect} />;
      case Routes.REGISTER:
        return <RegisterModal onClose={redirect} />;
      case Routes.FORGOT:
        return <ForgotModal onClose={redirect} />;
    }
  };

  return (
    <div className="mt-s-80 grid w-full place-items-center">
      {renderAuthChildren()}
    </div>
  );
};
