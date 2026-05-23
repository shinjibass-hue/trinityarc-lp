// TODO: 実顧客の声に差し替え予定

const SECTION_BG = "#f2f5f7";

const VOICES = [
  {
    name: "田中 誠",
    age: 35,
    role: "クロス職人（個人事業主）",
    initials: "T",
    comment:
      "採寸メモを撮るだけで部屋ごとの数量が出るので、現場で電卓を叩く時間がなくなりました。LINEで業者にそのまま送れるのも助かります。",
  },
  {
    name: "山口 隆",
    age: 48,
    role: "リフォーム会社代表",
    initials: "Y",
    comment:
      "以前は事務所に戻ってから電卓で計算、品番や数量、施工箇所に物件情報等をメールやLINEに記入して発注していたのが、現場で完結するようになり事務作業の手間が大幅に削減されました。発注ミスもほぼゼロになりました。",
  },
  {
    name: "佐藤 実",
    age: 52,
    role: "内装工事 現場監督",
    initials: "S",
    comment:
      "アクセントクロスや天井クロスの内訳もまとめて送れるので、業者とのやり取りがスムーズになりました。",
  },
];

export function VoiceSection() {
  return (
    <section style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 52 }}>
          <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>お客様の声</p>
          <h2 className="rk-section-title" style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>VOICE</h2>
        </div>

        <div className="rk-grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {VOICES.map(({ name, age, role, initials, comment }) => (
            <div
              key={name}
              style={{
                background: "#fff",
                border: "1px solid #e8ecef",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* 引用符 */}
              <div style={{ fontSize: 48, color: "#0EA5E9", opacity: 0.18, lineHeight: 1, fontFamily: "serif", marginBottom: -8 }}>"</div>
              {/* コメント */}
              <p style={{ fontSize: 14, color: "#444", lineHeight: 1.9, flex: 1 }}>{comment}</p>
              {/* プロフィール */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid #f0f0f0" }}>
                {/* イニシャル円形 SVG */}
                <svg width="44" height="44" viewBox="0 0 44 44" style={{ flexShrink: 0 }}>
                  <circle cx="22" cy="22" r="22" fill="#0EA5E9" />
                  <text x="22" y="27" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
                    {initials}
                  </text>
                </svg>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>
                    {name}さん（{age}歳）
                  </div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
