import { NextRequest } from "next/server";
import { UserLoginRequest } from "@/app/types/auth";
import { hashPassword } from "@/features/auth/lib/transformPassword";
import { generateResponseIcorrectCredentials } from "@/app/lib/auth";
import { generateResponse } from "@/app/lib/generateResponse";
import { query } from "@/lib/db";

export const PUT = async (req: NextRequest) => {
  const body: Partial<UserLoginRequest> = await req.json();

  if (!body.email || !body.password) {
    return generateResponseIcorrectCredentials();
  }

  const hashedPassword = await hashPassword(body.password);

  // const {
  //   error,
  //   status,
  //   data: updatedProfile,
  // } = await supabase
  //   .from("profiles")
  //   .update({ password: hashedPassword })
  //   .eq("email", body.email)
  //   .select("id, email, name, created_at")
  //   .returns<UserResponse[]>()
  //   .maybeSingle();

  try {
    const response = await query(
      "UPDATE profiles SET password = $1 WHERE email = $2 RETURNING *",
      [hashedPassword, body.email],
    );

    const [updatedProfile] = response.rows;

    return generateResponse(updatedProfile);
  } catch (error) {
    return generateResponse(null, 500, error as string);
  }
};
