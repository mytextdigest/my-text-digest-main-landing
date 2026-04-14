import { NextResponse } from "next/server";
import { isValidAdmin } from "@/lib/adminAuth";

export async function POST(req: Request) {
    const body = await req.json(); 
    const { email, password } = body;

  if (!isValidAdmin(email, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });

  res.cookies.set("admin_auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return res;
}