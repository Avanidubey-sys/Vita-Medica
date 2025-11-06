import { Card, CardContent } from "@/components/ui/card";

export function AdminStats() {
  const stats = [
    { label: "Doctors", value: 12 },
    { label: "Patients", value: 145 },
    { label: "Appointments", value: 36 },
    { label: "Revenue", value: "₹2.4L" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="rounded-2xl shadow-sm hover:shadow-md transition bg-white"
        >
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
