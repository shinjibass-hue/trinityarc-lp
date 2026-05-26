export default function CompanyInfo() {
  return (
    <section className="bg-neutral-50 py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900">会社情報</h2>
        <div className="mt-8 space-y-2 text-base text-neutral-700">
          <p className="font-semibold text-neutral-900">Trinity Arc合同会社</p>
          <p className="text-sm text-neutral-500">（2026年6月設立予定）</p>
          <p className="mt-4">〒003-0871 北海道札幌市白石区米里1条4丁目2-28</p>
          <p>
            お問い合わせ:{" "}
            <a
              href="mailto:info@trinityarc.jp"
              className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
            >
              info@trinityarc.jp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
