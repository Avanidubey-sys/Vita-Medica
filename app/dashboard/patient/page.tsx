"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PatientDashboard() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Patient Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You have a follow-up with Dr. Sharma tomorrow at 10:30 AM.</p>
          <Button className="mt-2">View Appointment Details</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prescriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Check your current prescriptions and dosage schedules.</p>
          <Button className="mt-2">View Prescriptions</Button>
        </CardContent>
      </Card>
    </main>
  );
}
