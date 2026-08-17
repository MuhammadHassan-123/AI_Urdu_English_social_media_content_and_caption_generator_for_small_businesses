import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ContentHUB — Roz ka social media content, ek click mein.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e9f8f0 0%, #fbf7ef 55%, #fdecd8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#0f8a5a",
              color: "#fbf7ef",
              fontSize: 32,
            }}
          >
            ✦
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 800, color: "#16181c" }}>ContentHUB</span>
            <span style={{ fontSize: 16, letterSpacing: 4, color: "#7a7d82" }}>
              URDU · ENGLISH
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 800,
            color: "#16181c",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Roz ka social media content
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 800,
            color: "#0f8a5a",
            marginTop: 4,
          }}
        >
          ek click mein.
        </div>
      </div>
    ),
    { ...size }
  );
}
