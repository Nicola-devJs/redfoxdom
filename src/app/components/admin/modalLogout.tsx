import { Routes } from "@/shared/constants/routes";
import { CloseIcon } from "@/shared/icons/close";
import { Button } from "@/shared/UI/button";
import { Modal } from "@/shared/UI/modal/modal";
import { signOut } from "next-auth/react";
import React from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLogout = ({ isOpen, onClose }: IProps) => {
  const handleLogout = () => {
    signOut({ redirectTo: Routes.MAIN });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative rounded-2xl bg-white p-12 dark:bg-dark">
        <CloseIcon
          className="absolute right-4 top-4 size-5 cursor-pointer"
          onClick={onClose}
        />
        <h4 className="mb-4 text-center text-3xl font-semibold">
          Are you sure you want to get out?
        </h4>
        <div className="mx-auto mb-12 h-[2px] w-[100px] rounded-[1px] bg-primary"></div>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </Modal>
  );
};
