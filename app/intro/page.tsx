"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const letters = [
  { char: "C", direction: "left" },
  { char: "o", direction: "right" },
  { char: "n", direction: "left" },
  { char: "t", direction: "right" },
  { char: "e", direction: "left" },
  { char: "n", direction: "right" },
  { char: "t", direction: "left" },
  { char: "H", direction: "right" },
  { char: "U", direction: "left" },
  { char: "B", direction: "right" },
];

export default function IntroPage() {
  const router = useRouter();

  const [visibleLetters, setVisibleLetters] = useState(0);
  const [complete, setComplete] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Bring letters in one by one
    const timers: NodeJS.Timeout[] = [];

    letters.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLetters(index + 1);
      }, 350 + index * 180);

      timers.push(timer);
    });

    // Word completed
    const completeTimer = setTimeout(() => {
      setComplete(true);
    }, 350 + letters.length * 180 + 300);

    // Start transition to home
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 350 + letters.length * 180 + 1500);

    // Go to homepage
    const redirectTimer = setTimeout(() => {
      router.push("/home");
    }, 350 + letters.length * 180 + 2200);

    timers.push(completeTimer, exitTimer, redirectTimer);

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <main
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-cream transition-all duration-700 ${
        exiting
          ? "scale-[1.08] opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* -------------------------------- */}
      {/* Background gradient */}
      {/* -------------------------------- */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />
      </div>

      {/* -------------------------------- */}
      {/* Decorative particles */}
      {/* -------------------------------- */}

      <span className="absolute left-[18%] top-[28%] h-2 w-2 animate-pulse rounded-full bg-brand-500/40" />

      <span
        className="absolute right-[20%] top-[35%] h-3 w-3 animate-pulse rounded-full bg-brand-400/30"
        style={{ animationDelay: "400ms" }}
      />

      <span
        className="absolute bottom-[30%] left-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-brand-600/30"
        style={{ animationDelay: "800ms" }}
      />

      <span
        className="absolute bottom-[25%] right-[27%] h-2 w-2 animate-pulse rounded-full bg-brand-500/30"
        style={{ animationDelay: "1200ms" }}
      />

      {/* -------------------------------- */}
      {/* Main content */}
      {/* -------------------------------- */}

      <section className="relative z-10 flex flex-col items-center px-5 text-center">

        {/* Logo circle */}

        <div
          className={`relative mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 shadow-xl shadow-brand-600/20 transition-all duration-1000 ${
            visibleLetters > 0
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }`}
        >
          {/* Glow */}

          <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-500/20" />

          {/* Inner ring */}

          <div className="absolute inset-2 rounded-full border border-white/20" />

          {/* Sparkles */}

          <div className="relative text-3xl text-white">
            ✦
          </div>

          <div className="absolute right-4 top-4 text-sm text-white">
            ✦
          </div>

          <div className="absolute bottom-4 left-4 text-xs text-white">
            ✦
          </div>
        </div>

        {/* -------------------------------- */}
        {/* Animated ContentHUB */}
        {/* -------------------------------- */}

        <div
          className={`flex items-center font-heading text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl ${
            complete ? "scale-[1.03]" : "scale-100"
          } transition-transform duration-700`}
        >
          {letters.map((letter, index) => {
            const isVisible = index < visibleLetters;

            return (
              <span
                key={`${letter.char}-${index}`}
                className={`inline-block transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-x-0 translate-y-0 scale-100 opacity-100"
                    : letter.direction === "left"
                      ? "-translate-x-16 scale-75 opacity-0"
                      : "translate-x-16 scale-75 opacity-0"
                } ${
                  index >= 7
                    ? "text-brand-600"
                    : "text-ink"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 20}ms`
                    : "0ms",
                }}
              >
                {letter.char}
              </span>
            );
          })}
        </div>

        {/* -------------------------------- */}
        {/* Urdu / English */}
        {/* -------------------------------- */}

        <div
          className={`mt-3 text-xs font-semibold tracking-[0.3em] text-ink-soft transition-all duration-700 ${
            complete
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          URDU <span className="mx-2 text-brand-600">•</span> ENGLISH <span className="mx-2 text-brand-600">•</span> ROMAN URDU
        </div>

        {/* -------------------------------- */}
        {/* Tagline */}
        {/* -------------------------------- */}

        <p
          className={`mt-5 max-w-md text-sm leading-relaxed text-ink-soft transition-all duration-700 sm:text-base ${
            complete
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          AI-Powered Content for Pakistani Small businesses.
        </p>

        {/* -------------------------------- */}
        {/* Loading line */}
        {/* -------------------------------- */}

        <div
          className={`mt-9 transition-all duration-700 ${
            complete
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-1 w-48 overflow-hidden rounded-full bg-brand-100 sm:w-56">
            <div
              className="h-full rounded-full bg-brand-600"
              style={{
                animation: complete
                  ? "loadingBar 1.2s ease-in-out forwards"
                  : "none",
              }}
            />
          </div>

          <p className="mt-3 text-xs font-medium text-ink-soft">
            Helping You To Get All Types of Content Here ...
          </p>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* Bottom decorative waves */}
      {/* -------------------------------- */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute -bottom-20 left-[-10%] h-40 w-[120%] rounded-[50%] bg-brand-50/70" />

        <div className="absolute -bottom-24 left-[-10%] h-40 w-[120%] rounded-[50%] border-t border-brand-100/60" />
      </div>

      {/* -------------------------------- */}
      {/* Custom animation */}
      {/* -------------------------------- */}

      <style jsx>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}