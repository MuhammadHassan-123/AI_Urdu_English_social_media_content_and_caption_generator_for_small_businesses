"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
} from "react-icons/hi2";

import toast from "react-hot-toast";

import AuthLayout from "@/components/AuthLayout";
import AuthField from "@/components/AuthField";
import { signup } from "@/lib/auth";

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const next: Errors = {};

    if (!name.trim()) {
      next.name = "Name is required.";
    } else if (name.trim().length < 2) {
      next.name =
        "Name must contain at least 2 characters.";
    }

    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      next.email =
        "Please enter a valid email address.";
    }

    if (!password) {
      next.password = "Password is required.";
    } else if (password.length < 6) {
      next.password =
        "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      next.confirmPassword =
        "Please confirm your password.";
    } else if (confirmPassword !== password) {
      next.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrors({});

    if (!validate()) return;

    setLoading(true);

    try {
      await signup(name, email, password);

      toast.success(
        "🎉 Account created successfully!"
      );

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      router.push("/login");
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error
      ) {
        const authError = error as {
          code?: string;
          message?: string;
        };

        switch (authError.code) {
          case "auth/email-already-in-use":
            setErrors({
              email:
                "This email is already registered.",
            });
            break;

          case "auth/invalid-email":
            setErrors({
              email: "Invalid email address.",
            });
            break;

          case "auth/weak-password":
            setErrors({
              password: "Password is too weak.",
            });
            break;

          default:
            toast.error(
              authError.message ||
                "Something went wrong."
            );
        }
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong.");
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
        className="
          animate-auth-card
          rounded-card
          border
          border-border-soft/80
          bg-white/90
          p-7
          shadow-sm
          shadow-ink/5
          backdrop-blur-sm
          sm:p-8
        "
      >
        {/* Heading */}
        <div className="animate-fade-up">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink">
            Create your account
          </h1>

          <p className="mt-1.5 text-sm text-ink-soft">
            Start generating content for your business
            in minutes.
          </p>
        </div>

        {/* Fields */}
        <div className="mt-6 space-y-4">

          {/* Name */}
          <div className="animate-fade-up animation-delay-100">
            <AuthField
              label="Name"
              value={name}
              onChange={setName}
              placeholder="Your name"
              icon={<HiOutlineUser size={18} />}
              error={errors.name}
            />
          </div>

          {/* Email */}
          <div className="animate-fade-up animation-delay-200">
            <AuthField
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@business.com"
              icon={<HiOutlineEnvelope size={18} />}
              error={errors.email}
            />
          </div>

          {/* Password */}
          <div className="animate-fade-up animation-delay-300">
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

          {/* Confirm password */}
          <div className="animate-fade-up animation-delay-400">
            <AuthField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="••••••••"
              icon={<HiOutlineLockClosed size={18} />}
              error={errors.confirmPassword}
            />
          </div>

        </div>

        {/* Create account button */}
        <div className="animate-fade-up animation-delay-500">
          <button
            type="submit"
            disabled={loading}
            className="
              mt-6
              w-full
              rounded-full
              bg-brand-600
              py-3
              text-sm
              font-semibold
              text-cream
              shadow-md
              shadow-brand-700/25
              transition-all
              duration-300
              hover:scale-[1.015]
              hover:bg-brand-700
              hover:shadow-lg
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:scale-100
            "
          >
            {loading
              ? "Creating your account..."
              : "Create Account"}
          </button>
        </div>

        {/* Login link */}
        <p
          className="
            mt-6
            text-center
            text-sm
            text-ink-soft
            animate-fade-up
            animation-delay-600
          "
        >
          Already have an account?{" "}

          <Link
            href="/login"
            className="
              font-semibold
              text-brand-600
              transition-all
              duration-300
              hover:text-brand-700
              hover:underline
              underline-offset-4
            "
          >
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}