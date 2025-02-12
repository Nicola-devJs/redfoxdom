import { UserCreateRequest, UserResponse } from "@/app/types/auth";
import { hashPassword } from "@/features/auth/lib/transformPassword";
import { generateResponseIcorrectCredentials } from "@/app/lib/auth";
import { generateResponse } from "@/app/lib/generateResponse";
import { query } from "@/lib/db";

export const POST = async (req: Request) => {
  const body: Partial<UserCreateRequest> = await req.json();

  if (!body.email || !body.password) {
    return generateResponseIcorrectCredentials();
  }

  const hashedPassword = await hashPassword(body.password);

  // const {
  //   status,
  //   error,
  //   data: createdProfile,
  // } = await supabase
  //   .from("profiles")
  //   .insert([{ email: body.email, name: body.name, password: hashedPassword }])
  //   .select("id, email, name, created_at")
  //   .returns<UserResponse[]>()
  //   .single();

  try {
    const response = await query(
      "INSERT INTO profiles (name, email, password) values ($1, $2, $3) RETURNING *",
      [body.name || "", body.email, hashedPassword],
    );

    const [createdProfile] = response.rows;

    return generateResponse(createdProfile);
  } catch (error) {
    return generateResponse(null, 500, error as string);
  }
};
