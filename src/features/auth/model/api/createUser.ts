import { UserCreateRequest, UserResponse } from "@/app/types/auth";
import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";

export const handleCreateUser = async (credetials: UserCreateRequest) => {
  const user = await requsetBaseApi.post<UserResponse>(
    API_ENDPOINTS.USER_CREATE,
    JSON.stringify(credetials),
  );

  return user.data;
};
