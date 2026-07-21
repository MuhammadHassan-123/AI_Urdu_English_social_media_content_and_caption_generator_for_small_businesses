"use client";

import {useEffect ,useState } from "react";
import { exportAsText } from "@/lib/export";
import {
  HiOutlineClipboard,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowPath,
  HiOutlineTrash,
  HiOutlineFilm,
  HiOutlineBookOpen,
  HiOutlinePhoto,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi2";

import toast from "react-hot-toast";
import {saveFavorite, removeFavorite, getFavorites} from "@/lib/favorites";
import { GenerationInput } from "./InputForm";

type Caption = {
  english: string;
  urdu: string;
  romanUrdu: string;
};

export type GenerationResult = {
  captions: Caption[];
  hashtags: string[];
  reelIdea: string;
  storyIdea: string;
  imagePrompt: string;
};

type Props = {
  result?: GenerationResult;
  input?: GenerationInput;
  onRegenerate?: () => void;
  onClear?: () => void;
};

export default function OutputSection({
  result,
  input,
  onRegenerate,
  onClear,
}: Props) {
  if (!result) return null;

  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Ready to post
        </h2>

        <p className="mt-2 text-sm text-ink-soft">
          Copy, edit, regenerate or save your favorite captions.
        </p>
      </div>

      {/* Action Buttons */}

      <div className="mb-10 flex justify-center gap-3">
        <button
          onClick={onRegenerate}
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.03] hover:bg-brand-700"
        >
          <HiOutlineArrowPath size={18} />
          Regenerate
        </button>

        <button
         onClick={() => result && exportAsText(result)}
         className="inline-flex items-center gap-2 rounded-full border border-brand-600 bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
        >
         📄 Export TXT
        </button>

        <button
          onClick={onClear}
          className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-6 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-rose-300 hover:text-rose-600"
        >
          <HiOutlineTrash size={18} />
          Clear
        </button>
      </div>

      {/* Caption Variants */}

      <div className="space-y-6">
        {result.captions.map((caption, index) => (
          <div
            key={index}
            className="rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-brand-600">
                Caption {index + 1}
              </h3>

              <div className="flex items-center gap-2">
                <FavoriteButton
                 caption={caption}
                 input={input}
                 result={result}
                />

                <CopyButton
                  text={`${caption.english}

${caption.urdu}

${caption.romanUrdu}`}
                />
              </div>
            </div>

            <div className="space-y-5">
              <CaptionBlock
                label="English"
                text={caption.english}
              />

              <CaptionBlock
                label="Urdu"
                text={caption.urdu}
                isUrdu
              />

              <CaptionBlock
                label="Roman Urdu"
                text={caption.romanUrdu}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Hashtags */}

      <div className="mt-8 rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-ink">
            Hashtags
          </h3>

          <CopyButton
            text={result.hashtags.join(" ")}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {result.hashtags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <InfoCard
        icon={<HiOutlineFilm size={18} />}
        title="Reel Idea"
        text={result.reelIdea}
      />

      <InfoCard
        icon={<HiOutlineBookOpen size={18} />}
        title="Story Idea"
        text={result.storyIdea}
      />

      <InfoCard
        icon={<HiOutlinePhoto size={18} />}
        title="Image Prompt"
        text={result.imagePrompt}
      />
    </section>
  );
}

function CaptionBlock({
  label,
  text,
  isUrdu,
}: {
  label: string;
  text: string;
  isUrdu?: boolean;
}) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
        {label}
      </span>

      <p
        className={
          isUrdu
            ? "mt-2 text-right text-lg leading-loose font-urdu text-ink"
            : "mt-2 text-sm leading-relaxed text-ink"
        }
      >
        {text}
      </p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="mt-8 rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 sm:p-7">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-ink">
          <span className="text-brand-600">{icon}</span>
          {title}
        </h3>

        <CopyButton text={text} />
      </div>

      <p className="text-sm leading-relaxed text-ink-soft">
        {text}
      </p>
    </div>
  );
}

function FavoriteButton({
  caption,
  input,
  result,
}: {
  caption: Caption;
  input?: GenerationInput;
  result: GenerationResult;
}) {
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function checkFavorite() {
      const favorites = await getFavorites();

      const found = favorites.find(
        (item) => item.result.captions[0].english === caption.english
      );

      if (found) {
        setFavoriteId(found.id);
      }
    }

    checkFavorite();
  }, [caption.english]);

  async function toggleFavorite() {
    console.log("❤️ Clicked");
    if (!input) return;

    setLoading(true);

    try {
      if (favoriteId) {
        await removeFavorite(favoriteId);

        toast.success("Removed from favorites");

        setFavoriteId(null);
      } else {
       
        await saveFavorite(
         input.businessType,
         input.product ?? "",
         caption,
         result
      );

        toast.success("Added to favorites");

        const favorites = await getFavorites();

        const found = favorites.find(
          (item) => item.result.captions[0].english === caption.english
        );

        if (found) {
          setFavoriteId(found.id);
        }
      }
    } finally {
      setLoading(false);
    }
  }

  return (
  <button
    disabled={loading}
    onClick={toggleFavorite}
    className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-rose-50"
  >
    {favoriteId ? (
      <HiHeart
        size={20}
        className="text-rose-500"
      />
    ) : (
      <HiOutlineHeart
        size={20}
        className="text-ink-soft"
      />
    )}
  </button>
);
}

function CopyButton({
  text,
}: {
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={copyText}
      aria-label="Copy"
      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
    >
      {copied ? (
        <HiOutlineClipboardDocumentCheck
          size={20}
          className="text-brand-600"
        />
      ) : (
        <HiOutlineClipboard size={20} />
      )}
    </button>
  );
}