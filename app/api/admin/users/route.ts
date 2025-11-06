import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all users
export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(users);
}

// PATCH to approve/reject
export async function PATCH(req: Request) {
  try {
    const { userId, action } = await req.json();

    if (!userId || !["APPROVED", "REJECTED"].includes(action)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { status: action },
    });

    return NextResponse.json({ success: true, updated });
  } catch (err) {
    console.error("Admin update error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
