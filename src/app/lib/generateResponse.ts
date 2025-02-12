import { NextResponse } from "next/server";

export const generateResponse = <T extends unknown>(
  data: T | null,
  status: number = 200,
  error: string | null = null,
) => {
  return NextResponse.json({ data, error }, { status });
};

export const generateResponseBadRequest = (error: string) => {
  return generateResponse(null, 400, error);
};

export const generateResponseNotFound = (error: string) => {
  return generateResponse(null, 404, error);
};
