import { HiOutlineArrowDown, HiOutlinePlayCircle } from "react-icons/hi2";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-cream to-peach">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-24 pt-16 md:grid-cols-2 md:pt-24">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Made for Pakistani small businesses
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Roz ka social media content{" "}
            <span className="text-brand-600">ek click mein.</span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Apni dukan, service ya offer likhein — AI banayega 10 ready-to-post
            captions Urdu, Roman Urdu aur English mein, hashtags aur reel
            ideas ke saath.
          </p>

          <p className="font-urdu mt-3 text-xl leading-loose text-ink-soft">
            آپ کے کاروبار کے لیے دلکش پوسٹس، لمحوں میں
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#generator"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.03] hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
            >
              Start generating
              <HiOutlineArrowDown size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-cream/60 px-6 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-ink/20 hover:text-ink"
            >
              <HiOutlinePlayCircle size={18} />
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Works with
            <span className="flex items-center gap-3 text-ink-soft">
              <FaInstagram size={16} />
              <FaFacebook size={16} />
              <FaTiktok size={15} />
            </span>
          </div>
        </div>

        {/* Right: signature floating caption preview */}
        <div className="relative hidden items-center justify-center md:flex">
          <div className="absolute -left-4 top-6 w-[300px] rotate-[-6deg] rounded-card border border-border-soft/70 bg-white/90 p-5 shadow-xl shadow-ink/5 backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
              English
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink">
              Fresh lawn collection is here 🌿 Grab yours before Eid stock runs out!
            </p>
          </div>

          <div className="absolute left-16 top-40 w-[300px] rotate-[3deg] rounded-card border border-border-soft/70 bg-white p-5 shadow-2xl shadow-ink/10">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
              Urdu Script
            </p>
            <p className="font-urdu mt-2 text-lg leading-loose text-ink">
              نیا لان کلیکشن آ گیا! عید سے پہلے اپنی پسند کا سوٹ ابھی بک کروائیں۔
            </p>
          </div>

          <div className="absolute left-6 top-[19rem] w-[280px] rotate-[-2deg] rounded-card border border-border-soft/70 bg-white/95 p-5 shadow-lg shadow-ink/5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">
              Roman Urdu
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink">
              Naya lawn collection aa gaya! Eid se pehle apni pasand ka suit book karwayein.
            </p>
          </div>

          {/* spacer to size the relative container on md+ */}
          <div className="h-[34rem] w-full" />
        </div>
      </div>
    </section>
  );
}
