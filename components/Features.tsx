import {
  HiOutlineLanguage,
  HiOutlineSparkles,
  HiOutlineClipboardDocument,
  HiOutlineDevicePhoneMobile,
  HiOutlineBolt,
  HiOutlineHeart,
} from "react-icons/hi2";

const features = [
  {
    icon: HiOutlineSparkles,
    title: "AI Generated Content",
    description:
      "Generate engaging captions in seconds using Google Gemini AI.",
  },
  {
    icon: HiOutlineLanguage,
    title: "3 Languages",
    description:
      "English, Urdu Script and Roman Urdu—all generated instantly.",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Platform Optimized",
    description:
      "Content designed for Facebook, Instagram, LinkedIn and WhatsApp.",
  },
  {
    icon: HiOutlineClipboardDocument,
    title: "One Click Copy",
    description:
      "Copy captions, hashtags and ideas instantly with a single click.",
  },
  {
    icon: HiOutlineBolt,
    title: "Fast Generation",
    description:
      "Generate 5 caption variants within seconds.",
  },
  {
    icon: HiOutlineHeart,
    title: "Favorites & History",
    description:
      "Save your favorite captions and access previous generations anytime.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-cream-deep/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">

        <div className="text-center">

          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything You Need
          </h2>

          <p className="mt-4 text-sm text-ink-soft sm:text-base">
            Built specifically for Pakistani businesses to create professional
            social media content in seconds.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-card border border-border-soft/80 bg-white p-8 shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={28} />
                </div>

                <h3 className="font-heading text-lg font-bold text-ink">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {feature.description}
                </p>
              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}