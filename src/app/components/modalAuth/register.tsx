import { mockTestImages } from "@/shared/constants/property";
import React from "react";
import { AuthModal } from ".";
import { InputUserIcon } from "@/shared/icons/inputUser";
import { Input } from "@/shared/UI/input";
import { LockIcon } from "@/shared/icons/lock";
import Link from "next/link";
import { Button } from "@/shared/UI/button";
import { MailIcon } from "@/shared/icons/mail";

interface IProps {
  onClose: () => void;
}

export const RegisterModal = ({ onClose }: IProps) => {
  return (
    <AuthModal
      img={mockTestImages.sofia}
      sublink={{
        text: "Do you already have an account?",
        pageName: "Login",
        link: "/login",
      }}
      onClose={onClose}
      title="Register"
    >
      <form action="#" className="mb-4">
        <div className="mb-4">
          <Input
            prevIcon={<InputUserIcon className="size-5 fill-gray-second" />}
            label="User name"
          />
        </div>
        <div className="mb-4">
          <Input
            prevIcon={<MailIcon className="size-5 fill-gray-second" />}
            label="Email address"
            type="email"
          />
        </div>
        <div className="mb-4">
          <Input
            prevIcon={<LockIcon className="size-5 fill-gray-second" />}
            label="Password"
            type="password"
          />
        </div>
        <div className="mb-8">
          <Input
            prevIcon={<LockIcon className="size-5 fill-gray-second" />}
            label="Confirm password"
            type="password"
          />
        </div>

        <Button className="w-full">Register</Button>
      </form>
    </AuthModal>
  );
};
