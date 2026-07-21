"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { HiOutlineSparkles } from "react-icons/hi2";

export type GenerationInput = {
  businessType: string;
  product: string;
  description: string;
  occasion: string;
  tone: string;
  platform: string;
  language: string;
};

type Props = {
  onGenerate: (input: GenerationInput) => void;
  loading?: boolean;
};

const BUSINESS_TYPES = [
  "Kirana Store",
  "Tailor / Boutique",
  "Home Bakery",
  "Beauty Parlor",
  "Tuition Center",
  "Mobile Repair Shop",
  "Restaurant / Dhaba",
  "Electronics Shop",
  "Clinic / Pharmacy",
  "Home Decor Seller",
];
const OCCASIONS = ["New Arrival", "Sale / Discount", "Festival (Eid)", "Quick Tip"];
const TONES = ["Friendly", "Professional", "Urgent"];
const PLATFORMS = ["Facebook", "Instagram", "TikTok", "WhatsApp Status"];
const LANGUAGES = ["Mix of English, Urdu and Roman Urdu"];

type Errors = Partial<Record<keyof GenerationInput, string>>;

export default function InputForm({ onGenerate, loading }: Props) {
  const [form, setForm] = useState<GenerationInput>({
    businessType: "",
    product: "",
    description: "",
    occasion: OCCASIONS[0],
    tone: TONES[0],
    platform: PLATFORMS[0],
    language: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const { user } = useAuth();
  
useEffect(() => {
  async function loadDefaults() {
    if (!user) return;

    const snap = await getDoc(doc(db, "users", user.uid));

    if (!snap.exists()) return;

    const data = snap.data();

    setForm((prev) => ({
      ...prev,

      businessType:
        data.businessCategory || prev.businessType,

      tone:
        data.defaultTone || prev.tone,

      language:
        data.defaultLanguage || prev.language,

      platform:
        data.defaultPlatform || prev.platform,
    }));
  }

  loadDefaults();
}, [user]);

  function update<K extends keyof GenerationInput>(key: K, value: GenerationInput[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!form.businessType) next.businessType = "Business type is required.";
    if (!form.product.trim()) next.product = "Product is required.";
    if (!form.description.trim()) next.description = "Description should not be empty.";
    if (!form.language) next.language = "Please select a language.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) onGenerate(form);
  }

  return (
    <section id="generator" className="mx-auto max-w-3xl px-5 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Tell us about your post
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Fill this in once — get 10 ready-to-post variants back.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-card border border-border-soft/80 bg-white/70 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm sm:p-8"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <SelectField
            label="Business Type"
            required
            value={form.businessType}
            onChange={(v) => update("businessType", v)}
            options={BUSINESS_TYPES}
            placeholder="Select business type"
            error={errors.businessType}
          />

          <TextField
            label="Product"
            required
            value={form.product}
            onChange={(v) => update("product", v)}
            placeholder="e.g. Bridal makeup package"
            error={errors.product}
          />

          <div className="sm:col-span-2">
           <TextAreaField
            label="Description"
            required
            value={form.description}
            onChange={(v) => update("description", v)}
            placeholder="Describe your product or service..."
            error={errors.description}
            maxLength={500}
           />

           <div
             className={`mt-2 text-right text-sm ${
              form.description.length > 450
              ? "text-red-500"
              : "text-gray-500"
              }`}
            >
             {form.description.length}/500 characters
            </div>
          </div>

          <SelectField
            label="Occasion"
            value={form.occasion}
            onChange={(v) => update("occasion", v)}
            options={OCCASIONS}
          />

          <SelectField
            label="Tone"
            value={form.tone}
            onChange={(v) => update("tone", v)}
            options={TONES}
          />

          <SelectField
            label="Platform"
            value={form.platform}
            onChange={(v) => update("platform", v)}
            options={PLATFORMS}
          />

          <SelectField
            label="Language"
            required
            value={form.language}
            onChange={(v) => update("language", v)}
            options={LANGUAGES}
            placeholder="Select language"
            error={errors.language}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-3.5 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.01] hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
        >
          <HiOutlineSparkles size={18} />
          {loading ? "Generating..." : "Generate content"}
        </button>
      </form>
    </section>
  );
}

/* --- small field building blocks --- */

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-ink">
      {label} {required && <span className="text-brand-600">*</span>}
    </label>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1 text-xs font-medium text-rose-600">{error}</p>;
}

function TextField({
  label, required, value, onChange, placeholder, error,
}: {
  label: string; required?: boolean; value: string;
  onChange: (v: string) => void; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-600 ${
          error ? "border-rose-400" : "border-border-soft"
        }`}
      />
      <FieldError error={error} />
    </div>
  );
}

function TextAreaField({
  label,
  required,
  value,
  onChange,
  placeholder,
  error,
  maxLength,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} />

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        maxLength={maxLength}
        className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-600 ${
          error ? "border-rose-400" : "border-border-soft"
        }`}
      />

      <FieldError error={error} />
    </div>
  );
}

function SelectField({
  label, required, value, onChange, options, placeholder, error,
}: {
  label: string; required?: boolean; value: string;
  onChange: (v: string) => void; options: string[]; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <FieldLabel label={label} required={required} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand-600 ${
          error ? "border-rose-400" : "border-border-soft"
        } ${!value ? "text-muted" : ""}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <FieldError error={error} />
    </div>
  );
}
