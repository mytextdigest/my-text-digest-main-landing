import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.CLOUD_API_URL}/api/admin/analytics`,
      {
        headers: {
          "x-admin-secret": process.env.ADMIN_API_SECRET!,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Cloud fetch failed" }, { status: 500 });
  }
}