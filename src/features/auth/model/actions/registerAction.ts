"use server";
import { handleCreateUser } from "../api/createUser";
import { signInWithCredentials } from "./signInAction";

export const registerWithCredentials = async (data: FormData) => {
  const { email, password, name } = Object.fromEntries(data);

  await handleCreateUser({
    email: email as string,
    password: password as string,
    name: name as string,
  });

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  await signInWithCredentials(formData);
};
