import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(new Date().toISOString(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
