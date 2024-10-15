import { mockTestImages } from "@/shared/constants/property";
import React from "react";
import { AuthModal } from ".";
import { InputUserIcon } from "@/shared/icons/inputUser";
import { Input } from "@/shared/UI/input";
import { LockIcon } from "@/shared/icons/lock";
import Link from "next/link";
import { Button } from "@/shared/UI/button";

interface IProps {
  onClose: () => void;
}

export const LoginModal = ({ onClose }: IProps) => {
  return (
    <AuthModal
      img={mockTestImages.obzor}
      sublink={{
        text: "Don`t you have an account?",
        pageName: "Register",
        link: "/",
      }}
      onClose={onClose}
      title="Login"
    >
      <form action="#" className="mb-4">
        <div className="mb-4">
          <Input
            prevIcon={<InputUserIcon className="size-5 fill-gray-second" />}
            label="Account"
          />
        </div>
        <div className="mb-3">
          <Input
            prevIcon={<LockIcon className="size-5 fill-gray-second" />}
            label="Password"
            type="password"
          />
        </div>
        <div className="mb-4 text-end">
          <Link
            href="/"
            className="text-sm hover:underline hover:underline-offset-2"
          >
            Forgot password
          </Link>
        </div>
        <Button className="w-full">Login</Button>
      </form>
    </AuthModal>
  );
};
