"use client";
import { Routes } from "@/shared/constants/routes";
import { Modal } from "@/shared/ui/index";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoginModal } from "../modalAuth/login";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";

export const LoginModalComponent = () => {
  const redirect = useGetQueryCallbackUrl();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (pathname === Routes.LOGIN) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <Modal isOpen={showModal} onClose={redirect}>
      <LoginModal onClose={redirect} />
    </Modal>
  );
};
