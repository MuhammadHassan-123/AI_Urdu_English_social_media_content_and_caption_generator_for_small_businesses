"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { db } from "@/lib/firebase";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const [defaultTone, setDefaultTone] = useState("Friendly");
  const [defaultLanguage, setDefaultLanguage] = useState("Urdu");
  const [defaultPlatform, setDefaultPlatform] = useState("Facebook");

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      const snap = await getDoc(doc(db, "users", user.uid));

      if (snap.exists()) {
        const data = snap.data();

        setBusinessName(data.businessName || "");
        setBusinessCategory(data.businessCategory || "");
        setBusinessDescription(data.businessDescription || "");

        setDefaultTone(data.defaultTone || "Friendly");
        setDefaultLanguage(data.defaultLanguage || "Urdu");
        setDefaultPlatform(data.defaultPlatform || "Facebook");
      }

      setLoading(false);
    }

    loadProfile();
  }, [user]);

  async function saveProfile() {
    if (!user) return;

    setSaving(true);

    try {
      await updateDoc(doc(db, "users", user.uid), {
        businessName,
        businessCategory,
        businessDescription,
        defaultTone,
        defaultLanguage,
        defaultPlatform,
      });

      toast.success("Business profile updated!");
    } catch {
      toast.error("Failed to update profile.");
    }

    setSaving(false);
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center bg-cream text-sm text-ink-soft">
          Loading profile...
        </div>
      </>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border-soft bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-600";
  const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        <div className="mx-auto max-w-2xl px-5 py-14">

          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Business Profile
          </h1>

          <p className="mt-2 text-sm text-ink-soft">
            Configure your default business settings.
          </p>

          <div className="mt-8 rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 sm:p-8">
            <div className="space-y-5">

              <div>
                <label className={labelClass}>Business Name</label>
                <input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Business Category</label>
                <input
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value)}
                  className={inputClass}
                  placeholder="Bakery, Clothing, Restaurant..."
                />
              </div>

              <div>
                <label className={labelClass}>Business Description</label>
                <textarea
                  rows={4}
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label className={labelClass}>Default Tone</label>
                  <select
                    value={defaultTone}
                    onChange={(e) => setDefaultTone(e.target.value)}
                    className={inputClass}
                  >
                    <option>Friendly</option>
                    <option>Professional</option>
                    <option>Luxury</option>
                    <option>Funny</option>
                    <option>Emotional</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Default Language</label>
                  <select
                    value={defaultLanguage}
                    onChange={(e) => setDefaultLanguage(e.target.value)}
                    className={inputClass}
                  >
                    <option>Urdu</option>
                    <option>English</option>
                    <option>Roman Urdu</option>
                    <option>Mixed</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Default Platform</label>
                  <select
                    value={defaultPlatform}
                    onChange={(e) => setDefaultPlatform(e.target.value)}
                    className={inputClass}
                  >
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>LinkedIn</option>
                    <option>WhatsApp</option>
                  </select>
                </div>
              </div>

              <button
                onClick={saveProfile}
                disabled={saving}
                className="w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.01] hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}