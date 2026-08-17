import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 via-cream to-peach px-5 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2.5 transition-transform hover:scale-105">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-cream">
            <HiSparkles size={18} />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="font-heading text-lg font-extrabold tracking-tight text-ink">
              ContentHUB
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-muted">
              URDU · ENGLISH
            </span>
          </span>
        </Link>
        {children}
      </div>
    </main>
  );
}
