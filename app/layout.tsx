import type { Metadata } from "next";
import { Manrope, Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/components/AuthProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-nastaliq",
});

const siteUrl = "https://likhoai.com"; // TODO: replace with your real production domain
const description =
  "AI caption generator for Pakistani small businesses. Urdu, Roman Urdu, and English captions, hashtags, and post ideas in one click, powered by Google Gemini.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LikhoAI — Roz ka social media content, ek click mein",
    template: "%s | LikhoAI",
  },
  description,
  keywords: [
    "social media caption generator",
    "Urdu caption generator",
    "Roman Urdu captions",
    "Pakistani small business marketing",
    "AI content generator Pakistan",
    "Facebook Instagram TikTok captions",
    "Gemini AI content tool",
  ],
  authors: [{ name: "LikhoAI" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "LikhoAI",
    title: "LikhoAI — Roz ka social media content, ek click mein",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "LikhoAI — Roz ka social media content, ek click mein",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${nastaliq.variable}`}
    >
      <body className="bg-cream text-ink antialiased">
        <AuthProvider>
          {children}
        

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 2500,
            style: {
              background: "#ffffff",
              color: "#111827",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "14px 16px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#0f8a5a",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#ffffff",
              },
            },
          }}
        />
        </AuthProvider>
      </body>
    </html>
  );
}