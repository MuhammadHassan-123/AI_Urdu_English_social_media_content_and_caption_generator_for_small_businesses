import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { auth, db } from "./firebase";

import { GenerationResult } from "@/components/OutputSection";

export type FavoriteItem = {
  id: string;
  uid: string;

  businessType: string;
  product: string;

  result: GenerationResult;

  createdAt: unknown;
};

/*
---------------------------------------
Save Favorite
---------------------------------------
*/

export async function saveFavorite(
  businessType: string,
  product: string,
  caption: {
    english: string;
    urdu: string;
    romanUrdu: string;
  },
  result: GenerationResult
) {
  console.log("saveFavorite called");

  const user = auth.currentUser;

  console.log("Current user:", user);

  if (!user) throw new Error("Please login.");

  await addDoc(collection(db, "favorites"), {
    uid: user.uid,
    businessType,
    product,
    result: {
      ...result,
      captions: [caption],
    },
    createdAt: serverTimestamp(),
  });

  console.log("Favorite saved successfully");
}

/*
---------------------------------------
Get Favorites
---------------------------------------
*/

export async function getFavorites() {
  const user = auth.currentUser;

  if (!user) return [];

  const q = query(
    collection(db, "favorites"),
    where("uid", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...(docSnap.data() as Omit<FavoriteItem, "id">),
  }));
}

/*
---------------------------------------
Delete Favorite
---------------------------------------
*/

export async function removeFavorite(id: string) {
  await deleteDoc(doc(db, "favorites", id));
}