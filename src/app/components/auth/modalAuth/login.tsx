import { mockTestImages } from "@/shared/constants/mockData";
import React from "react";
import { AuthModal } from ".";
import { InputUserIcon } from "@/shared/icons/inputUser";
import { Input } from "@/shared/UI/input";
import { LockIcon } from "@/shared/icons/lock";
import Link from "next/link";
import { Button } from "@/shared/UI/button";
import { Routes } from "@/shared/constants/routes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useGetQueryCallbackUrl } from "@/shared/hooks/useGetQueryCallbackUrl";

interface IProps {
  onClose: () => void;
}

export const LoginModal = ({ onClose }: IProps) => {
  const router = useRouter();
  const callbackUrl = useGetQueryCallbackUrl();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push(callbackUrl);
      router.refresh();
    } else {
      console.error(res);
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
      <form action="#" className="mb-4" onSubmit={handleSubmit}>
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
