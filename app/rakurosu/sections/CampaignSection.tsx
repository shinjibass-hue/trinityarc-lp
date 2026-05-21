"use client";

import Link from "next/link";

const PRIMARY = "#0EA5E9";
const CAMPAIGN_END = new Date("2026-06-07T23:59:59+09:00");

function getDaysLeft(): number {
  const diff = CAMPAIGN_END.getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function CampaignSection() {
  const daysLeft = getDaysLeft();

  return (
    <section style={{ background: "#eff9ff", borderTop: "2px solid #bae6fd", borderBottom: "2px solid #bae6fd", padding: "64px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#0369a1", fontWeight: 700, marginBottom: 10, letterSpacing: "0.08em" }}>
          期間限定キャンペーン
        </p>
        <h2 className="rk-section-title" style={{ fontSize: 40, fontWeight: 900, color: "#0c4a6e", marginBottom: 12, lineHeight: 1.3 }}>
          CAMPAIGN
        </h2>
        <div style={{ marginBottom: 20 }}>
          <span className="rk-campaign-strike" style={{ fontSize: 18, color: "#555", textDecoration: "line-through", marginRight: 8 }}>通常 ¥1,980/月</span>
          <span className="rk-campaign-price" style={{ fontSize: 48, fontWeight: 900, color: PRIMARY, letterSpacing: "-0.02em" }}>¥980</span>
          <span style={{ fontSize: 18, color: "#555" }}>/月</span>
        </div>
        <p style={{ fontSize: 15, color: "#0369a1", marginBottom: 8, fontWeight: 600 }}>
          ¥1,000 OFF の限定価格でご利用いただけます
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: PRIMARY, color: "#fff", borderRadius: 999, padding: "8px 22px", fontSize: 14, fontWeight: 700, marginBottom: 36 }}>
          <span>⏰</span>
          <span>2026年6月7日まで</span>
          {daysLeft > 0 && (
            <span style={{ background: "rgba(255,255,255,0.25)", borderRadius: 999, padding: "2px 10px", fontSize: 13 }}>
              残り{daysLeft}日
            </span>
          )}
        </div>
        <br />
        <Link
          href="https://rakurosu.vercel.app/login"
          style={{
            display: "inline-block",
            background: PRIMARY,
            color: "#fff",
            padding: "14px 40px",
            borderRadius: 10,
            textDecoration: "none",
            fontSize: 16,
            fontWeight: 700,
            boxShadow: `0 4px 16px ${PRIMARY}55`,
          }}
        >
          キャンペーンで始める →
        </Link>
      </div>
    </section>
  );
}
