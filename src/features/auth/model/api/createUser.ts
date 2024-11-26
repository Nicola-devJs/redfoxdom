import { UserCreateRequest, UserResponse } from "@/app/api/auth/types";
import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";
import { User } from "next-auth";

export const handleCreateUser = async (
  credetials: UserCreateRequest,
): Promise<User> => {
  try {
    const user = await requsetBaseApi.post<UserResponse>(
      API_ENDPOINTS.USER_CREATE,
      JSON.stringify(credetials),
    );

    return { id: user.id.toString(), email: user.email, name: user.name };
  } catch (error) {
    throw error;
  }
};
