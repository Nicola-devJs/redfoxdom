import { Routes } from "@/shared/constants/routes";
import { InputUserIcon, LockIcon } from "@/shared/icons";
import { Button, Input } from "@/shared/ui/index";
import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";

export const LoginForm = () => {
  const status = useFormStatus();
  console.log("data", status.data?.forEach(console.log));

  return (
    <>
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
    </>
  );
};
