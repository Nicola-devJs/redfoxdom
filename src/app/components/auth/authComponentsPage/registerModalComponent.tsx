"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "@/shared/UI/modal/modal";
import { Routes } from "@/shared/constants/routes";
import { usePathname, useRouter } from "next/navigation";
import { RegisterModal } from "../modalAuth/register";

export const RegisterModalComponent = () => {
  const route = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    route.push(Routes.MAIN);
  };

  useEffect(() => {
    if (pathname === Routes.REGISTER) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <Modal isOpen={showModal} onClose={handleCloseModal}>
      <RegisterModal onClose={handleCloseModal} />
    </Modal>
  );
};
