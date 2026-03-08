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
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="premiumGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ce5573" />
          <stop offset="50%" stopColor="#d96a86" />
          <stop offset="100%" stopColor="#a84a62" />
        </linearGradient>

        <linearGradient id="glossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        <filter id="shadowFilter">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2.5"
            floodOpacity="0.2"
            floodColor="#ce5573"
          />
        </filter>
      </defs>

      {/* Premium Garment Icon - Minimalist */}
      <g filter="url(#shadowFilter)">
        {/* Main Garment Body - Elegant Silhouette */}
        <path
          d="M 28 24 C 26.5 24 26 25 26 26 L 26 44 C 26 54 29 60 34 65 C 39 70 46 73 50 73 C 54 73 61 70 66 65 C 71 60 74 54 74 44 L 74 26 C 74 25 73.5 24 72 24 L 56 24 C 55 24 54.5 21 50 21 C 45.5 21 45 24 44 24 L 28 24 Z"
          fill="url(#premiumGradient)"
          strokeWidth="0"
        />

        {/* Left Sleeve - Elegant and Smooth */}
        <ellipse
          cx="16"
          cy="36"
          rx="8.5"
          ry="14"
          fill="url(#premiumGradient)"
          opacity="0.95"
        />

        {/* Right Sleeve - Elegant and Smooth */}
        <ellipse
          cx="84"
          cy="36"
          rx="8.5"
          ry="14"
          fill="url(#premiumGradient)"
          opacity="0.95"
        />

        {/* Premium Glossy Highlight - Ultra Shine Effect */}
        <ellipse
          cx="44"
          cy="31"
          rx="9"
          ry="8"
          fill="url(#glossGradient)"
          opacity="0.75"
        />

        {/* Center Subtle Fold - Premium Detail */}
        <path
          d="M 50 26 Q 50 42 50 68"
          stroke="#ffffff"
          strokeWidth="0.8"
          fill="none"
          opacity="0.25"
          strokeLinecap="round"
        />

        {/* Accent Sparkles - Small and Elegant */}
        <circle cx="70" cy="26" r="1.2" fill="#ce5573" opacity="0.6" />
        <circle cx="30" cy="26" r="1.2" fill="#ce5573" opacity="0.6" />
      </g>

      {/* Elegant Bottom Accent Line */}
      <line
        x1="26"
        y1="80"
        x2="74"
        y2="80"
        stroke="url(#premiumGradient)"
        strokeWidth="1.8"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
