"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/AuthProvider";
import PlanBadge from "@/components/PlanBadge";
import DashboardDropdown from "@/components/DashboardDropdown";
import { logout } from "@/lib/auth";

import {
  HiSparkles,
  HiBars3,
  HiXMark,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlinePhone,
  HiOutlineSquares2X2,
  HiOutlineClock,
  HiOutlineUserCircle,
  HiOutlineRectangleStack,
  HiOutlineArrowRightOnRectangle,
  HiChevronDown,
} from "react-icons/hi2";

const NAV_LINKS = [
  {
    label: "Generator",
    href: "/home#generator",
    icon: HiOutlineSquares2X2,
  },
  {
    label: "Features",
    href: "/home#features",
    icon: HiSparkles,
  },
  {
    label: "Pricing",
    href: "/pricing",
    icon: HiOutlineHome,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: HiOutlineHeart,
  },
  {
    label: "History",
    href: "/home#history",
    icon: HiOutlineClock,
  },
  {
    label: "About",
    href: "/about",
    icon: HiOutlineInformationCircle,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: HiOutlinePhone,
  },
];

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* -------------------------------------------------------
     Scroll effect
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     Logout
  ------------------------------------------------------- */

  async function handleLogout() {
    try {
      await logout();
      setOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b
        bg-cream/85
        backdrop-blur-xl
        transition-all duration-300
        ${
          scrolled
            ? "border-border-soft/70 shadow-md shadow-ink/5"
            : "border-border-soft/30 shadow-none"
        }
      `}
    >
      {/* =====================================================
          TOP ACCENT
      ===================================================== */}

      <div className="h-[2px] w-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500" />

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">

        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <span
            className="
              relative flex h-11 w-11
              items-center justify-center
              rounded-full
              bg-brand-600
              text-cream
              shadow-md shadow-brand-700/20
              transition-all duration-300
              group-hover:scale-105
              group-hover:rotate-6
              group-hover:shadow-lg
            "
          >
            <HiSparkles size={20} />
          </span>

          <div className="hidden leading-tight sm:block">
            <h1 className="font-heading text-xl font-extrabold tracking-tight text-ink">
              ContentHUB
            </h1>

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Urdu • English
            </p>
          </div>
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-1
            rounded-full
            border border-border-soft/70
            bg-white/65
            px-2 py-1.5
            shadow-sm shadow-ink/5
            lg:flex
          "
        >
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className="
                  rounded-full
                  px-4 py-1.5
                  text-sm font-medium
                  text-ink-soft
                  transition-all duration-200
                  hover:bg-brand-50
                  hover:text-brand-600
                "
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ===================================================
            DESKTOP USER AREA
        =================================================== */}

        <div className="hidden items-center lg:flex">

          {user ? (

            /*
             * IMPORTANT:
             * "profile-menu" controls the first dropdown.
             * "dashboard-menu" controls the nested Dashboard
             * dropdown independently.
             */
            <div className="group/profile relative">

              {/* ---------------------------------------------
                  PROFILE BUTTON
              --------------------------------------------- */}

              <button
                type="button"
                className="
                  flex items-center gap-2.5
                  rounded-full
                  border border-border-soft/70
                  bg-white/80
                  px-3 py-1.5
                  shadow-sm shadow-ink/5
                  transition-all duration-300
                  hover:border-brand-200
                  hover:bg-white
                  hover:shadow-md
                "
              >
                {/* Avatar */}

                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-brand-500
                    to-brand-700
                    text-white
                  "
                >
                  <HiOutlineUserCircle size={20} />
                </span>

                {/* Name */}

                <span className="hidden text-left xl:block">
                  <span className="block max-w-[120px] truncate text-xs font-bold text-ink">
                    {user.displayName || "Welcome"}
                  </span>

                  <span className="block text-[10px] font-medium text-muted">
                    Free account
                  </span>
                </span>

                <HiChevronDown
                  size={14}
                  className="
                    text-muted
                    transition-transform duration-300
                    group-hover/profile:rotate-180
                  "
                />
              </button>

              {/* =================================================
                  PROFILE DROPDOWN
              ================================================= */}

              <div
                className="
                  invisible
                  absolute right-0 top-full
                  z-50
                  w-72
                  translate-y-2
                  pt-3
                  opacity-0
                  transition-all duration-200

                  group-hover/profile:visible
                  group-hover/profile:translate-y-0
                  group-hover/profile:opacity-100
                "
              >
                <div
                  className="
                    overflow-visible
                    rounded-2xl
                    border border-border-soft/70
                    bg-white
                    p-3
                    shadow-2xl shadow-ink/15
                  "
                >

                  {/* -----------------------------------------
                      USER DETAILS
                  ----------------------------------------- */}

                  <div
                    className="
                      flex items-center gap-3
                      rounded-xl
                      bg-brand-50
                      p-3
                    "
                  >
                    <span
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-brand-600
                        text-white
                      "
                    >
                      <HiOutlineUserCircle size={23} />
                    </span>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-ink">
                        {user.displayName || "Welcome"}
                      </p>

                      <p className="truncate text-xs text-ink-soft">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* -----------------------------------------
                      CURRENT PLAN
                  ----------------------------------------- */}

                  <div
                    className="
                      mt-3
                      flex items-center justify-between
                      rounded-xl
                      border border-border-soft/60
                      bg-cream
                      px-3 py-2.5
                    "
                  >
                    <span className="text-xs font-semibold text-ink-soft">
                      Current plan
                    </span>

                    <PlanBadge />
                  </div>

                  {/* Divider */}

                  <div className="my-3 h-px bg-border-soft/70" />

                  {/* =================================================
                      DASHBOARD + NESTED DROPDOWN
                  ================================================= */}

                  <div className="group/dashboard relative">

                    {/* Dashboard button */}

                    <Link
                      href="/dashboard"
                      className="
                        flex w-full items-center justify-between
                        rounded-xl
                        px-3 py-2.5
                        text-sm font-medium
                        text-ink-soft
                        transition-all duration-200
                        hover:bg-brand-50
                        hover:text-brand-600
                      "
                    >
                      <span className="flex items-center gap-3">

                        <span
                          className="
                            flex h-8 w-8
                            items-center justify-center
                            rounded-lg
                            bg-brand-50
                            text-brand-600
                            transition-all duration-200
                            group-hover/dashboard:bg-brand-100
                          "
                        >
                          <HiOutlineRectangleStack size={17} />
                        </span>

                        <span>Dashboard</span>

                      </span>

                      <HiChevronDown
                        size={15}
                        className="
                          -rotate-90
                          text-muted
                          transition-transform duration-200
                          group-hover/dashboard:text-brand-600
                        "
                      />
                    </Link>

                    {/* =================================================
                        DASHBOARD NESTED DROPDOWN
                    ================================================= */}

                    <div
                      className="
                        invisible
                        absolute right-full top-0
                        z-[60]
                        mr-3
                        w-[330px]
                        translate-x-2
                        opacity-0
                        transition-all duration-200

                        group-hover/dashboard:visible
                        group-hover/dashboard:translate-x-0
                        group-hover/dashboard:opacity-100
                      "
                    >
                      <DashboardDropdown />
                    </div>

                  </div>

                  {/* -----------------------------------------
                      LOGOUT
                  ----------------------------------------- */}

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      mt-1
                      flex w-full items-center gap-3
                      rounded-xl
                      px-3 py-2.5
                      text-left
                      text-sm font-medium
                      text-red-600
                      transition-all duration-200
                      hover:bg-red-50
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8
                        items-center justify-center
                        rounded-lg
                        bg-red-50
                        text-red-500
                      "
                    >
                      <HiOutlineArrowRightOnRectangle size={17} />
                    </span>

                    <span>Logout</span>
                  </button>

                </div>
              </div>
            </div>

          ) : (

            /* =================================================
               LOGGED OUT
            ================================================= */

            <div className="flex items-center gap-3">

              <Link
                href="/login"
                className="
                  rounded-full
                  border border-border-soft
                  bg-white/40
                  px-5 py-2.5
                  text-sm font-medium
                  text-ink-soft
                  transition-all duration-200
                  hover:border-brand-600
                  hover:bg-brand-50
                  hover:text-brand-600
                "
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="
                  rounded-full
                  bg-brand-600
                  px-5 py-2.5
                  text-sm font-semibold
                  text-cream
                  shadow-md shadow-brand-700/20
                  transition-all duration-200
                  hover:scale-105
                  hover:bg-brand-700
                  active:scale-95
                "
              >
                Try Free
              </Link>

            </div>
          )}
        </div>

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-border-soft
            bg-white/60
            transition-all duration-200
            hover:bg-brand-50
            hover:text-brand-600
            lg:hidden
          "
        >
          {open ? (
            <HiXMark size={23} />
          ) : (
            <HiBars3 size={23} />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          overflow-hidden
          border-t border-border-soft/70
          bg-cream
          transition-all duration-300
          lg:hidden
          ${
            open
              ? "max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            mx-5 my-5
            rounded-2xl
            border border-border-soft
            bg-white
            p-5
            shadow-lg
          "
        >

          {/* Navigation */}

          <nav className="flex flex-col gap-1">

            {NAV_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center gap-3
                    rounded-xl
                    px-4 py-3
                    text-sm font-medium
                    text-ink-soft
                    transition-all duration-200
                    hover:bg-brand-50
                    hover:text-brand-600
                  "
                >
                  <Icon
                    size={18}
                    className="text-brand-600"
                  />

                  {link.label}
                </Link>
              );
            })}

          </nav>

          <div className="my-5 h-px bg-border-soft" />

          {/* Logged in */}

          {user ? (
            <>

              <div className="rounded-2xl bg-brand-50 p-4">

                <div className="flex items-center gap-3">

                  <span
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-brand-600
                      text-white
                    "
                  >
                    <HiOutlineUserCircle size={25} />
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink">
                      {user.displayName || "Welcome"}
                    </p>

                    <p className="truncate text-xs text-ink-soft">
                      {user.email}
                    </p>
                  </div>

                </div>

                <div
                  className="
                    mt-3
                    flex items-center justify-between
                    rounded-xl
                    bg-white/70
                    px-3 py-2
                  "
                >
                  <span className="text-xs font-medium text-ink-soft">
                    Plan
                  </span>

                  <PlanBadge />
                </div>

              </div>

              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="
                  mt-4
                  flex items-center justify-center
                  rounded-full
                  bg-brand-600
                  py-3
                  text-sm font-semibold
                  text-white
                  transition-all duration-200
                  hover:bg-brand-700
                "
              >
                Open Dashboard
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  mt-3
                  flex w-full
                  items-center justify-center gap-2
                  rounded-full
                  border border-red-200
                  py-3
                  text-sm font-medium
                  text-red-600
                  transition-all duration-200
                  hover:bg-red-50
                "
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
                className="
                  rounded-full
                  border border-border-soft
                  py-3
                  text-center
                  text-sm font-medium
                  text-ink-soft
                  transition-all
                  hover:border-brand-600
                  hover:text-brand-600
                "
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="
                  rounded-full
                  bg-brand-600
                  py-3
                  text-center
                  text-sm font-semibold
                  text-white
                  transition-all
                  hover:bg-brand-700
                "
              >
                Try Free
              </Link>

            </div>
          )}

        </div>
      </div>
    </header>
  );
}