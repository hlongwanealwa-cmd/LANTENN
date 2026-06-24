import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "h-10", variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? "#FFFFFF" : "#1A1A1A";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 120"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- LETTER L --- */}
        <path
          d="M 35 25 L 35 85 L 68 85"
          stroke={textColor}
          strokeWidth="11.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* --- HOUSE 'a' --- */}
        <g transform="translate(85, 12)">
          {/* Peaked roof & house walls */}
          <path
            d="M 12 73 L 12 37.5 L 38 13 L 64 37.5 L 64 73 Z"
            stroke="#f59a1e"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lowercase 'a' inner curl */}
          <path
            d="M 38 73 L 38 52 C 38 45 33 41 27 41 C 21 41 18.5 45 18.5 50.5 C 18.5 56 22 58.5 27.5 58.5 C 32 58.5 38 56.5 38 52"
            stroke="#f59a1e"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LETTER n --- */}
        <g transform="translate(172, 12)">
          <path
            d="M 15 83 L 15 36 M 15 48 C 15 35 23.5 31.5 34 31.5 C 44.5 31.5 48.5 36.5 48.5 48 L 48.5 83"
            stroke={textColor}
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LETTER t --- */}
        <g transform="translate(242, 12)">
          <path
            d="M 28 14 L 28 72 C 28 78 30.5 81.5 38 81.5 M 12 33 L 42 33"
            stroke={textColor}
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* --- STYLIZED THREE-BARS 'e' --- */}
        <g transform="translate(305, 33)">
          {/* Top orange/mango bar */}
          <rect
            x="5"
            y="3"
            width="41"
            height="11"
            rx="5.5"
            transform="skewX(-15) rotate(-3)"
            fill="#f59a1e"
          />
          {/* Middle dark royal blue / brilliant blue bar */}
          <rect
            x="2"
            y="21"
            width="41"
            height="11"
            rx="5.5"
            transform="skewX(-15) rotate(-3)"
            fill={isDark ? "#c4e7e5" : "#253c96"}
          />
          {/* Bottom cyan/ocean water bar */}
          <rect
            x="-1"
            y="39"
            width="41"
            height="11"
            rx="5.5"
            transform="skewX(-15) rotate(-3)"
            fill="#c4e7e5"
          />
        </g>

        {/* --- LETTER n --- */}
        <g transform="translate(366, 12)">
          <path
            d="M 15 83 L 15 36 M 15 48 C 15 35 23.5 31.5 34 31.5 C 44.5 31.5 48.5 36.5 48.5 48 L 48.5 83"
            stroke={textColor}
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* --- LETTER n --- */}
        <g transform="translate(436, 12)">
          <path
            d="M 15 83 L 15 36 M 15 48 C 15 35 23.5 31.5 34 31.5 C 44.5 31.5 48.5 36.5 48.5 48 L 48.5 83"
            stroke={textColor}
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
