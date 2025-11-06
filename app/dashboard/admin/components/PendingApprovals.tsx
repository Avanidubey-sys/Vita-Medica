"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Users } from "lucide-react";

export default function PendingApprovals() {
  const [pendingCount, setPendingCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPending = async () => {
      try {
        const res = await fetch("/api/admin/pending");
        const data = await res.json();
        setPendingCount(data.pendingCount);
      } catch {
        setPendingCount(0);
      }
    };
    fetchPending();
  }, []);

  return (
    <Card className="shadow-md border border-gray-200 rounded-xl p-4 flex items-center justify-between">
      <div>
        <h3 className="text-gray-600 text-sm">Pending Approvals</h3>
        {pendingCount === null ? (
          <div className="flex items-center space-x-2 mt-2 text-gray-400">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          <p className="text-3xl font-bold mt-2">{pendingCount}</p>
        )}
      </div>
      <div className="bg-yellow-100 p-3 rounded-full">
        <Users className="h-6 w-6 text-yellow-600" />
      </div>
    </Card>
  );
}
