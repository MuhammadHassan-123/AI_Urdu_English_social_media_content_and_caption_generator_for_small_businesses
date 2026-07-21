import {
  HiOutlinePencilSquare,
  HiOutlineSparkles,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";

const steps = [
  {
    icon: HiOutlinePencilSquare,
    title: "1. Enter Your Business Details",
    description:
      "Select your business type, product, platform, language and tone.",
  },
  {
    icon: HiOutlineSparkles,
    title: "2. AI Generates Content",
    description:
      "LikhoAI creates 5 unique captions, hashtags, reel ideas, story ideas and image prompts in seconds.",
  },
  {
    icon: HiOutlineClipboardDocument,
    title: "3. Copy & Share",
    description:
      "Copy your favorite caption, export it, or save it for later with one click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-5">

        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How It Works
          </h2>

          <p className="mt-4 text-sm text-ink-soft sm:text-base">
            Create professional social media content in three easy steps.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {steps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-card border border-border-soft/80 bg-white p-8 shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={28} />
                </div>

                <h3 className="font-heading text-lg font-bold text-ink">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}