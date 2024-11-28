"use server";
import { signInServer } from "../config";

export const signInWithCredentials = async (data: FormData) => {
  const { email, password } = Object.fromEntries(data);

  await signInServer("credentials", {
    email,
    password,
    redirect: false,
  });
};
