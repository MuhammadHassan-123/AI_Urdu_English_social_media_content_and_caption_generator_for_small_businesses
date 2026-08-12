"use client";

import { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

// ========================================
// YOUR WHATSAPP NUMBER
// Pakistan example: 923001234567
// Do NOT use +, spaces, or dashes.
// ========================================
const WHATSAPP_NUMBER = "923121571200";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const next: Errors = {};

    if (!name.trim()) {
      next.name = "Name is required.";
    }

    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      next.message = "Please write a message.";
    } else if (message.trim().length < 10) {
      next.message = "Message should contain at least 10 characters.";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    const whatsappMessage = `
Hello LikhoAI Team! 👋

I have a message from the LikhoAI Contact Form.

Name: ${name.trim()}

Email: ${email.trim()}

Message:
${message.trim()}

Thank you.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp with the message already filled in
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setSending(false);
    setSent(true);

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <HiOutlineCheckCircle size={28} />
        </span>

        <h2 className="font-heading text-2xl font-bold text-ink">
          🎉 Message Ready!
        </h2>

        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          WhatsApp has been opened with your message.
          <br />
          Please press <strong>Send</strong> in WhatsApp to complete it.
        </p>

        <button
          onClick={() => setSent(false)}
          className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          Name
        </label>

        <input
          autoFocus
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({
              ...prev,
              name: undefined,
            }));
          }}
          className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-600 ${
            errors.name
              ? "border-rose-400"
              : "border-border-soft"
          }`}
        />

        {errors.name && (
          <p className="mt-1 text-xs font-medium text-rose-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          Email
        </label>

        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
            <HiOutlineEnvelope size={18} />
          </span>

          <input
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({
                ...prev,
                email: undefined,
              }));
            }}
            className={`w-full rounded-xl border bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-brand-600 ${
              errors.email
                ? "border-rose-400"
                : "border-border-soft"
            }`}
          />
        </div>

        {errors.email && (
          <p className="mt-1 text-xs font-medium text-rose-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          Message
        </label>

        <textarea
          rows={5}
          maxLength={500}
          value={message}
          placeholder="How can we help?"
          onChange={(e) => {
            setMessage(e.target.value);
            setErrors((prev) => ({
              ...prev,
              message: undefined,
            }));
          }}
          className={`w-full resize-none rounded-xl border bg-white px-4 py-2.5 text-sm outline-none transition focus:border-brand-600 ${
            errors.message
              ? "border-rose-400"
              : "border-border-soft"
          }`}
        />

        <div
          className={`mt-2 text-right text-xs ${
            message.length > 450
              ? "text-red-500"
              : "text-gray-500"
          }`}
        >
          {message.length}/500
        </div>

        {errors.message && (
          <p className="mt-1 text-xs font-medium text-rose-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Send Button */}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 py-3 text-sm font-semibold text-cream shadow-md shadow-brand-700/25 transition hover:scale-[1.01] hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <HiOutlinePaperAirplane size={16} />

        {sending ? "Opening WhatsApp..." : "Send Message"}
      </button>
    </form>
  );
}