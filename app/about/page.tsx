import type { Metadata } from "next";
import Link from "next/link";
import {
  HiOutlineFlag,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineMapPin,
  HiOutlineCpuChip,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "LikhoAI helps Pakistani small businesses generate ready-to-post Urdu, Roman Urdu, and English social media content in one click, powered by Google Gemini.",
};

const SECTIONS = [
  {
    icon: HiOutlineFlag,
    title: "Our Mission",
    body: "Small Pakistani businesses — kirana stores, home bakers, tailors, tuition centers — don't have time to write social media content every single day, in two languages, on top of running the business itself. LikhoAI exists to give that time back, so posting stays consistent without eating up an owner's evening.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Why LikhoAI?",
    body: "Most AI writing tools are built for English-first, Western markets. They miss local flavor entirely — the natural code-switching between Urdu script, Roman Urdu, and English that real Pakistani businesses actually post in. LikhoAI is built around that mix from the ground up, not bolted on as an afterthought.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Who is it for?",
    body: "Shop owners, home-based sellers, local influencers, tutors, and clinics who post on Facebook, Instagram, TikTok, or WhatsApp Status — and want captions, hashtags, and content ideas ready in seconds instead of hours.",
  },
  {
    icon: HiOutlineMapPin,
    title: "Built for Pakistani businesses",
    body: "From Eid sales to Ramzan promotions, from price-sensitive customers to WhatsApp Status as a primary marketing channel — LikhoAI understands the context that generic tools don't, because it was designed around it from day one.",
  },
  {
    icon: HiOutlineCpuChip,
    title: "AI Powered by Gemini",
    body: "LikhoAI runs on Google's Gemini model, chosen for its strength in multilingual and creative writing. It's fast, understands nuance across English and Urdu, and keeps getting better — but we always recommend a quick human check on prices, dates, and facts before you post.",
  },
];

const WHO_WE_HELP = [
  { emoji: "🏪", label: "Kirana Stores" },
  { emoji: "🍰", label: "Home Bakers" },
  { emoji: "💄", label: "Beauty Parlors" },
  { emoji: "👗", label: "Boutiques" },
  { emoji: "🍽", label: "Restaurants" },
  { emoji: "📱", label: "Mobile Shops" },
  { emoji: "🏥", label: "Clinics" },
  { emoji: "📚", label: "Tuition Centers" },
  { emoji: "🛋", label: "Home Decor" },
  { emoji: "🚀", label: "Startups" },
];

const STATS = [
  { value: "3", label: "Languages generated" },
  { value: "10+", label: "Business categories" },
  { value: "6 wks", label: "MVP build time" },
  { value: "Gemini", label: "AI model" },
];

const BUILT_WITH = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Gemini AI",
  "Google AI Studio",
  "Vercel",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Header */}
        <section className="relative overflow-hidden px-5 pb-20 pt-16 text-center sm:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-cream to-peach" />
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-32 h-64 w-64 rounded-full bg-peach/60 blur-3xl" />

          <div className="relative">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              About LikhoAI
            </span>
            <h1 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              Helping Pakistani businesses show up online, every single day.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              LikhoAI is a small tool built for a very specific, very real problem — one shared by
              thousands of shop owners, home sellers, and small teams across Pakistan.
            </p>

            {/* Stats row */}
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-card border border-border-soft/70 bg-white/70 px-4 py-5 shadow-sm shadow-ink/5 backdrop-blur-sm"
                >
                  <p className="font-heading text-2xl font-extrabold text-brand-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink-soft">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections grid */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {SECTIONS.map((section, index) => (
              <div
                key={section.title}
                className={`group relative rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10 sm:p-7 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-100">
                    <section.icon size={21} />
                  </span>
                  <span className="font-heading text-3xl font-extrabold text-border-soft transition-colors duration-300 group-hover:text-brand-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="font-heading text-lg font-bold text-ink">{section.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Help */}
        <section className="bg-cream-deep/60 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-2 text-center font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Who We Help
            </h2>
            <p className="mx-auto mb-10 max-w-md text-center text-sm text-ink-soft">
              If you post about your business online, LikhoAI was probably built with you in mind.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {WHO_WE_HELP.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-card border border-border-soft/80 bg-white p-5 text-center shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-md"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-xs font-semibold text-ink-soft">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl rounded-card border border-border-soft/80 bg-white p-10 text-center shadow-sm shadow-ink/5 sm:p-12">
            <span className="font-heading text-5xl leading-none text-brand-100">“</span>
            <h2 className="-mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Our Vision
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              To become Pakistan&apos;s most trusted AI assistant for social media content,
              helping every small business create professional marketing content in
              English, Urdu, and Roman Urdu within seconds.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="px-5 pb-16">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 overflow-hidden rounded-card border border-border-soft/80 bg-gradient-to-br from-brand-50 via-cream to-peach p-10 text-center shadow-sm shadow-ink/5">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/50 blur-3xl" />
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-cream shadow-md shadow-brand-700/25">
              <HiOutlineChatBubbleLeftRight size={20} />
            </span>
            <h2 className="relative font-heading text-2xl font-extrabold tracking-tight text-ink">
              Have a question or feedback?
            </h2>
            <p className="relative max-w-md text-sm text-ink-soft">
              We&apos;d love to hear from you — whether it&apos;s a bug, a business type we
              haven&apos;t covered yet, or just a hello.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.03] hover:bg-brand-700"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* Built With */}
        <section className="mx-auto max-w-5xl px-5 pb-20">
          <h2 className="mb-8 text-center font-heading text-2xl font-extrabold tracking-tight text-ink">
            Built With
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {BUILT_WITH.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-soft/80 bg-white px-5 py-2 text-sm font-medium text-ink-soft shadow-sm shadow-ink/5 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
