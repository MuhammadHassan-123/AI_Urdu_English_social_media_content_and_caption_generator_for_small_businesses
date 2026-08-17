"use client";

import { useEffect, useState } from "react";
import {
  HiOutlineArrowDown,
  HiOutlinePlayCircle,
} from "react-icons/hi2";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-cream to-peach">
      
      {/* Background decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl animate-soft-pulse" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl animate-soft-pulse-delayed" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-24 pt-16 md:grid-cols-2 md:pt-24">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div
          className={`flex flex-col items-start transition-all duration-1000 ease-out ${
            loaded
              ? "translate-x-0 translate-y-0 opacity-100"
              : "-translate-x-10 translate-y-4 opacity-0"
          }`}
        >

          {/* Badge */}
          <span
            className={`mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 transition-all duration-700 delay-100 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
            Made for Pakistani small businesses
          </span>

          {/* Heading */}
          <h1
            className={`font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ink transition-all duration-1000 delay-200 sm:text-5xl ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Roz ka social media content{" "}
            <span className="text-brand-600">
              ek click mein.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft transition-all duration-1000 delay-300 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Apni dukan, service ya offer likhein, AI banayega 10
            ready-to-post captions Urdu, Roman Urdu aur English mein,
            hashtags aur reel ideas ke saath.
          </p>

          {/* Urdu tagline */}
          <p
            className={`font-urdu mt-3 text-xl leading-loose text-ink-soft transition-all duration-1000 delay-400 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            آپ کے کاروبار کے لیے دلکش پوسٹس، لمحوں میں
          </p>

          {/* Buttons */}
          <div
            className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-1000 delay-500 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="#generator"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-700/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
            >
              Start generating

              <HiOutlineArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-border-soft bg-cream/60 px-6 py-3 text-sm font-semibold text-ink-soft transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:bg-white hover:text-ink hover:shadow-sm"
            >
              <HiOutlinePlayCircle
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              See how it works
            </a>
          </div>

          {/* Social platforms */}
          <div
            className={`mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted transition-all duration-1000 delay-700 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Works with

            <span className="flex items-center gap-3 text-ink-soft">

              <FaInstagram
                size={16}
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-[#E4405F]"
              />

              <FaFacebook
                size={16}
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-[#1877F2]"
              />

              <FaTiktok
                size={15}
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-125 hover:text-black"
              />

            </span>
          </div>
        </div>


        {/* =====================================================
            RIGHT SIDE — FLOATING CAPTION CARDS
        ===================================================== */}

        <div
          className={`relative hidden items-center justify-center md:flex transition-all duration-[1400ms] ease-out ${
            loaded
              ? "translate-x-0 opacity-100"
              : "translate-x-16 opacity-0"
          }`}
        >

          {/* English card */}

          <div className="hero-card hero-card-one absolute -left-4 top-6 w-[300px] rotate-[-6deg] rounded-card border border-border-soft/70 bg-white/90 p-5 shadow-xl shadow-ink/5 backdrop-blur-sm transition-all duration-500 hover:z-30 hover:rotate-[-3deg] hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
              English
            </p>

            <p className="mt-1 text-sm leading-relaxed text-ink">
              Fresh lawn collection is here 🌿 Grab yours before Eid
              stock runs out!
            </p>

          </div>


          {/* Urdu card */}

          <div className="hero-card hero-card-two absolute left-16 top-40 w-[300px] rotate-[3deg] rounded-card border border-border-soft/70 bg-white p-5 shadow-2xl shadow-ink/10 transition-all duration-500 hover:z-30 hover:rotate-[1deg] hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
              Urdu Script
            </p>

            <p className="font-urdu mt-2 text-lg leading-loose text-ink">
              نیا لان کلیکشن آ گیا! عید سے پہلے اپنی پسند کا سوٹ ابھی
              بک کروائیں۔
            </p>

          </div>


          {/* Roman Urdu card */}

          <div className="hero-card hero-card-three absolute left-6 top-[19rem] w-[280px] rotate-[-2deg] rounded-card border border-border-soft/70 bg-white/95 p-5 shadow-lg shadow-ink/5 transition-all duration-500 hover:z-30 hover:rotate-[1deg] hover:-translate-y-2 hover:shadow-2xl">

            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
              Roman Urdu
            </p>

            <p className="mt-1 text-sm leading-relaxed text-ink">
              Naya lawn collection aa gaya! Eid se pehle apni pasand ka
              suit book karwayein.
            </p>

          </div>


          {/* Spacer */}

          <div className="h-[34rem] w-full" />
        </div>
      </div>


      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style jsx>{`

        @keyframes softPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.7;
          }
        }

        @keyframes floatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-6deg);
          }

          50% {
            transform: translateY(-8px) rotate(-5deg);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translateY(0) rotate(3deg);
          }

          50% {
            transform: translateY(10px) rotate(4deg);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-6px) rotate(-1deg);
          }
        }

        :global(.animate-soft-pulse) {
          animation: softPulse 6s ease-in-out infinite;
        }

        :global(.animate-soft-pulse-delayed) {
          animation: softPulse 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        :global(.hero-card-one) {
          animation: floatOne 6s ease-in-out infinite;
        }

        :global(.hero-card-two) {
          animation: floatTwo 7s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        :global(.hero-card-three) {
          animation: floatThree 6.5s ease-in-out infinite;
          animation-delay: 1.3s;
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.animate-soft-pulse),
          :global(.animate-soft-pulse-delayed),
          :global(.hero-card-one),
          :global(.hero-card-two),
          :global(.hero-card-three) {
            animation: none;
          }
        }

      `}</style>

    </section>
  );
}