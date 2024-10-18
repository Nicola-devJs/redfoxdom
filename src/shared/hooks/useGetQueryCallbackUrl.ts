import { useSearchParams } from "next/navigation";
import { Routes } from "../constants/routes";

export const useGetQueryCallbackUrl = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || Routes.MAIN;

  return callbackUrl;
};
