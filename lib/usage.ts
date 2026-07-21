import {
  doc,
  getDoc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { auth, db } from "./firebase";

function getToday() {
  return new Date().toISOString().split("T")[0];
}

/*
---------------------------------------
Check daily limit
---------------------------------------
*/

export async function canGenerate() {
  const user = auth.currentUser;

  if (!user) {
    return {
      allowed: false,
      reason: "Please login first.",
    };
  }

  const ref = doc(db, "users", user.uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return {
      allowed: false,
      reason: "User profile not found.",
    };
  }

  const data = snap.data();

  // Reset if new day
  if (data.lastGenerationDate !== getToday()) {
    await updateDoc(ref, {
      generationsToday: 0,
      lastGenerationDate: getToday(),
    });

    data.generationsToday = 0;
    data.lastGenerationDate = getToday();
  }

  if (data.plan === "premium") {
    return {
      allowed: true,
    };
  }

  if (data.generationsToday >= data.dailyLimit) {
    return {
      allowed: false,
      reason:
        "You have reached today's free limit. Upgrade to Premium.",
    };
  }

  return {
    allowed: true,
  };
}

/*
---------------------------------------
Increase usage
---------------------------------------
*/

export async function increaseGenerationCount() {
  const user = auth.currentUser;

  if (!user) return;

  await updateDoc(doc(db, "users", user.uid), {
    generationsToday: increment(1),
    lastGenerationDate: getToday(),
  });
}