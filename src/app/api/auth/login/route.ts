import { UserLoginRequest, UserResponseWithPassword } from "@/app/types/auth";
import { verifyPassword } from "@/features/auth/lib/transformPassword";
import { createClient } from "@/lib/supabase/server";
import {
  generateResponseIcorrectCredentials,
  generateResponseNotFoundProfile,
} from "@/app/lib/auth";
import { generateResponse } from "@/app/lib/generateResponse";

export const POST = async (req: Request) => {
  const body: Partial<UserLoginRequest> = await req.json();
  const supabase = await createClient();

  if (!body.email || !body.password) {
    return generateResponseIcorrectCredentials();
  }

  const {
    error,
    status,
    data: selectedProfile,
  } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", body.email)
    .returns<UserResponseWithPassword[]>()
    .maybeSingle();

  if (selectedProfile) {
    const isVerifyPassword = await verifyPassword(
      body.password,
      selectedProfile.password,
    );

    if (!isVerifyPassword) {
      return generateResponseIcorrectCredentials();
    }

    const { password, ...preparedResponseProfile } = selectedProfile;

    return generateResponse(preparedResponseProfile, status);
  } else if (error) {
    return generateResponse(null, status, error?.message);
  } else {
    return generateResponseNotFoundProfile();
  }
};
