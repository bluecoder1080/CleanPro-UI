"use client";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className = "",
  width = 40,
  height = 40,
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ce5573" />
          <stop offset="100%" stopColor="#4f381e" />
        </linearGradient>
        <filter id="logoGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Circle */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Inner Circle - Premium Background */}
      <circle cx="100" cy="100" r="85" fill="#1a1a1a" />

      {/* Glow Effect */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="url(#logoGradient)"
        opacity="0.05"
        filter="url(#logoGlow)"
      />

      {/* Premium Icon - Abstract Sparkle/Shine */}
      <g filter="url(#logoGlow)">
        {/* Main Shape - Stylized Garment/Sparkle */}
        <path
          d="M 100 50 L 130 80 L 130 120 Q 100 140 70 120 L 70 80 Z"
          fill="url(#logoGradient)"
          opacity="0.9"
        />

        {/* Highlight Line */}
        <path
          d="M 85 65 Q 100 60 115 70"
          stroke="#ce5573"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Accent Sparkles */}
        <g fontSize="16" fill="url(#logoGradient)" fontWeight="bold">
          {/* Top Right Sparkle */}
          <circle cx="135" cy="70" r="3" />
          {/* Bottom Right Sparkle */}
          <circle cx="140" cy="110" r="2.5" />
          {/* Left Sparkle */}
          <circle cx="62" cy="95" r="2.5" />
        </g>
      </g>

      {/* Text - CleanPro */}
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="'Clash Display', 'Satoshi', sans-serif"
        fontSize="18"
        fontWeight="700"
        letter-spacing="0.5"
        fill="#ffffff"
      >
        CLEAN
      </text>
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fontFamily="'Clash Display', 'Satoshi', sans-serif"
        fontSize="14"
        fontWeight="600"
        letter-spacing="1"
        fill="url(#logoGradient)"
      >
        PRO
      </text>

      {/* Decorative Bottom Line */}
      <line
        x1="65"
        y1="185"
        x2="135"
        y2="185"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  );
}
