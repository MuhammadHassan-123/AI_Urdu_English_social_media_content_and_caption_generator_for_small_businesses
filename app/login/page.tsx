"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import AuthLayout from "@/components/AuthLayout";
import AuthField from "@/components/AuthField";
import { login } from "@/lib/auth";

type Errors = { email?: string; password?: string };

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function validate(): boolean {
  const next: Errors = {};

  if (!email.trim()) {
    next.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    next.email = "Please enter a valid email address.";
  }

  if (!password) {
    next.password = "Password is required.";
  }

  setErrors(next);

  return Object.keys(next).length === 0;
}

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    await login(email, password);

    toast.success("Welcome back!");

    router.push("/");
  } catch (error: unknown) {
    const err = (error || {}) as { code?: string; message?: string };

    switch (err.code) {
      case "auth/invalid-credential":
      case "auth/user-not-found":
      case "auth/wrong-password":
        setErrors({
          email: "Invalid email or password.",
          password: "Invalid email or password.",
        });
        break;

      case "auth/invalid-email":
        setErrors((prev) => ({
          ...prev,
          email: "Invalid email address.",
        }));
        break;

      default:
        toast.error(err.message ?? "An unexpected error occurred.");
    }
  } finally {
    setLoading(false);
  }
}

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-card border border-border-soft/80 bg-white/90 p-7 shadow-sm shadow-ink/5 backdrop-blur-sm sm:p-8"
      >
        <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink">
          Welcome back
        </h1>
        <p className="mt-1.5 text-sm text-ink-soft">
          Sign in to keep generating content for your business.
        </p>

        <div className="mt-6 space-y-4">
          <AuthField
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="you@business.com"
            icon={<HiOutlineEnvelope size={18} />}
            error={errors.email}
          />
          <AuthField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
            icon={<HiOutlineLockClosed size={18} />}
            error={errors.password}
          />
        </div>

        <div className="mt-2 flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-brand-600 hover:text-brand-700"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition-transform hover:scale-[1.01] hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing you in..." : "Sign In"}
        </button>

        <p className="mt-6 text-center text-sm text-ink-soft">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-brand-600 hover:text-brand-700">
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
