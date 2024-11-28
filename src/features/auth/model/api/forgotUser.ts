import { UserLoginRequest, UserResponse } from "@/app/api/auth/types";
import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";
import { User } from "next-auth";

export const handleForgotUser = async (
  credetials: UserLoginRequest,
): Promise<User> => {
  try {
    const user = await requsetBaseApi.put<UserResponse>(
      API_ENDPOINTS.USER_FORGOT,
      JSON.stringify(credetials),
    );

    console.log(user);

    return { id: user.id.toString(), email: user.email, name: user.name };
  } catch (error) {
    throw error;
  }
};
