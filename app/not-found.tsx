import Link from "next/link";
import { HiOutlineFaceFrown, HiOutlineArrowLeft } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-50 via-cream to-peach px-5 text-center">
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-cream">
        <HiOutlineFaceFrown size={26} />
      </span>

      <p className="font-heading text-6xl font-extrabold tracking-tight text-brand-600">404</p>
      <h1 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-ink">
        Oops! Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.03] hover:bg-brand-700"
      >
        <HiOutlineArrowLeft size={16} />
        Go Home
      </Link>
    </main>
  );
}
