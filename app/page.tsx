"use client";

import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/components/AuthProvider";

import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

import {
  canGenerate,
  increaseGenerationCount,
} from "@/lib/usage";

import InputForm, {
  GenerationInput,
} from "@/components/InputForm";

import Loading from "@/components/Loading";

import OutputSection, {
  GenerationResult,
} from "@/components/OutputSection";

import HistorySection from "@/components/HistorySection";

import {
  getHistory,
  saveHistory,
  HistoryItem,
} from "@/lib/history";

export default function Home() {

  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const [currentInput, setCurrentInput] =
    useState<GenerationInput>();

  const [lastInput, setLastInput] =
    useState<GenerationInput>();

  const [result, setResult] =
    useState<GenerationResult>();

  const [history, setHistory] =
    useState<HistoryItem[]>([]);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const outputRef = useRef<HTMLDivElement>(null);

  /* -------------------------------
      Load User History
  -------------------------------- */

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const data = await getHistory();
    setHistory(data);
  }

  /* -------------------------------
      Generate Content
  -------------------------------- */

  async function handleGenerate(
    input: GenerationInput
  ) {
    setLoading(true);

    setError("");

    setSuccess("");

    setCurrentInput(input);

    setLastInput(input);

    const permission = await canGenerate();

    if (!permission.allowed) {
      setError(
        permission.reason ||
          "Generation limit reached."
      );

      setLoading(false);

      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(input),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Generation failed."
        );
      }

      setResult(data.data);

      await increaseGenerationCount();

      await saveHistory(
        input.businessType,
        input.product ?? "",
        data.data
      );

      await loadHistory();

      setSuccess(
        "✅ Content generated successfully!"
      );
      toast.success("✅ Content generated successfully!");
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(
          "Unable to generate content."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>

      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

            {user && (
        <InputForm
          onGenerate={handleGenerate}
          loading={loading}
        />
      )}

      {error && (
        <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm font-medium text-rose-600">
          {error}
        </div>
      )}

      {success && (
        <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm font-medium text-brand-700">
          {success}
        </div>
      )}

      {loading ? (
        <Loading />
      ) : (
        <>
          {user && (
            <div ref={outputRef}>
              <OutputSection
                result={result}
                input={currentInput}
                onRegenerate={() => {
                  if (lastInput) {
                    handleGenerate(lastInput);
                  }
                }}
                onClear={() => {
                  setResult(undefined);
                  setError("");
                  setSuccess("");
                }}
              />
            </div>
          )}

          {user && (
            <HistorySection
              history={history}
              onRefresh={loadHistory}
              onView={(item) => {
                setResult(item.result);

                setTimeout(() => {
                  outputRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 100);
              }}
            />
          )}

          <Pricing />

          <FAQSection />

          <Footer />
        </>
      )}
          </main>
  );
}