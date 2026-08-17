"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const FAQS = [
  {
    question: "Is it free?",
    answer:
      "Yes, you can generate a limited number of caption sets every day for free. If you post daily and want unlimited generations, custom brand voice, and analytics, a premium plan is available too.",
  },
  {
    question: "Which AI model is used?",
    answer:
      "ContentHUB is powered by Google's Gemini model, chosen specifically for its strength in multilingual and creative writing across English, Urdu, and Roman Urdu.",
  },
  {
    question: "Can I generate Urdu captions?",
    answer:
      "Yes. Every generation gives you Urdu script, Roman Urdu, and English versions, so you can pick whichever fits your audience, or mix them across your post.",
  },
  {
    question: "Do I need an account?",
    answer:
      "You can try the generator without signing up. Creating a free account lets you save your history, favorite captions, and pick up where you left off.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Facebook, Instagram, TikTok, and WhatsApp Status are all supported out of the box, each with tone and format suggestions tailored to that platform.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
            Reach out
          </a>
          .
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-card border border-border-soft/80 bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-heading text-[15px] font-semibold text-ink">
                  {faq.question}
                </span>
                <HiChevronDown
                  size={18}
                  className={`shrink-0 text-brand-600 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
