"use server";
import { signInServer } from "../config";
import { SignInError } from "@auth/core/errors";
import { signIn } from "next-auth/react";

export const signInWithCredentials = async (data: FormData) => {
  const { email, password } = Object.fromEntries(data);

  try {
    await signInServer("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    console.log(error);
    throw new SignInError("no auth", {
      message: "copy error",
      name: "signin_error",
    });
  }
};

export const signInWithGoogle = async (redirectTo?: string) => {
  await signIn("google", { redirectTo });
};

export const signInWithFacebook = async (redirectTo?: string) => {
  await signIn("facebook", { redirectTo });
};
