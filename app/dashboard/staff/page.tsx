"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StaffDashboard() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Staff Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Appointment Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Review and manage daily appointment schedules.</p>
          <Button className="mt-2">Manage Appointments</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Check medicine and equipment availability.</p>
          <Button className="mt-2">View Inventory</Button>
        </CardContent>
      </Card>
    </main>
  );
}
