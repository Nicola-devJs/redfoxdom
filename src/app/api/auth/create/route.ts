import { NextResponse } from "next/server";
import { UserCreateRequest, UserResponse } from "../types";
import { query } from "@/lib/db";
import { hashPassword } from "@/features/auth/model/helpers";

export const POST = async (req: Request) => {
  const body: UserCreateRequest = await req.json();

  if (!body.email) {
    return NextResponse.json({ error: "Email is invalid" }, { status: 400 });
  }

  if (!body.password) {
    return NextResponse.json({ error: "Password is invalid" }, { status: 400 });
  }

  const user = await query("SELECT * FROM users WHERE email = $1", [
    body.email,
  ]);

  if (user.rows[0]) {
    return NextResponse.json(
      { error: "User with this email already exists" },
      { status: 409 },
    );
  }

  const hashedPassword = await hashPassword(body.password);

  try {
    const result = await query(
      "INSERT INTO users (name, email, password) values ($1, $2, $3) RETURNING *",
      [body.name, body.email, hashedPassword],
    );

    const { password, ...createdUser }: UserResponse = result.rows[0];

    return NextResponse.json(createdUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failde to create a user" },
      { status: 500 },
    );
  }
};
