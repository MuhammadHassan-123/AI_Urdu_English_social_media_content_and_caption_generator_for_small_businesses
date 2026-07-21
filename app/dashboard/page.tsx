"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import UsageCard from "@/components/UsageCard";
import { useAuth } from "@/components/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-cream">
        <p className="text-sm font-medium text-ink-soft">Loading...</p>
      </main>
    );
  }

  if (!user) return null;

   return (
    <ProtectedRoute>
      <Navbar />
      <main className="min-h-screen bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-sm text-ink-soft">
            {user?.displayName || user?.email}
          </p>

          <div className="mt-8 max-w-sm">
            <UsageCard />

          </div>

        </div>
      </main>
    </ProtectedRoute>
  );
}