"use client";
import { AdminStats } from "./components/AdminStats";
import PendingApprovals from "./components/PendingApprovals";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
      <PendingApprovals/>
      <AdminStats />

      <div className="bg-white rounded-xl shadow-sm p-6 mt-4">
        <h2 className="text-lg font-medium mb-3 text-gray-700">Recent Activity</h2>
        <p className="text-gray-500 text-sm">No recent activities yet.</p>
      </div>
    </div>
  );
}
