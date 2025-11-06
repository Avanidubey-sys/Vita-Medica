"use client";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
      <Button variant="outline" onClick={() => alert("Logout coming soon!")}>
        Logout
      </Button>
    </header>
  );
}
