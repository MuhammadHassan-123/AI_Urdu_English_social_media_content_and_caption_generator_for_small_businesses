export default function Loading() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-16 text-center">
      <div className="relative h-12 w-12">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/30" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-cream">
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </span>
      </div>
      <p className="font-heading text-xl font-bold text-ink">
       🤖 AI is creating your content...
      </p>

      <p className="text-sm text-ink-soft">
       Creating English, Urdu, Roman Urdu captions, hashtags and post ideas.
      </p>
    </div>
  );
}
