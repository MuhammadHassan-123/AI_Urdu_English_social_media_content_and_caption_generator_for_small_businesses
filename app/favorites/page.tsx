"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  FavoriteItem,
  getFavorites,
  removeFavorite,
} from "@/lib/favorites";

import {
  HiOutlineTrash,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

import toast from "react-hot-toast";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadFavorites() {
    setLoading(true);

    const data = await getFavorites();

    setFavorites(data);

    setLoading(false);
  }

  useEffect(() => {
  (async () => {
    await loadFavorites();
  })();
}, []);

  async function deleteFavorite(id: string) {
    await removeFavorite(id);

    toast.success("Favorite removed.");

    loadFavorites();
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-14">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              ❤️ Favorite Captions
            </h1>

            <p className="mt-2 text-sm text-ink-soft">
              Your saved captions.
            </p>

          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-5 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-600 hover:text-brand-600"
          >
            <HiOutlineArrowLeft size={16} />
            Back
          </Link>

        </div>

        {loading && (
          <p className="text-center text-sm text-ink-soft">
            Loading...
          </p>
        )}

        {!loading && favorites.length === 0 && (
          <div className="rounded-card border border-border-soft/80 bg-white p-12 text-center">

            <h2 className="font-heading text-lg font-bold text-ink">
              No favorites yet
            </h2>

            <p className="mt-2 text-sm text-ink-soft">
              Save captions by clicking the ❤️ icon.
            </p>

          </div>
        )}

        <div className="space-y-6">

          {favorites.map((item) => (

            <div
              key={item.id}
              className="rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5"
            >

              {/* Header */}

              <div className="mb-4 flex items-center justify-between">

                <div>

                  <h3 className="font-heading text-lg font-bold text-brand-600">
                    {item.businessType}
                  </h3>

                  <p className="text-sm text-ink-soft">
                    {item.product}
                  </p>

                </div>

                <button
                  onClick={() => deleteFavorite(item.id)}
                  aria-label="Remove favorite"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-rose-50 hover:text-rose-600"
                >
                  <HiOutlineTrash size={18} />
                </button>

              </div>

              {/* Saved Caption */}

              <div className="rounded-xl border border-border-soft/80 p-4">

                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                  Saved Caption
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink">
                  {item.result.captions[0].english}
                </p>

                <p className="font-urdu mt-4 text-right text-lg leading-loose text-ink">
                  {item.result.captions[0].urdu}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink">
                  {item.result.captions[0].romanUrdu}
                </p>

              </div>

              {/* Hashtags */}

              <div className="mt-6">

                <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                  Hashtags
                </h4>

                <div className="flex flex-wrap gap-2">

                  {item.result.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

              {/* Reel Idea */}

              <div className="mt-6 rounded-xl border border-border-soft/80 p-4">

                <h4 className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                  🎬 Reel Idea
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.result.reelIdea}
                </p>

              </div>

              {/* Story Idea */}

              <div className="mt-6 rounded-xl border border-border-soft/80 p-4">

                <h4 className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                  📖 Story Idea
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.result.storyIdea}
                </p>

              </div>

              {/* Image Prompt */}

              <div className="mt-6 rounded-xl border border-border-soft/80 p-4">

                <h4 className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                  🖼 Image Prompt
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.result.imagePrompt}
                </p>

              </div>

            </div>

          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}