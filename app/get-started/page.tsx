import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Get Started</h1>
      <p className="text-gray-600 mb-8">Choose your next step:</p>
      <div className="flex gap-4">
        <Link href="/register">
          <Button size="lg">Register</Button>
        </Link>
        <Link href="/login">
          <Button size="lg" variant="outline">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
