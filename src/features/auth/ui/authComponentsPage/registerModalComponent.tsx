"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "@/shared/ui/modal/modal";
import { Routes } from "@/shared/constants/routes";
import { usePathname } from "next/navigation";
import { RegisterModal } from "../modalAuth/register";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";

export const RegisterModalComponent = () => {
  const redirect = useGetQueryCallbackUrl();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (pathname === Routes.REGISTER) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <Modal isOpen={showModal} onClose={redirect}>
      <RegisterModal onClose={redirect} />
    </Modal>
  );
};
