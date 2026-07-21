import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, freemium pricing for LikhoAI — free to start, upgrade when you need more.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}