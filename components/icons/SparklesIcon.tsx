import React from "react";
import { Sparkles } from "lucide-react";

export interface SparklesIconProps extends React.ComponentPropsWithoutRef<typeof Sparkles> {
  className?: string;
  size?: number | string;
}

export default function SparklesIcon({
  className = "w-5 h-5",
  size,
  ...props
}: SparklesIconProps): React.JSX.Element {
  return <Sparkles className={className} size={size} {...props} />;
}
