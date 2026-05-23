import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./rakurosu.css";
import { FaqItem } from "./FaqItem";
import { CampaignSection } from "./sections/CampaignSection";
import { GuideAccordionItem } from "./sections/GuideAccordionItem";
import { VoiceSection } from "./sections/VoiceSection";
import { PricingSection } from "./sections/PricingSection";

export const metadata: Metadata = {
  title: "ラクロス | クロス施工の採寸計算アプリ",
  description: "手書きの採寸メモを写真に撮るだけ。部屋ごとの必要数量と実工事面積を自動計算。LINEやメールで業者へ直接送信できます。",
};

const PRIMARY = "#0EA5E9";
const SECTION_BG = "#f2f5f7";

// ── App Screenshots ───────────────────────────────────────
function AppScreenshots() {
  return (
    <div className="rk-screenshots" style={{ flexShrink: 0, display: "flex", alignItems: "flex-start", position: "relative" }}>
      <div style={{
        borderRadius: 32,
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.20)",
        border: "6px solid #1a1a2e",
        width: 220,
        zIndex: 2,
      }}>
        <Image
          src="/lp-screen-result.jpg"
          alt="ラクロス 計算結果画面"
          width={220}
          height={477}
          style={{ display: "block", width: "100%", height: "auto" }}
          priority
        />
      </div>
      <div style={{
        borderRadius: 32,
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        border: "6px solid #1a1a2e",
        width: 196,
        marginLeft: -28,
        marginTop: 56,
        zIndex: 1,
      }}>
        <Image
          src="/lp-screen-upload.jpg"
          alt="ラクロス 写真取り込み画面"
          width={196}
          height={424}
          style={{ display: "block", width: "100%", height: "auto" }}
          priority
        />
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: "📷",
    title: "写真取り込みで自動入力",
    desc: "手書きの採寸メモを写真で撮るだけ。部屋名・寸法・種別をAIが自動で読み取り、入力の手間をゼロにします。",
  },
  {
    icon: "🧮",
    title: "必要数量を瞬時に計算",
    desc: "入力した寸法から必要数量（m）と実工事面積（㎡）をリアルタイムに自動計算。係数も現場に合わせて調整できます。",
  },
  {
    icon: "📤",
    title: "業者へそのまま送信",
    desc: "計算結果をLINEやメールで業者へ直接送信。品番別の数量もまとめて伝えられるので、発注ミスが減ります。",
  },
];

const STEPS = [
  {
    step: 1,
    title: "部屋の採寸メモを用意する",
    desc: "各部屋の壁の長さ（cm）と枚数を手書きのメモに書き出します。専用フォーマットは不要。いつもの走り書きでOKです。",
    emoji: "📝",
  },
  {
    step: 2,
    title: "メモを写真で撮る",
    desc: "アプリの「📷 写真から読み取る」で採寸メモを撮影するだけ。AIが部屋名・寸法・種別を自動で読み取ります。手入力での追加も可能です。",
    emoji: "📷",
  },
  {
    step: 3,
    title: "計算結果を確認する",
    desc: "必要数量（m）と実工事面積（㎡）が自動で表示されます。係数（デフォルト0.87）は現場に合わせて変更できます。種別ごとの材料の品番を入力することも可能で、業界標準のテンプレートをそのまま使えます。",
    emoji: "🧮",
  },
  {
    step: 4,
    title: "業者へ送信・保存する",
    desc: "「計算結果を送信」ボタンからLINEまたはメールで送信。「保存する」で後から呼び出しも可能です。",
    emoji: "📤",
  },
];

const FAQS = [
  {
    q: "無料で使えますか？",
    a: "はい。写真取り込み機能はトライアルとして無料でお試しいただけます（10回まで）。継続してご利用の場合は有料プランへのアップグレードをお願いしております。",
  },
  {
    q: "複数人で使うには？",
    a: "法人プランをご利用ください。5名プラン（月¥3,980）または10名プラン（月¥7,980）で複数メンバーが同じアカウントを共有できます。管理者が一括でメンバーを管理できます。",
  },
  {
    q: "会社で導入・管理するには？",
    a: "法人プランにお申し込みください。管理者ダッシュボードからメンバーの追加・削除・権限管理が可能です。まずは無料トライアルでお試しいただき、導入のご相談は「法人プランを見る」からお問い合わせください。",
  },
  {
    q: "写真取り込みがうまくいかないときは？",
    a: "明るい場所で・真上から・紙全体が画面に収まるように撮影してください。影や反射が文字にかかると精度が下がります。フラッシュなし・ピント合わせが効果的です。",
  },
  {
    q: "係数とは何ですか？",
    a: "実工事面積（㎡）＝ 必要数量（m）× 係数 で計算されます。デフォルトは業界標準の 0.87 です。現場の状況（天井高・柄リピートなど）に合わせて変更できます。",
  },
  {
    q: "種別（天井・AC・CLなど）を追加するには？",
    a: "ラクロス画面の種別セレクタで「＋ 追加」をタップし、新しい種別名を入力してください。追加した種別は次回以降も使えます。",
  },
  {
    q: "計算結果を保存・呼び出すには？",
    a: "画面下部の「保存する」ボタンで保存されます。「保存済み計算一覧」を開くと過去の計算を復元できます。無料プランは5件まで保存可能です。",
  },
  {
    q: "スマートフォンで使えますか？",
    a: "はい。iOS・Android のブラウザ（Safari・Chrome）でご利用いただけます。ホーム画面に追加するとアプリのように使えます。",
  },
];

export default function LpPage() {
  return (
    <>
      <style>{`
        @font-face {
          font-family: '851GKKTT';
          src: url('/fonts/851Gkktt_005.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fff; }
        a:hover { opacity: 0.85; }
      `}</style>

      <div style={{ fontFamily: '"Noto Sans JP", "Hiragino Kaku Gothic Pro", sans-serif', color: "#222", lineHeight: 1.7, background: "#fff" }}>

        {/* ── Header ── */}
        <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e8ecef" }}>
          <div className="rk-container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/rakurosu" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                background: PRIMARY,
                color: "#fff",
                padding: "6px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.04em",
                fontFamily: "'851GKKTT', sans-serif",
              }}>
                ラクロス
              </span>
            </Link>
            <nav className="rk-header-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {[
                { label: "ラクロスについて", href: "#about" },
                { label: "使い方", href: "#howto" },
                { label: "よくある質問", href: "#faq" },
              ].map(({ label, href }) => (
                <a key={href} href={href} style={{ textDecoration: "none", color: "#444", fontSize: 14, fontWeight: 500 }}>
                  {label}
                </a>
              ))}
              <Link
                href="https://rakurosu.vercel.app/login"
                style={{
                  background: PRIMARY,
                  color: "#fff",
                  padding: "10px 22px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                無料で始める
              </Link>
            </nav>
          </div>
        </header>

        {/* ── Hero ── */}
        <section style={{ background: "#fff" }}>
          {/* B-1: キャンペーンバー */}
          <div style={{ background: "#eff9ff", borderBottom: "1px solid #bae6fd", padding: "10px 24px", textAlign: "center" }}>
            <p style={{ fontSize: 14, color: "#0369a1", fontWeight: 600 }}>
              🎉 期間限定キャンペーン実施中 ・ 2026年6月7日まで ¥980/月（通常 ¥1,980）
            </p>
          </div>
          {/* Hero 本体 */}
          <div className="rk-container rk-hero-grid" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 60px", display: "flex", alignItems: "center", gap: 40, minHeight: 520 }}>
            <div className="rk-hero-text" style={{ flex: 1 }}>
              <div style={{ marginBottom: 24 }}>
                <span style={{
                  display: "inline-block",
                  background: PRIMARY,
                  color: "#fff",
                  borderRadius: 999,
                  padding: "8px 24px",
                  fontSize: 17,
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  boxShadow: `0 4px 16px ${PRIMARY}55`,
                }}>
                  クロス施工の採寸計算アプリ
                </span>
              </div>
              <h2 className="rk-hero-title" style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.2, marginBottom: 24, color: "#111" }}>
                メモを撮るだけ。<br />
                <span style={{ color: PRIMARY }}>計算も送信も</span>、<br />
                ぜんぶラクに。
              </h2>
              <p className="rk-hero-sub" style={{ fontSize: 16, color: "#555", lineHeight: 1.9, marginBottom: 36, maxWidth: 460 }}>
                手書きの採寸メモを写真に撮るだけで、部屋ごとの必要数量と実工事面積を自動計算。
                計算結果はそのまま LINE やメールで業者へ送信できます。
              </p>
              <div className="rk-hero-cta" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link
                  href="https://rakurosu.vercel.app/login"
                  className="rk-hero-cta-btn"
                  style={{
                    background: PRIMARY,
                    color: "#fff",
                    padding: "14px 32px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 700,
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  無料で始める →
                </Link>
                <a
                  href="#howto"
                  className="rk-hero-cta-btn"
                  style={{
                    border: `2px solid ${PRIMARY}`,
                    color: PRIMARY,
                    padding: "14px 32px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 700,
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  使い方を見る
                </a>
              </div>
            </div>
            <AppScreenshots />
          </div>
        </section>

        {/* ── A-1: キャンペーン告知 ── */}
        <CampaignSection />

        {/* ── About ── */}
        <section id="about" style={{ background: SECTION_BG, padding: "80px 24px" }}>
          <div className="rk-container" style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ marginBottom: 52 }}>
              <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>ラクロスについて</p>
              <h2 className="rk-section-title" style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>ABOUT ラクロス</h2>
            </div>
            <div className="rakurosu-step-flow">
              {[
                { src: "/rakurosu/rakurosu-step1.jpg", caption: "採寸メモを撮るだけで自動入力", num: 1 },
                { src: "/rakurosu/rakurosu-step2.jpg", caption: "種別ごとに必要数量を自動計算", num: 2 },
                { src: "/rakurosu/rakurosu-step3.jpg", caption: "LINEやメールで現場から直接発注", num: 3 },
              ].map((step) => (
                <div key={step.num} className="rakurosu-step-card">
                  <div className="rakurosu-step-img-wrap">
                    <span className="rakurosu-step-num">{step.num}</span>
                    <img src={step.src} alt={step.caption} />
                  </div>
                  <p className="rakurosu-step-caption">{step.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section id="howto" style={{ padding: "80px 24px", background: "#fff" }}>
          <div className="rk-container" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ marginBottom: 56 }}>
              <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>ラクロスの使い方</p>
              <h2 className="rk-section-title" style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>HOW TO USE</h2>
            </div>
            {STEPS.map(({ step, title, desc, emoji }, i) => (
              <div
                key={step}
                className="rk-step-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 60,
                  flexDirection: i % 2 === 1 ? "row-reverse" : "row",
                  marginBottom: 72,
                  padding: "0 20px",
                }}
              >
                <div className="rk-step-icon" style={{ flexShrink: 0, textAlign: "center" }}>
                  <div style={{
                    width: 160,
                    height: 160,
                    background: SECTION_BG,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}>
                    <span style={{ fontSize: 56 }}>{emoji}</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: `2px solid ${PRIMARY}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    color: PRIMARY,
                  }}>
                    <span style={{ fontSize: 9, fontWeight: 700, lineHeight: 1 }}>STEP</span>
                    <span style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{step}</span>
                  </div>
                  <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12, color: "#111" }}>{title}</h3>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.9, maxWidth: 420 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 開発者の思い ── */}
        <section style={{ background: SECTION_BG, padding: "80px 24px" }}>
          <div className="rk-container" style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ marginBottom: 48 }}>
              <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>開発者の思い</p>
              <h2 className="rk-section-title" style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>現場管理の<br />"あの手間"をなくしたい</h2>
            </div>
            <div style={{ position: "relative", marginBottom: 48 }}>
              <div style={{ position: "absolute", top: -16, left: 0, fontSize: 80, color: PRIMARY, opacity: 0.15, lineHeight: 1, fontFamily: "serif" }}>"</div>
              <blockquote style={{
                borderLeft: `4px solid ${PRIMARY}`,
                paddingLeft: 28,
                marginLeft: 0,
                fontSize: 20,
                lineHeight: 1.9,
                color: "#333",
                fontWeight: 500,
              }}>
                採寸メモを写真に撮って、後で数字を打ち直して、計算して、業者に送る。<br />
                この流れ、もっと一気にできないのか。
              </blockquote>
            </div>
            <div style={{ fontSize: 16, color: "#444", lineHeight: 2, display: "flex", flexDirection: "column", gap: 20 }}>
              <p>内装工事の現場管理をしていると、こういう「小さな手間」が毎日積み重なります。採寸自体はすぐ終わる。でもその後の計算と伝達に、意外と時間を取られていました。</p>
              <p>「もっとラクにできるはずだ。」そう思って作ったのが、ラクロスです。</p>
              <p>現場で書いたメモはそのままでいい。写真を撮るだけで必要数量も品番別の内訳も出てくる。クロス業者への連絡も、そのままLINEで送れる。現場管理の流れを止めずに、事務の手間だけをなくしたい——その一点だけを考えて設計しました。</p>
              <p>難しい操作は要りません。現場を知っている人間が作ったから、現場のリズムに合った使い心地になっています。</p>
            </div>
            <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 20, paddingTop: 32, borderTop: "1px solid #dde1e4" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                🏠
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#111" }}>株式会社札建</div>
                <div style={{ fontSize: 14, color: "#888", marginTop: 2 }}>ラクロス 開発チーム</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── B-2: 採寸メモの書き方ガイド（アコーディオン化） ── */}
        <section style={{ background: "#fff", padding: "80px 24px" }}>
          <div className="rk-container" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ marginBottom: 40 }}>
              <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>採寸メモの書き方ガイド</p>
              <h2 className="rk-section-title" style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>メモのコツ</h2>
              <p style={{ fontSize: 15, color: "#555", marginTop: 12, lineHeight: 1.8 }}>
                書き方のルールに沿って書けば、認識精度はぐっと上がります。
              </p>
            </div>

            {/* ① 部屋名と寸法 */}
            <GuideAccordionItem num={1} title="部屋名と寸法の書き方">
              <ul style={{ fontSize: 15, color: "#444", lineHeight: 2, paddingLeft: 20, marginBottom: 20 }}>
                <li>部屋名は <strong>四角（□）で囲んで</strong>、列の一番上に書く</li>
                <li>寸法は <strong>「寸法 × 枚数」を1行ずつ縦に</strong> 並べる</li>
              </ul>
              <div style={{ background: "#e8f5e9", border: "1.5px solid #66bb6a", borderRadius: 12, padding: "20px 24px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#2e7d32", marginBottom: 12 }}>OK 成功例</div>
                <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                  {["LDK", "洋室", "UT"].map(name => (
                    <div key={name} style={{ fontFamily: "monospace", fontSize: 14, lineHeight: 2 }}>
                      <div style={{ border: "2px solid #333", display: "inline-block", padding: "2px 10px", fontWeight: 700, marginBottom: 4 }}>{name}</div>
                      <div>220×3</div>
                      <div>272×5</div>
                      <div>180×2</div>
                    </div>
                  ))}
                </div>
              </div>
            </GuideAccordionItem>

            {/* ② 部屋の区切り方 */}
            <GuideAccordionItem num={2} title="部屋の区切り方（4種類）">
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: 20 }}>
                同じ列に複数の部屋を書く場合、必ず以下の4つのどれかで区切ってください。
              </p>
              <div className="rk-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                {[
                  { num: "①", title: "□で囲んだ部屋名", desc: "新しい部屋名を□で囲むと新しい部屋に（最もおすすめ）" },
                  { num: "②", title: "手書きの横線", desc: "はっきりした横線（──）を引くと区切りになる" },
                  { num: "③", title: "「//」スラッシュ2本", desc: "縦計済みマークとして使っている「//」も区切りに" },
                  { num: "④", title: "余白（空間ギャップ）", desc: "明らかな余白を空ければ新しい部屋として認識" },
                ].map(({ num, title, desc }) => (
                  <div key={num} style={{ background: SECTION_BG, borderRadius: 10, padding: "14px 16px", display: "flex", gap: 10 }}>
                    <span style={{ fontWeight: 800, color: PRIMARY, flexShrink: 0 }}>{num}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#111", marginBottom: 2 }}>{title}</div>
                      <div style={{ fontSize: 13, color: "#666" }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fff8e1", border: "1.5px solid #ffa000", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#5d4037" }}>
                ⚠️ ノートの罫線（用紙全体に印刷された薄い水平線）は区切りになりません。はっきりした手書きの線を意識してください。
              </div>
            </GuideAccordionItem>

            {/* ③ 種別ラベル */}
            <GuideAccordionItem num={3} title="種別ラベル（□で囲む）">
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: 20 }}>
                メインクロス以外の種別（天井・AC・CL・KT天井 など）を指定したい場合は、寸法を <strong>□(四角)で囲んで、その左横にラベル</strong>を書いてください。
              </p>
              <div className="rk-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { label: "AC", dim: "212×2", result: '212×2 が sub_type:"AC"' },
                  { label: "天井", dim: "135×2", result: '135×2 が sub_type:"天井"' },
                ].map(({ label, dim, result }) => (
                  <div key={label} style={{ background: "#e8f5e9", border: "1.5px solid #66bb6a", borderRadius: 12, padding: "20px 24px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#2e7d32", marginBottom: 16 }}>OK</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                      <span style={{ fontSize: 20, fontWeight: 800, color: "#2e7d32", minWidth: 48 }}>{label}</span>
                      <div style={{ border: "2.5px solid #2e7d32", borderRadius: 8, padding: "10px 24px", fontSize: 18, fontWeight: 700, fontFamily: "monospace" }}>{dim}</div>
                    </div>
                    <div style={{ fontSize: 13, color: "#555" }}>→ {result}</div>
                  </div>
                ))}
              </div>
            </GuideAccordionItem>

            {/* ④ 複数行を囲む（最重要） */}
            <GuideAccordionItem num={4} title="最重要：矩形が複数行を囲む場合" badgeColor="#e53935">
              <div style={{ background: "#fff8e1", border: "1.5px solid #ffa000", borderRadius: 10, padding: "14px 18px", marginBottom: 20, fontSize: 14, color: "#5d4037", lineHeight: 1.8 }}>
                <strong>⚠️ 最も多い間違い：</strong> □で複数の寸法行を縦に囲った場合、<strong>1つの矩形枠で全部を囲ってください。</strong> 枠を行ごとに分けると、最上段の行だけがラベルの種別になり、下の行が「メイン」になってしまいます。
              </div>
              <div className="rk-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                <div style={{ background: "#e8f5e9", border: "1.5px solid #66bb6a", borderRadius: 12, padding: "20px 24px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#2e7d32", marginBottom: 16 }}>OK　1つの枠で囲む</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#2e7d32", minWidth: 40 }}>天井</span>
                    <div style={{ border: "2.5px solid #2e7d32", borderRadius: 8, padding: "10px 20px", fontFamily: "monospace", lineHeight: 2 }}>
                      <div>342×1</div>
                      <div>303×2</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#555" }}>→ 両方とも sub_type:"天井" になる</div>
                </div>
                <div style={{ background: "#ffeaea", border: "1.5px solid #ef5350", borderRadius: 12, padding: "20px 24px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#c62828", marginBottom: 16 }}>NG　枠を分けて書く</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#c62828", minWidth: 40 }}>天井</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div style={{ border: "2.5px solid #ef5350", borderRadius: 8, padding: "6px 20px", fontFamily: "monospace" }}>342×1</div>
                      <div style={{ border: "2.5px solid #ef5350", borderRadius: 8, padding: "6px 20px", fontFamily: "monospace" }}>303×2</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#c62828" }}>→ 342×1 だけが「天井」、303×2 は「メイン」になる</div>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 16 }}>「天#」「KT天井」など複合ラベルもOK</h4>
                <p style={{ fontSize: 14, color: "#555", marginBottom: 16, lineHeight: 1.8 }}>
                  「天#」のような略記でも自動で「天井」として認識されます。「KT天井」「ロフト」「ハリ」「洋室バル」などの複合ラベルもそのまま使えます。
                </p>
                <div className="rk-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ background: "#e8f5e9", border: "1.5px solid #66bb6a", borderRadius: 12, padding: "20px 24px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#2e7d32", marginBottom: 16 }}>OK　複合ラベル（複数行）</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                      <span style={{ fontSize: 15, fontWeight: 800, color: "#2e7d32", minWidth: 56 }}>KT天井</span>
                      <div style={{ border: "2.5px solid #2e7d32", borderRadius: 8, padding: "8px 20px", fontFamily: "monospace", lineHeight: 2 }}>
                        <div>160×2</div>
                        <div>75×1</div>
                        <div>146×2</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, color: "#555" }}>→ 3行とも sub_type:"KT天井"</div>
                  </div>
                  <div style={{ background: "#e8f5e9", border: "1.5px solid #66bb6a", borderRadius: 12, padding: "20px 24px" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#2e7d32", marginBottom: 16 }}>OK　「天#」略記</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                      <span style={{ fontSize: 20, fontWeight: 800, color: "#2e7d32", minWidth: 40 }}>天#</span>
                      <div style={{ border: "2.5px solid #2e7d32", borderRadius: 8, padding: "8px 20px", fontFamily: "monospace", lineHeight: 2 }}>
                        <div>320×3</div>
                        <div>90×1</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, color: "#555" }}>→ 両方とも sub_type:"天井"</div>
                  </div>
                </div>
              </div>
            </GuideAccordionItem>

            {/* ⑤ 表記ゆれ */}
            <GuideAccordionItem num={5} title="表記ゆれは気にしないでOK">
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, marginBottom: 20 }}>
                以下の表記ゆれはラクロス側で自動的に統一されます。書きやすい表記で書いてください。
              </p>
              <div style={{ background: "#fff", borderRadius: 12, overflow: "hidden", border: "1px solid #e0e0e0" }}>
                {[
                  { written: "天#、天、天井、Tn、TN", result: "天井" },
                  { written: "Ac、AC、ac、アクセント", result: "AC" },
                  { written: "Cl、CL、cl、クローゼット", result: "CL" },
                  { written: "main、Main、MAIN", result: "メイン" },
                ].map(({ written, result }, i) => (
                  <div key={written} style={{ display: "flex", alignItems: "center", padding: "14px 20px", background: i % 2 === 0 ? "#fff" : SECTION_BG, gap: 20 }}>
                    <div style={{ flex: 1, fontSize: 14, color: "#333", fontFamily: "monospace" }}>{written}</div>
                    <div style={{ fontSize: 14, color: "#888", flexShrink: 0 }}>→</div>
                    <div style={{ fontWeight: 800, fontSize: 16, color: PRIMARY, minWidth: 60, textAlign: "right" }}>{result}</div>
                  </div>
                ))}
                <div style={{ padding: "12px 20px", background: SECTION_BG, fontSize: 13, color: "#888" }}>
                  ※「KT天井」「ロフト」「ハリ」「洋室バル」などの複合ラベルは、そのままその名前で保持されます。
                </div>
              </div>
            </GuideAccordionItem>

            {/* ⑥ 撮影のコツ */}
            <GuideAccordionItem num={6} title="撮影のコツ">
              <div className="rk-grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { icon: "☀️", title: "明るい場所で撮る", desc: "自然光のある場所、またはLEDライトの真下が理想" },
                  { icon: "📋", title: "用紙を平らにする", desc: "クリップボード推奨。ノートが反っていると精度が下がる" },
                  { icon: "⬆️", title: "真上から撮る", desc: "斜めから撮ると数字が歪んで誤認の原因に" },
                  { icon: "✒️", title: "濃く太く書く", desc: "0.7mm以上の黒・青ペンで。薄い字は認識精度が落ちる" },
                  { icon: "⬜", title: "矩形は太く描く", desc: "サブ種別の四角は罫線と区別できるよう太めの線で" },
                  { icon: "🚫", title: "影・反射に注意", desc: "光の反射・影が紙にかからない角度で撮影" },
                ].map(({ icon, title, desc }) => (
                  <div key={title} style={{ background: SECTION_BG, borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </GuideAccordionItem>

          </div>
        </section>

        {/* ── A-2: 利用者の声 ── */}
        <VoiceSection />

        {/* ── A-3: 料金プラン ── */}
        <PricingSection />

        {/* ── FAQ ── */}
        <section id="faq" style={{ background: SECTION_BG, padding: "80px 24px" }}>
          <div className="rk-container" style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ marginBottom: 48 }}>
              <p className="rk-section-subtitle" style={{ fontSize: 13, color: "#999", fontWeight: 600, marginBottom: 6 }}>よくある質問</p>
              <h2 className="rk-faq-title" style={{ fontSize: 40, fontWeight: 900, color: "#111" }}>FAQ</h2>
            </div>
            <div style={{ borderTop: "1px solid #dde1e4" }}>
              {FAQS.map(({ q, a }) => (
                <FaqItem key={q} q={q} a={a} />
              ))}
            </div>
            <div style={{ marginTop: 28, textAlign: "center" }}>
              <Link
                href="https://rakurosu.vercel.app/dashboard/help"
                style={{ color: PRIMARY, fontSize: 14, fontWeight: 600, textDecoration: "underline" }}
              >
                その他のよくある質問を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: "#fff", padding: "80px 24px", textAlign: "center" }}>
          <div className="rk-container" style={{ maxWidth: 640, margin: "0 auto" }}>
            <p style={{ fontSize: 14, color: "#888", fontWeight: 600, marginBottom: 10 }}>さっそくラクロスをはじめよう！</p>
            <h2 className="rk-cta-title" style={{ fontSize: 36, fontWeight: 900, color: "#111", marginBottom: 16 }}>
              無料で試してみる
            </h2>
            <p style={{ fontSize: 15, color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
              アカウント登録はメールアドレスまたは<br />
              Google アカウントで簡単にできます。
            </p>
            <Link
              href="https://rakurosu.vercel.app/login"
              style={{
                background: PRIMARY,
                color: "#fff",
                padding: "16px 48px",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: 17,
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              無料で始める →
            </Link>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: "#1a1a2e", padding: "32px 24px", color: "#aaa", fontSize: 13 }}>
          <div className="rk-container rk-footer-row" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: "0.05em" }}>ラクロス</span>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              <Link href="https://rakurosu.vercel.app/terms" style={{ color: "#aaa", textDecoration: "none" }}>利用規約</Link>
              <Link href="https://rakurosu.vercel.app/privacy" style={{ color: "#aaa", textDecoration: "none" }}>プライバシーポリシー</Link>
              <Link href="https://rakurosu.vercel.app/dashboard/help" style={{ color: "#aaa", textDecoration: "none" }}>ヘルプ</Link>
            </div>
            <p style={{ margin: 0, color: "#777" }}>Copyright 2026 ラクロス</p>
          </div>
        </footer>

      </div>
    </>
  );
}
