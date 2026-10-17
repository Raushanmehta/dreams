import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export default function FourPointStarIcon({
  className = "w-4 h-4",
  size,
  ...props
}: IconProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
  );
}
