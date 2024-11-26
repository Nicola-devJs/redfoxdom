import { query } from "@/lib/db";
import { ParamsType } from "@/shared/types/params";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: ParamsType) => {
  const id = params.slug;

  try {
    const result = await query("SELECT * FROM users WHERE id = $1", [id]);

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Ошибка при запросе к базе данных:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
