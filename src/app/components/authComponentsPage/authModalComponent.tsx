"use client";
import { LoginModal } from "@/app/components/modalAuth/login";
import { RegisterModal } from "@/app/components/modalAuth/register";
import { Modal } from "@/shared/UI/modal/modal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IProps {
  authPage: "login" | "register" | "forgot";
}

export const AuthModalComponent = ({ authPage }: IProps) => {
  const route = useRouter();

  const handleCloseModal = () => {
    route.push("/");
  };

  const renderAuthChildren = () => {
    switch (authPage) {
      case "login":
        return <LoginModal onClose={handleCloseModal} />;
      case "register":
        return <RegisterModal onClose={handleCloseModal} />;
    }
  };

  return (
    <Modal isOpen={true} onClose={handleCloseModal}>
      {renderAuthChildren()}
    </Modal>
  );
};
