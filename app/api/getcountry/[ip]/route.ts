import { NextRequest, NextResponse } from "next/server";
import { ApiError, apiCountry } from "../../api";

interface Props {
  params: Promise<{ ip: string }>;
}

export async function GET(req: NextRequest, params: Props) {
  try {
    const ip = await params;
    const res = await apiCountry.get(`/json/${ip}`);
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
