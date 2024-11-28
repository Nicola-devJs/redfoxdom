import { NextRequest, NextResponse } from "next/server";
import { UserLoginRequest, UserResponse } from "../types";
import { query } from "@/lib/db";
import { hashPassword } from "@/features/auth/model/helpers";

export const PUT = async (req: NextRequest) => {
  const body: UserLoginRequest = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is invalid" }, { status: 400 });
  }

  if (!body.password) {
    return NextResponse.json({ error: "Password is invalid" }, { status: 400 });
  }

  const hashedPassword = await hashPassword(body.password);

  try {
    const result = await query(
      "UPDATE users SET password = $1 WHERE email = $2 RETURNING *",
      [hashedPassword, body.email],
    );

    const user: UserResponse | undefined = result.rows[0];

    if (user) {
      const { password, ...foundedUser } = user;

      return NextResponse.json(foundedUser, { status: 200 });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "User not found, problem is server" },
      { status: 500 },
    );
  }
};
