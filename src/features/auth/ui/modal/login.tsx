import { mockTestImages } from "@/shared/constants/mockData";
import React from "react";
import { AuthModal } from ".";
import { Routes } from "@/shared/constants/routes";
import { signInWithCredentials } from "@/features/auth/model/actions/signInAction";
import { Button, Input } from "@/shared/ui";
import Link from "next/link";
import { InputUserIcon, LockIcon } from "@/shared/icons";
import { useForm } from "react-hook-form";

interface IProps {
  onClose: () => void;
}

export const LoginModal = ({ onClose }: IProps) => {
  const handleAuthAction = async (data: FormData) => {
    try {
      await signInWithCredentials(data);
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      console.log("loaded");
    }
  };

  return (
    <AuthModal
      img={mockTestImages.obzor}
      sublink={{
        text: "Don`t you have an account?",
        pageName: "Register",
        link: Routes.REGISTER,
      }}
      onClose={onClose}
      title="Login"
    >
      <form action={handleAuthAction} className="mb-4">
        <div className="mb-4">
          <Input
            prevIcon={<InputUserIcon className="size-5 fill-gray-second" />}
            label="Email address"
            type="email"
            name="email"
            placeholder="your email"
          />
        </div>
        <div className="mb-3">
          <Input
            prevIcon={<LockIcon className="size-5 fill-gray-second" />}
            label="Password"
            name="password"
            type="password"
            placeholder="your password"
          />
        </div>
        <div className="mb-4 text-end">
          <Link
            href={Routes.FORGOT}
            className="text-sm hover:underline hover:underline-offset-2 dark:text-gray-second"
          >
            Forgot password
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </AuthModal>
  );
};
