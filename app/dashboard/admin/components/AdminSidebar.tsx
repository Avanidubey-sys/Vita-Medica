"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Calendar, Settings, Users } from "lucide-react";

const links = [
  { href: "/dashboard/admin", label: "Dashboard", icon: BarChart3 },
  { href: "/dashboard/admin/users", label: "Manage Users", icon: Users },
  { href: "/dashboard/admin/appointments", label: "Appointments", icon: Calendar },
  { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="p-4 text-2xl font-bold text-blue-600">Vitamedica</div>
      <nav className="flex-1 p-2 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
