"use client";
import React from "react";
import { Routes } from "@/shared/constants/routes";
import { LoginModal } from "../modalAuth/login";
import { RegisterModal } from "../modalAuth/register";
import { ForgotModal } from "../modalAuth/forgot";
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
    <div className="mt-[80px] grid w-full place-items-center">
      {renderAuthChildren()}
    </div>
  );
};
