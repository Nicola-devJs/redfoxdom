import { mockTestImages } from "@/shared/constants/mockData";
import React from "react";
import { AuthModal } from ".";
import { InputUserIcon, LockIcon, MailIcon } from "@/shared/icons";
import { Button, Input } from "@/shared/ui/index";
import { Routes } from "@/shared/constants/routes";
import { registerWithCredentials } from "../../model/actions/registerAction";

interface IProps {
  onClose: () => void;
}

export const RegisterModal = ({ onClose }: IProps) => {
  const handleRegisterAction = async (data: FormData) => {
    try {
      await registerWithCredentials(data);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      console.log("loaded");
    }
  };

  return (
    <AuthModal
      img={mockTestImages.sofia}
      sublink={{
        text: "Do you already have an account?",
        pageName: "Login",
        link: Routes.LOGIN,
      }}
      onClose={onClose}
      title="Register"
    >
      <form action={handleRegisterAction} className="mb-4">
        <div className="mb-4">
          <Input
            prevIcon={<InputUserIcon className="size-5 fill-gray-second" />}
            label="User name"
            name="name"
          />
        </div>
        <div className="mb-4">
          <Input
            prevIcon={<MailIcon className="size-5 fill-gray-second" />}
            label="Email address"
            type="email"
            name="email"
          />
        </div>
        <div className="mb-4">
          <Input
            prevIcon={<LockIcon className="size-5 fill-gray-second" />}
            label="Password"
            type="password"
            name="password"
          />
        </div>
        <div className="mb-8">
          <Input
            prevIcon={<LockIcon className="size-5 fill-gray-second" />}
            label="Confirm password"
            type="password"
            name="password_confirm"
          />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </AuthModal>
  );
};
