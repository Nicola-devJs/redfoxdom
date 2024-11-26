import { UserLoginRequest, UserResponse } from "@/app/api/auth/types";
import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";
import { User } from "next-auth";

export const handleAuthUser = async (
  credetials: UserLoginRequest,
): Promise<User | null> => {
  try {
    const user = await requsetBaseApi.post<UserResponse>(
      API_ENDPOINTS.USER_LOGIN,
      JSON.stringify(credetials),
    );

    return { id: user.id.toString(), email: user.email, name: user.name };
  } catch (error) {
    return null;
  }
};
