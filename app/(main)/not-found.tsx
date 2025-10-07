// app/(main)/not-found.tsx
"use client";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function MainNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <AlertCircle className="h-20 w-20 text-rose-500 mb-6" />
      <h1 className="text-4xl font-bold mb-2 text-rose-500">404</h1>
      <p className="mb-8 text-lg text-gray-600 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button variant="outline" onClick={() => window.location.href = "/"}>
        Go to Home
      </Button>
    </div>
  );
}
