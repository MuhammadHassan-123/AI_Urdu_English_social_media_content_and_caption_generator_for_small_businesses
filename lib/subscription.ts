import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  Timestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";

export type Subscription = {
  plan: "free" | "premium";

  dailyLimit: number;

  usedToday: number;

  lastReset: Timestamp;
};

/*
------------------------------------
Create subscription
------------------------------------
*/

export async function createSubscription() {
  const user = auth.currentUser;

  if (!user) return;

  const ref = doc(db, "subscriptions", user.uid);

  const snap = await getDoc(ref);

  if (snap.exists()) return;

  await setDoc(ref, {
    plan: "free",
    dailyLimit: 10,
    usedToday: 0,
    lastReset: Timestamp.now(),
  });
}

/*
------------------------------------
Get subscription
------------------------------------
*/

export async function getSubscription() {
  const user = auth.currentUser;

  if (!user) return null;

  const ref = doc(db, "subscriptions", user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return snap.data() as Subscription;
}

/*
------------------------------------
Increase usage
------------------------------------
*/

export async function increaseUsage() {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(
    doc(db, "subscriptions", user.uid),
    {
      usedToday: increment(1),
    }
  );
}