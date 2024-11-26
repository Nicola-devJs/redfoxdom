import { API_ENDPOINTS } from "@/shared/services/api/endpoints";
import { requsetBaseApi } from "@/shared/services/api/requestBase";
import { PropertiesDTO } from "./types";

export const fetchingProperties = async () => {
  const response = await requsetBaseApi.get<PropertiesDTO>(
    API_ENDPOINTS.PROPERTIES,
  );
  console.log(response);
};
