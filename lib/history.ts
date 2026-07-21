import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";
import { GenerationResult } from "@/components/OutputSection";
import { writeBatch } from "firebase/firestore";

export type HistoryItem = {
  id: string;
  userId: string;
  businessType: string;
  product: string;
  result: GenerationResult;
  createdAt: Timestamp;
};

/* ----------------------------------------
   Save History
---------------------------------------- */

export async function saveHistory(
  businessType: string,
  product: string,
  result: GenerationResult
) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in.");
  }

  await addDoc(collection(db, "history"), {
    uid: user.uid,
    businessType,
    product,
    result,
    createdAt: serverTimestamp(),
  });
}

/* ----------------------------------------
   Get History
---------------------------------------- */

export async function getHistory(): Promise<HistoryItem[]> {
  const user = auth.currentUser;

  if (!user) return [];

  const q = query(
    collection(db, "history"),
    where("uid", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => {
    const data = docSnap.data();

    return {
      id: docSnap.id,
      userId: data.uid as string,
      businessType: data.businessType as string,
      product: data.product as string,
      result: data.result as GenerationResult,
      createdAt: data.createdAt as Timestamp,
    };
  });
}

/* ----------------------------------------
   Delete History
---------------------------------------- */

export async function removeHistory(id: string) {
  await deleteDoc(doc(db, "history", id));
}

export async function clearHistory() {
  const user = auth.currentUser;

  if (!user) return;

  const q = query(
    collection(db, "history"),
    where("uid", "==", user.uid)
  );

  const snapshot = await getDocs(q);

  const batch = writeBatch(db);

  snapshot.forEach((document) => {
    batch.delete(document.ref);
  });

  await batch.commit();
}