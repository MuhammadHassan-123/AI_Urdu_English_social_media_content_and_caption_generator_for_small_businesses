import Link from "next/link";
import { HiSparkles, HiOutlineArrowRight } from "react-icons/hi2";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa6";

const PRODUCT_LINKS = [
  { label: "Generator", href: "/#generator" },
  { label: "Features", href: "/#features" },
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
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-soft/70 bg-cream-deep/60">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-border-soft/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-lg font-bold text-ink sm:text-xl">
              Ready to save hours on content?
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Generate your first batch of captions, free, no card required.
            </p>
          </div>
          <Link
            href="/#generator"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.03] hover:bg-brand-700"
          >
            Start generating
            <HiOutlineArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-cream shadow-sm shadow-brand-700/30">
                <HiSparkles size={16} />
              </span>
              <span className="font-heading text-base font-extrabold tracking-tight text-ink">
                ContentHUB
              </span>
            </Link>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink-soft">
              Ready-to-post captions in Urdu, Roman Urdu, and English, made for
              Pakistani small businesses.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-ink-soft transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Product
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Company
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border-soft/70 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ContentHUB. All rights reserved.</p>
          <p>Made with ❤️ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
