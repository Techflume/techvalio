// app/(admin)/admin/not-found.tsx
"use client";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-900">
      <ShieldAlert className="h-20 w-20 text-yellow-400 mb-6" />
      <h1 className="text-4xl font-bold mb-2 text-yellow-400">404</h1>
      <p className="mb-8 text-lg text-gray-300 text-center max-w-md">
        The admin page you’re seeking cannot be found or you may not have access.
      </p>
      <Button variant="default" onClick={() => window.location.href = "/admin"}>
        Admin Dashboard
      </Button>
    </div>
  );
}
