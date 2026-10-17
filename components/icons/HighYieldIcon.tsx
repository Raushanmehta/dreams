import React from "react";
import type { IconProps } from "./FourPointStarIcon";

export default function HighYieldIcon({
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
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20" />
      <path d="M12 21L8 9l2-6" />
      <path d="M12 21l4-12-2-6" />
    </svg>
  );
}
