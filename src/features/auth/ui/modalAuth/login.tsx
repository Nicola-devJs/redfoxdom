import { mockTestImages } from "@/shared/constants/mockData";
import React from "react";
import { AuthModal } from ".";
import { InputUserIcon } from "@/shared/icons/inputUser";
import { Input } from "@/shared/ui/input";
import { LockIcon } from "@/shared/icons/lock";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Routes } from "@/shared/constants/routes";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";
import { signInWithCredentials } from "@/features/auth/model/actions/signInActions";
import { useRouter } from "next/navigation";

interface IProps {
  onClose: () => void;
}

export const LoginModal = ({ onClose }: IProps) => {
  const callbackUrl = useGetQueryCallbackUrl();
  const router = useRouter();

  const handleAuthAction = async (data: FormData) => {
    try {
      await signInWithCredentials(data);
      router.push(callbackUrl);
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
            label="Email"
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
