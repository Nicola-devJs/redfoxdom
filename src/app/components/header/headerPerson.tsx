"use client";
import { PersonIcon } from "@/shared/icons";
import { Button } from "@/shared/UI/button";
import { Modal } from "@/shared/UI/modal/modal";
import React, { useState } from "react";
import { LoginModal } from "../modalAuth/login";
import { RegisterModal } from "../modalAuth/register";

export const HeaderPerson = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Button
        variant="outlined"
        className="max-md:w-[48px] max-md:px-3"
        onClick={() => setShowModal(true)}
      >
        <PersonIcon className="size-4 fill-dark dark:fill-white" />{" "}
        <span className="max-md:hidden">Sign in</span>
      </Button>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <RegisterModal onClose={handleCloseModal} />
      </Modal>
    </>
  );
};
