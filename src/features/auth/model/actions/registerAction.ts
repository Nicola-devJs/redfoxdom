"use server";
import { handleCreateUser } from "../api/createUser";
import { signInWithCredentials } from "./signInAction";

export const registerWithCredentials = async (data: FormData) => {
  const { email, password, name } = Object.fromEntries(data);

  const createdUser = await handleCreateUser({
    email: email as string,
    password: password as string,
    name: name as string,
  });

  if (createdUser) {
    await signInWithCredentials(data);
  }
};
