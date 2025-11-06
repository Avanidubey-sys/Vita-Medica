import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password, role } = await req.json();

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });

    const hashed = await bcrypt.hash(password, 10);

    const status =
      role === "ADMIN" || role === "PATIENT" ? "APPROVED" : "PENDING"; // 👈 Admin & patient auto-approved

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role,
        status,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        status === "PENDING"
          ? "Your account is pending admin approval."
          : "Registered successfully.",
      user,
    });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
