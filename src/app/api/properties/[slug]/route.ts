import { ParamsType } from "@/shared/types/params";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: ParamsType) => {
  const id = params.slug;
};
