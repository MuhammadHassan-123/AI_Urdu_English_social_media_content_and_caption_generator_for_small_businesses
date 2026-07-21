"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

type UserPlan = {
  plan: string;
  dailyLimit: number;
  generationsToday: number;
};

export default function UsageCard() {
  const [userPlan, setUserPlan] = useState<UserPlan | null>(null);

  useEffect(() => {
    async function loadData() {
      const user = auth.currentUser;

      if (!user) return;

      const snap = await getDoc(doc(db, "users", user.uid));

      if (snap.exists()) {
        setUserPlan(snap.data() as UserPlan);
      }
    }

    loadData();
  }, []);

  if (!userPlan) return null;

  const remaining =
    userPlan.plan === "premium"
      ? "Unlimited"
      : userPlan.dailyLimit - userPlan.generationsToday;

  const percentage =
    userPlan.plan === "premium"
      ? 100
      : (userPlan.generationsToday / userPlan.dailyLimit) * 100;

  return (
    <div className="rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5">
      <h3 className="font-heading text-lg font-bold text-ink">
        {userPlan.plan === "premium" ? "Premium Plan" : "Free Plan"}
      </h3>

      <p className="mt-3 text-sm text-ink-soft">
        Remaining Today
      </p>

      <p className="mt-1 font-heading text-3xl font-bold text-brand-600">
        {remaining}
      </p>

      {userPlan.plan !== "premium" && (
        <>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-cream-deep">
            <div
              className="h-full rounded-full bg-brand-600 transition-all"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>

          <p className="mt-2 text-xs text-muted">
            {userPlan.generationsToday} of {userPlan.dailyLimit} used today
          </p>

          <Link
            href="/pricing"
            className="mt-5 inline-block rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.03] hover:bg-brand-700"
          >
            Upgrade to Premium
          </Link>
        </>
      )}
    </div>
  );
}