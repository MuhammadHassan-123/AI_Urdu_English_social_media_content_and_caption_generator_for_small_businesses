import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";
//import { createSubscription } from "./subscription";

export async function signup(
  name: string,
  email: string,
  password: string
) {
  // Create Authentication account
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  // Update Firebase Auth display name
  await updateProfile(user, {
    displayName: name,
  });

  // Create Firestore user document
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
    plan: "free",
    dailyLimit: 20,
    generationsToday: 0,
    lastGenerationDate: "",
    favoriteCount: 0,
    createdAt: serverTimestamp(),
  });
  //await createSubscription();

  return user;
}

export async function login(
  email: string,
  password: string
) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

export async function logout() {
  await signOut(auth);
}