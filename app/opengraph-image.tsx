import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Trinity Arc合同会社 | 内装工事業者向けSaaS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#ffffff",
          padding: "60px",
        }}
      >
        {/* Arc decoration top */}
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          style={{ marginBottom: "32px" }}
        >
          <path
            d="M10 55 A 50 50 0 0 1 110 55"
            stroke="#d4d4d4"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M25 40 A 35 35 0 0 1 95 40"
            stroke="#d4d4d4"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M40 25 A 20 20 0 0 1 80 25"
            stroke="#d4d4d4"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#171717",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Trinity Arc
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#737373",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Internal contractor SaaS
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {[
            { name: "セコカン", color: "#1200FF" },
            { name: "ラクロス", color: "#0EA5E9" },
            { name: "キドリン", color: "#0D9488" },
          ].map((s) => (
            <div
              key={s.name}
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: s.color,
                padding: "8px 20px",
                border: `2px solid ${s.color}`,
                borderRadius: "8px",
              }}
            >
              {s.name}
            </div>
          ))}
        </div>

        {/* Arc decoration bottom */}
        <svg
          width="200"
          height="40"
          viewBox="0 0 200 40"
          fill="none"
          style={{ marginTop: "48px" }}
        >
          <path
            d="M10 5 A 90 90 0 0 0 190 5"
            stroke="#e5e5e5"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
