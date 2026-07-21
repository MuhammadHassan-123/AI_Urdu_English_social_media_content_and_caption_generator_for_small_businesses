"use client";

import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

type Props = {
  label: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: string;
};

export default function AuthField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  error,
}: Props) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink">{label}</label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
            {icon}
          </span>
        )}
        <input
         type={inputType}
         value={value}
         autoComplete={ type === "email" ? "email": type === "password" ? "current-password": "name"}
         onChange={(e) => onChange(e.target.value)}
         placeholder={placeholder}
         className={`w-full rounded-xl border bg-white py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-brand-600 ${
         icon ? "pl-10" : "pl-4"
         } ${isPassword ? "pr-10" : "pr-4"} ${
         error ? "border-rose-400" : "border-border-soft"
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-ink-soft"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <HiOutlineEyeSlash size={18} /> : <HiOutlineEye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs font-medium text-rose-600">{error}</p>}
    </div>
  );
}
