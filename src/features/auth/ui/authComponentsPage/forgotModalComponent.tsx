"use client";
import { Routes } from "@/shared/constants/routes";
import { Modal } from "@/shared/ui/index";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ForgotModal } from "../modalAuth/forgot";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";

export const ForgotModalComponent = () => {
  const redirect = useGetQueryCallbackUrl();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (pathname === Routes.FORGOT) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [pathname]);

  return (
    <Modal isOpen={showModal} onClose={redirect}>
      <ForgotModal onClose={redirect} />
    </Modal>
  );
};
