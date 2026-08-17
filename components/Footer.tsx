import Link from "next/link";

import {
  HiSparkles,
  HiOutlineArrowRight,
  HiOutlineHeart,
} from "react-icons/hi2";

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";

const PRODUCT_LINKS = [
  { label: "Generator", href: "/home#generator" },
  { label: "Features", href: "/home#features" },
  { label: "Pricing", href: "/pricing" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/term" },
];

const SOCIALS = [
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaTiktok,
    href: "#",
    label: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-soft/70 bg-cream-deep/60">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

        <div
          className="
            absolute
            -top-32
            left-1/2
            h-80
            w-[40rem]
            -translate-x-1/2
            rounded-full
            bg-brand-100/40
            blur-3xl
          "
        />

        {/* Left glow */}

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-80
            w-80
            rounded-full
            bg-brand-50/70
            blur-3xl
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-80
            w-80
            rounded-full
            bg-brand-100/30
            blur-3xl
          "
        />

      </div>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="relative border-b border-border-soft/70">

        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-brand-100
              bg-gradient-to-br
              from-brand-50
              via-white
              to-cream
              px-6
              py-9
              shadow-sm
              shadow-brand-700/5
              sm:px-10
              sm:py-10
            "
          >

            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-24
                h-56
                w-56
                rounded-full
                bg-brand-100/50
                blur-2xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-48
                w-48
                rounded-full
                bg-brand-50
                blur-2xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-7
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >

              {/* CTA text */}

              <div className="max-w-2xl">

                <div className="mb-3 flex items-center gap-2">

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-brand-600
                      text-white
                      shadow-sm
                    "
                  >
                    <HiSparkles size={14} />
                  </span>

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-brand-600
                    "
                  >
                    Create smarter
                  </span>

                </div>

                <h2
                  className="
                    font-heading
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-ink
                    sm:text-3xl
                  "
                >
                  Ready to create content
                  <span className="text-brand-600">
                    {" "}faster?
                  </span>
                </h2>

                <p
                  className="
                    mt-2
                    max-w-xl
                    text-sm
                    leading-relaxed
                    text-ink-soft
                    sm:text-base
                  "
                >
                  Generate engaging captions in Urdu, Roman Urdu,
                  and English, made especially for Pakistani businesses.
                </p>

              </div>


              {/* CTA button */}

              <Link
                href="/home#generator"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-brand-600
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-cream
                  shadow-lg
                  shadow-brand-700/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-brand-700
                  hover:shadow-xl
                  active:translate-y-0
                "
              >

                Start generating

                <HiOutlineArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:py-16">

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-12
            md:grid-cols-4
            lg:gap-x-16
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="col-span-2 md:col-span-1">

            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-600
                  text-cream
                  shadow-md
                  shadow-brand-700/20
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:rotate-6
                  group-hover:shadow-lg
                "
              >

                <HiSparkles size={19} />

              </span>

              <div>

                <span
                  className="
                    block
                    font-heading
                    text-lg
                    font-extrabold
                    tracking-tight
                    text-ink
                  "
                >
                  ContentHUB
                </span>

                <span
                  className="
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-muted
                  "
                >
                  Urdu • English
                </span>

              </div>

            </Link>


            <p
              className="
                mt-4
                max-w-[18rem]
                text-sm
                leading-relaxed
                text-ink-soft
              "
            >
              AI-powered content creation for Pakistani
              small businesses, creators, and growing brands.
            </p>


            {/* Urdu tagline */}

            <p
              className="
                mt-3
                text-sm
                font-medium
                text-brand-600
              "
            >
              App ka content Aik Click ma ✨
            </p>


            {/* Socials */}

            <div className="mt-6 flex items-center gap-2.5">

              {SOCIALS.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      group
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border-soft
                      bg-white/40
                      text-ink-soft
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-brand-200
                      hover:bg-brand-50
                      hover:text-brand-600
                      hover:shadow-sm
                    "
                  >

                    <Icon
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                  </a>
                );

              })}

            </div>

          </div>


          {/* =================================================
              PRODUCT
          ================================================= */}

          <FooterColumn
            title="Product"
            links={PRODUCT_LINKS}
          />


          {/* =================================================
              COMPANY
          ================================================= */}

          <FooterColumn
            title="Company"
            links={COMPANY_LINKS}
          />


          {/* =================================================
              LEGAL
          ================================================= */}

          <FooterColumn
            title="Legal"
            links={LEGAL_LINKS}
          />

        </div>


        {/* =================================================
            BOTTOM DIVIDER
        ================================================= */}

        <div
          className="
            mt-14
            border-t
            border-border-soft/70
            pt-7
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              text-xs
              text-muted
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p>
              © {new Date().getFullYear()} ContentHUB.
              All rights reserved.
            </p>


            <p className="flex items-center gap-1.5">

              Made with

              <HiOutlineHeart
                size={13}
                className="text-brand-600"
              />

              in Pakistan

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* ============================================================
   FOOTER COLUMN COMPONENT
============================================================ */

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {

  return (
    <div>

      <p
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-muted
        "
      >
        {title}
      </p>


      <nav className="mt-5 flex flex-col gap-3">

        {links.map((link) => (

          <Link
            key={link.label}
            href={link.href}
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-1.5
              text-sm
              font-medium
              text-ink-soft
              transition-all
              duration-200
              hover:text-brand-600
            "
          >

            <span>
              {link.label}
            </span>

            <HiOutlineArrowRight
              size={13}
              className="
                -translate-x-1
                opacity-0
                transition-all
                duration-200
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />

          </Link>

        ))}

      </nav>

    </div>
  );
}