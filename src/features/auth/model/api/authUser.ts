import { UserLoginRequest, UserResponse } from "@/app/types/auth";
import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";

export const handleAuthUser = async (credetials: UserLoginRequest) => {
  const user = await requsetBaseApi.post<UserResponse>(
    API_ENDPOINTS.USER_LOGIN,
    JSON.stringify(credetials),
  );

  return user.data;
};
