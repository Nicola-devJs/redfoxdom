"use client";
import { Routes } from "@/shared/constants/routes";
import { Modal } from "@/shared/UI/modal/modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoginModal } from "../modalAuth/login";

export const LoginModalComponent = () => {
  const route = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    route.push(Routes.MAIN);
  };

  useEffect(() => {
    if (pathname === Routes.LOGIN) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <Modal isOpen={showModal} onClose={handleCloseModal}>
      <LoginModal onClose={handleCloseModal} />
    </Modal>
  );
};
