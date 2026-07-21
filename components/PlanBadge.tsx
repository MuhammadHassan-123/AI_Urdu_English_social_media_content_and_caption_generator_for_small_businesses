"use client";

import { useAuth } from "@/components/AuthProvider";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function PlanBadge() {
  const { user } = useAuth();
  const [plan, setPlan] = useState("free");

  useEffect(() => {
    async function loadPlan() {
      if (!user) return;

      const snap = await getDoc(doc(db, "users", user.uid));

      if (snap.exists()) {
        setPlan(snap.data().plan);
      }
    }

    loadPlan();
  }, [user]);

  if (!user) return null;

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        plan === "premium"
          ? "bg-amber-50 text-amber-700"
          : "bg-brand-50 text-brand-700"
      }`}
    >
      {plan === "premium" ? "⭐ Premium" : "Free Plan"}
    </span>
  );
}