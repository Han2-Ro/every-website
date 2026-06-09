"use client";

import { useId } from "react";

type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "h-10 w-10" }: SiteLogoProps) {
  const uid = useId();
  const g1 = `${uid}-g1`;
  const g2 = `${uid}-g2`;
  const g3 = `${uid}-g3`;
  const shadow = `${uid}-shadow`;

  return (
    <svg
      role="img"
      aria-label="every-website logo"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={g1} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id={g2} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id={g3} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id={shadow} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="15"
            floodColor="#000000"
            floodOpacity="0.15"
          />
        </filter>
      </defs>
      <g transform="translate(250, 250)" filter={`url(#${shadow})`}>
        <path
          d="M-50,-110 C30,-150 110,-70 110,10 C110,90 50,130 -10,110 C-70,90 -130,30 -50,-110 Z"
          fill={`url(#${g1})`}
          opacity="0.85"
          style={{ mixBlendMode: "multiply" }}
        />
        <path
          d="M-50,-110 C30,-150 110,-70 110,10 C110,90 50,130 -10,110 C-70,90 -130,30 -50,-110 Z"
          fill={`url(#${g2})`}
          opacity="0.85"
          transform="rotate(120)"
          style={{ mixBlendMode: "multiply" }}
        />
        <path
          d="M-50,-110 C30,-150 110,-70 110,10 C110,90 50,130 -10,110 C-70,90 -130,30 -50,-110 Z"
          fill={`url(#${g3})`}
          opacity="0.85"
          transform="rotate(240)"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle cx="0" cy="0" r="35" fill="#FFFFFF" />
        <circle cx="0" cy="0" r="18" fill={`url(#${g1})`} />
        <circle cx="-60" cy="-60" r="8" fill="#EC4899" opacity="0.9" />
        <circle cx="80" cy="-20" r="6" fill="#06B6D4" opacity="0.9" />
        <circle cx="-20" cy="80" r="10" fill="#3B82F6" opacity="0.9" />
      </g>
    </svg>
  );
}
