import React from "react";
import type { IconProps } from "./FourPointStarIcon";

export default function PrimeLocationsIcon({
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
      <circle cx="12" cy="12" r="9" />
      <polygon points="12 4 14.5 9.5 20 12 14.5 14.5 12 20 9.5 14.5 4 12 9.5 9.5 12 4" fill="currentColor" fillOpacity="0.18" />
      <polygon points="12 6 13.8 10.2 18 12 13.8 13.8 12 18 10.2 13.8 6 12 10.2 10.2 12 6" />
    </svg>
  );
}
