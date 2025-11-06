import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "supersecretkey");

// List of paths that do NOT require auth
const publicPaths = ["/login", "/register", "/"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public routes
  if (publicPaths.includes(pathname)) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify JWT
    const { payload } = await jwtVerify(token, JWT_SECRET);

    // Role-based redirects (optional)
    if (pathname.startsWith("/dashboard")) {
      const role = payload.role as string;
      if (!pathname.includes(role.toLowerCase())) {
        return NextResponse.redirect(new URL(`/dashboard/${role.toLowerCase()}`, req.url));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Define routes where middleware applies
export const config = {
  matcher: ["/dashboard/:path*"],
};
