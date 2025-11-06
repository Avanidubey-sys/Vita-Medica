"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DoctorDashboard() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Appointments Today</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You have 3 appointments scheduled.</p>
          <Button className="mt-2">View Details</Button>
        </CardContent>
      </Card>
    </main>
  );
}
