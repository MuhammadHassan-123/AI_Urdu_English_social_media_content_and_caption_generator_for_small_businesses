import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the LikhoAI team — questions, feedback, or a business type we should support next.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-gradient-to-br from-brand-50 via-cream to-peach px-5 pb-14 pt-16 text-center sm:pt-20">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            Get in touch
          </span>
          <h1 className="mx-auto max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-ink-soft">
            Questions, feedback, or a business type we should support next — send it over.
          </p>
        </section>

        <section className="mx-auto max-w-xl px-5 py-14">
          <div className="rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 sm:p-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
