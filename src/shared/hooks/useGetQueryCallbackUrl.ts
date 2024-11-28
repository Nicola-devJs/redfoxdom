import { useRouter, useSearchParams } from "next/navigation";
import { Routes } from "../constants/routes";

export const useGetQueryCallbackUrl = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || Routes.MAIN;

  return () => router.push(callbackUrl);
};
