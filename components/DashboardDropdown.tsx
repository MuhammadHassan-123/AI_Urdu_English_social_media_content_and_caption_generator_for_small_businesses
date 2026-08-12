"use client";

import UsageCard from "@/components/UsageCard";
import { useAuth } from "@/components/AuthProvider";

export default function DashboardDropdown() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-72 rounded-2xl border border-border-soft bg-white p-5 shadow-xl">
        <p className="text-sm text-ink-soft">
          Loading...
        </p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="w-72 rounded-2xl border border-border-soft/80 bg-white p-5 shadow-xl shadow-ink/10">
      
      {/* User */}
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          Dashboard
        </p>

        <h3 className="mt-1 font-heading text-lg font-bold text-ink">
          Welcome back 👋
        </h3>

        <p className="mt-1 truncate text-sm text-ink-soft">
          {user.displayName || user.email}
        </p>
      </div>

      {/* Usage */}
      <UsageCard />

    </div>
  );
}