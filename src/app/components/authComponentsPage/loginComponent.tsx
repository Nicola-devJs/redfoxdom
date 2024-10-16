"use client";
import { LoginModal } from "../modalAuth/login";
import { useRouter } from "next/navigation";
import React from "react";
import { RegisterModal } from "../modalAuth/register";

interface IProps {
  authPage: "login" | "register" | "forgot";
}

export const AuthComponent = ({ authPage }: IProps) => {
  const route = useRouter();

  const handleReturnHomePage = () => {
    route.push("/");
  };

  const renderAuthChildren = () => {
    switch (authPage) {
      case "login":
        return <LoginModal onClose={handleReturnHomePage} />;
      case "register":
        return <RegisterModal onClose={handleReturnHomePage} />;
    }
  };

  return (
    <div className="mt-[80px] grid w-full place-items-center">
      {renderAuthChildren()}
    </div>
  );
};
