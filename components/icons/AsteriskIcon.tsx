import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

export default function AsteriskIcon({
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
      <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v5.04l4.37-2.52a1.5 1.5 0 1 1 1.5 2.6l-4.37 2.52 4.37 2.52a1.5 1.5 0 0 1-1.5 2.6l-4.37-2.52v5.04a1.5 1.5 0 0 1-3 0v-5.04l-4.37 2.52a1.5 1.5 0 0 1-1.5-2.6l4.37-2.52-4.37-2.52a1.5 1.5 0 1 1 1.5-2.6l4.37 2.52V3.5A1.5 1.5 0 0 1 12 2z" />
    </svg>
  );
}
