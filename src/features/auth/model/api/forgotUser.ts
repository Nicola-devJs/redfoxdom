import { UserLoginRequest, UserResponse } from "@/app/types/auth";
import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";

export const handleForgotUser = async (credetials: UserLoginRequest) => {
  const user = await requsetBaseApi.put<UserResponse>(
    API_ENDPOINTS.USER_FORGOT,
    JSON.stringify(credetials),
  );

  return user.data;
};
