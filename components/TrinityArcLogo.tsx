type Props = {
  className?: string;
  width?: number;
};

export default function TrinityArcLogo({ className = "", width = 180 }: Props) {
  return (
    <svg
      className={className}
      width={width}
      height={width * (180 / 380)}
      viewBox="0 0 380 180"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Trinity Arc</title>
      <desc>三角アークと下部弧、Trinity Arc英字テキストで構成されたコーポレートロゴ</desc>
      <defs>
        <linearGradient id="triGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0a1aa8" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#4a9fff" />
        </linearGradient>
      </defs>
      <path
        d="M 75 20 L 130 130 L 95 130 L 75 90 L 55 130 L 20 130 Z"
        fill="url(#triGrad)"
      />
      <path
        d="M 25 148 Q 75 138 125 148"
        stroke="#888"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="155"
        y="92"
        fontFamily="Inter, sans-serif"
        fontSize="26"
        fontWeight="500"
        fill="#0a1f5c"
      >
        Trinity Arc
      </text>
    </svg>
  );
}
