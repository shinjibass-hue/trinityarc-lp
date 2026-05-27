"use client";

type Props = { size?: number };

export default function TrinityArcMark({ size = 36 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Trinity Arc"
    >
      <defs>
        <linearGradient id="trinityArcMarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      {/* 既存 TrinityArcLogo.tsx の三角アーク + 下部弧を抽出。
          元バウンディングボックス x:20–130 / y:20–148 を
          translate(3.125 -2.5) scale(0.625) で viewBox 100×100 中央へ収める（余白約10%）。
          <text>Trinity Arc</text> は含めない（社名は下部テキスト要素で表示）。 */}
      <g transform="translate(3.125 -2.5) scale(0.625)">
        <path
          d="M 75 20 L 130 130 L 95 130 L 75 90 L 55 130 L 20 130 Z"
          fill="url(#trinityArcMarkGrad)"
        />
        <path
          d="M 25 148 Q 75 138 125 148"
          stroke="url(#trinityArcMarkGrad)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
