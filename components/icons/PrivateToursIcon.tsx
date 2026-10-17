import React from "react";
import type { IconProps } from "./FourPointStarIcon";

export default function PrivateToursIcon({
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
      <path d="M4 21V10a8 8 0 0 1 16 0v11" />
      <path d="M9 21v-7a3 3 0 0 1 6 0v7" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}
