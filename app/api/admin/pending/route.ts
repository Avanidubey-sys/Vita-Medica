import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const count = await prisma.user.count({
      where: { status: "PENDING" },
    });

    return NextResponse.json({ pendingCount: count });
  } catch (error) {
    console.error("Error fetching pending count:", error);
    return NextResponse.json(
      { error: "Failed to fetch pending count" },
      { status: 500 }
    );
  }
}
