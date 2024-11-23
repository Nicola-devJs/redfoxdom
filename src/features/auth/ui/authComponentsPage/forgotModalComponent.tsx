"use client";
import { Routes } from "@/shared/constants/routes";
import { Modal } from "@/shared/ui/modal/modal";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ForgotModal } from "../modalAuth/forgot";

export const ForgotModalComponent = () => {
  const route = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    route.push(Routes.MAIN);
  };

  useEffect(() => {
    if (pathname === Routes.FORGOT) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <Modal isOpen={showModal} onClose={handleCloseModal}>
      <ForgotModal onClose={handleCloseModal} />
    </Modal>
  );
};
