import Link from "next/link";

const PRIMARY = "#0EA5E9";
const SECTION_BG = "#f2f5f7";

const PLANS = [
  {
    key: "trial",
    name: "無料トライアル",
    price: "¥0",
    unit: "",
    badge: null,
    highlight: false,
    features: [
      "写真取り込み 10回まで無料",
      "手入力は無制限",
      "計算結果を保存 5件まで",
      "LINE / メール送信",
    ],
    cta: "無料で試す",
    ctaHref: "https://rakurosu.vercel.app/login",
  },
  {
    key: "personal",
    name: "個人プラン",
    price: "¥1,980",
    unit: "/月",
    badge: null,
    highlight: false,
    features: [
      "写真取り込み 無制限",
      "手入力は無制限",
      "計算結果を保存 無制限",
      "LINE / メール送信",
    ],
    cta: "このプランで始める",
    ctaHref: "https://rakurosu.vercel.app/login",
  },
  {
    key: "campaign",
    name: "キャンペーンプラン",
    price: "¥980",
    unit: "/月",
    badge: "期間限定",
    highlight: true,
    features: [
      "写真取り込み 無制限",
      "手入力は無制限",
      "計算結果を保存 無制限",
      "LINE / メール送信",
      "通常より ¥1,000/月 お得",
    ],
    cta: "キャンペーンで始める",
    ctaHref: "https://rakurosu.vercel.app/login",
    note: "2026年6月7日まで",
  },
  {
    key: "corp",
    name: "法人プラン",
    price: null,
    unit: "",
    badge: null,
    highlight: false,
    features: [
      "5名プラン: 月 ¥3,980 / 年 ¥39,800",
      "10名プラン: 月 ¥7,980 / 年 ¥79,800",
      "チームで一括管理",
      "管理者ダッシュボード",
      "写真取り込み 無制限",
    ],
    cta: "法人プランを見る",
    ctaHref: "https://rakurosu.vercel.app/signup/rakurosu-corp",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" style={{ background: SECTION_BG, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>料金プラン</p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>PRICING</h2>
        </div>
        <p style={{ fontSize: 15, color: "#555", marginBottom: 48 }}>無料トライアルから始められます。クレジットカード不要。</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, alignItems: "start" }}>
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              style={{
                background: plan.highlight ? PRIMARY : "#fff",
                border: plan.highlight ? `2px solid ${PRIMARY}` : "1px solid #e0e0e0",
                borderRadius: 16,
                padding: "28px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "relative",
              }}
            >
              {/* バッジ */}
              {plan.badge && (
                <div style={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fbbf24",
                  color: "#78350f",
                  fontSize: 11,
                  fontWeight: 800,
                  padding: "3px 14px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                }}>
                  {plan.badge}
                </div>
              )}

              {/* プラン名 */}
              <div style={{ fontSize: 14, fontWeight: 700, color: plan.highlight ? "rgba(255,255,255,0.85)" : "#888", marginBottom: 8 }}>
                {plan.name}
              </div>

              {/* 価格 */}
              {plan.price ? (
                <div style={{ marginBottom: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 900, color: plan.highlight ? "#fff" : "#111" }}>{plan.price}</span>
                  <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.8)" : "#888" }}>{plan.unit}</span>
                </div>
              ) : (
                <div style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 4 }}>要お問い合わせ</div>
              )}

              {/* note */}
              {"note" in plan && plan.note && (
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginBottom: 12 }}>{plan.note}</div>
              )}

              {/* 区切り */}
              <div style={{ height: 1, background: plan.highlight ? "rgba(255,255,255,0.25)" : "#eee", margin: "16px 0" }} />

              {/* 機能リスト */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: plan.highlight ? "rgba(255,255,255,0.9)" : "#444", lineHeight: 1.6 }}>
                    <span style={{ color: plan.highlight ? "#fff" : PRIMARY, flexShrink: 0, fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "11px 0",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  background: plan.highlight ? "#fff" : "transparent",
                  color: plan.highlight ? PRIMARY : PRIMARY,
                  border: plan.highlight ? "none" : `2px solid ${PRIMARY}`,
                  marginTop: "auto",
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
