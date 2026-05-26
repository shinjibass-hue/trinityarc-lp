export default function Contact() {
  return (
    <section className="bg-white py-24 text-center px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral-900">お問い合わせ</h2>
        <p className="text-base text-neutral-600 mt-4">
          サービス・パートナーシップに関するご相談はこちらまで。
        </p>
        <a
          href="mailto:info@trinityarc.jp"
          className="inline-block text-xl text-neutral-900 underline underline-offset-4 mt-8 hover:text-neutral-600 transition-colors"
        >
          info@trinityarc.jp
        </a>
      </div>
    </section>
  );
}
