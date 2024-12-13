import { NextResponse } from "next/server";
import { UserLoginRequest, UserResponse } from "../types";
import { query } from "@/lib/db";
import { verifyPassword } from "@/features/auth/lib/transformPassword";

export const POST = async (req: Request) => {
  const body: UserLoginRequest = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is invalid" }, { status: 400 });
  }

  if (!body.password) {
    return NextResponse.json({ error: "Password is invalid" }, { status: 400 });
  }

  try {
    const result = await query("SELECT * FROM users WHERE email = $1", [
      body.email,
    ]);

    const user: UserResponse | undefined = result.rows[0];

    if (user) {
      const isVerifyPassword = await verifyPassword(
        body.password,
        user.password,
      );

      if (!isVerifyPassword) {
        return NextResponse.json(
          { error: "Password is invalid" },
          { status: 400 },
        );
      }

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
