import React from "react";
import type { IconProps } from "./FourPointStarIcon";

export default function BespokeLuxuryIcon({
  className = "w-6 h-6",
  size,
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M2 7l4 12h12l4-12-6 4-4-7-4 7z" />
      <circle cx="12" cy="4" r="1.2" fill="currentColor" />
      <circle cx="2" cy="7" r="1.2" fill="currentColor" />
      <circle cx="22" cy="7" r="1.2" fill="currentColor" />
      <circle cx="6" cy="11" r="1" fill="currentColor" />
      <circle cx="18" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}
