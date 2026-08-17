"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/AuthProvider";
import PlanBadge from "./PlanBadge";
import { logout } from "@/lib/auth";
import DashboardDropdown from "@/components/DashboardDropdown";

import {
  HiSparkles,
  HiBars3,
  HiXMark,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePhone,
  HiOutlineSquares2X2,
  HiOutlineUserCircle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const NAV_LINKS = [
  {
    label: "Generator",
    href: "/#generator",
    icon: <HiOutlineSquares2X2 size={18} />,
  },
  {
    label: "Features",
    href: "/#features",
    icon: <HiSparkles size={18} />,
  },
  {
    label: "Pricing",
    href: "/#pricing",
    icon: <HiOutlineHome size={18} />,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: <HiOutlineHeart size={18} />,
  },
  {
    label: "About",
    href: "/about",
    icon: <HiOutlineInformationCircle size={18} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <HiOutlinePhone size={18} />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleLogout() {
    await logout();
    setOpen(false);
    router.push("/");
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream/80 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled
          ? "border-border-soft/70 shadow-sm shadow-ink/5"
          : "border-border-soft/30 shadow-none"
      }`}
    >
      {/* accent hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-cream shadow-md shadow-brand-700/25 transition duration-300 group-hover:rotate-12 group-hover:shadow-brand-700/40">
            <HiSparkles size={20} />
          </span>

          <div className="leading-tight">

            <h1 className="font-heading text-xl font-extrabold tracking-tight text-ink">
              ContentHUB
            </h1>

            <p className="text-[11px] font-semibold tracking-[0.20em] text-muted uppercase">
              Urdu • English
            </p>

          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-1 rounded-full border border-border-soft/70 bg-white/60 px-2 py-1.5 lg:flex">

          {NAV_LINKS.map((link) => (

            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors duration-200 hover:bg-brand-50 hover:text-brand-600"
            >
              {link.label}
            </Link>

          ))}

        </nav>

        {/* Desktop Right Side */}

        <div className="hidden items-center gap-3 lg:flex">

          {user ? (
            <>

              <span className="hidden xl:flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">

                <HiOutlineUserCircle size={18} />

                {user.displayName || "Welcome"}

              </span>

              <PlanBadge />

              <div className="group relative">
   <Link
    href="/dashboard"
    className="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-600"
  >
    Dashboard
  </Link>

  {/* Dashboard Dropdown */}
  <div className="absolute right-0 top-full z-50 hidden pt-3 group-hover:block">
    <DashboardDropdown />
  </div>
</div>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full border border-red-300 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <HiOutlineArrowRightOnRectangle size={18} />
                Logout
              </button>

            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-border-soft px-5 py-2.5 text-sm font-medium text-ink-soft transition hover:border-brand-600 hover:text-brand-600"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-200 hover:scale-105 hover:bg-brand-700 active:scale-95"
              >
                Try Free
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft transition hover:bg-brand-50 lg:hidden"
        >
          {open ? (
            <HiXMark size={24} />
          ) : (
            <HiBars3 size={24} />
          )}
        </button>

      </div>

            {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border-soft/70 bg-cream lg:hidden">

          <div className="mx-5 my-5 rounded-2xl border border-border-soft bg-white p-5 shadow-lg">

            <nav className="flex flex-col gap-2">

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition-all hover:bg-brand-50 hover:text-brand-600"
                >
                  <span className="text-brand-600">
                    {link.icon}
                  </span>

                  {link.label}
                </Link>
              ))}

            </nav>

            <div className="my-5 h-px bg-border-soft" />

            {user ? (
              <>

                <div className="mb-4 flex items-center gap-3 rounded-xl bg-brand-50 p-4">

                  <HiOutlineUserCircle
                    size={30}
                    className="text-brand-600"
                  />

                  <div>

                    <p className="text-sm font-semibold text-ink">
                      {user.displayName || "Welcome"}
                    </p>

                    <p className="text-xs text-ink-soft">
                      Logged in
                    </p>

                  </div>

                </div>

                <div className="mb-4 flex justify-center">
                  <PlanBadge />
                </div>

                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="mb-3 flex items-center justify-center rounded-full bg-brand-600 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-700"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-red-300 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  <HiOutlineArrowRightOnRectangle size={18} />
                  Logout
                </button>

              </>
            ) : (
              <div className="flex flex-col gap-3">

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border-soft py-3 text-center text-sm font-medium text-ink-soft transition hover:border-brand-600 hover:text-brand-600"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-brand-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Try Free
                </Link>

              </div>
            )}

          </div>

        </div>
      )}

    </header>
  );
}