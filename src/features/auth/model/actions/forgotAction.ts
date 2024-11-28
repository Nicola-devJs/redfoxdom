"use server";
import { handleForgotUser } from "../api/forgotUser";

export const forgotWithCredentials = async (data: FormData) => {
  const { email, password } = Object.fromEntries(data);

  await handleForgotUser({
    email: email as string,
    password: password as string,
  });
};
