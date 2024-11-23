import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const result = await query("SELECT * FROM users");

    return NextResponse.json({ data: result.rows, count: result.rowCount });
  } catch (error) {
    console.error("Ошибка при запросе к базе данных:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
