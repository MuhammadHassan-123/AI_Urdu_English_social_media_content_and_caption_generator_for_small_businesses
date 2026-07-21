import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LikhoAI collects, uses, and protects your information.",
};

const LAST_UPDATED = "18 July 2026"; // TODO: keep this in sync when you actually change the policy

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated={LAST_UPDATED}>
      <LegalSection title="1. Introduction">
        <p>
          This Privacy Policy explains how LikhoAI (&quot;we&quot;, &quot;us&quot;) collects,
          uses, and protects information when you use our website and caption generator. By
          using LikhoAI, you agree to the practices described here.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>We collect the following types of information:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <span className="font-semibold text-ink">Account information</span> — your name and
            email address, if you create an account.
          </li>
          <li>
            <span className="font-semibold text-ink">Content you submit</span> — the business
            details, product descriptions, and preferences you enter into the generator, which
            are used to produce your captions.
          </li>
          <li>
            <span className="font-semibold text-ink">Usage data</span> — general information
            about how you use LikhoAI, such as which business categories and platforms are
            selected most often, used to improve the product.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>To generate the captions, hashtags, and content ideas you request.</li>
          <li>To operate and maintain your account, including saved history and favorites.</li>
          <li>To understand usage patterns and improve prompt quality across business types.</li>
          <li>To communicate with you if you contact us directly.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </LegalSection>

      <LegalSection title="4. Third-Party Services">
        <p>
          When you generate content, the details you enter are sent to{" "}
          <span className="font-semibold text-ink">Google&apos;s Gemini API</span> to produce
          your captions. This is subject to Google&apos;s own privacy and data-handling terms in
          addition to ours. Please avoid submitting sensitive personal information (such as
          national ID numbers or financial details) in the description field.
        </p>
        <p>
          If you sign in or store data with us, that may be handled through Firebase
          (Google Cloud), which has its own security and privacy practices.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies & Analytics">
        <p>
          We may use cookies or similar technologies to keep you signed in and to understand
          aggregate usage of the site. You can disable cookies in your browser settings, though
          some features (like staying signed in) may not work correctly without them.
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention">
        <p>
          We keep account information and saved history for as long as your account is active.
          If you delete your account, we will remove your personal information within a
          reasonable time, except where we&apos;re required to retain it for legal reasons.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          You can request access to, correction of, or deletion of your personal information at
          any time by contacting us (see Section 10). If you have an account, you can also delete
          saved history directly from your dashboard.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>
          We take reasonable technical and organizational measures to protect your information.
          However, no method of transmission or storage is 100% secure, and we can&apos;t
          guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="9. Children's Privacy">
        <p>
          LikhoAI is intended for business owners and is not directed at children. We do not
          knowingly collect personal information from anyone under 18.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make material changes,
          we&apos;ll update the &quot;Last updated&quot; date above.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact Us">
        <p>
          Questions about this policy? Reach out via our{" "}
          <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
            Contact page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
