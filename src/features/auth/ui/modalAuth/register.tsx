import { mockTestImages } from "@/shared/constants/mockData";
import React from "react";
import { AuthModal } from ".";
import { InputUserIcon } from "@/shared/icons/inputUser";
import { Input } from "@/shared/ui/input";
import { LockIcon } from "@/shared/icons/lock";
import { Button } from "@/shared/ui/button";
import { MailIcon } from "@/shared/icons/mail";
import { Routes } from "@/shared/constants/routes";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";
import { registerWithCredentials } from "../../model/actions/registerAction";
import { useRouter } from "next/navigation";

interface IProps {
  onClose: () => void;
}

export const RegisterModal = ({ onClose }: IProps) => {
  const callbackUrl = useGetQueryCallbackUrl();
  const router = useRouter();

  const handleRegisterAction = async (data: FormData) => {
    try {
      await registerWithCredentials(data);
      router.push(callbackUrl);
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
          />
        </div>

        <Button className="w-full">Register</Button>
      </form>
    </AuthModal>
  );
};
