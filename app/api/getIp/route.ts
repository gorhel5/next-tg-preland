import { NextResponse } from "next/server";
import { ApiError, apiIp } from "../api";

export async function GET() {
  try {
    const res = await apiIp.get("/json");
    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      {
        error: error.response?.data.error || error.message,
      },
      {
        status: error.response?.status || 500,
      }
    );
  }
}
