import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiVercel } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";

const BALLOONS = [
  { icon: SiNextdotjs, name: "Next.js", offset: 0 },
  { icon: HiSparkles, name: "Gemini AI", offset: 10 },
  { icon: SiTypescript, name: "TypeScript", offset: 2 },
  { icon: SiTailwindcss, name: "Tailwind", offset: 12 },
  { icon: SiFirebase, name: "Firebase", offset: 4 },
  { icon: SiVercel, name: "Vercel", offset: 8 },
];

export default function RobotWalker() {
  return (
    <div
      className="animate-walk-across pointer-events-none absolute bottom-3 h-44 w-28"
      aria-hidden="true"
    >
      {/* balloon cluster + strings */}
      <div className="absolute -top-1 left-0 flex items-end gap-1.5">
        {BALLOONS.map((balloon, i) => (
          <div
            key={balloon.name}
            className="flex flex-col items-center"
            style={{ marginBottom: balloon.offset }}
          >
            <div
              className="animate-balloon-bob flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg shadow-black/20 ring-1 ring-black/5 sm:h-10 sm:w-10"
              style={{ animationDelay: `${i * 0.28}s` }}
            >
              <balloon.icon size={16} className="text-brand-600" />
            </div>
            <span className="mt-0.5 h-8 w-px bg-white/30" />
          </div>
        ))}
      </div>

      {/* robot body group */}
      <div className="animate-bob-body absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* arm reaching up to the balloon strings */}
        <span className="absolute -top-6 left-1 h-8 w-0.5 origin-bottom -rotate-[24deg] bg-white/40" />

        {/* head */}
        <div className="relative mx-auto h-7 w-7 rounded-lg bg-brand-600 shadow-md shadow-black/20">
          <span className="absolute -top-3 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-brand-500" />
          <span className="absolute -top-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-brand-400" />
          <span className="absolute left-1.5 top-2.5 h-1 w-1 rounded-full bg-white" />
          <span className="absolute right-1.5 top-2.5 h-1 w-1 rounded-full bg-white" />
        </div>

        {/* body */}
        <div className="mx-auto -mt-0.5 h-8 w-9 rounded-md bg-[#1d5f47] shadow-md shadow-black/20" />

        {/* legs */}
        <div className="mx-auto flex w-9 justify-between px-0.5">
          <span className="animate-leg-a h-4 w-1.5 origin-top rounded-b-full bg-brand-700" />
          <span className="animate-leg-b h-4 w-1.5 origin-top rounded-b-full bg-brand-700" />
        </div>
      </div>
    </div>
  );
}
