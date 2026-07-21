import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, updated, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-gradient-to-br from-brand-50 via-cream to-peach px-5 pb-12 pt-16 text-center sm:pt-20">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-ink-soft">Last updated: {updated}</p>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-14">
          <div className="rounded-card border border-border-soft/80 bg-white p-6 shadow-sm shadow-ink/5 sm:p-10">
            <div className="space-y-8">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-heading text-lg font-bold text-ink">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}
