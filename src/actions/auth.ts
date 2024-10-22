"use server";

import { signInServer } from "@/configs/auth";
import { SignInError } from "@auth/core/errors";
import { redirect } from "next/navigation";

interface ISignIn {
  email: string;
  password: string;
}

export const signInAction = async (callbackUrl: string, data: FormData) => {
  const { email, password } = Object.fromEntries(data);

  try {
    await signInServer("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    callbackUrl = "";
    throw new SignInError("no auth", {
      message: "copy error",
      name: "signin_error",
    });
  } finally {
    redirect(callbackUrl);
  }
};
