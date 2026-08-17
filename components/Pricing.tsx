import { HiOutlineCheck } from "react-icons/hi2";

const plans = [
  {
    name: "Free",
    price: "Rs. 0",
    description: "Perfect for trying ContentHUB.",
    featured: false,
    button: "Start Free",

    features: [
      "20 AI generations per day",
      "English, Urdu & Roman Urdu",
      "Caption Generator",
      "Hashtag Generator",
      "Reel Ideas",
      "Story Ideas",
      "Image Prompt Generator",
      "Generation History",
      "Favorite Captions",
    ],
  },

  {
    name: "Pro",
    price: "Rs. 299 / month",
    description:
      "Built for Pakistani small businesses and content creators.",
    featured: true,
    button: "Upgrade to Pro",

    features: [
      "Unlimited AI generations",
      "Priority AI responses",
      "Unlimited History",
      "Unlimited Favorites",
      "Export TXT",
      "Future Brand Voice",
      "Future AI Scheduler",
      "Future Analytics Dashboard",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-cream-deep/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">

        <div className="text-center">

          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Simple Pricing
          </h2>

          <p className="mt-4 text-sm text-ink-soft sm:text-base">
            Start for free. Upgrade only when your business grows.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-card border bg-white p-8 shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:shadow-md ${
                plan.featured
                  ? "border-brand-600 ring-2 ring-brand-100"
                  : "border-border-soft/80"
              }`}
            >

              {plan.featured && (
                <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-cream">
                  Recommended
                </span>
              )}

              <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                {plan.name}
              </h3>

              <p className="mt-3 font-heading text-4xl font-extrabold text-brand-600">
                {plan.price}
              </p>

              <p className="mt-4 text-sm text-ink-soft">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3.5">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-ink"
                  >
                    <HiOutlineCheck className="shrink-0 text-brand-600" />
                    <span>{feature}</span>
                  </li>
                ))}

              </ul>

              <button
                className={`mt-10 w-full rounded-full py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-brand-600 text-cream hover:bg-brand-700"
                    : "border border-brand-600 text-brand-600 hover:bg-brand-50"
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}