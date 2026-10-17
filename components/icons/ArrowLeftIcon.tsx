import React from "react";
import type { IconProps } from "./FourPointStarIcon";

export default function ArrowLeftIcon({
  className = "w-3.5 h-3.5",
  size,
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
