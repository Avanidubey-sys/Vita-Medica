"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const handleAction = async (userId: string, action: "APPROVED" | "REJECTED") => {
    setActionLoading(`${userId}-${action}`);
    await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, action }),
    });
    setActionLoading(null);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Manage Users</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
        </div>
      ) : users.length === 0 ? (
        <p className="text-gray-500 text-center">No users found.</p>
      ) : (
        <Card className="shadow-md border border-gray-200 rounded-xl">
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Role</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3 capitalize">{u.role.toLowerCase()}</td>
                    <td
                      className={`p-3 font-semibold ${
                        u.status === "APPROVED"
                          ? "text-green-600"
                          : u.status === "REJECTED"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {u.status}
                    </td>
                    <td className="p-3 space-x-2">
                      {u.status === "PENDING" && (
                        <>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                            disabled={actionLoading === `${u.id}-APPROVED`}
                            onClick={() => handleAction(u.id, "APPROVED")}
                          >
                            {actionLoading === `${u.id}-APPROVED` ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              "Approve"
                            )}
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                            disabled={actionLoading === `${u.id}-REJECTED`}
                            onClick={() => handleAction(u.id, "REJECTED")}
                          >
                            {actionLoading === `${u.id}-REJECTED` ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              "Reject"
                            )}
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

