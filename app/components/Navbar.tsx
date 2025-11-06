"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          VitaMedica
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/#services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/#about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
